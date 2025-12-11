# Image Update Guide

## Hero Slider Images

The hero slider currently uses placeholder images. To update with actual different product images from cassalini.com:

1. Visit https://cassalini.com/ and inspect the hero slider
2. Right-click on each slide image and copy the image URL
3. Update the `slides` array in `components/HeroSlider.tsx` with the actual image URLs

Example:
```typescript
const slides = [
  {
    id: 1,
    title: translations.hero.slide1.title,
    subtitle: translations.hero.slide1.subtitle,
    link: "/kollektionen?category=modern",
    linkText: translations.hero.slide1.link,
    image: "https://cassalini.com/wp-content/uploads/[ACTUAL_IMAGE_PATH_1].webp", // Update this
  },
  {
    id: 2,
    title: translations.hero.slide2.title,
    subtitle: translations.hero.slide2.subtitle,
    link: "/kollektionen?category=luxury",
    linkText: translations.hero.slide2.link,
    image: "https://cassalini.com/wp-content/uploads/[ACTUAL_IMAGE_PATH_2].webp", // Update this
  },
  {
    id: 3,
    title: translations.hero.slide3.title,
    subtitle: translations.hero.slide3.subtitle,
    link: "/kollektionen?category=corner",
    linkText: translations.hero.slide3.link,
    image: "https://cassalini.com/wp-content/uploads/[ACTUAL_IMAGE_PATH_3].webp", // Update this
  },
];
```

## Finding Image URLs

1. Open browser DevTools (F12)
2. Go to Network tab
3. Filter by "Img" or "Image"
4. Navigate through the slider on cassalini.com
5. Copy the image URLs from the network requests

Alternatively:
1. Right-click on each slide image
2. Select "Inspect Element"
3. Find the `<img>` tag in the HTML
4. Copy the `src` attribute value

## Current Implementation

The slider now includes:
- ✅ Smooth fade transitions between slides
- ✅ Text animations (fade in, slide up effects)
- ✅ Image zoom effects
- ✅ Auto-rotation every 5 seconds
- ✅ Manual navigation arrows
- ✅ Slide indicators

All animations are working - you just need to update the image URLs with different product images.

