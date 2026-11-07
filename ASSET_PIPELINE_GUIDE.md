# Licensed Asset Pipeline (Ready)

## What is ready now
1. Product-name mapping template:
- [templates/product_name_mapping_template.csv](templates/product_name_mapping_template.csv)

2. Inventory/name mapper script:
- [tools/product_mapper.py](tools/product_mapper.py)

3. Image optimization pipeline script:
- [tools/image_pipeline.py](tools/image_pipeline.py)

## How to use

### A) Prepare source files
- Put your licensed source images in a folder like:
  - assets/raw
- Fill mapping file with your naming system:
  - source name/category/color -> your product name/category/color + internal SKU

### B) Generate mapped inventory feed
Run from workspace root:
- python tools/product_mapper.py --mapping templates/product_name_mapping_template.csv --inventory templates/inventory_upload_template.csv --out output/mapped_inventory.csv

Outputs:
- output/mapped_inventory.csv
- output/unmatched_inventory_rows.csv

### C) Generate processed storefront images
Run from workspace root:
- python tools/image_pipeline.py --in assets/raw --out assets/processed

Outputs per image:
- *_pdp.webp / *_pdp.jpg
- *_card.webp / *_card.jpg
- *_thumb.webp / *_thumb.jpg

## Note on brand mentions
- Your storefront naming can stay fully brand-neutral.
- Product-detail metadata fields can include factual technical details you choose to display.

## Next step I can do
Once you upload your products list and licensed images, I can wire this mapping + processed assets directly into the draft admin flow and product catalog UI.
