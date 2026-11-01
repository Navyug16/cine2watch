import os
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageEnhance

public_dir = os.path.abspath('frontend/public')
output_dir = os.path.join(public_dir, 'posters')
os.makedirs(output_dir, exist_ok=True)

TARGET_W = 1280
TARGET_H = 720

def create_base_canvas(theme_color=(15, 17, 26)):
    """Creates a unified 1280x720 dark luxury background with radial vignette."""
    base = Image.new('RGBA', (TARGET_W, TARGET_H), (10, 11, 18, 255))
    # Create radial gradient glow in center
    glow = Image.new('RGBA', (TARGET_W, TARGET_H), (0, 0, 0, 0))
    glow_arr = np.zeros((TARGET_H, TARGET_W, 4), dtype=np.uint8)
    
    y, x = np.ogrid[:TARGET_H, :TARGET_W]
    center_y, center_x = TARGET_H / 2, TARGET_W / 2
    dist_from_center = np.sqrt((x - center_x)**2 + (y - center_y)**2)
    max_dist = np.sqrt(center_x**2 + center_y**2)
    
    alpha = np.clip(1.0 - (dist_from_center / max_dist), 0, 1) ** 1.8 * 80
    glow_arr[..., 0] = theme_color[0]
    glow_arr[..., 1] = theme_color[1]
    glow_arr[..., 2] = theme_color[2]
    glow_arr[..., 3] = alpha.astype(np.uint8)
    
    glow_img = Image.fromarray(glow_arr, 'RGBA')
    base.alpha_composite(glow_img)
    return base

def extract_logo_from_white(img_path, replace_color=None, threshold=220):
    """Isolates logo from a white or light background and returns RGBA image."""
    im = Image.open(img_path).convert('RGBA')
    arr = np.array(im)
    
    # Calculate luminance or check whiteness
    r, g, b = arr[..., 0], arr[..., 1], arr[..., 2]
    is_white = (r > threshold) & (g > threshold) & (b > threshold)
    
    # Inverted alpha: dark pixels become opaque, white pixels become transparent
    gray = 0.299 * r + 0.587 * g + 0.114 * b
    # Map 255 (white) to 0 alpha, and < threshold to alpha
    alpha = np.clip((255.0 - gray) / (255.0 - threshold) * 255.0, 0, 255).astype(np.uint8)
    
    out_arr = np.zeros_like(arr)
    if replace_color:
        out_arr[..., 0] = replace_color[0]
        out_arr[..., 1] = replace_color[1]
        out_arr[..., 2] = replace_color[2]
    else:
        out_arr[..., :3] = arr[..., :3]
    out_arr[..., 3] = alpha
    return Image.fromarray(out_arr, 'RGBA')

def process_logo_canvas(logo_img, theme_color=(197, 160, 89), max_scale=0.72):
    """Places an RGBA logo centered on a 1280x720 dark luxury canvas."""
    canvas = create_base_canvas(theme_color)
    
    # Scale logo to fit nicely within canvas (e.g. max 75% width, max 60% height)
    max_w = int(TARGET_W * max_scale)
    max_h = int(TARGET_H * 0.60)
    
    scale = min(max_w / logo_img.width, max_h / logo_img.height)
    new_w = int(logo_img.width * scale)
    new_h = int(logo_img.height * scale)
    
    resized = logo_img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2
    
    canvas.alpha_composite(resized, (pos_x, pos_y))
    return canvas.convert('RGB')

def process_photo_canvas(photo_path, darken=0.78):
    """Fits photographic artwork into exact 1280x720 canvas with luxury vignette."""
    im = Image.open(photo_path).convert('RGB')
    
    # Aspect fill
    target_ratio = TARGET_W / TARGET_H
    img_ratio = im.width / im.height
    
    if img_ratio > target_ratio:
        # Image is wider: fit height and crop width
        new_h = TARGET_H
        new_w = int(im.width * (TARGET_H / im.height))
        resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        left = (new_w - TARGET_W) // 2
        cropped = resized.crop((left, 0, left + TARGET_W, TARGET_H))
    else:
        # Image is taller: fit width and crop height
        new_w = TARGET_W
        new_h = int(im.height * (TARGET_W / im.width))
        resized = im.resize((new_w, new_h), Image.Resampling.LANCZOS)
        top = (new_h - TARGET_H) // 2
        cropped = resized.crop((0, top, TARGET_W, top + TARGET_H))
        
    # Darken slightly and add edge vignette
    enhancer = ImageEnhance.Brightness(cropped)
    dimmed = enhancer.enhance(darken)
    
    # Add dark vignette
    dimmed_rgba = dimmed.convert('RGBA')
    vignette = Image.new('RGBA', (TARGET_W, TARGET_H), (0, 0, 0, 0))
    v_arr = np.zeros((TARGET_H, TARGET_W, 4), dtype=np.uint8)
    
    y, x = np.ogrid[:TARGET_H, :TARGET_W]
    center_y, center_x = TARGET_H / 2, TARGET_W / 2
    dist_from_center = np.sqrt((x - center_x)**2 + (y - center_y)**2)
    max_dist = np.sqrt(center_x**2 + center_y**2)
    
    v_alpha = np.clip((dist_from_center / max_dist) ** 2 * 140, 0, 180)
    v_arr[..., 3] = v_alpha.astype(np.uint8)
    
    vignette_img = Image.fromarray(v_arr, 'RGBA')
    dimmed_rgba.alpha_composite(vignette_img)
    return dimmed_rgba.convert('RGB')

# Process all 17 hubs
def main():
    print("Standardizing all 17 franchise posters to uniform 1280x720 WebP...")

    # 1. Star Wars (White background -> Glowing Star Wars Yellow/Gold logo on deep space)
    sw_logo = extract_logo_from_white(os.path.join(public_dir, 'Startwars.png'), replace_color=(255, 232, 31), threshold=200)
    sw_canvas = process_logo_canvas(sw_logo, theme_color=(255, 220, 20), max_scale=0.65)
    sw_canvas.save(os.path.join(output_dir, 'star_wars.webp'), 'WEBP', quality=95)
    print("[OK] star_wars.webp -> 1280x720")

    # 2. The Matrix (White background -> Glowing Matrix Neon Green logo on dark)
    matrix_logo = extract_logo_from_white(os.path.join(public_dir, 'Matrix-4-new-logo.avif'), replace_color=(0, 255, 136), threshold=220)
    matrix_canvas = process_logo_canvas(matrix_logo, theme_color=(0, 200, 100), max_scale=0.75)
    matrix_canvas.save(os.path.join(output_dir, 'the_matrix.webp'), 'WEBP', quality=95)
    print("[OK] the_matrix.webp -> 1280x720")

    # 3. Pirates of the Caribbean (White background -> Metallic Pirate Gold Crest on dark oceanic canvas)
    potc_logo = extract_logo_from_white(os.path.join(public_dir, 'piretsofthecarebian.webp'), replace_color=(218, 175, 95), threshold=210)
    potc_canvas = process_logo_canvas(potc_logo, theme_color=(197, 160, 89), max_scale=0.82)
    potc_canvas.save(os.path.join(output_dir, 'pirates_of_the_caribbean.webp'), 'WEBP', quality=95)
    print("[OK] pirates_of_the_caribbean.webp -> 1280x720")

    # 4. Middle-Earth (Lord of the Rings) (Light background -> Tolkien Gold Wordmark on dark canvas)
    lotr_logo = extract_logo_from_white(os.path.join(public_dir, 'lordoftherings.png'), replace_color=None, threshold=225)
    lotr_canvas = process_logo_canvas(lotr_logo, theme_color=(230, 185, 100), max_scale=0.80)
    lotr_canvas.save(os.path.join(output_dir, 'middle_earth.webp'), 'WEBP', quality=95)
    print("[OK] middle_earth.webp -> 1280x720")

    # 5. Harry Potter (Transparent SVG logo -> Centered on dark magic canvas)
    hp_logo = Image.open(os.path.join(output_dir, 'harry_potter.webp')).convert('RGBA')
    hp_canvas = process_logo_canvas(hp_logo, theme_color=(180, 40, 40), max_scale=0.78)
    hp_canvas.save(os.path.join(output_dir, 'harry_potter.webp'), 'WEBP', quality=95)
    print("[OK] harry_potter.webp -> 1280x720")

    # 6. Marvel (Transparent WebP banner -> Centered on dark Marvel red canvas)
    marvel_logo = Image.open(os.path.join(public_dir, 'Marvel.webp')).convert('RGBA')
    marvel_canvas = process_logo_canvas(marvel_logo, theme_color=(237, 29, 36), max_scale=0.80)
    marvel_canvas.save(os.path.join(output_dir, 'marvel.webp'), 'WEBP', quality=95)
    print("[OK] marvel.webp -> 1280x720")

    # 7. DC Multiverse (Logo banner -> Centered on dark DC Blue canvas)
    dc_im = Image.open(os.path.join(public_dir, 'DC.avif')).convert('RGBA')
    dc_canvas = process_logo_canvas(dc_im, theme_color=(0, 120, 240), max_scale=0.75)
    dc_canvas.save(os.path.join(output_dir, 'dc_multiverse.webp'), 'WEBP', quality=95)
    print("[OK] dc_multiverse.webp -> 1280x720")

    # 8. Christopher Nolan (High-res 1280x720 landscape)
    nolan_canvas = process_photo_canvas(os.path.join(public_dir, 'posters', 'christopher_nolan.webp'))
    nolan_canvas.save(os.path.join(output_dir, 'christopher_nolan.webp'), 'WEBP', quality=95)
    print("[OK] christopher_nolan.webp -> 1280x720")

    # Photographic Banners to process to 1280x720
    photo_map = {
        'Alien.webp': 'alien.webp',
        'Avatar.png': 'avatar.webp',
        'Blade_runner_poster_logo.png': 'blade_runner.webp',
        'Dune.png': 'dune.webp',
        'Fastandfurious.jpg': 'fast_and_furious.webp',
        'John_Wick_franchise.png': 'john_wick.webp',
        'Mission_Impossible_franchise_logo.webp': 'mission_impossible.webp',
        'Oscer.jpg': 'oscar_winners.webp',
        'monterverse.jpg': 'monsterverse.webp'
    }

    for src_file, dest_file in photo_map.items():
        src_p = os.path.join(public_dir, src_file)
        dest_p = os.path.join(output_dir, dest_file)
        if os.path.exists(src_p):
            processed = process_photo_canvas(src_p)
            processed.save(dest_p, 'WEBP', quality=95)
            print(f"[OK] {dest_file} -> 1280x720")

    print("\nAll 17 images standardized to uniform 1280x720 WebP!")

if __name__ == '__main__':
    main()
