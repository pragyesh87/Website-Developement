function collectedVariant(style, colorFolder, name, imageCount, sizes) {
  const thumbnails = Array.from({ length: imageCount }, (_, index) =>
    `assets/products/${style}/${colorFolder}/image-${String(index + 1).padStart(2, '0')}.jpg`,
  );
  const images = thumbnails.map((path) => path.replace('/image-', '/hd/image-'));
  return {
    name,
    preview: images[0],
    images,
    thumbnails,
    sizes: Object.fromEntries(sizes.map((size) => [size, null])),
  };
}

const collectedProducts = {
  'm002-tank-top': {
    name: "Men's Cotton Blend Tank Top",
    style: 'M002',
    brand: 'Jockey',
    price: '₹899.00',
    description: 'A sleeveless cotton-blend tank top with a round neck, designed for comfortable everyday movement.',
    details: ['Cotton and polyester blend', 'Sleeveless with a round neck', 'Label-free design'],
    variants: [collectedVariant('M002', 'black', 'Black', 8, ['M', 'L', 'XL'])],
  },
  '2400-thermal-top': {
    name: "Men's Half-Sleeve Thermal Top",
    style: '2400',
    brand: 'Jockey',
    price: '₹679.00',
    description: 'A cotton-rich thermal undershirt with short sleeves and a round neck, made for comfortable layering in cooler weather.',
    details: ['Cotton, viscose and polyester blend', 'Half sleeves', 'StayWarm fabric and StayFresh treatment', 'Label-free design'],
    variants: [collectedVariant('2400', 'charcoal-melange', 'Charcoal Melange', 10, ['M', 'L', 'XL'])],
  },
  '2401-thermal-top': {
    name: "Men's Full-Sleeve Thermal Top",
    style: '2401',
    brand: 'Jockey',
    price: '₹779.00',
    description: 'A cotton-rich, full-sleeve thermal undershirt with a round neck for easy layering on cooler days.',
    details: ['Cotton, viscose and polyester blend', 'Full sleeves', 'StayWarm fabric and StayFresh treatment', 'Label-free design'],
    variants: [collectedVariant('2401', 'charcoal-melange', 'Charcoal Melange', 10, ['S', 'L'])],
  },
  '2420-thermal-bottom': {
    name: "Men's Thermal Long Johns",
    style: '2420',
    brand: 'Jockey',
    price: '₹779.00',
    description: 'Cotton-rich thermal long johns with a soft waistband and front fly, designed as a comfortable base layer.',
    details: ['Cotton, viscose and polyester blend', 'Front-open fly and soft waistband', 'StayWarm fabric and StayFresh treatment', 'Label-free design'],
    variants: [collectedVariant('2420', 'charcoal-melange', 'Charcoal Melange', 8, ['S', 'M'])],
  },
  '9500-track-pants': {
    name: "Men's Cotton Blend Track Pants",
    style: '9500',
    brand: 'Jockey',
    price: 'Price to be confirmed',
    description: 'Cotton-blend track pants with a drawstring waistband and side pockets for relaxed everyday wear.',
    details: ['Cotton blend', 'Drawstring waistband', 'Side pockets'],
    note: 'The source describes this colour as Black & Grey Melange. Please confirm the exact colour before purchase.',
    variants: [collectedVariant('9500', 'black', 'Black / Grey Melange', 7, ['S', 'L', 'XL', 'XXL'])],
  },
  '9922-gym-vest': {
    name: "Men's Cotton Rib Gym Vest",
    style: '9922',
    brand: 'Jockey',
    price: '₹339.00',
    description: 'A sleeveless cotton rib gym vest with a round neck and racerback, made for everyday comfort.',
    details: ['Cotton rib fabric', 'Round neck and racerback', 'Label-free design'],
    note: 'The source gallery includes images from different pack variants. Pack quantity needs confirmation.',
    variants: [collectedVariant('9922', 'white', 'White', 7, ['S', 'M', 'L', 'XL'])],
  },
};

const collectedProductKeys = Object.keys(collectedProducts);
