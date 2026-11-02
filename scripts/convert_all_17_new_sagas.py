import os
from PIL import Image

public_dir = os.path.abspath('frontend/public')
output_dir = os.path.join(public_dir, 'posters')
os.makedirs(output_dir, exist_ok=True)

TARGET_W = 1280
TARGET_H = 720

MAPPING = {
    'Studio Ghibli.png': 'anime.webp',
    'Transformaers.png': 'transformers.webp',
    'Terminator.png': 'terminator.webp',
    'Planet of the apes.png': 'planet_of_the_apes.webp',
    'MAD MAX.png': 'mad_max.webp',
    'Back to the future.png': 'back_to_the_future.webp',
    'MIB.png': 'men_in_black.webp',
    'Start trek.png': 'star_trek.webp',
    'RoboCop.png': 'robocop.webp',
    'Tron.png': 'tron.webp',
    'Pacific rim.png': 'pacific_rim.webp',
    'SGU.png': 'stargate.webp',
    'Battle star galactica.png': 'battlestar_galactica.webp',
    'the expanse.png': 'the_expanse.webp',
    'The Chronicles of riddick.png': 'chronicles_of_riddick.webp',
    'A quiet place.png': 'a_quiet_place.webp',
    'Independance day.png': 'independence_day.webp'
}

print(f"Converting {len(MAPPING)} new saga images to 1280x720 WebP...")

for src_name, dest_name in MAPPING.items():
    src_path = os.path.join(public_dir, src_name)
    dest_path = os.path.join(output_dir, dest_name)
    
    if not os.path.exists(src_path):
        print(f"[MISSING] {src_name}")
        continue
        
    try:
        with Image.open(src_path) as im:
            # Convert to RGB (or RGBA if transparent)
            if im.mode in ('RGBA', 'LA') or (im.mode == 'P' and 'transparency' in im.info):
                # If transparent, composite onto luxury dark background #0a0b12
                bg = Image.new('RGBA', im.size, (10, 11, 18, 255))
                im_rgba = im.convert('RGBA')
                bg.alpha_composite(im_rgba)
                im = bg.convert('RGB')
            else:
                im = im.convert('RGB')
            
            # Aspect crop to exact 16:9 (1280x720)
            target_ratio = TARGET_W / TARGET_H
            img_ratio = im.width / im.height
            
            if img_ratio > target_ratio:
                # Wider
                new_h = TARGET_H
                new_w = int(im.width * (TARGET_H / im.height))
                resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
                left = (new_w - TARGET_W) // 2
                cropped = resized.crop((left, 0, left + TARGET_W, TARGET_H))
            else:
                # Taller or exact
                new_w = TARGET_W
                new_h = int(im.height * (TARGET_W / im.width))
                resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
                top = (new_h - TARGET_H) // 2
                cropped = resized.crop((0, top, TARGET_W, top + TARGET_H))
                
            cropped.save(dest_path, 'WEBP', quality=90, method=6)
            size_kb = os.path.getsize(dest_path) // 1024
            print(f"[OK] {src_name} -> {dest_name} ({TARGET_W}x{TARGET_H}, {size_kb} KB)")
    except Exception as e:
        print(f"[FAIL] {src_name}: {e}")

print("All 17 images processed successfully!")

