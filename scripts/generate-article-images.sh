#!/bin/zsh
#
# Generate article hero images via Freepik Mystic API
# Style: atmospheric Scandinavian landscapes matching kommun hero images
#

set -euo pipefail

SCRIPT_DIR="${0:a:h}"
PROJECT_DIR="${SCRIPT_DIR:h}"
source "$PROJECT_DIR/.env"

API_KEY="${FREEPIK_API_KEY}"
API_URL="https://api.freepik.com/v1/ai/mystic"
OUTPUT_DIR="$PROJECT_DIR/public/images/insights"

STYLE_SUFFIX="Photorealistic editorial photography, cinematic atmosphere, teal and blue color tones, Scandinavian environment, no text overlays, no watermarks, 16:9 aspect ratio"

typeset -A PROMPTS
PROMPTS[hero-ciso-as-a-service]="A modern Scandinavian office building at dusk with warm interior lights glowing through floor-to-ceiling windows. Reflections on wet pavement. Bare birch trees in the foreground. Overcast sky with deep blue and teal tones. Long exposure photography, calm and professional atmosphere. ${STYLE_SUFFIX}"

PROMPTS[hero-nis2-cybersakerhetslagen]="European parliament-style building seen from across a calm river at blue hour. Warm amber lights from windows contrasting with deep teal sky. A bridge with subtle light reflections in the water. Nordic cityscape, autumn atmosphere with bare trees. ${STYLE_SUFFIX}"

PROMPTS[hero-iso27001-forandringar]="A modern glass and concrete office building interior corridor at twilight, seen from outside through large windows. Clean geometric lines, warm amber lighting inside contrasting with cool blue dusk outside. Minimalist Nordic architecture, professional and structured atmosphere. ${STYLE_SUFFIX}"

PROMPTS[hero-cybersakerhetslagen-ledningsansvar]="A Nordic city hall or government building at dusk, illuminated warmly from within. Wide stone steps leading up to the entrance. Deep blue overcast sky with subtle teal tones. Street lamps casting warm light. Authoritative and institutional atmosphere. ${STYLE_SUFFIX}"

PROMPTS[hero-femton-ar-samma-hotbild]="An aging industrial area in a Scandinavian city at dawn. Old brick factory buildings alongside modern glass offices. Morning mist rising from the ground. Muted teal and amber tones. Power lines and chimneys silhouetted against a pale sky. A sense of stagnation contrasting with modernity. ${STYLE_SUFFIX}"

echo "=== Freepik Article Hero Image Generator ==="
echo "Output: ${OUTPUT_DIR}"
echo ""

# Phase 1: Submit all tasks
typeset -A TASK_IDS
echo "Submitting generation tasks..."
for name in ${(k)PROMPTS}; do
    echo "  Submitting: ${name}"

    resp=$(curl -s -X POST "$API_URL" \
        -H "Content-Type: application/json" \
        -H "x-freepik-api-key: ${API_KEY}" \
        -d "$(jq -n \
            --arg prompt "${PROMPTS[$name]}" \
            '{
                prompt: $prompt,
                aspect_ratio: "widescreen_16_9",
                resolution: "2k",
                model: "realism",
                hdr: 50,
                creative_detailing: 40
            }')")

    tid=$(echo "$resp" | jq -r '.data.task_id // empty')

    if [[ -z "$tid" ]]; then
        echo "  ERROR: ${resp}"
        continue
    fi

    echo "  Task ID: ${tid}"
    TASK_IDS[$name]="$tid"
done

echo ""
echo "Waiting for generation to complete..."

# Phase 2: Poll all tasks and download
for name in ${(k)TASK_IDS}; do
    tid="${TASK_IDS[$name]}"
    max_attempts=30
    attempt=0
    image_url=""

    while (( attempt < max_attempts )); do
        resp=$(curl -s -X GET "${API_URL}/${tid}" \
            -H "x-freepik-api-key: ${API_KEY}")

        task_status=$(echo "$resp" | jq -r '.data.status // empty')

        if [[ "$task_status" == "COMPLETED" ]]; then
            image_url=$(echo "$resp" | jq -r '.data.generated[0] // empty')
            echo "  Completed: ${name}"
            break
        elif [[ "$task_status" == "FAILED" ]]; then
            echo "  FAILED: ${name} - ${resp}"
            break
        else
            attempt=$((attempt + 1))
            echo "  Polling ${name}... (${task_status}, ${attempt}/${max_attempts})"
            sleep 5
        fi
    done

    if [[ -z "$image_url" ]]; then
        echo "  Skipping download for ${name} (no URL)"
        continue
    fi

    echo "  Downloading ${name}..."
    tmp_file="/tmp/freepik_${name}.png"
    curl -s -o "$tmp_file" "$image_url"

    out_path="${OUTPUT_DIR}/${name}.webp"
    if command -v cwebp &> /dev/null; then
        cwebp -q 85 "$tmp_file" -o "$out_path" 2>/dev/null
        echo "  Saved: ${out_path}"
    elif command -v sips &> /dev/null; then
        sips -s format webp -s formatOptions 85 "$tmp_file" --out "$out_path" 2>/dev/null
        echo "  Saved: ${out_path}"
    else
        cp "$tmp_file" "${OUTPUT_DIR}/${name}.png"
        echo "  WARNING: No WebP converter, saved as PNG"
    fi

    rm -f "$tmp_file"
done

echo ""
echo "=== Done ==="
