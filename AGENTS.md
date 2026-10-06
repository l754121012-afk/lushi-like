# Project Rules

<!-- dual-thread-vision-workflow:start -->
## Dual-Thread Vision Workflow

- The main task must not call view_image, read screenshots, or load original/large images.
- Put image requests in work/vision-requests/; visual results are read only from work/vision-results/.
- Keep durable visual facts in outputs/VISION-FACTS.md; do not paste image reasoning into the main task.
- One request covers one image and one question. Split layout, OCR, quality, and pixel-diff requests.
- The vision task may write only its result file under work/vision-results/ and must not edit product code or assets.
- Read AGENTS.md -> outputs/SESSION-HANDOFF.md -> outputs/VISION-FACTS.md in that order.
- On the first compaction, stop coding, update the handoff, and start a fresh task.
<!-- dual-thread-vision-workflow:end -->
