const TravelDestinations = [
  {
    id: 1,
    title: "Berlin",
    location: "Berlin, DE",
    image: "/watermarked/Berlin.jpeg",
    latitude: 52.5200,
    longitude: 13.4050,
    description: "History, nightlife, and street art in Germany's vibrant capital.",
    country: "Germany",
    region: "Europe",
    tags: ["city", "history", "nightlife", "art"],
    visitDate: "2025",
    content: {
      about: [
        "Berlin, the capital of Germany, is a city where history and modernity collide in the most fascinating ways. From the remnants of the Berlin Wall to the cutting-edge galleries of Museum Island, every corner tells a story of resilience and reinvention. The city's vibrant neighborhoods — Kreuzberg, Mitte, Prenzlauer Berg — each have their own distinct character, offering everything from world-class street food to underground techno clubs.",
        "Beyond its rich history, Berlin is one of Europe's greenest capitals. The sprawling Tiergarten park, the serene Spree River, and countless lakes on the city's outskirts provide a refreshing escape from urban life. Whether you're cycling along tree-lined boulevards or relaxing in a riverside beer garden, nature is never far away.",
        "Berlin's cultural scene is legendary. With over 170 museums, three opera houses, and a thriving street art culture, the city is a playground for creatives and culture enthusiasts alike. The cost of living remains more affordable than other major European capitals, making it a magnet for artists, startups, and travelers from around the world."
      ],
      highlights: [
        { title: "Population", description: "Approximately 3.7 million residents" },
        { title: "Best Time to Visit", description: "May to September for warm weather and outdoor festivals" },
        { title: "Language", description: "German (English widely spoken)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Brandenburg Gate, Museum Island, East Side Gallery" },
        { title: "Known For", description: "History, nightlife, street art, and diverse food scene" }
      ],
      gallery: []
    },
  },
  {
    id: 2,
    title: "Prague",
    location: "Prague, CZ",
    image: "/watermarked/prague.jpeg",
    latitude: 50.0755,
    longitude: 14.4378,
    description: "Gothic spires, cobblestone streets, and vibrant beer culture in the Czech capital.",
    country: "Czech Republic",
    region: "Europe",
    tags: ["city", "history", "architecture"],
    visitDate: "2022",
    content: {
      about: [
        "Prague, the capital of the Czech Republic, is a fairy-tale city of cobblestone streets, Gothic spires, and Baroque palaces. The historic center, a UNESCO World Heritage Site, feels like stepping into a medieval painting — yet the city pulses with a youthful, creative energy that makes it one of Europe's most exciting destinations.",
        "The Vltava River winds through the heart of Prague, connecting iconic landmarks like the Charles Bridge, Prague Castle, and the charming Old Town Square with its famous astronomical clock. Beyond the tourist trail, neighborhoods like Vinohrady and Žižkov offer authentic Czech pubs, quirky galleries, and leafy parks.",
        "Prague is remarkably affordable compared to Western European capitals, making it a favorite among travelers who want world-class culture without breaking the bank. From classical concerts in centuries-old churches to craft beer in underground bars, the city offers an unforgettable blend of old-world charm and modern vibrancy."
      ],
      highlights: [
        { title: "Population", description: "Approximately 1.3 million residents" },
        { title: "Best Time to Visit", description: "April to June and September to October for mild weather" },
        { title: "Language", description: "Czech (English widely spoken in tourist areas)" },
        { title: "Currency", description: "Czech Koruna (CZK)" },
        { title: "Must See", description: "Charles Bridge, Prague Castle, Old Town Square" },
        { title: "Known For", description: "Gothic architecture, beer culture, and classical music" }
      ],
      gallery: []
    },
  },
  {
    id: 3,
    title: "Vienna",
    location: "Vienna, AT",
    image: "/watermarked/Vienna.jpeg",
    latitude: 48.2082,
    longitude: 16.3738,
    description: "Imperial palaces, classical music, and coffeehouse culture on the Danube.",
    country: "Austria",
    region: "Europe",
    tags: ["city", "culture", "architecture", "music"],
    visitDate: "2022",
    content: {
      about: [
        "Vienna, the capital of Austria, is a city that breathes elegance and history at every turn. Once the seat of the mighty Habsburg Empire, its grand palaces, ornate opera houses, and majestic museums stand as testaments to centuries of cultural and political power. Schönbrunn Palace, the Hofburg, and St. Stephen's Cathedral are just a few of its architectural masterpieces.",
        "The city is synonymous with classical music — Mozart, Beethoven, Strauss, and Schubert all called Vienna home. Today, the tradition lives on through the Vienna Philharmonic, the State Opera, and countless concert halls. But Vienna is far more than its imperial past; its vibrant coffeehouse culture, innovative contemporary art scene, and thriving culinary landscape make it endlessly fascinating.",
        "Consistently ranked as one of the world's most livable cities, Vienna offers an exceptional quality of life with its clean streets, efficient public transport, and abundant green spaces. The Danube Island and the vineyards on the city's outskirts provide a refreshing counterbalance to the urban grandeur."
      ],
      highlights: [
        { title: "Population", description: "Approximately 2 million residents" },
        { title: "Best Time to Visit", description: "April to May and September to October for pleasant weather" },
        { title: "Language", description: "German (English widely understood)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Schönbrunn Palace, St. Stephen's Cathedral, Belvedere Museum" },
        { title: "Known For", description: "Classical music, coffeehouse culture, and imperial architecture" }
      ],
      gallery: []
    },
  },
  {
    id: 4,
    title: "Binz",
    location: "Binz, DE",
    image: "/watermarked/Binz.jpeg",
    latitude: 54.4000,
    longitude: 13.6167,
    description: "White sandy beaches and beech forests on Germany's Baltic island of Ruegen.",
    country: "Germany",
    region: "Europe",
    tags: ["beach", "nature"],
    visitDate: "2022",
    content: {
      about: [
        "Binz is the largest and most popular seaside resort on the island of Rügen, Germany's largest island in the Baltic Sea. With its pristine white sandy beaches stretching for kilometers, elegant Bäderarchitektur (resort architecture) villas, and a long pier reaching into the sea, Binz offers a quintessential German coastal experience.",
        "The town sits at the edge of the Granitz forest, home to the stunning Jagdschloss Granitz hunting lodge perched atop a wooded hill. The surrounding landscape is part of the Jasmund National Park, famous for its dramatic chalk cliffs — the Königsstuhl being the most iconic. Cycling and hiking trails wind through ancient beech forests that are a UNESCO World Heritage Site.",
        "Binz transforms with the seasons: bustling beach life in summer, golden forest walks in autumn, and peaceful solitude in winter. The town's promenade is lined with restaurants serving fresh Baltic seafood, and the historic narrow-gauge railway, the Rasender Roland, connects Binz to other charming villages on the island."
      ],
      highlights: [
        { title: "Population", description: "Approximately 5,000 residents" },
        { title: "Best Time to Visit", description: "June to September for beach weather and outdoor activities" },
        { title: "Language", description: "German" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Binz Pier, Jagdschloss Granitz, Königsstuhl chalk cliffs" },
        { title: "Known For", description: "White sandy beaches, resort architecture, and beech forests" }
      ],
      gallery: []
    },
  },
  {
    id: 5,
    title: "Amsterdam",
    location: "Amsterdam, NL",
    image: "/watermarked/Amsterdam.jpeg",
    latitude: 52.3676,
    longitude: 4.9041,
    description: "Canals, world-class museums, and cycling culture in the Dutch capital.",
    country: "Netherlands",
    region: "Europe",
    tags: ["city", "culture", "art"],
    visitDate: "2022",
    content: {
      about: [
        "Amsterdam, the capital of the Netherlands, is a city built on water, with its iconic canal ring forming a crescent of tree-lined waterways, houseboats, and narrow bridges. The 17th-century canal district is a UNESCO World Heritage Site and gives the city its unmistakable character — a place where history floats alongside modern life.",
        "The city is a cultural powerhouse, home to the Rijksmuseum, the Van Gogh Museum, and the Anne Frank House. But beyond the famous institutions, Amsterdam thrives on its neighborhood culture — the Jordaan's cozy cafés, De Pijp's Albert Cuyp market, and the creative energy of Amsterdam-Noord across the IJ river.",
        "Amsterdam is famously bike-friendly, with more bicycles than people and dedicated cycling lanes covering the entire city. Its compact size makes it perfect for exploring on two wheels, ducking into brown cafés for a coffee, or simply watching the world go by from a canal-side bench. The city's open-minded spirit and inclusive atmosphere make every visitor feel welcome."
      ],
      highlights: [
        { title: "Population", description: "Approximately 900,000 residents" },
        { title: "Best Time to Visit", description: "April to May for tulip season, or June to August for summer festivals" },
        { title: "Language", description: "Dutch (English very widely spoken)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Rijksmuseum, Anne Frank House, Vondelpark" },
        { title: "Known For", description: "Canals, cycling culture, world-class museums, and tulips" }
      ],
      gallery: []
    },
  },
  {
    id: 6,
    title: "Dresden",
    location: "Dresden, DE",
    image: "/watermarked/Dresden.jpeg",
    latitude: 51.0504,
    longitude: 13.7373,
    description: "Baroque splendor rebuilt along the Elbe, gateway to Saxon Switzerland.",
    country: "Germany",
    region: "Europe",
    tags: ["city", "history", "architecture", "nature"],
    visitDate: "2025",
    content: {
      about: [
        "Dresden, the capital of Saxony, is one of Germany's most remarkable stories of rebirth. Once called the \"Florence on the Elbe\" for its stunning Baroque and Rococo architecture, the city was devastated during World War II and painstakingly rebuilt over decades. Today, its skyline of domes and spires along the Elbe River is as breathtaking as ever.",
        "The Zwinger Palace, the Semperoper opera house, and the rebuilt Frauenkirche are crown jewels of European architecture. The Grünes Gewölbe (Green Vault) houses one of the richest treasure collections in the world. Across the river, the Neustadt district offers a completely different vibe — street art, independent boutiques, and a lively bar scene.",
        "Dresden sits in the heart of Saxony, surrounded by stunning natural landscapes. The nearby Saxon Switzerland National Park, with its dramatic sandstone formations and deep gorges, is just a short trip away and offers some of the best hiking and rock climbing in Germany."
      ],
      highlights: [
        { title: "Population", description: "Approximately 560,000 residents" },
        { title: "Best Time to Visit", description: "May to September for warm weather and outdoor events" },
        { title: "Language", description: "German" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Frauenkirche, Zwinger Palace, Grünes Gewölbe" },
        { title: "Known For", description: "Baroque architecture, art collections, and the Elbe valley" }
      ],
      gallery: []
    },
  },
  {
    id: 7,
    title: "Leipzig",
    location: "Leipzig, DE",
    image: "/watermarked/leipzig.jpeg",
    latitude: 51.3397,
    longitude: 12.3731,
    description: "Music heritage and creative energy in Saxony's dynamic cultural hub.",
    country: "Germany",
    region: "Europe",
    tags: ["city", "music", "art"],
    visitDate: "2024",
    content: {
      about: [
        "Leipzig is Saxony's largest city and one of Germany's most dynamic urban centers. With a rich history spanning over a thousand years, it was a cradle of the 1989 Peaceful Revolution that helped bring down the Berlin Wall. The city's motto, \"Leipzig kommt\" (Leipzig is coming), perfectly captures its forward-looking energy.",
        "Music runs deep in Leipzig's DNA. Johann Sebastian Bach spent 27 years here as cantor of St. Thomas Church, and the city was home to Felix Mendelssohn, Robert Schumann, and Richard Wagner. The Gewandhaus Orchestra is one of the world's oldest and finest, and the annual Bach Festival draws classical music lovers from across the globe.",
        "Today, Leipzig is known as the \"new Berlin\" — an affordable, creative hub attracting artists, entrepreneurs, and students. The Spinnerei, a former cotton mill turned arts complex, is one of Europe's largest gallery districts. Connewitz and Plagwitz offer vibrant nightlife, while Karl-Liebknecht-Strasse (\"KarLi\") is the city's social heart."
      ],
      highlights: [
        { title: "Population", description: "Approximately 620,000 residents" },
        { title: "Best Time to Visit", description: "May to September, or December for the famous Christmas market" },
        { title: "Language", description: "German" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "St. Thomas Church, Monument to the Battle of the Nations, Spinnerei" },
        { title: "Known For", description: "Music heritage, creative arts scene, and the Peaceful Revolution" }
      ],
      gallery: []
    },
  },
  {
    id: 8,
    title: "Venice",
    location: "Venice, IT",
    image: "/watermarked/Venice.jpeg",
    latitude: 45.4408,
    longitude: 12.3155,
    description: "A floating labyrinth of canals, bridges, and Renaissance art.",
    country: "Italy",
    region: "Europe",
    tags: ["city", "art", "architecture"],
    visitDate: "2024",
    content: {
      about: [
        "Venice is a city like no other — built entirely on water across 118 small islands connected by over 400 bridges. Its labyrinth of narrow canals, hidden courtyards, and ornate palaces creates an atmosphere that feels suspended between dream and reality. The Grand Canal, lined with centuries of architectural splendor, is the city's magnificent main artery.",
        "St. Mark's Square, with its Byzantine basilica and soaring campanile, is the beating heart of Venice. But the city reveals its true magic in the quieter corners — the artisan workshops of Dorsoduro, the colorful houses of Burano, and the peaceful gardens of Giudecca. Getting lost in Venice isn't a problem; it's the whole point.",
        "Venice has been a center of art, trade, and culture for over a millennium. The Biennale, the world's most prestigious art exhibition, calls Venice home, as does the Venice Film Festival on the Lido. While the city faces challenges from rising waters and mass tourism, its beauty and cultural significance remain undiminished."
      ],
      highlights: [
        { title: "Population", description: "Approximately 260,000 residents (historic center: ~50,000)" },
        { title: "Best Time to Visit", description: "April to June or September to October to avoid peak crowds" },
        { title: "Language", description: "Italian (English spoken in tourist areas)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "St. Mark's Basilica, Rialto Bridge, Doge's Palace" },
        { title: "Known For", description: "Canals, gondolas, Carnival, and Renaissance art" }
      ],
      gallery: []
    },
  },
  {
    id: 9,
    title: "Rome",
    location: "Rome, IT",
    image: "/watermarked/Rome.jpeg",
    latitude: 41.9028,
    longitude: 12.4964,
    description: "Ancient ruins, Renaissance art, and la dolce vita in the Eternal City.",
    country: "Italy",
    region: "Europe",
    tags: ["city", "history", "food", "art"],
    visitDate: "2024",
    content: {
      about: [
        "Rome, the Eternal City, is a living museum spanning nearly 3,000 years of history. Walking its streets means passing from ancient Roman ruins to Renaissance masterpieces to vibrant modern life, often within the same block. The Colosseum, the Pantheon, and the Roman Forum are monuments not just to a city but to the foundations of Western civilization.",
        "Vatican City, an independent city-state within Rome, houses St. Peter's Basilica and the Sistine Chapel — Michelangelo's ceiling alone is worth the journey. But Rome's charm extends far beyond its famous landmarks. Trastevere's winding streets come alive at night with trattorias and street musicians, while the Aventine Hill offers peaceful gardens with a secret keyhole view of St. Peter's dome.",
        "Roman cuisine is an experience unto itself — cacio e pepe, carbonara, supplì, and gelato are elevated to art forms here. The city's piazzas serve as open-air living rooms where locals and visitors gather around fountains, sip espresso, and watch the eternal theater of Roman life unfold."
      ],
      highlights: [
        { title: "Population", description: "Approximately 2.9 million residents" },
        { title: "Best Time to Visit", description: "April to June and September to October for pleasant weather" },
        { title: "Language", description: "Italian (English spoken in tourist areas)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Colosseum, Vatican Museums, Trevi Fountain, Pantheon" },
        { title: "Known For", description: "Ancient ruins, Renaissance art, pasta, and la dolce vita" }
      ],
      gallery: []
    },
  },
  {
    id: 10,
    title: "Naples",
    location: "Naples, IT",
    image: "/watermarked/Naples.jpeg",
    latitude: 40.8518,
    longitude: 14.2681,
    description: "Birthplace of pizza, gateway to Pompeii and the Amalfi Coast.",
    country: "Italy",
    region: "Europe",
    tags: ["city", "food", "history"],
    visitDate: "2024",
    content: {
      about: [
        "Naples is southern Italy at its most intense, authentic, and unforgettable. Sprawling along the Bay of Naples with Mount Vesuvius looming in the background, the city is a sensory overload of narrow alleys, buzzing Vespas, hanging laundry, and the unmistakable aroma of wood-fired pizza — this is, after all, where pizza was invented.",
        "The historic center of Naples is a UNESCO World Heritage Site, and for good reason. The Spaccanapoli street cuts straight through the ancient Greek-Roman grid, passing churches with hidden Caravaggio paintings, underground catacombs, and bustling markets. The Museo Archeologico Nazionale holds the finest collection of Roman artifacts in the world, much of it salvaged from nearby Pompeii and Herculaneum.",
        "Naples is the gateway to some of Italy's most iconic destinations — the ruins of Pompeii, the Amalfi Coast, and the island of Capri are all within easy reach. But the city itself is the real treasure: raw, chaotic, deeply human, and bursting with a creative energy that has inspired artists and writers for centuries."
      ],
      highlights: [
        { title: "Population", description: "Approximately 950,000 residents" },
        { title: "Best Time to Visit", description: "April to June and September to October for mild weather" },
        { title: "Language", description: "Italian (Neapolitan dialect common locally)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Spaccanapoli, Museo Archeologico, Pompeii day trip" },
        { title: "Known For", description: "Pizza, vibrant street life, ancient history, and Vesuvius" }
      ],
      gallery: []
    },
  },
  {
    id: 11,
    title: "Dublin",
    location: "Dublin, IE",
    image: "/watermarked/Dublin.JPEG",
    latitude: 53.3498,
    longitude: -6.2603,
    description: "Literary heritage, lively pubs, and warm hospitality in Ireland's capital.",
    country: "Ireland",
    region: "Europe",
    tags: ["city", "culture", "food"],
    visitDate: "2012",
    content: {
      about: [
        "Dublin, Ireland's capital, is a city with an outsized personality. Compact enough to walk across in an hour yet rich enough to keep you exploring for weeks, it blends a thousand years of Viking, medieval, and Georgian history with a thoroughly modern creative scene. The River Liffey divides the city into its distinctive north and south sides, each with their own character.",
        "Literature is Dublin's lifeblood — this is the city of James Joyce, Oscar Wilde, Samuel Beckett, and countless other literary giants. Trinity College's Long Room library is one of the most beautiful in the world, housing the ancient Book of Kells. The city's pubs aren't just places to drink; they're stages for storytelling, traditional music sessions, and conversations that can last until the early hours.",
        "Beyond the famous Temple Bar district, Dublin's neighborhoods each offer something unique. The Georgian elegance of Merrion Square, the hipster cafés of Stoneybatter, the seaside village feel of Howth — all contribute to a city that feels both intimate and full of surprises. The warmth of Dublin's people is legendary and the one thing every visitor remembers most."
      ],
      highlights: [
        { title: "Population", description: "Approximately 1.4 million in the metro area" },
        { title: "Best Time to Visit", description: "May to September for the longest days and mildest weather" },
        { title: "Language", description: "English and Irish (Gaeilge)" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Trinity College, Guinness Storehouse, Kilmainham Gaol" },
        { title: "Known For", description: "Literary heritage, pub culture, live music, and friendly locals" }
      ],
      gallery: []
    },
  },
  {
    id: 12,
    title: "Patna",
    location: "Patna, IN",
    image: "/watermarked/Patna.JPEG",
    latitude: 25.5941,
    longitude: 85.1376,
    description: "One of the world's oldest cities, gateway to Buddhist pilgrimage sites.",
    country: "India",
    region: "Asia",
    tags: ["city", "history", "spiritual"],
    visitDate: "2019",
    content: {
      about: [
        "Patna, the capital of Bihar, is one of the oldest continuously inhabited cities in the world. Known in ancient times as Pataliputra, it served as the capital of the great Maurya and Gupta empires — a period often called India's Golden Age. The city sits on the southern bank of the Ganges and has been a center of power, learning, and spirituality for over two millennia.",
        "Modern Patna is a bustling, rapidly growing city that wears its history proudly. The Patna Museum houses remarkable artifacts including Buddhist sculptures and a fossil tree estimated to be 200 million years old. Golghar, a massive granary built in 1786, offers panoramic views of the city. The nearby ruins of Nalanda, one of the world's first universities, are a testament to Bihar's extraordinary intellectual heritage.",
        "The city is a gateway to some of India's most important pilgrimage sites — Bodh Gaya, Rajgir, and Vaishali are all nearby. Patna's food scene is a highlight in itself, with litti chokha, sattu paratha, and the famous Maurya sweets drawing food lovers from across the country."
      ],
      highlights: [
        { title: "Population", description: "Approximately 2.5 million residents" },
        { title: "Best Time to Visit", description: "October to March for cooler, pleasant weather" },
        { title: "Language", description: "Hindi and Magahi (English understood in urban areas)" },
        { title: "Currency", description: "Indian Rupee (₹)" },
        { title: "Must See", description: "Golghar, Patna Museum, Mahavir Mandir, Gandhi Maidan" },
        { title: "Known For", description: "Ancient history, Ganges riverfront, and gateway to Buddhist sites" }
      ],
      gallery: []
    },
  },
  {
    id: 13,
    title: "BodhGaya",
    location: "BodhGaya, IN",
    image: "/watermarked/Bodhgaya.jpeg",
    latitude: 24.6950,
    longitude: 84.9914,
    description: "Sacred birthplace of Buddhism beneath the ancient Bodhi Tree.",
    country: "India",
    region: "Asia",
    tags: ["spiritual", "history"],
    visitDate: "2024",
    content: {
      about: [
        "Bodh Gaya is one of the most sacred places on Earth — it is here, under the Bodhi Tree, that Siddhartha Gautama attained enlightenment and became the Buddha around 2,500 years ago. The Mahabodhi Temple, a UNESCO World Heritage Site, marks this exact spot and draws millions of pilgrims and visitors from every corner of the world.",
        "The town is a remarkable mosaic of Buddhist cultures. Monasteries and temples built by communities from Japan, Thailand, Tibet, Bhutan, Myanmar, Sri Lanka, and many other countries surround the central temple complex, each reflecting their own architectural traditions. Walking through Bodh Gaya feels like a journey through the entire Buddhist world in a single afternoon.",
        "Despite its global significance, Bodh Gaya retains a tranquil, small-town atmosphere. Monks in saffron and maroon robes meditate under ancient trees, the sound of chanting drifts from temple courtyards, and the pace of life moves with a gentleness befitting a place of spiritual awakening. The great 80-foot Buddha statue and the evening meditation sessions at the Mahabodhi Temple are profoundly moving experiences."
      ],
      highlights: [
        { title: "Population", description: "Approximately 45,000 residents" },
        { title: "Best Time to Visit", description: "October to March for comfortable temperatures" },
        { title: "Language", description: "Hindi and Magahi (English spoken at tourist sites)" },
        { title: "Currency", description: "Indian Rupee (₹)" },
        { title: "Must See", description: "Mahabodhi Temple, Bodhi Tree, Great Buddha Statue" },
        { title: "Known For", description: "Birthplace of Buddhism, meditation, and international monasteries" }
      ],
      gallery: []
    },
  },
  {
    id: 14,
    title: "Hyderabad",
    location: "Hyderabad, IN",
    image: "/watermarked/Hyd.JPEG",
    latitude: 17.3850,
    longitude: 78.4867,
    description: "City of Pearls blending Nawabi heritage with India's tech frontier.",
    country: "India",
    region: "Asia",
    tags: ["city", "food", "history"],
    visitDate: "2018",
    content: {
      about: [
        "Hyderabad, the capital of Telangana, is a city of magnificent contrasts — where 400-year-old monuments stand alongside gleaming tech campuses, and ancient bazaars coexist with modern malls. Founded in 1591 by the Qutb Shahi dynasty, the city grew into one of the richest in the world, earning the nickname \"City of Pearls\" for its legendary pearl and diamond trade.",
        "The iconic Charminar, a four-towered mosque and monument, presides over the Old City, where the bustling Laad Bazaar sells lac bangles, perfumes, and pearls just as it has for centuries. Nearby, the Golconda Fort is an acoustic marvel and a testament to medieval engineering. Across the Hussain Sagar lake, the modern HITEC City district represents Hyderabad's role as one of India's leading technology hubs.",
        "Hyderabad's cuisine is legendary. The city's biryani — slow-cooked with fragrant spices, saffron, and tender meat — is considered by many to be the finest in all of India. From the street-side Irani chai and Osmania biscuits to the elaborate Nawabi feasts, food is central to Hyderabad's identity and a reason to visit in itself."
      ],
      highlights: [
        { title: "Population", description: "Approximately 10 million in the metro area" },
        { title: "Best Time to Visit", description: "October to February for cooler, pleasant weather" },
        { title: "Language", description: "Telugu, Urdu, and Hindi (English widely spoken)" },
        { title: "Currency", description: "Indian Rupee (₹)" },
        { title: "Must See", description: "Charminar, Golconda Fort, Hussain Sagar, Ramoji Film City" },
        { title: "Known For", description: "Biryani, pearls, Nawabi heritage, and IT industry" }
      ],
      gallery: []
    },
  },
  {
    id: 15,
    title: "Agra",
    location: "Agra, IN",
    image: "/watermarked/Agra.jpeg",
    latitude: 27.1767,
    longitude: 78.0081,
    description: "Home of the Taj Mahal and the grandeur of the Mughal Empire.",
    country: "India",
    region: "Asia",
    tags: ["history", "architecture"],
    visitDate: "2022",
    content: {
      about: [
        "Agra is home to the Taj Mahal, one of the Seven Wonders of the World and arguably the most beautiful building ever created. Built by Mughal Emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal, the white marble monument is a masterpiece of symmetry, craftsmanship, and devotion. Seeing it at sunrise, glowing pink and gold against the morning sky, is a once-in-a-lifetime experience.",
        "But Agra is far more than the Taj Mahal alone. The massive Agra Fort, a UNESCO World Heritage Site, is a walled city in itself — a sprawling complex of palaces, mosques, and audience halls that served as the seat of Mughal power. Just 40 kilometers away, the abandoned ghost city of Fatehpur Sikri offers a hauntingly beautiful glimpse into the grandeur of Emperor Akbar's reign.",
        "The city sits on the banks of the Yamuna River and was once the capital of the Mughal Empire, rivaling any city in the world for wealth and culture. Today, Agra's narrow lanes around the Taj are filled with marble inlay workshops carrying on centuries-old craft traditions, street vendors selling petha (a local sweet), and the warmth of a city proud to be guardian of one of humanity's greatest treasures."
      ],
      highlights: [
        { title: "Population", description: "Approximately 1.8 million residents" },
        { title: "Best Time to Visit", description: "October to March for cooler weather and clear skies" },
        { title: "Language", description: "Hindi (English spoken at tourist sites)" },
        { title: "Currency", description: "Indian Rupee (₹)" },
        { title: "Must See", description: "Taj Mahal, Agra Fort, Fatehpur Sikri, Mehtab Bagh" },
        { title: "Known For", description: "Taj Mahal, Mughal heritage, marble craftsmanship, and petha sweets" }
      ],
      gallery: []
    },
  },
  {
    id: 16,
    title: "Scharbeutz",
    location: "Scharbeutz, DE",
    image: "/watermarked/Scharbeutz.jpeg",
    latitude: 54.0236,
    longitude: 10.7478,
    description: "Sun-kissed Baltic beach town with a lively promenade and sweeping sea views.",
    country: "Germany",
    region: "Europe",
    tags: ["beach", "nature"],
    visitDate: "2025",
    content: {
      about: [
        "Scharbeutz is one of the most beloved seaside resorts along Germany's Baltic coast in Schleswig-Holstein. With its wide, fine-sand beach stretching for kilometers, a vibrant seafront promenade, and the gentle waves of the Lübeck Bay, it has been drawing visitors seeking relaxation and coastal charm for over a century.",
        "The town strikes a perfect balance between lively resort atmosphere and natural tranquility. The modern promenade is lined with restaurants, cafés, and beach bars serving fresh fish rolls and local specialties, while Strandkörbe — the iconic hooded wicker beach chairs — dot the shoreline in neat rows. Just inland, the rolling hills of Holstein Switzerland offer cycling and walking trails through lush countryside.",
        "Scharbeutz is part of the broader Lübecker Bucht resort area, neighboring Timmendorfer Strand and within easy reach of the UNESCO-listed Hanseatic city of Lübeck. Whether you're watching a Baltic sunset from the pier, exploring the SEA LIFE aquarium, or simply letting the sea breeze wash away the everyday, Scharbeutz delivers the quintessential German coastal holiday experience."
      ],
      highlights: [
        { title: "Population", description: "Approximately 11,000 residents" },
        { title: "Best Time to Visit", description: "June to September for warm beach weather and long days" },
        { title: "Language", description: "German" },
        { title: "Currency", description: "Euro (€)" },
        { title: "Must See", description: "Scharbeutz Beach & Pier, Ostsee Therme, nearby Lübeck Old Town" },
        { title: "Known For", description: "Sandy Baltic beaches, Strandkörbe, seafood, and coastal promenades" }
      ],
      gallery: []
    },
  }
];

/**
 * Represents a collection or list of travel destinations.
 * @module TravelDestinations
 * @exports TravelDestinations
 */
export default TravelDestinations;
