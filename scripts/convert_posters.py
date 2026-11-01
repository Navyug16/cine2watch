import os
import sys
from PIL import Image
from reportlab.graphics import renderPM
from svglib.svglib import svg2rlg

public_dir = os.path.abspath('frontend/public')
output_dir = os.path.join(public_dir, 'posters')
os.makedirs(output_dir, exist_ok=True)

FILE_MAPPING = {
    'Alien.webp': 'alien.webp',
    'Avatar.png': 'avatar.webp',
    'Blade_runner_poster_logo.png': 'blade_runner.webp',
    'DC.avif': 'dc_multiverse.webp',
    'Dune.png': 'dune.webp',
    'Fastandfurious.jpg': 'fast_and_furious.webp',
    'Harrypotter.svg': 'harry_potter.webp',
    'John_Wick_franchise.png': 'john_wick.webp',
    'Marvel.webp': 'marvel.webp',
    'Matrix-4-new-logo.avif': 'the_matrix.webp',
    'Mission_Impossible_franchise_logo.webp': 'mission_impossible.webp',
    'Oscer.jpg': 'oscar_winners.webp',
    'Startwars.png': 'star_wars.webp',
    'lordoftherings.png': 'middle_earth.webp',
    'monterverse.jpg': 'monsterverse.webp',
    'piretsofthecarebian.webp': 'pirates_of_the_caribbean.webp'
}

print("Converting all images into WebP format in", output_dir)

for src_name, dest_name in FILE_MAPPING.items():
    src_path = os.path.join(public_dir, src_name)
    dest_path = os.path.join(output_dir, dest_name)

    if not os.path.exists(src_path):
        print(f"Skipping missing: {src_name}")
        continue

    try:
        if src_name.endswith('.svg'):
            temp_png = os.path.join(output_dir, '_temp_svg.png')
            drawing = svg2rlg(src_path)
            renderPM.drawToFile(drawing, temp_png, fmt='PNG')
            with Image.open(temp_png) as img:
                img.save(dest_path, 'WEBP', quality=95)
            if os.path.exists(temp_png):
                os.remove(temp_png)
            print(f"[OK] Converted SVG: {src_name} -> {dest_name}")
        else:
            with Image.open(src_path) as img:
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    converted = img.convert('RGBA')
                else:
                    converted = img.convert('RGB')
                converted.save(dest_path, 'WEBP', quality=95, method=6)
            print(f"[OK] Converted: {src_name} -> {dest_name} ({converted.size[0]}x{converted.size[1]})")
    except Exception as e:
        print(f"[FAIL] {src_name}: {e}")

print("All conversions complete!")
