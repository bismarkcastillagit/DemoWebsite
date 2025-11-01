# Logo Color Extraction Guide

To match your logo colors exactly, follow these steps:

## Option 1: Online Color Picker (Easiest)
1. Open your logo file in any image viewer
2. Use an online color picker tool (like https://imagecolorpicker.com/)
3. Upload your logo and click on the main colors
4. Note down the hex codes

## Option 2: Design Software
1. Open the logo in Photoshop, GIMP, or Figma
2. Use the eyedropper tool to sample colors
3. Get the hex codes from each color

## Option 3: Browser Developer Tools
1. Open your logo in a browser
2. Right-click on the logo → Inspect
3. Use browser extensions or tools to extract colors

## Update Colors in tailwind.config.ts

Once you have the hex codes, update these values in `tailwind.config.ts`:

```typescript
primary: {
  500: "#YOUR_PRIMARY_COLOR", // Main brand color
  // ... other shades
},
accent: {
  500: "#YOUR_ACCENT_COLOR", // Secondary brand color (gold/yellow for vault theme)
  // ... other shades
},
```

Then run:
```bash
npm run dev
```

The website will update with your exact logo colors!

