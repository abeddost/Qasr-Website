export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: "modern" | "luxury" | "corner";
  image: string; // Main/thumbnail image
  images: string[]; // All product images for gallery
  description: string; // Short description for listings
  fullDescription: string; // Complete detailed description
  keyFeatures: string[]; // Array of feature bullet points
  additionalInfo?: string; // Optional additional information
  href: string;
}

// Category mapping
export const categoryMap = {
  modern: "Moderne Gruppen",
  luxury: "Luxus-Gruppen",
  corner: "Eckgruppen",
} as const;

// All products with multiple images
export const allProducts: Product[] = [
  {
    id: "1",
    name: "Almira Sofa Set",
    slug: "almira",
    category: "Luxus-Gruppen",
    categorySlug: "luxury",
    image: "https://cassalini.com/wp-content/uploads/2025/07/WhatsApp-Image-2021-11-04-at-15.25.14-2_17_11zon-430x323.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/WhatsApp-Image-2021-11-04-at-15.25.14-2_17_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/WhatsApp-Image-2021-11-04-at-15.25.14-2_17_11zon-430x323.webp",
    ],
    description: "Das Almira Sofa Set vereint Eleganz und Komfort in einem zeitlosen Design. Mit hochwertigen Materialien und sorgfältiger Handwerkskunst gefertigt, bietet es eine luxuriöse Sitzgelegenheit für Ihr Zuhause.",
    fullDescription: "Das Almira Sofa Set vereint Eleganz und Komfort in einem zeitlosen Design. Mit hochwertigen Materialien und sorgfältiger Handwerkskunst gefertigt, bietet es eine luxuriöse Sitzgelegenheit für Ihr Zuhause. Das opulente Design mit seinen weichen Polstern und eleganten Linien schafft eine warme und einladende Atmosphäre. Perfekt für anspruchsvolle Wohnräume, die Wert auf Qualität und Stil legen.",
    keyFeatures: [
      "Hochwertige Materialien und sorgfältige Handwerkskunst",
      "Opulentes Design mit weichen Polstern",
      "Zeitlose Eleganz für anspruchsvolle Wohnräume",
      "Luxuriöse Sitzgelegenheit mit optimalem Komfort",
    ],
    additionalInfo: "Das Almira Sofa Set ist in verschiedenen Größen und Stoffen erhältlich. Kontaktieren Sie uns für individuelle Beratung und Preise.",
    href: "/kollektionen/almira",
  },
  {
    id: "2",
    name: "Almira Ecksofa",
    slug: "almira-corner",
    category: "Eckgruppen",
    categorySlug: "corner",
    image: "https://cassalini.com/wp-content/uploads/2025/07/casallini_143321_15_11zon-430x323.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143321_15_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143321_15_11zon-430x323.webp",
    ],
    description: "Das Almira Ecksofa bietet maximale Flexibilität und Komfort. Die L-Form ermöglicht optimale Raumnutzung und schafft eine gemütliche Atmosphäre für entspannte Stunden mit Familie und Freunden.",
    fullDescription: "Das Almira Ecksofa bietet maximale Flexibilität und Komfort. Die L-Form ermöglicht optimale Raumnutzung und schafft eine gemütliche Atmosphäre für entspannte Stunden mit Familie und Freunden. Mit seinem großzügigen Sitzbereich und weichen Polstern bietet es ausreichend Platz für mehrere Personen. Das elegante Design passt perfekt zu modernen und klassischen Einrichtungsstilen.",
    keyFeatures: [
      "L-Form für optimale Raumnutzung",
      "Großzügiger Sitzbereich für mehrere Personen",
      "Weiche Polsterung für maximalen Komfort",
      "Flexibles Design für verschiedene Raumgrößen",
    ],
    additionalInfo: "Das Almira Ecksofa kann in verschiedenen Konfigurationen und Stoffen bestellt werden. Bitte kontaktieren Sie uns für weitere Details.",
    href: "/kollektionen/almira-corner",
  },
  {
    id: "3",
    name: "Angel Sofa Set",
    slug: "angel",
    category: "Moderne Gruppen",
    categorySlug: "modern",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137372_15-430x323.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137372_15.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137372_15-430x323.webp",
    ],
    description: "Das Angel Sofa Set besticht durch seine modernen Linien und minimalistischen Formen. Perfekt für zeitgenössische Wohnräume, die Eleganz und Funktionalität schätzen.",
    fullDescription: "Das Angel Sofa Set besticht durch seine modernen Linien und minimalistischen Formen. Perfekt für zeitgenössische Wohnräume, die Eleganz und Funktionalität schätzen. Mit seinem schlanken Design und hochwertigen Materialien bietet es sowohl Komfort als auch Stil. Die klaren Linien und die zurückhaltende Eleganz machen es zu einem vielseitigen Möbelstück, das sich nahtlos in verschiedene Einrichtungsstile einfügt.",
    keyFeatures: [
      "Moderne Linien und minimalistisches Design",
      "Hochwertige Materialien für Langlebigkeit",
      "Vielseitig für verschiedene Einrichtungsstile",
      "Optimaler Komfort bei schlankem Erscheinungsbild",
    ],
    additionalInfo: "Das Angel Sofa Set ist in verschiedenen Farben erhältlich. Kontaktieren Sie uns für weitere Informationen.",
    href: "/kollektionen/angel",
  },
  {
    id: "4",
    name: "Avanos Sofa Set",
    slug: "avanos",
    category: "Luxus-Gruppen",
    categorySlug: "luxury",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_143818-Large_13-430x323.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_143818-Large_13.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_143818-Large_13-430x323.webp",
    ],
    description: "Das Avanos Sofa Set verkörpert luxuriösen Komfort mit seinem opulenten Design und hochwertigen Materialien. Ein Statement-Piece für anspruchsvolle Wohnräume.",
    fullDescription: "Das Avanos Sofa Set verkörpert luxuriösen Komfort mit seinem opulenten Design und hochwertigen Materialien. Ein Statement-Piece für anspruchsvolle Wohnräume. Mit seinen tiefen Polstern und eleganten Details schafft es eine Atmosphäre von unvergleichlichem Komfort und Stil. Das opulente Design mit seinen weichen Formen und hochwertigen Stoffen macht es zum Mittelpunkt jedes Wohnzimmers.",
    keyFeatures: [
      "Opulentes Design mit luxuriösen Materialien",
      "Tiefe Polsterung für maximalen Komfort",
      "Statement-Piece für anspruchsvolle Wohnräume",
      "Hochwertige Verarbeitung und Langlebigkeit",
    ],
    additionalInfo: "Das Avanos Sofa Set ist in verschiedenen Größen und exklusiven Stoffen erhältlich. Für individuelle Beratung kontaktieren Sie uns bitte.",
    href: "/kollektionen/avanos",
  },
  {
    id: "5",
    name: "Belinda Sofa Set",
    slug: "belinda",
    category: "Luxus-Gruppen",
    categorySlug: "luxury",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI-_143865-Large_12-430x323.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI-_143865-Large_12.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI-_143865-Large_12-430x323.webp",
    ],
    description: "Das Belinda Sofa Set kombiniert klassische Eleganz mit modernem Komfort. Ein zeitloser Klassiker, der jeden Raum veredelt.",
    fullDescription: "Das Belinda Sofa Set kombiniert klassische Eleganz mit modernem Komfort. Ein zeitloser Klassiker, der jeden Raum veredelt. Mit seinen eleganten Linien und hochwertigen Materialien vereint es die Besten aus beiden Welten. Das klassische Design wird durch moderne Komfortmerkmale ergänzt, was es zu einem vielseitigen Möbelstück macht, das über Generationen hinweg Bestand hat.",
    keyFeatures: [
      "Klassische Eleganz mit modernem Komfort",
      "Zeitloses Design für langfristige Wertschätzung",
      "Hochwertige Materialien und Verarbeitung",
      "Vielseitig für verschiedene Einrichtungsstile",
    ],
    additionalInfo: "Das Belinda Sofa Set ist ein zeitloser Klassiker, der in verschiedenen Konfigurationen erhältlich ist. Kontaktieren Sie uns für weitere Details.",
    href: "/kollektionen/belinda",
  },
  {
    id: "6",
    name: "Dream Sofa Set",
    slug: "dream",
    category: "Luxus-Gruppen",
    categorySlug: "luxury",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123984-Large_9-430x323.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123984-Large_9.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123984-Large_9-430x323.webp",
    ],
    description: "Das Dream Sofa Set macht Träume wahr mit seinem außergewöhnlichen Design und unvergleichlichem Komfort. Ein Meisterwerk der Möbelkunst.",
    fullDescription: "Das Dream Sofa Set macht Träume wahr mit seinem außergewöhnlichen Design und unvergleichlichem Komfort. Ein Meisterwerk der Möbelkunst. Mit seinen opulenten Formen, luxuriösen Materialien und perfekter Handwerkskunst schafft es eine Atmosphäre von unvergleichlichem Komfort und Eleganz. Jedes Detail wurde sorgfältig durchdacht, um ein Möbelstück zu schaffen, das sowohl funktional als auch ästhetisch außergewöhnlich ist.",
    keyFeatures: [
      "Außergewöhnliches Design und unvergleichlicher Komfort",
      "Opulente Formen mit luxuriösen Materialien",
      "Perfekte Handwerkskunst in jedem Detail",
      "Meisterwerk der Möbelkunst",
    ],
    additionalInfo: "Das Dream Sofa Set ist ein exklusives Stück, das in limitierter Auflage erhältlich ist. Für weitere Informationen kontaktieren Sie uns bitte.",
    href: "/kollektionen/dream",
  },
  {
    id: "7",
    name: "Efes Sofa Set",
    slug: "efes",
    category: "Moderne Gruppen",
    categorySlug: "modern",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123280-Large_10.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123280-Large_10.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123272-Large_3.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123271-Large_2.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123273-Large_4.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123274-Large_5.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123275-Large_6.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123281-Large_11.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123284-Large_13.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123285-Large_14.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123279-Large_9.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123287-Large_15.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_123288-Large_1.webp",
    ],
    description: "Das Efes Sofa Set überzeugt durch seine modernen Linien und einfaches, aber charaktervolles Design. Die speziell bemalten Holzleisten an den Armlehnen und die Holzfüße vereinen Natürlichkeit und Eleganz.",
    fullDescription: "Das Efes Sofa Set besticht durch seine modernen Linien und einfaches, aber charaktervolles Design. Die speziell bemalten Holzleisten an den Armlehnen und die Holzfüße vereinen Natürlichkeit und Eleganz. Seine minimalistische Form ist ideal für die Schaffung einer modernen und warmen Atmosphäre. Efes bietet komfortable Sitzgelegenheit mit seinem weich strukturierten Stoff und behält den Komfort auch bei längerer Nutzung bei. Sein leicht zu reinigender Stoff und stabiler Rahmen bieten sowohl eine ästhetische als auch funktionale Lösung.",
    keyFeatures: [
      "Speziell bemalte Holzfüße und dekorative Holzleisten an den Armlehnen",
      "Weich strukturierter, komfortabler und leicht zu reinigender Stoff",
      "Sitzstruktur mit modernen und einfachen Linien gestaltet",
      "Langlebige Rahmenstruktur und hochwertige Schaumstoffpolsterung",
    ],
    additionalInfo: "Das Efes Sofa Set ist in verschiedenen Farben und Stoffen erhältlich. Bitte kontaktieren Sie uns für weitere Informationen zu verfügbaren Optionen und Preisen.",
    href: "/kollektionen/efes",
  },
  {
    id: "8",
    name: "Lucas Sofa Set",
    slug: "lucas",
    category: "Moderne Gruppen",
    categorySlug: "modern",
    image: "https://cassalini.com/wp-content/uploads/2025/07/IMG_7683-Large_11_11zon.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7683-Large_11_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7665-Large_1_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7668-Large_2_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7686-Large_12_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7680-Large_9_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7670-Large_3_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7671-Large_4_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7674-Large_5_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7675-Large_6_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7677-Large_7_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7678-Large_8_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7682-Large_10_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/IMG_7689-Large_14_11zon.webp",
    ],
    description: "Das moderne Lucas Sofa Set vereint Funktionalität und Ästhetik in einem einzigartigen Design. Mit seinen modernen Linien komplettiert Lucas Ihre Wohnzimmereinrichtung und bietet gleichzeitig durch seine Funktion als Bett eine praktische Lösung für die Gästebetreuung.",
    fullDescription: "Das moderne Lucas Sofa Set vereint Funktionalität und Ästhetik in einem einzigartigen Design. Mit seinen modernen Linien komplettiert Lucas Ihre Wohnzimmereinrichtung und bietet gleichzeitig durch seine Funktion als Bett eine praktische Lösung für die Gästebetreuung. Das vielseitige Design macht es zu einem idealen Möbelstück für kleinere Wohnungen oder Gästezimmer, ohne dabei auf Komfort oder Stil verzichten zu müssen.",
    keyFeatures: [
      "Funktionalität als Sofa und Bett in einem",
      "Moderne Linien für zeitgenössische Wohnräume",
      "Praktische Lösung für Gästezimmer",
      "Kompaktes Design ohne Komfortverlust",
    ],
    additionalInfo: "Das Lucas Sofa Set ist ideal für kleinere Räume und bietet maximale Flexibilität. Kontaktieren Sie uns für weitere Informationen zu Größen und Optionen.",
    href: "/kollektionen/lucas",
  },
  {
    id: "9",
    name: "Luna Sofa Set",
    slug: "luna",
    category: "Moderne Gruppen",
    categorySlug: "modern",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133223-Large_8.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133223-Large_8.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133212-Large_1.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133227-Large_9.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133213-Large_2.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133221-Large_6.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133214-Large_3.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133215-Large_4.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133220-Large_5.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133222-Large_7.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133231-Large_11.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_133233-Large_13.webp",
    ],
    description: "Das Luna Sofa Set bringt zeitgenössische Eleganz in Ihre Wohnräume mit seinem modernen Design und feinen Details. Mit seinem einfachen, aber auffälligen Erscheinungsbild bietet Luna sowohl Komfort als auch Ästhetik.",
    fullDescription: "Das Luna Sofa Set bringt zeitgenössische Eleganz in Ihre Wohnräume mit seinem modernen Design und feinen Details. Mit seinem einfachen, aber auffälligen Erscheinungsbild bietet Luna sowohl Komfort als auch Ästhetik. Die klaren Linien und die zurückhaltende Eleganz machen es zu einem vielseitigen Möbelstück, das sich nahtlos in verschiedene Einrichtungsstile einfügt. Mit hochwertigen Materialien und sorgfältiger Verarbeitung garantiert Luna langfristige Zufriedenheit.",
    keyFeatures: [
      "Zeitgenössische Eleganz mit modernem Design",
      "Einfaches, aber auffälliges Erscheinungsbild",
      "Hochwertige Materialien und sorgfältige Verarbeitung",
      "Vielseitig für verschiedene Einrichtungsstile",
    ],
    additionalInfo: "Das Luna Sofa Set ist in verschiedenen Konfigurationen erhältlich. Für weitere Informationen kontaktieren Sie uns bitte.",
    href: "/kollektionen/luna",
  },
  {
    id: "10",
    name: "Pablo Sofa Set",
    slug: "pablo",
    category: "Moderne Gruppen",
    categorySlug: "modern",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137400-Large_9.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137400-Large_9.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137387-Large_2.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137408-Large_10.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137395-Large_5.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137394-Large_4.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137397-Large_7.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_137399-Large_8.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/Pablo_04-Large_11_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/Pablo_05-Large_12_11zon.webp",
    ],
    description: "Das Pablo Sofa Set besticht durch seine modernen Linien und vereint Eleganz und Komfort. Mit seiner weich strukturierten, speziellen Kumaş und eleganten Details bietet es sowohl eine ästhetisch ansprechende als auch funktionale Sitzgelegenheit.",
    fullDescription: "Das Pablo Sofa Set besticht durch seine modernen Linien und vereint Eleganz und Komfort. Mit seiner weich strukturierten, speziellen Kumaş und eleganten Details bietet es sowohl eine ästhetisch ansprechende als auch funktionale Sitzgelegenheit. Das moderne Design mit seinen klaren Linien und hochwertigen Materialien macht es zu einem idealen Möbelstück für zeitgenössische Wohnräume. Die besondere Stoffqualität sorgt für langfristigen Komfort und Langlebigkeit.",
    keyFeatures: [
      "Moderne Linien mit eleganter Ästhetik",
      "Weich strukturierter, spezieller Stoff",
      "Hochwertige Materialien für Langlebigkeit",
      "Funktionale und ästhetische Sitzgelegenheit",
    ],
    additionalInfo: "Das Pablo Sofa Set ist in verschiedenen Farben und Stoffen erhältlich. Kontaktieren Sie uns für weitere Informationen zu verfügbaren Optionen.",
    href: "/kollektionen/pablo",
  },
  {
    id: "11",
    name: "Pablo Ecksofa Set",
    slug: "pablo-corner",
    category: "Eckgruppen",
    categorySlug: "corner",
    image: "https://cassalini.com/wp-content/uploads/2025/07/casallini_143291-Large_7_11zon.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143291-Large_7_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143300-Large_1_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143297-Large_11_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143299-Large_13_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143306-Large_6_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143292-Large_8_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143293-Large_9_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143294-Large_10_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143298-Large_12_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143301-Large_2_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143302-Large_3_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143303-Large_4_11zon.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/casallini_143304-Large_5_11zon.webp",
    ],
    description: "Das Pablo Ecksofa ist ein einzigartiges Design, das moderne und sportliche Linien vereint. Es spricht einen urbanen und energiegeladenen Dekorationsstil an. Dank seiner klaren Linien verleiht es Ihrem Raum eine starke Präsenz.",
    fullDescription: "Das Pablo Ecksofa ist ein einzigartiges Design, das moderne und sportliche Linien vereint. Es spricht einen urbanen und energiegeladenen Dekorationsstil an. Dank seiner klaren Linien verleiht es Ihrem Raum eine starke Präsenz. Die L-Form ermöglicht optimale Raumnutzung und schafft eine gemütliche Ecke für entspannte Stunden. Mit seinem dynamischen Design und hochwertigen Materialien ist es perfekt für moderne, urbane Wohnräume.",
    keyFeatures: [
      "Einzigartiges Design mit modernen und sportlichen Linien",
      "L-Form für optimale Raumnutzung",
      "Urbanner und energiegeladener Dekorationsstil",
      "Starke Präsenz durch klare Linien",
    ],
    additionalInfo: "Das Pablo Ecksofa ist in verschiedenen Konfigurationen erhältlich. Kontaktieren Sie uns für weitere Informationen zu Größen und Optionen.",
    href: "/kollektionen/pablo-corner",
  },
  {
    id: "12",
    name: "Puma Sofa Set",
    slug: "puma",
    category: "Moderne Gruppen",
    categorySlug: "modern",
    image: "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144091-Large_6.webp",
    images: [
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144091-Large_6.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144083-Large_1.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144088-Large_4.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144084-Large_2.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144087-Large_3.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144089-Large_5.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144095-Large_9.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144096-Large_10.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144097-Large_11.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144098-Large_12.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144100-Large_13.webp",
      "https://cassalini.com/wp-content/uploads/2025/07/CASALLINI_144101-Large_14.webp",
    ],
    description: "Das Puma Sofa Set wurde sorgfältig für diejenigen entwickelt, die ihren zeitgenössischen Wohnräumen Dynamik und Eleganz verleihen möchten. Dieses besondere Design, das für seine modernen Linien bekannt ist, passt sich mit seinem einfachen, aber auffälligen Erscheinungsbild jedem Dekorationsstil an.",
    fullDescription: "Das Puma Sofa Set wurde sorgfältig für diejenigen entwickelt, die ihren zeitgenössischen Wohnräumen Dynamik und Eleganz verleihen möchten. Dieses besondere Design, das für seine modernen Linien bekannt ist, passt sich mit seinem einfachen, aber auffälligen Erscheinungsbild jedem Dekorationsstil an. Mit hochwertigen Materialien und sorgfältiger Verarbeitung bietet Puma sowohl Komfort als auch Stil. Die dynamischen Formen und die elegante Ästhetik machen es zu einem Statement-Piece für moderne Wohnräume.",
    keyFeatures: [
      "Dynamisches Design mit modernen Linien",
      "Einfaches, aber auffälliges Erscheinungsbild",
      "Passt sich jedem Dekorationsstil an",
      "Hochwertige Materialien für Langlebigkeit",
    ],
    additionalInfo: "Das Puma Sofa Set ist in verschiedenen Konfigurationen erhältlich. Kontaktieren Sie uns für weitere Informationen zu verfügbaren Optionen und Preisen.",
    href: "/kollektionen/puma",
  },
];

// Helper functions
export function getAllProducts(): Product[] {
  return allProducts;
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

export function getProductsByCategory(categorySlug: "modern" | "luxury" | "corner" | "all"): Product[] {
  if (categorySlug === "all") {
    return allProducts;
  }
  const categoryName = categoryMap[categorySlug];
  return allProducts.filter((product) => product.category === categoryName);
}

export function getRelatedProducts(currentSlug: string, limit: number = 4): Product[] {
  const currentProduct = getProductBySlug(currentSlug);
  if (!currentProduct) return [];
  
  return allProducts
    .filter((product) => product.slug !== currentSlug && product.category === currentProduct.category)
    .slice(0, limit);
}

