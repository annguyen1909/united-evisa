# How to Create Your Website Thumbnail (Open Graph Image)

## Quick Setup (5 minutes)

Your website is already configured to show thumbnails when shared! You just need to create the image file.

### Option 1: Screenshot Method (Easiest)
1. Open `/public/images/og-image.html` in your browser
2. Press `Cmd+Shift+4` (Mac) or use screenshot tool
3. Capture the entire page
4. Save as `/public/images/og-image.png`
5. Done! Your thumbnail will work immediately.

### Option 2: Use Canva (Professional)
1. Go to [canva.com](https://canva.com)
2. Create custom design: 1200 x 630 pixels
3. Use these elements:
   - Background: Gradient from #10b981 to #047857 (blue theme)
   - Text 1: "🌍 United eVisa Services" (48px, white, bold)
   - Text 2: "Fast & Secure eVisa Applications" (64px, white, very bold)
   - Text 3: "Apply for eVisas to 50+ countries • Fast processing • 24/7 support" (32px, white)
   - Add a badge in top-right: "🚀 Get Started" with white border
4. Download as PNG
5. Save to `/public/images/og-image.png`

### Option 3: Online Tools
- **HTMLCSStoImage**: [htmlcsstoimage.com](https://htmlcsstoimage.com) - Paste the HTML code
- **Pablo by Buffer**: [pablo.buffer.com](https://pablo.buffer.com) - Quick design tool
- **Figma**: [figma.com](https://figma.com) - Professional design tool

## What This Gives You

Once you add the image, your website will show a beautiful thumbnail when shared on:
- ✅ Facebook posts
- ✅ LinkedIn shares  
- ✅ Twitter/X cards
- ✅ WhatsApp previews
- ✅ Slack messages
- ✅ Discord embeds
- ✅ Telegram links
- ✅ iMessage previews

## Image Specifications
- **Size**: 1200x630 pixels (perfect for all platforms)
- **Format**: PNG (best quality) or JPG
- **Colors**: Your blue brand colors (#10b981, #047857)
- **File size**: Keep under 1MB
- **Location**: `/public/images/og-image.png`

## Testing Your Thumbnail

After adding the image, test it works:
1. **Facebook**: [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
2. **Twitter**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
3. **LinkedIn**: [linkedin.com/post-inspector/](https://linkedin.com/post-inspector/)

Just paste your website URL and see the preview!

## Alternative: Use Existing Hero Image

If you don't want to create a new image, your existing hero image works too. Just change the metadata in `app/layout.tsx`:

```typescript
images: [
  {
    url: "/images/hero/hero.jpg",  // Use this instead
    width: 1200,
    height: 630,
    alt: "United eVisa Services - Fast eVisa Applications",
  },
],
```

## Troubleshooting

**Image not showing?**
- Clear cache and try again
- Make sure image is exactly 1200x630px
- Check file is saved as `/public/images/og-image.png`
- Test with the validator tools above

**Need help?**
- Use the HTML template in `/public/images/og-image.html`
- Your brand colors are: #10b981 (blue-600) and #047857 (blue-800)
- Keep text large and readable on small screens

## Your Current Setup

✅ Meta tags configured  
✅ Open Graph setup complete  
✅ Twitter cards enabled  
⏳ Just need the image file!

Once you add `/public/images/og-image.png`, everything will work automatically.
