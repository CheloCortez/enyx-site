#!/usr/bin/env bash
# Screenshots do site em larguras arbitrárias, via Chrome headless.
#
# Uso: shot.sh <diretório-de-saída> [--port N] [--height N] [largura ...]
# Requer um servidor já rodando (padrão: http://localhost:3000).
#
# DUAS ARMADILHAS DESTE CHROME, ambas já resolvidas aqui — não contorne à mão:
#
# 1. VIEWPORT MÍNIMO DE 500px. `--window-size=360` é ignorado: a página renderiza
#    a 500px e o PNG sai recortado, com as media queries erradas. Solução: o site
#    é carregado dentro de um iframe de largura fixa, cujo viewport é a largura
#    do iframe.
#
# 2. ALTURA MÁXIMA ~6000px. Acima disso a captura volta INTEIRAMENTE PRETA, sem
#    erro nenhum. Solução: páginas mais altas são capturadas em fatias e
#    costuradas. O validador também rejeita captura sem conteúdo, para nunca
#    aceitar um PNG preto em silêncio.
set -euo pipefail

OUT="${1:?informe o diretório de saída}"; shift
PORT=3000
HEIGHT=2400
SLICE=5000
WIDTHS=()
while [ $# -gt 0 ]; do
  case "$1" in
    --port) PORT="$2"; shift 2 ;;
    --height) HEIGHT="$2"; shift 2 ;;
    *) WIDTHS+=("$1"); shift ;;
  esac
done
[ ${#WIDTHS[@]} -eq 0 ] && WIDTHS=(360 390 768 1024 1440)

mkdir -p "$OUT"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# Captura uma fatia: largura $1, deslocamento vertical $2, altura $3, saída $4.
capture_slice() {
  local w="$1" offset="$2" h="$3" dest="$4" attempt=0
  local page="${TMP}/f-${w}-${offset}.html"

  cat > "$page" <<HTML
<!doctype html>
<meta charset="utf-8">
<style>
  html,body{margin:0;padding:0;background:#0a0e10}
  .clip{width:${w}px;height:${h}px;overflow:hidden}
  iframe{display:block;width:${w}px;height:${HEIGHT}px;border:0;margin-top:-${offset}px}
</style>
<div class="clip"><iframe src="http://localhost:${PORT}/" scrolling="no"></iframe></div>
HTML

  while : ; do
    attempt=$((attempt + 1))
    rm -f "$dest"
    google-chrome \
      --headless --disable-gpu --no-sandbox --hide-scrollbars \
      --virtual-time-budget=10000 \
      --window-size="$((w + 20)),${h}" \
      --screenshot="$dest" \
      "file://${page}" >/dev/null 2>&1 || true

    if [ -s "$dest" ] && python3 - "$dest" "$w" "$h" <<'PY'
import sys
from PIL import Image
path, w, h = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
try:
    im = Image.open(path).convert("RGB")
except Exception:
    sys.exit(1)
if im.size[0] < w or im.size[1] < h * 0.9:
    sys.exit(1)
# Rejeita captura sem conteúdo: acima da altura máxima do Chrome o PNG volta
# preto, com as dimensões certas. Só dimensões não provam nada.
light = sum(
    1
    for x in range(0, min(w, im.size[0]), 8)
    for y in range(0, im.size[1], 8)
    if max(im.getpixel((x, y))) > 110
)
sys.exit(0 if light > 0 else 1)
PY
    then
      # Recorta a moldura, deixando exatamente os ${w}px do site.
      python3 - "$dest" "$w" "$h" <<'PY'
import sys
from PIL import Image
path, w, h = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
im = Image.open(path)
im.crop((0, 0, min(w, im.size[0]), min(h, im.size[1]))).save(path)
PY
      return 0
    fi

    if [ "$attempt" -ge 4 ]; then
      echo "ERRO: captura de ${w}px (offset ${offset}, altura ${h}) voltou vazia 4x." >&2
      return 1
    fi
  done
}

for w in "${WIDTHS[@]}"; do
  if [ "$HEIGHT" -le "$SLICE" ]; then
    capture_slice "$w" 0 "$HEIGHT" "${OUT}/${w}.png"
  else
    # Fatia, captura cada pedaço e costura.
    parts=()
    offset=0
    idx=0
    while [ "$offset" -lt "$HEIGHT" ]; do
      remaining=$((HEIGHT - offset))
      h=$([ "$remaining" -lt "$SLICE" ] && echo "$remaining" || echo "$SLICE")
      part="${TMP}/part-${w}-${idx}.png"
      capture_slice "$w" "$offset" "$h" "$part"
      parts+=("$part")
      offset=$((offset + h))
      idx=$((idx + 1))
    done
    python3 - "${OUT}/${w}.png" "${parts[@]}" <<'PY'
import sys
from PIL import Image
dest, paths = sys.argv[1], sys.argv[2:]
ims = [Image.open(p).convert("RGB") for p in paths]
out = Image.new("RGB", (ims[0].size[0], sum(i.size[1] for i in ims)))
y = 0
for im in ims:
    out.paste(im, (0, y))
    y += im.size[1]
out.save(dest)
PY
  fi
  echo "${OUT}/${w}.png"
done
