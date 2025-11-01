#!/usr/bin/env python3
"""
Extract dominant colors from the ECSVAULT logo image.
Run with: python scripts/extract-logo-colors.py
"""

try:
    from PIL import Image
    import numpy as np
    from collections import Counter
    import sys
    import os

    def get_dominant_colors(image_path, num_colors=5):
        """Extract dominant colors from an image."""
        try:
            img = Image.open(image_path)
            # Convert to RGB if necessary
            img = img.convert('RGB')
            
            # Resize for faster processing
            img.thumbnail((200, 200))
            
            # Get colors
            pixels = np.array(img)
            pixels = pixels.reshape(-1, 3)
            
            # Remove white/black/near-white colors
            filtered_pixels = []
            for pixel in pixels:
                r, g, b = pixel
                # Skip near-white (very light) and near-black colors
                if not (r > 240 and g > 240 and b > 240) and not (r < 20 and g < 20 and b < 20):
                    filtered_pixels.append(tuple(pixel))
            
            # Get most common colors
            color_counts = Counter(filtered_pixels)
            dominant_colors = color_counts.most_common(num_colors)
            
            return dominant_colors
        except Exception as e:
            print(f"Error processing image: {e}")
            return None

    def rgb_to_hex(rgb):
        """Convert RGB to hex."""
        return f"#{rgb[0]:02x}{rgb[1]:02x}{rgb[2]:02x}".upper()

    if __name__ == "__main__":
        logo_path = "logo/ECSVAULT LOGO 01.png"
        
        if not os.path.exists(logo_path):
            logo_path = "../logo/ECSVAULT LOGO 01.png"
        
        if not os.path.exists(logo_path):
            print(f"Logo not found at {logo_path}")
            print("Please provide the path to the logo file.")
            sys.exit(1)
        
        print(f"Analyzing logo: {logo_path}")
        print("-" * 50)
        
        colors = get_dominant_colors(logo_path, num_colors=8)
        
        if colors:
            print("\nDominant Colors Found:")
            print("=" * 50)
            for i, (color, count) in enumerate(colors, 1):
                hex_color = rgb_to_hex(color)
                print(f"{i}. RGB{color} -> {hex_color}")
            print("\n" + "=" * 50)
            print("\nUpdate tailwind.config.ts with these colors!")
        else:
            print("Could not extract colors. Make sure PIL/Pillow is installed:")
            print("pip install Pillow numpy")

except ImportError:
    print("Required packages not installed.")
    print("Install with: pip install Pillow numpy")
    print("\nAlternatively, use an online color picker tool on your logo image")

