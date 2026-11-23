/**
 * UR WORLD AQUARIUM & PET SHOP - CENTRAL CATALOG DATA SOURCE
 * ==========================================================
 * Single Source of Truth for all Live Pets and Pet Shop Products.
 * 
 * APPROVED LIVE PETS (75):
 * - Dogs & Puppies (12 Breeds)
 * - Cats & Kittens (4 Breeds)
 * - Pet & Songbirds (15 Species)
 * - Hamsters & Small Pets (2 Species: Guinea Pig, Hamster)
 * - Aquarium Fish (41 Freshwater & Exotic Species)
 * - Rabbits (1: Companion Rabbit with Baby, Adult, Young Pair variants)
 * 
 * APPROVED PET SHOP PRODUCTS (133):
 * - Fish Food (31 Products with exact MRP & SP)
 * - Aquarium Accessories: Stones & Pebbles (11 Varieties)
 * - Indian Fish Tanks (9 Tanks with Tank Top)
 * - Imported Fish Tanks (18 Tanks: 6x8x8 Set, PF Series, RS Series)
 * - Fish Bowls (5 Sizes: 4" to 12")
 * - Wall-Mounted Tanks (5 Sizes: 4" to 12")
 * - Aquarium Accessories: Fish Nets (7 Sizes: 3" to 12")
 * - Aquarium Accessories: Air Pumps & Filters (22 Items)
 * - Aquarium Accessories: Submersible Lamps (5 Items: Bluepet BL 20F..60F)
 * - Aquarium Accessories: Bio Sponge (4 Items: XY2535..XY380)
 * - Aquarium Accessories: UV Light (1 Item: BLF01)
 * - Aquarium Accessories: Turtle Stand (1 Item: TL40 - Enquire for Price)
 * - Bird Accessories: Bird Cages (6 Sizes: 1ft x 1ft to 36x36x18)
 * - Bird Accessories: Wooden Cages (3 Sizes: 18x15x12 to 30x18x24)
 * - Bird Accessories: Breeding Boxes (4 Sizes: 6x6x6 to 12x8x8)
 * - Bird Accessories: Lovebird Breeding Pots (1 Item: 6 Inch)
 */

(function (window) {
  'use strict';

  // 1. TOP-LEVEL CATEGORIES METADATA
  const CATEGORIES_METADATA = {
    "dogs": {
      "id": "dogs",
      "name": "Dogs & Puppies",
      "index": "01",
      "cardTitle": "Dogs & Puppies",
      "badge": "LOYAL COMPANIONS",
      "image": "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795454280/b2eee979-1dc6-437e-abe9-a01fe3170e09.png",
      "eyebrow": "CANINE COMPANIONS & CARE",
      "heading": "Canine Breeds & Lineup",
      "subheading": "Explore verified canine companions, breed profiles, temperament guides, and ethical care standards.",
      "cardDesc": "Devoted companions filled with affection, loyalty, and boundless joy. We offer trusted guidance on puppy care, nutrition, and training accessories.",
      "specs": [
        {
          "label": "Care",
          "val": "Daily Exercise"
        },
        {
          "label": "Diet",
          "val": "High-Protein"
        },
        {
          "label": "Nature",
          "val": "Affectionate"
        }
      ],
      "collectionUrl": "collections/dogs.html"
    },
    "cats": {
      "id": "cats",
      "name": "Cats & Kittens",
      "index": "02",
      "cardTitle": "Cats & Kittens",
      "badge": "GRACEFUL & CALM",
      "image": "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795454113/f7410798-5fd5-4ab2-88e3-7a483322d036.png",
      "eyebrow": "FELINE GRACE & AFFECTION",
      "heading": "Feline Breeds & Lineup",
      "subheading": "Explore tranquil, playful, and affectionate cat breeds with verified health inspections.",
      "cardDesc": "Independent, curious, and deeply soothing. Perfect indoor companions that enjoy cozy corners, playful moments, and quality feline nutrition.",
      "specs": [
        {
          "label": "Care",
          "val": "Indoor / Play"
        },
        {
          "label": "Diet",
          "val": "Taurine-Rich"
        },
        {
          "label": "Nature",
          "val": "Gentle & Curious"
        }
      ],
      "collectionUrl": "collections/cats.html"
    },
    "birds": {
      "id": "birds",
      "name": "Pet & Songbirds",
      "index": "03",
      "cardTitle": "Pet & Songbirds",
      "badge": "MELODIC WONDERS",
      "image": "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795454223/33fd80d0-849f-479b-83a5-b67e03679fac.png",
      "eyebrow": "FEATHERED MELODIES & COLOR",
      "heading": "Bird Species & Collection",
      "subheading": "Explore cheerful songbirds, social parrots, and vibrant finches for joyful homes.",
      "cardDesc": "Charming melodies, vibrant plumage, and spirited intelligence. From cheerful budgies and finches to gentle cockatiels and pet birds.",
      "specs": [
        {
          "label": "Care",
          "val": "Spacious Cage"
        },
        {
          "label": "Diet",
          "val": "Seeds & Fruits"
        },
        {
          "label": "Nature",
          "val": "Social & Vocal"
        }
      ],
      "collectionUrl": "collections/birds.html"
    },
    "small-pets": {
      "id": "small-pets",
      "name": "Hamsters & Small Pets",
      "index": "04",
      "cardTitle": "Hamsters & Small Pets",
      "badge": "SWEET & GENTLE",
      "image": "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795455443/84d97113-68fb-41f9-9280-bfbf2a1a835c.png",
      "eyebrow": "POCKET PETS & SMALL MAMMALS",
      "heading": "Small Pets & Lineup",
      "subheading": "Discover curious hamsters, playful guinea pigs, and small pocket pets with starter habitat advice.",
      "cardDesc": "Syrian and dwarf hamsters, guinea pigs, and small furry pets. Wonderful first-time pets that enjoy soft bedding, exercise wheels, and fresh treats.",
      "specs": [
        {
          "label": "Care",
          "val": "Wheel & Bedding"
        },
        {
          "label": "Diet",
          "val": "Balanced Muesli"
        },
        {
          "label": "Nature",
          "val": "Quiet & Sweet"
        }
      ],
      "collectionUrl": "collections/small-pets.html"
    },
    "aquarium-fish": {
      "id": "aquarium-fish",
      "name": "Aquarium Fish",
      "index": "05",
      "cardTitle": "Aquarium Fish",
      "badge": "LIVING UNDERWATER ART",
      "image": "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795456336/0dfee566-b4f3-4890-a71c-09b60ae22136.png",
      "eyebrow": "FRESHWATER ECOSYSTEMS",
      "heading": "Aquarium Fish Collection",
      "subheading": "Healthy, quarantined tropical fish, vibrant schooling species, and showpiece aquatic life.",
      "cardDesc": "Showstopper Bettas, peaceful neon tetras, fancy guppies, and healthy tropical freshwater fish that turn your aquarium into a peaceful sanctuary.",
      "specs": [
        {
          "label": "Care",
          "val": "Filtered Tank"
        },
        {
          "label": "Diet",
          "val": "Spirulina Flakes"
        },
        {
          "label": "Nature",
          "val": "Peaceful & Serene"
        }
      ],
      "collectionUrl": "collections/aquarium-fish.html"
    },
    "rabbits": {
      "id": "rabbits",
      "name": "Rabbits",
      "index": "06",
      "cardTitle": "Rabbits",
      "badge": "GENTLE COMPANIONS",
      "image": "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795456518/5304e333-3fb1-4319-9a4b-b1835b554bb6.png",
      "eyebrow": "GENTLE COMPANIONS",
      "heading": "Domestic Rabbits & Lineup",
      "subheading": "Soft-furred, docile companion rabbits ideal for family petting and indoor bunny pens.",
      "cardDesc": "Soft-furred, docile domestic rabbits ideal for family petting and indoor bunny pens. Wholesome nutrition, cage accessories, and care guidance.",
      "specs": [
        {
          "label": "Care",
          "val": "Indoor Pen / Play"
        },
        {
          "label": "Diet",
          "val": "Timothy Hay & Greens"
        },
        {
          "label": "Nature",
          "val": "Docile & Affectionate"
        }
      ],
      "collectionUrl": "collections/rabbits.html"
    }
  };

  // 2. LIVE COMPANIONS CATALOGUE (Approved 75 Records)
  const PET_BREEDS_CATALOG = {
    "german-shepherd": {
      "id": "german-shepherd",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "German Shepherd",
      "breed": "German Shepherd Dog",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Loyal Guardian",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Registered lineage, dewormed, core puppy vaccination administered",
      "tagline": "Noble working pedigree celebrated for unwavering loyalty, supreme intelligence, and guardian instincts.",
      "description": "The German Shepherd is renowned globally as the ultimate multi-purpose working and family guardian breed. Highly trainable, brave, and deeply devoted to its family.",
      "characteristics": {
        "temperament": "Loyal, Confident, Courageous",
        "lifespan": "10–14 Years",
        "exercise": "60+ mins daily active exercise",
        "diet": "Large-breed protein nutrition"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795456716/40fb7a0f-250a-42fe-b23a-ba1b08a365c6.png"
      ]
    },
    "labrador-retriever": {
      "id": "labrador-retriever",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Labrador Retriever",
      "breed": "Labrador Retriever",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "World's #1 Family Dog",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Vet health cleared, dewormed, vaccinated as per age protocol",
      "tagline": "Warmhearted, water-loving, and endlessly patient retriever that adores children and active homes.",
      "description": "The Labrador Retriever holds the title of the world's most popular companion dog thanks to its friendly disposition, high intelligence, and gentle mouth.",
      "characteristics": {
        "temperament": "Outgoing, Even-Tempered, Gentle",
        "lifespan": "10–12 Years",
        "exercise": "45–60 mins daily play & walks",
        "diet": "Nutritious balanced canine kibble"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795458899/3f36b70d-19ce-49fa-a48d-6de219743447.png"
      ]
    },
    "great-dane": {
      "id": "great-dane",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Great Dane",
      "breed": "Deutsche Dogge (Great Dane)",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Gentle Giant",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Giant breed health screening, joint support guidance, vaccinated",
      "tagline": "Majestic regal stature paired with a famously calm, affectionate, and couch-loving temperament.",
      "description": "The 'Apollo of Dogs,' the Great Dane is an imposing yet thoroughly gentle giant that thrives on companionship, soft beds, and leaning affectionately against its humans.",
      "characteristics": {
        "temperament": "Friendly, Patient, Dependable",
        "lifespan": "8–10 Years",
        "exercise": "Moderate daily walks, avoid over-exercising young joints",
        "diet": "Specialized giant-breed nutrition formula"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459367/e22ad7e7-c7ba-4dd1-9244-1086157b2d6c.png"
      ]
    },
    "pug": {
      "id": "pug",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Pug",
      "breed": "Pug (Miniature Molosser)",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Charming Comedian",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Respiratory check passed, dewormed, certified companion litter",
      "tagline": "Comical wrinkled brow, curled tail, and loving house companion with boundless humor.",
      "description": "Known by the motto 'Multum in Parvo' (a lot of dog in a little space), Pugs are playful, sturdy toy companions with endless personality and devotion.",
      "characteristics": {
        "temperament": "Charming, Mischievous, Loving",
        "lifespan": "12–15 Years",
        "exercise": "Short daily walks in temperate weather",
        "diet": "Portion-controlled toy breed kibble"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459310/215ca530-a371-4160-95b0-43ca536e92c4.png"
      ]
    },
    "pomeranian": {
      "id": "pomeranian",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Pomeranian",
      "breed": "Pomeranian Spitz",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Spirited Toy Breed",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Microchipped, vaccinated, plush coat condition, vet checked",
      "tagline": "Fluffy double-coated pocket companion with fox-like alertness and lively, affectionate charm.",
      "description": "Tiny in body but huge in personality, the Pomeranian is an exuberant toy spitz with an iconic lion-like ruff and cheerful intelligence.",
      "characteristics": {
        "temperament": "Lively, Bold, Inquisitive",
        "lifespan": "12–16 Years",
        "exercise": "20–30 mins daily play & indoor activities",
        "diet": "Small-bite nutrient dense puppy food"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459220/download.webp"
      ]
    },
    "siberian-husky": {
      "id": "siberian-husky",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Siberian Husky",
      "breed": "Siberian Husky",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Arctic Wonder",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Clear eye certification, dewormed, vaccinated, energetic disposition",
      "tagline": "Striking wolf-like mask, piercing blue or heterochromatic eyes, and high-energy athletic spirit.",
      "description": "Famous sled dogs of the Siberian Arctic, Huskies possess remarkable endurance, a gentle pack-oriented nature, and expressive vocal personalities.",
      "characteristics": {
        "temperament": "Loyal, Mischievous, Outgoing",
        "lifespan": "12–14 Years",
        "exercise": "60–90 mins vigorous exercise daily",
        "diet": "High-energy clean protein nutrition"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459505/505d0e75-b431-4bc7-b1b7-17f807e3e07a.png"
      ]
    },
    "dalmatian": {
      "id": "dalmatian",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Dalmatian",
      "breed": "Dalmatian",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Distinctive Spots",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Hearing tested, vaccinated, sound pedigree, dewormed",
      "tagline": "Sleek athletic carriage decorated with iconic spotted coat; loyal, energetic, and dignified.",
      "description": "An elegant, muscular carriage dog with an unforgettable spotted coat. Dalmatians are devoted family protectors, spirited running partners, and graceful companions.",
      "characteristics": {
        "temperament": "Energetic, Sensitive, Playful",
        "lifespan": "11–13 Years",
        "exercise": "1+ hour active daily running or agility",
        "diet": "Low-purine high quality canine nutrition"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459561/3436cc92-ec19-4fcb-adc6-eb343b53af96.png"
      ]
    },
    "shih-tzu": {
      "id": "shih-tzu",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Shih Tzu",
      "breed": "Shih Tzu (Lion Dog)",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Imperial Lap Dog",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Hypoallergenic coat check, vaccinated, dewormed, certified health records",
      "tagline": "Flowing silky locks and sweet expressive eyes bred exclusively for royal lap companionship.",
      "description": "Bred centuries ago for Chinese emperors, the Shih Tzu is a warmhearted, non-shedding toy dog whose primary mission in life is to love and be loved.",
      "characteristics": {
        "temperament": "Affectionate, Playful, Outgoing",
        "lifespan": "10–16 Years",
        "exercise": "Short relaxed daily neighborhood strolls",
        "diet": "Small-breed kibble with coat-enriching oils"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459641/31bdfd9f-007e-4a56-b5df-bde32091f0ed.png"
      ]
    },
    "beagle": {
      "id": "beagle",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Beagle",
      "breed": "Beagle Hound",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Merry Scent Hound",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Vaccinated, dewormed, healthy floppy ears, sound hound conformation",
      "tagline": "Sturdy scent hound with soulful droopy ears, merry disposition, and tail that never stops wagging.",
      "description": "Compact, hardy, and cheerful, Beagles are fantastic family pets with an endearing pleading look, warm disposition, and keen scenting instinct.",
      "characteristics": {
        "temperament": "Merry, Friendly, Curious",
        "lifespan": "12–15 Years",
        "exercise": "45 mins daily scent walks and games",
        "diet": "Balanced medium-breed dog food"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459728/f4cd6ab1-e59f-46cc-a210-20c1e7a5f1fc.png"
      ]
    },
    "cocker-spaniel": {
      "id": "cocker-spaniel",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Cocker Spaniel",
      "breed": "English / American Cocker Spaniel",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Silky & Gentle",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Ear canals clean, vaccinated, vet health approved, dewormed",
      "tagline": "Lush feathered ears, gentle loving eyes, and joyful, tail-wagging family companionship.",
      "description": "The beloved Cocker Spaniel enchants with its dark melting eyes, silky feathered coat, and delightful desire to please everyone it meets.",
      "characteristics": {
        "temperament": "Gentle, Smart, Happy",
        "lifespan": "10–14 Years",
        "exercise": "45 mins active walks & fetch sessions",
        "diet": "Balanced protein and omega nutrition"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459783/26cc3db2-d3c5-406f-8c93-f13f15e169c0.png"
      ]
    },
    "mudul-dog": {
      "id": "mudul-dog",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Mudul Dog",
      "breed": "Mudhol Hound (Caravan Hound)",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Native Sight Hound",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Robust indigenous immunity, vet checked, vaccinated, dewormed",
      "tagline": "Ancient, deeply loyal Indian sight hound renowned for unmatched speed, lean grace, and devoted guarding.",
      "description": "An extraordinary indigenous sight hound native to the Deccan Plateau of Karnataka. Aerodynamic, fierce in defense of its masters, and exceptionally hardy in Indian climates.",
      "characteristics": {
        "temperament": "Fiercely Loyal, Independent, Alert",
        "lifespan": "12–15 Years",
        "exercise": "Open sprints and vigorous running exercises",
        "diet": "Lean protein, rice, bone broth & calcium"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459871/c6344df5-2d3c-4b18-aab1-44592893140e.png"
      ]
    },
    "raj-plirm": {
      "id": "raj-plirm",
      "category": "dogs",
      "categoryName": "Dogs & Puppies",
      "name": "Raj Plirm",
      "breed": "Rajapalayam Hound (Indian Royal Sight Hound)",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Royal Indian Hound",
      "availability": "Enquire for Availability • Direct WhatsApp Confirmation",
      "healthInfo": "Pure white coat, pink skin pigmentation checked, vaccinated, dewormed",
      "tagline": "Historic milky-white southern Indian sight hound with distinctive pink nose and brave protective fidelity.",
      "description": "The majestic Rajapalayam was bred by Tamil royalty for hunting and estate guarding. Characterized by its milky-white coat, pink nose, and fearless, aristocratic loyalty.",
      "characteristics": {
        "temperament": "Courageous, Dignified, Loyal",
        "lifespan": "10–12 Years",
        "exercise": "Daily brisk walks and secure running space",
        "diet": "Fresh meats, wholesome grains, vet supplements"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795459928/be537643-5732-44cc-b9b6-63248658d443.png"
      ]
    },
    "persian-cat": {
      "id": "persian-cat",
      "category": "cats",
      "categoryName": "Cats & Kittens",
      "name": "Persian Cat",
      "breed": "Persian Longhair",
      "unit": "Per Piece",
      "badge": "Royal Longhair",
      "price": 7500,
      "reservationDeposit": 1500,
      "availability": "Available for Reservation • In-Store Handover",
      "variants": [
        {
          "id": "baby",
          "name": "Baby (Per Piece)",
          "price": 7500,
          "default": true
        },
        {
          "id": "adult",
          "name": "Adult (Per Piece)",
          "price": 8000
        }
      ],
      "healthInfo": "Vaccinated, dewormed, litter trained, groomed coat, vet certified",
      "tagline": "Luxuriously coated, calm, and affectionate companion with sweet pansy-like facial expression.",
      "description": "The Persian is the aristocrat of cat breeds, famous for its lavish flowing coat, pansy-like sweet face, and peaceful lap-warming temperament.",
      "characteristics": {
        "temperament": "Calm, Sweet, Quiet",
        "lifespan": "12–17 Years",
        "diet": "Premium kitten/cat kibble, omega coat supplement",
        "housing": "Indoor sanctuary with soft bedding & scratching posts"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460105/0f4e54da-a35a-492b-98ba-af4508a70241.png",
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460246/dafea3e9-164f-4a58-a609-22ed31f6ea20.png"
      ]
    },
    "domestic-cat": {
      "id": "domestic-cat",
      "category": "cats",
      "categoryName": "Cats & Kittens",
      "name": "Domestic Cat",
      "breed": "Domestic Short-Hair Kitten",
      "unit": "Per Piece",
      "badge": "Playful & Loving",
      "price": 300,
      "reservationDeposit": 100,
      "availability": "Available in Shop • Immediate Adoption",
      "variants": [
        {
          "id": "baby",
          "name": "Baby (Per Piece)",
          "price": 300,
          "default": true
        }
      ],
      "healthInfo": "Vet health inspected, active and playful, dewormed, litter trained",
      "tagline": "Resilient, spirited local companion kitten with high affection and natural pest deterrence.",
      "description": "Hardy, intelligent, and deeply devoted. Domestic short-hairs adapt seamlessly to family homes, bringing boundless playful energy, gentle purrs, and warm companionship.",
      "characteristics": {
        "temperament": "Adaptable, Playful, Loyal",
        "lifespan": "15–20 Years",
        "diet": "Wholesome wet & dry cat food, fresh clean water",
        "housing": "Indoor home environment with interactive cat toys"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460432/79a9ae4f-42e2-40fe-8332-b6d9a4977ddf.png"
      ]
    },
    "siberian-cat": {
      "id": "siberian-cat",
      "category": "cats",
      "categoryName": "Cats & Kittens",
      "name": "Siberian Cat",
      "breed": "Siberian Forest Cat",
      "unit": "Per Piece",
      "badge": "Hypoallergenic Coat",
      "price": 7500,
      "reservationDeposit": 1500,
      "availability": "Available for Reservation • In-Store Handover",
      "variants": [
        {
          "id": "baby",
          "name": "Baby (Per Piece)",
          "price": 7500,
          "default": true
        },
        {
          "id": "adult",
          "name": "Adult (Per Piece)",
          "price": 10000
        }
      ],
      "healthInfo": "Core vaccinations administered, microchip ready, dewormed, robust build",
      "tagline": "Magnificent hypoallergenic triple-coated feline with loving dog-like devotion.",
      "description": "An ancient Russian forest breed possessing powerful muscular grace, an all-weather waterproof coat, and an affectionate, adventurous dog-like personality.",
      "characteristics": {
        "temperament": "Affectionate, Intelligent, Agile",
        "lifespan": "12–15 Years",
        "diet": "High-protein carnivorous diet, salmon oil",
        "housing": "Indoor home with tall climbing towers"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460521/b615b4c9-a688-458f-a729-5e4b3e9ca848.png"
      ]
    },
    "himalayan-cat": {
      "id": "himalayan-cat",
      "category": "cats",
      "categoryName": "Cats & Kittens",
      "name": "Himalayan Cat",
      "breed": "Himalayan Persian Colourpoint",
      "unit": "Per Piece",
      "badge": "Sapphire Eyes",
      "price": 10000,
      "reservationDeposit": 2000,
      "availability": "Available for Reservation • In-Store Handover",
      "variants": [
        {
          "id": "baby",
          "name": "Baby (Per Piece)",
          "price": 10000,
          "default": true
        },
        {
          "id": "adult",
          "name": "Adult (Per Piece)",
          "price": 12000
        }
      ],
      "healthInfo": "Pedigree certified line, vaccinations updated, eyes clean, vet inspected",
      "tagline": "Exquisite Persian-type build with striking Siamese colour-point markings and sapphire eyes.",
      "description": "Combining the sweet, placid temperament of the Persian with the striking mask, points, and hypnotic blue eyes of the Siamese. A truly breathtaking companion cat.",
      "characteristics": {
        "temperament": "Docile, Gentle, People-Oriented",
        "lifespan": "12–15 Years",
        "diet": "Premium feline nutrition, dental treats, fresh water",
        "housing": "Peaceful indoor household with daily coat combing"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460624/b9fc181e-7b2b-4b44-96cf-3bfd9de0cb95.png"
      ]
    },
    "budgerigar": {
      "id": "budgerigar",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Budgerigar (Budgie)",
      "breed": "Budgerigar (Melopsittacus undulatus)",
      "unit": "Pair",
      "badge": "Playful Chirper",
      "price": 750,
      "reservationDeposit": 250,
      "availability": "Available for Reservation • In-Store Handover",
      "age": "Young / Adult",
      "ageOptions": [
        "Young Pair",
        "Adult Pair"
      ],
      "genderOptions": [
        "Pair (Male & Female)"
      ],
      "defaultGender": "Pair (Male & Female)",
      "variants": [
        {
          "id": "young-pair",
          "name": "Young Pair",
          "price": 750,
          "default": true
        },
        {
          "id": "adult-pair",
          "name": "Adult Pair",
          "price": 1200
        }
      ],
      "healthInfo": "Active aviary flock, balanced seed & mineral diet, vet health verified",
      "tagline": "Vibrant, social parakeets known for cheerful chirps, gentle nature, and easy care.",
      "description": "The Budgerigar is among the world's most beloved companion birds, celebrated for its playful intelligence, cheerful vocal chirps, and vivid colour varieties. Perfectly suited for beginner and experienced bird lovers alike.",
      "characteristics": {
        "temperament": "Social, Curious, Cheerful",
        "lifespan": "7–12 Years",
        "diet": "Seeds, Millets, Fresh Greens & Cuttlebone",
        "housing": "Spacious Wire Flight Cage with Perches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460800/922fd9de-5091-4761-a9f5-4236a10e134e.png",
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460892/0bdc702c-b38e-411c-a661-abdea3f54acb.png"
      ]
    },
    "sun-conure": {
      "id": "sun-conure",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Sun Conure",
      "breed": "Sun Parakeet (Aratinga solstitialis)",
      "unit": "Pair",
      "badge": "Brilliant Colours",
      "price": 25000,
      "reservationDeposit": 5000,
      "availability": "Available for Reservation • In-Store Handover",
      "age": "Young / Adult",
      "ageOptions": [
        "Young",
        "Adult"
      ],
      "genderOptions": [
        "Pair"
      ],
      "defaultGender": "Pair",
      "variants": [
        {
          "id": "young",
          "name": "Young (Pair)",
          "price": 25000,
          "default": true
        },
        {
          "id": "adult",
          "name": "Adult (Pair)",
          "price": 30000
        }
      ],
      "healthInfo": "Comprehensive health check, closed-banded, acclimatized to premium nutrition",
      "tagline": "Stunning golden-yellow and fiery orange plumage with deep affectionate companion personality.",
      "description": "The Sun Conure is a showstopper South American parrot renowned for its radiant rainbow colours and loving, cuddly disposition. Highly interactive, curious, and devoted to its human family.",
      "characteristics": {
        "temperament": "Affectionate, Playful, Vocal",
        "lifespan": "25–30 Years",
        "diet": "Pellets, Exotic Seeds, Fruits & Veggies",
        "housing": "Large parrot cage with climbing ladders & toys"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460952/e9c7eca1-4ce8-436f-8f26-4089b7fa5405.png",
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795460976/e0c7788a-7cf7-42e5-8dbc-24ab85062dbd.png"
      ]
    },
    "lovebirds": {
      "id": "lovebirds",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Lovebirds",
      "breed": "Agapornis Lovebird Pair",
      "unit": "Pair",
      "badge": "Bonded Pair",
      "price": 2800,
      "reservationDeposit": 500,
      "availability": "Available for Reservation • In-Store Handover",
      "variants": [
        {
          "id": "green",
          "name": "Green (Pair)",
          "price": 2800,
          "default": true
        },
        {
          "id": "blue",
          "name": "Blue (Pair)",
          "price": 3500
        },
        {
          "id": "yellow",
          "name": "Yellow (Pair)",
          "price": 3500
        }
      ],
      "healthInfo": "Bonded aviary pair, active grooming, complete nutritional support",
      "tagline": "Charming, deeply devoted pocket parrots in vibrant green, blue, and yellow colour mutations.",
      "description": "Lovebirds are famous for their affectionate pair bonding, acrobatic energy, and expressive chirps. These petite parrots thrive in spacious cages with enrichment perches and toys.",
      "characteristics": {
        "temperament": "Affectionate, Inquisitive, Feisty",
        "lifespan": "10–15 Years",
        "diet": "Small parrot seed mix, millets, leafy greens",
        "housing": "Minimum 24x18x24 inch cage with bathing dish"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461096/b2f6995d-cdf9-4429-a186-213de21e344b.png",
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461203/650c1744-1cae-41b1-8c01-93d06dc01dff.png"
      ]
    },
    "finches": {
      "id": "finches",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Finches",
      "breed": "Estrildid Finch Pair",
      "unit": "Pair",
      "badge": "Musical Aviary",
      "price": 750,
      "reservationDeposit": 200,
      "availability": "Available in Shop • Instant Adoption",
      "variants": [
        {
          "id": "adult-pair",
          "name": "Adult (Pair)",
          "price": 750,
          "default": true
        }
      ],
      "healthInfo": "Aviary acclimatized, active fliers, wholesome seed and grit diet",
      "tagline": "Delightful, active aviary birds known for soft melodic beeps and colorful social flitting.",
      "description": "Finches bring peaceful vitality and soothing song to any home. They are quiet, clean, and best enjoyed in peaceful pairs or harmonious aviary flights.",
      "characteristics": {
        "temperament": "Peaceful, Active, Musical",
        "lifespan": "5–8 Years",
        "diet": "Finch seed blend, spray millet, mineral grit",
        "housing": "Horizontal flight cage with multiple natural perches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461310/0ab9db3b-c1ba-4037-bc5b-d89792044ca9.png"
      ]
    },
    "grey-cockatiel": {
      "id": "grey-cockatiel",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Grey Cockatiel",
      "breed": "Normal Grey Cockatiel (Nymphicus hollandicus)",
      "unit": "Pair",
      "badge": "Whistling Genius",
      "price": 4500,
      "reservationDeposit": 1000,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Health checked, calm temperament, whistle trained, core diet",
      "tagline": "Classic natural grey cockatiel with bright orange cheek patches and whistling intelligence.",
      "description": "The Grey Cockatiel is beloved worldwide for its gentle nature, expressive feather crest, and uncanny ability to mimic tunes and whistles. A loyal family companion.",
      "characteristics": {
        "temperament": "Gentle, Musical, Affectionate",
        "lifespan": "15–20 Years",
        "diet": "Cockatiel seed mix, pellets, sprouts, cuttlefish bone",
        "housing": "Tall flight cage with horizontal bars for climbing"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461417/971194cb-0822-4fa4-b074-6a15bad6fd55.png"
      ]
    },
    "pearl-cockatiel": {
      "id": "pearl-cockatiel",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Pearl Cockatiel",
      "breed": "Pearl Mutation Cockatiel",
      "unit": "Pair",
      "badge": "Lace Wing Pattern",
      "price": 6000,
      "reservationDeposit": 1500,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Aviary raised, healthy plumage, vet checked, nutritious feeding regimen",
      "tagline": "Exquisite feathered lacework with gentle disposition and melodic personality.",
      "description": "The Pearl Cockatiel features delicate scalloped patterns across its wings and back, creating an ornamental lace effect. Sweet-natured, sociable, and fond of head scratches.",
      "characteristics": {
        "temperament": "Docile, Curious, Vocal",
        "lifespan": "15–20 Years",
        "diet": "Seeds, fresh vegetables, calcium blocks",
        "housing": "Medium to large bird cage with diverse perches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461468/2521cd00-4b59-440f-b763-aec4b971ebb4.png"
      ]
    },
    "albino-cockatiel": {
      "id": "albino-cockatiel",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Albino Cockatiel",
      "breed": "Whiteface Lutino Cockatiel",
      "unit": "Pair",
      "badge": "Pure Snow White",
      "price": 7500,
      "reservationDeposit": 1500,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Pure genetics, healthy eyes and crest, dewormed, vet verified",
      "tagline": "Pure snow-white plumage with ruby eyes, rare beauty, and gentle nature.",
      "description": "A rare and prized colour mutation completely devoid of grey and yellow pigments. The Albino Cockatiel displays an ethereal pure white elegance paired with typical cockatiel sweetness.",
      "characteristics": {
        "temperament": "Gentle, Calm, Affectionate",
        "lifespan": "15–20 Years",
        "diet": "Nutritional seed blends, vitamins, green veggies",
        "housing": "Indoor wire flight cage with soft rope perches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461676/download.png"
      ]
    },
    "diamond-dove": {
      "id": "diamond-dove",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Diamond Dove",
      "breed": "Geopelia cuneata",
      "unit": "Pair",
      "badge": "Peaceful Coo",
      "price": 3000,
      "reservationDeposit": 600,
      "availability": "Available in Shop • Instant Adoption",
      "healthInfo": "Healthy aviary pairs, calm behavior, clean feathers and bright eyes",
      "tagline": "Petite Australian ground dove adorned with delicate white diamond wing spots.",
      "description": "One of the world's smallest doves, the Diamond Dove has soft blue-grey plumage, brilliant red eye rings, and starry diamond-dusted wings. Celebrated for its tranquil, soothing coo.",
      "characteristics": {
        "temperament": "Placid, Gentle, Quiet",
        "lifespan": "10–14 Years",
        "diet": "Small dove and finch seed mix, fine grit",
        "housing": "Spacious horizontal cage with ground walking space"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461760/ebe20a8e-348f-47b8-a514-9d4d398032e0.png"
      ]
    },
    "pineapple-conure": {
      "id": "pineapple-conure",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Pineapple Conure",
      "breed": "Green-Cheeked Conure Mutation",
      "unit": "Pair",
      "badge": "Warm Tropical Blend",
      "price": 9000,
      "reservationDeposit": 2000,
      "availability": "Available for Reservation • In-Store Handover",
      "variants": [
        {
          "id": "adult-pair",
          "name": "Adult (Pair)",
          "price": 9000,
          "default": true
        }
      ],
      "healthInfo": "Full health examination, closed-ring banded, active and hand-tamed",
      "tagline": "Warm red and golden chest mutation of the green-cheeked conure; curious and gentle.",
      "description": "A stunning visual blend of cinnamon and yellow-sided mutations, the Pineapple Conure exhibits bright lime wings, a ruby chest, and pearly cheeks. Very playful and quieter than larger conures.",
      "characteristics": {
        "temperament": "Playful, Loving, Intelligent",
        "lifespan": "20–25 Years",
        "diet": "Pellets, seed mix, fresh fruit slices, vegetables",
        "housing": "Sturdy wire cage with foraging toys and perches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461866/2b2cdb0e-1086-4a2d-8e80-4d1dc123c981.png"
      ]
    },
    "african-lovebirds-albino": {
      "id": "african-lovebirds-albino",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "African Lovebirds (Albino)",
      "breed": "Agapornis personatus / fischeri Albino",
      "unit": "Pair",
      "badge": "Exotic White Mutation",
      "price": 3500,
      "reservationDeposit": 700,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Active paired companions, pristine plumage, routine vet check cleared",
      "tagline": "Striking pure white African lovebird pair with bright pink beaks and playful spirit.",
      "description": "The Albino African Lovebird displays a breathtaking pure white coat, striking ruby eyes, and soft pink feet. Active, curious, and intensely bonded as a companion pair.",
      "characteristics": {
        "temperament": "Energetic, Loyal, Inquisitive",
        "lifespan": "10–15 Years",
        "diet": "Premium lovebird mix, green leaves, mineral stone",
        "housing": "Medium flight cage with shredding toys and branches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795461935/4655fff9-2ccd-4c14-837b-c4f96b35a809.png"
      ]
    },
    "java-sparrow": {
      "id": "java-sparrow",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Java Sparrow",
      "breed": "Lonchura oryzivora",
      "unit": "Pair",
      "badge": "Silky Slate & Rose",
      "price": 1900,
      "reservationDeposit": 400,
      "availability": "Available in Shop • Instant Adoption",
      "healthInfo": "Flock healthy, robust posture, smooth feathering, clean bill of health",
      "tagline": "Gentle aviary finch with distinctive coral beak, white cheek patches, and peaceful chirp.",
      "description": "A dignified, peaceful cage companion boasting satin blue-grey body feathers, a velvet black cap, snowy cheek rounds, and an unmistakable rosy pink bill. Delightful to watch.",
      "characteristics": {
        "temperament": "Gentle, Clean, Gregarious",
        "lifespan": "7–10 Years",
        "diet": "Paddy rice, millet, canary seed, egg food",
        "housing": "Wide horizontal cage with shallow bath dish"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462002/324d5b70-25a6-46c3-9946-e9e64ca98fba.png"
      ]
    },
    "homing-pigeon": {
      "id": "homing-pigeon",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Homing Pigeon",
      "breed": "Columba livia domestica (Homer)",
      "unit": "Pair",
      "badge": "Stout Aviator",
      "price": 1500,
      "reservationDeposit": 300,
      "availability": "Available for Order • Handover in Shop",
      "healthInfo": "Vaccinated flock, deep chest muscle, bright alert eyes",
      "tagline": "Robust domestic racing and homing breed celebrated for stamina, loyalty, and intelligence.",
      "description": "Famous throughout history for unmatched navigational prowess and strong pair bonding. These hardy birds feature deep muscular builds, glossy neck iridescence, and calm confidence.",
      "characteristics": {
        "temperament": "Hardy, Intelligent, Docile",
        "lifespan": "12–15 Years",
        "diet": "Grains, corn, peas, safflower, pigeon grit",
        "housing": "Well-ventilated loft or roomy garden aviary"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462086/3dc2784d-c88b-494f-aab5-73fe59baf211.png"
      ]
    },
    "fantail-pigeon": {
      "id": "fantail-pigeon",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Fantail Pigeon",
      "breed": "Indian / Exhibition Fantail",
      "unit": "Pair",
      "badge": "Majestic Display",
      "price": 3500,
      "reservationDeposit": 700,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Show-quality feather condition, parasite-free, health checked",
      "tagline": "Iconic show pigeon displaying a 30-40 feather peacock-like arched fan tail.",
      "description": "One of the oldest and most aristocratic ornamental pigeon breeds. Stands gracefully with chest pushed proudly forward and a voluminous tail fanned vertically like a peacock.",
      "characteristics": {
        "temperament": "Tame, Showy, Friendly",
        "lifespan": "10–14 Years",
        "diet": "Pigeon grain mix, pulses, calcium grit",
        "housing": "Clean dry aviary protected from muddy floors"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462151/d9a1c170-e328-4afa-a186-d4519c0a5076.png"
      ]
    },
    "grey-baaz-pigeon": {
      "id": "grey-baaz-pigeon",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Grey Baaz Pigeon",
      "breed": "Baaz High-Flyer Variety",
      "unit": "Pair",
      "badge": "High-Flyer Breed",
      "price": 2000,
      "reservationDeposit": 400,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Active loft conditioning, healthy wing feathers, robust vigor",
      "tagline": "Traditional high-flying pigeon breed featuring striking ash-grey plumage and alert posture.",
      "description": "Highly regarded by pigeon fanciers for enduring high-altitude soaring and sharp, hawk-like alertness. Athletic, clean, and accustomed to disciplined loft routines.",
      "characteristics": {
        "temperament": "Athletic, Vigilant, Strong",
        "lifespan": "10–15 Years",
        "diet": "Mixed grain, wheat, sorghum, lentils",
        "housing": "Loft or rooftop coop with perching stations"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462231/ba9f6683-ec11-4db4-bbfe-5ae0bc8b9b48.png"
      ]
    },
    "fancy-pigeons": {
      "id": "fancy-pigeons",
      "category": "birds",
      "categoryName": "Pet & Songbirds",
      "name": "Fancy Pigeons",
      "breed": "Decorative Exhibition Pigeons",
      "unit": "Pair",
      "badge": "Ornamental Avian",
      "price": 4000,
      "reservationDeposit": 800,
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Pristine plumage, pedigree verified, routine vet health check passed",
      "tagline": "Curated pairs of decorative fancy exhibition pigeons with distinctive crests and feather muffing.",
      "description": "Select ornamental domestic pigeons bred over centuries for dramatic crests, frilled neck ruffs, muffed boots, and elegant carriage. A spectacle of avian pageantry.",
      "characteristics": {
        "temperament": "Docile, Ornamental, Calm",
        "lifespan": "10–14 Years",
        "diet": "Quality grain mix, mineral grit, fresh water daily",
        "housing": "Spacious dry coop with clean flat perches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462309/ef6ae80a-9a65-4a47-b70d-38aa4db609d6.png"
      ]
    },
    "guinea-pig": {
      "id": "guinea-pig",
      "category": "small-pets",
      "categoryName": "Hamsters & Small Pets",
      "name": "Guinea Pig",
      "breed": "Domestic Cavy (Cavia porcellus)",
      "unit": "Pair",
      "badge": "Gentle & Vocal",
      "price": 1500,
      "reservationDeposit": 300,
      "availability": "Available in Shop • Instant Adoption",
      "healthInfo": "Healthy coat, dewormed, Vitamin C fortified diet, vet inspected",
      "tagline": "Affectionate, social companion pair that chirps excitedly at veggie time and loves lap cuddles.",
      "description": "Guinea pigs are celebrated for their gentle nature, rarely biting and communicating with cheerful wheeks and purrs. They thrive as bonded pairs with daily fresh vegetables.",
      "characteristics": {
        "temperament": "Gentle, Social, Vocal",
        "lifespan": "5–8 Years",
        "diet": "Unlimited timothy hay, Vitamin-C pellets, bell peppers",
        "housing": "Flat-bottom spacious cage with cozy hideouts"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462403/c3ab73c9-e966-44a0-962a-5221316600e7.png"
      ]
    },
    "hamster": {
      "id": "hamster",
      "category": "small-pets",
      "categoryName": "Hamsters & Small Pets",
      "name": "Hamster",
      "breed": "Domestic Dwarf / Syrian Companion",
      "unit": "Pair",
      "badge": "Pocket Companion",
      "price": 1200,
      "reservationDeposit": 250,
      "availability": "Available in Shop • Instant Adoption",
      "healthInfo": "Active nocturnal runner, clean pouches, parasite free",
      "tagline": "Curious pocket companion pair that loves tunnel exploration and wheel running.",
      "description": "Hamsters are charming small pets with amusing cheek pouches, boundless wheel-running energy, and fascinating burrowing habits. Easy to care for and quiet roommates.",
      "characteristics": {
        "temperament": "Curious, Solitary / Paired, Active",
        "lifespan": "2–3 Years",
        "diet": "Hamster seed & grain mix, mealworms, occasional fruit",
        "housing": "Deep-bedding tank or wire cage with running wheel"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462573/f0e97e87-2861-4668-9187-29e2b03fad80.png"
      ]
    },
    "guppy": {
      "id": "guppy",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Guppy",
      "breed": "Fancy Guppy (Poecilia reticulata)",
      "unit": "Pair",
      "badge": "Peaceful Community",
      "price": 80,
      "availability": "In Stock at Store • Direct Pickup",
      "healthInfo": "Quarantined, active schooling, vibrant tail finnage, disease free",
      "tagline": "Colorful, active livebearer with flowing kaleidoscopic tails; perfect for beginner community tanks.",
      "description": "Guppies are among the most colorful and hardy freshwater fish in the aquarium hobby. Active, peaceful, and endlessly entertaining.",
      "characteristics": {
        "temperament": "Peaceful Community",
        "tankSize": "10+ Litres",
        "waterTemp": "22–28°C",
        "diet": "Flakes, micro pellets, baby brine shrimp"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795462791/0927fd50-d5c6-4c5f-86b7-8dc9a2b6b85a.png"
      ]
    },
    "goldfish": {
      "id": "goldfish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Goldfish",
      "breed": "Carassius auratus",
      "badge": "Coldwater Classic",
      "price": 50,
      "variants": [
        {
          "id": "s",
          "name": "S",
          "price": 50,
          "default": true
        },
        {
          "id": "m",
          "name": "M",
          "price": 150
        },
        {
          "id": "l",
          "name": "L",
          "price": 300
        }
      ],
      "availability": "In Stock at Store",
      "healthInfo": "Well-fed, clear scales, lively swimming, coldwater conditioned",
      "tagline": "Timeless golden freshwater classic admired for friendly swimming and bright coloration.",
      "description": "Goldfish are hardy, friendly, and iconic freshwater pets. Available in Small, Medium, and Large sizes to suit tanks and outdoor lotus ponds.",
      "characteristics": {
        "temperament": "Peaceful & Social",
        "tankSize": "40+ Litres",
        "waterTemp": "18–24°C",
        "diet": "Goldfish floating pellets, sinking crisps, peas"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463025/f36d921f-fa28-4403-bedc-a840c943c96d.png"
      ]
    },
    "oranda-goldfish": {
      "id": "oranda-goldfish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Oranda Goldfish",
      "breed": "Oranda Fancy Goldfish",
      "unit": "Pair",
      "badge": "Distinctive Wen Cap",
      "price": 150,
      "variants": [
        {
          "id": "s",
          "name": "S (Pair)",
          "price": 150,
          "default": true
        },
        {
          "id": "m",
          "name": "M (Pair)",
          "price": 250
        },
        {
          "id": "l",
          "name": "L (Pair)",
          "price": 350
        }
      ],
      "availability": "In Stock at Store",
      "healthInfo": "Healthy head growth (wen), clear eyes, balanced swim bladder, quarantined",
      "tagline": "Aristocratic fancy goldfish showcasing a majestic crown-like raspberry wen on its head.",
      "description": "The Oranda is one of the most celebrated fancy goldfish varieties, distinguished by its raspberry-like wen growth, round egg-shaped body, and flowing split caudal fin.",
      "characteristics": {
        "temperament": "Gentle & Sociable",
        "tankSize": "60+ Litres",
        "waterTemp": "18–23°C",
        "diet": "Sinking pellets, bloodworms, blanched spinach"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463107/9dad3702-b471-45c8-b7b8-bfbef9b3e456.png"
      ]
    },
    "red-cap-goldfish": {
      "id": "red-cap-goldfish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Red Cap Goldfish",
      "breed": "Red Cap Oranda",
      "unit": "Pair",
      "badge": "Cherry Red Wen",
      "price": 150,
      "variants": [
        {
          "id": "s",
          "name": "S (Pair)",
          "price": 150,
          "default": true
        },
        {
          "id": "m",
          "name": "M (Pair)",
          "price": 250
        },
        {
          "id": "l",
          "name": "L (Pair)",
          "price": 350
        }
      ],
      "availability": "In Stock at Store",
      "healthInfo": "Pure white body scales with vibrant ruby-red hood, active swimmer",
      "tagline": "Striking silver-white body crowned with a cherry-red velvet cap atop the head.",
      "description": "A beloved oriental favourite, the Red Cap Oranda combines pure pearlescent white body scales with a vivid crimson wen, creating a stunning visual contrast.",
      "characteristics": {
        "temperament": "Docile Community",
        "tankSize": "60+ Litres",
        "waterTemp": "18–23°C",
        "diet": "Sinking goldfish pellets, vegetable flakes"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463182/7e5506c1-781b-49ac-94f8-2eff7dfc8100.png"
      ]
    },
    "flowerhorn": {
      "id": "flowerhorn",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Flowerhorn",
      "breed": "Show Flowerhorn Cichlid Hybrid",
      "unit": "3 Inches, Per Piece",
      "badge": "Majestic Kok & Pearls",
      "price": 1999,
      "availability": "Available in Shop • Hand-Selected Showpiece",
      "healthInfo": "Prominent head kok development, intense red coloration, interactive personality",
      "tagline": "Exotic showpiece cichlid with pronounced nuchal hump (kok) and dazzling metallic flower markings.",
      "description": "A legendary exhibition cichlid admired for its large nuchal hump, vibrant coloration, and interactive pet-like personality that interacts eagerly with its owner through the glass.",
      "characteristics": {
        "temperament": "Semi-Aggressive / Solo King",
        "tankSize": "150+ Litres",
        "waterTemp": "28–31°C",
        "diet": "High-protein Flowerhorn pellets, krill"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463232/5c8c11cc-88d1-44dc-b8e2-adaea18e0860.png"
      ]
    },
    "silver-arowana": {
      "id": "silver-arowana",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Silver Arowana",
      "breed": "Osteoglossum bicirrhosum",
      "unit": "Per Piece",
      "isEnquiry": true,
      "price": 0,
      "priceDisplay": "Enquire for Price",
      "badge": "Aquatic Dragon",
      "availability": "Enquire for Availability • Direct WhatsApp Booking",
      "healthInfo": "Clear barbels, straight dorsal spine, pristine shimmering scales",
      "tagline": "Prehistoric dragon fish with ribbon-like swimming grace and lustrous metallic silver scales.",
      "description": "An awe-inspiring monster fish that glides like an ancient dragon across the water surface. Feeds enthusiastically and serves as the crowning centerpiece of large aquariums.",
      "characteristics": {
        "temperament": "Predatory Surface Swimmer",
        "tankSize": "300+ Litres",
        "waterTemp": "24–29°C",
        "diet": "Carnivore pellets, freeze-dried shrimp, crickets"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463358/87d97d75-6484-4c46-97bd-6302c42e62b7.png"
      ]
    },
    "green-arowana": {
      "id": "green-arowana",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Green Arowana",
      "breed": "Asian Arowana (Scleropages formosus)",
      "unit": "Per Piece",
      "price": 8000,
      "reservationDeposit": 2000,
      "badge": "Asian Dragon Fish",
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Microchipped with legal import documentation, immaculate fins and scales",
      "tagline": "Natural Asian arowana variety displaying subtle jade-green scales and auspicious dragon grace.",
      "description": "The Green Asian Arowana is revered across Asia as an auspicious symbol of prosperity and good fortune. Shimmers with soft green and silver undertones.",
      "characteristics": {
        "temperament": "Solitary Predator",
        "tankSize": "350+ Litres",
        "waterTemp": "26–30°C",
        "diet": "Floating sticks, mealworms, market prawns"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463526/b3d2b035-4518-48a4-a11e-517716ee6a8b.png"
      ]
    },
    "pearl-arowana": {
      "id": "pearl-arowana",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Pearl Arowana",
      "breed": "Jardini Arowana (Scleropages jardinii)",
      "unit": "Per Piece",
      "price": 8500,
      "reservationDeposit": 2000,
      "badge": "Star-Dusted Scales",
      "availability": "Available for Reservation • In-Store Handover",
      "healthInfo": "Pristine barbels, iridescent crescent-dusted scales, robust appetite",
      "tagline": "Stunning Australian arowana decorated with shimmering pink and gold pearl crescents on every scale.",
      "description": "A spectacular Australasian dragon fish characterized by crescent-shaped pearl markings across its deep-bodied iridescent scales. Powerful, territorial, and majestic.",
      "characteristics": {
        "temperament": "Aggressive & Regal",
        "tankSize": "350+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Pellets, freeze-dried krill, fresh seafood"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463738/b0a44d47-bf14-47ce-954b-13d7c4ae86fd.png"
      ]
    },
    "banjar-red-arowana": {
      "id": "banjar-red-arowana",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Banjar Red Arowana",
      "breed": "Banjar Red Asian Arowana (With Certificate)",
      "unit": "With Certificate, Per Piece",
      "price": 12000,
      "reservationDeposit": 3000,
      "badge": "Certified Asian Dragon",
      "availability": "Available with Certificate • Authentic Microchipped",
      "healthInfo": "CITES microchipped, official farm certification card, quarantined",
      "tagline": "Prestige Asian dragon fish with radiant yellow-orange finnage and certified lineage.",
      "description": "Accompanied by an official microchip and farm certificate, the Banjar Red Arowana features broad scales, glowing orange-red fins, and commanding presence.",
      "characteristics": {
        "temperament": "Majestic Centerpiece",
        "tankSize": "400+ Litres",
        "waterTemp": "26–30°C",
        "diet": "Arowana sticks, crickets, chopped prawn"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795463929/46a49f20-32ed-407e-ae3f-619c66417de9.png"
      ]
    },
    "rtg-arowana": {
      "id": "rtg-arowana",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "RTG Arowana",
      "breed": "Red Tail Golden Arowana (With Certificate)",
      "unit": "With Certificate, Per Piece",
      "price": 20000,
      "reservationDeposit": 5000,
      "badge": "Golden Royal Class",
      "availability": "Available with Certificate • Authentic Microchipped",
      "healthInfo": "Premium farm certificate, microchip verified, shining golden shine level 4+",
      "tagline": "World-class Red Tail Golden dragon fish with shimmering gold scales and fiery crimson tail.",
      "description": "The Red Tail Golden (RTG) Arowana is a masterclass Asian dragon fish with golden scales gleaming up to the 4th/5th scale row, contrast crimson fins, and official certificate.",
      "characteristics": {
        "temperament": "Elite Showpiece",
        "tankSize": "450+ Litres",
        "waterTemp": "27–30°C",
        "diet": "Premium arowana diet, fresh shrimp, dubia roaches"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795465208/9a312693-368f-4781-aece-899ff924ce1e.png"
      ]
    },
    "alligator-gar": {
      "id": "alligator-gar",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Alligator Gar",
      "breed": "Atractosteus spatula",
      "unit": "Per Piece",
      "badge": "Prehistoric Predator",
      "price": 950,
      "variants": [
        {
          "id": "s",
          "name": "S",
          "price": 950,
          "default": true
        },
        {
          "id": "m",
          "name": "M",
          "price": 1500
        },
        {
          "id": "l",
          "name": "L",
          "price": 5000
        }
      ],
      "availability": "Available in Shop",
      "healthInfo": "Strong ganoid scales, sharp snout, voracious feeder, healthy fins",
      "tagline": "Living fossil with diamond-hard scales and toothy alligator snout for monster aquariums.",
      "description": "A formidable prehistoric predator capable of growing to impressive dimensions. Its dual rows of sharp teeth and armor-like enamel scales make it a fascinating specimen.",
      "characteristics": {
        "temperament": "Monster Predator",
        "tankSize": "300+ Litres (Pond recommended for L)",
        "waterTemp": "20–28°C",
        "diet": "Meaty feeder pellets, fish fillets, shrimp"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795465410/ee36c036-30fd-4a41-9f0c-fc7b95d1528a.png"
      ]
    },
    "giant-gourami": {
      "id": "giant-gourami",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Giant Gourami",
      "breed": "Osphronemus goramy",
      "unit": "Per Piece",
      "badge": "Interactive Wet Pet",
      "price": 450,
      "variants": [
        {
          "id": "s",
          "name": "S",
          "price": 450,
          "default": true
        },
        {
          "id": "m",
          "name": "M",
          "price": 850
        },
        {
          "id": "l",
          "name": "L",
          "price": 7000
        }
      ],
      "availability": "Available in Shop",
      "healthInfo": "Long tactile pelvic fins, healthy appetite, sociable demeanor",
      "tagline": "Affectionate 'wet pet' that recognizes its owner, eats from hands, and reaches magnificent size.",
      "description": "The Giant Gourami possesses genuine dog-like personality, swimming up to greet keepers and enjoying fruits, vegetables, and pellets directly from your fingers.",
      "characteristics": {
        "temperament": "Friendly & Intelligent",
        "tankSize": "200+ Litres",
        "waterTemp": "24–30°C",
        "diet": "Omnivore sticks, banana, lettuce, pellets"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795465521/ed39d4c4-c5f4-45f6-810a-9e7c2e9ab6f8.png"
      ]
    },
    "normal-gourami": {
      "id": "normal-gourami",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Normal Gourami",
      "breed": "Trichopodus trichopterus (Three-Spot/Blue)",
      "unit": "Pair",
      "badge": "Hardy Labyrinth",
      "price": 150,
      "availability": "In Stock at Store",
      "healthInfo": "Breathes atmospheric air via labyrinth organ, peaceful schooling, active",
      "tagline": "Hardy, attractive labyrinth fish capable of thriving in varied community tank setups.",
      "description": "Classic blue and opaline gouramis are resilient, peaceful additions that use delicate sensory feelers to explore surroundings and browse surface algae.",
      "characteristics": {
        "temperament": "Peaceful Community",
        "tankSize": "50+ Litres",
        "waterTemp": "23–28°C",
        "diet": "Flakes, micro pellets, bloodworms"
      },
      "gallery": [
        "https://res.cloudinary.com/vwvbtkfe/image/upload/v1795465596/e9218920-c066-43b2-bca7-e7ea2bb2a592.png"
      ]
    },
    "betta-fish-halfmoon": {
      "id": "betta-fish-halfmoon",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Betta Fish (Halfmoon)",
      "breed": "Betta splendens (Halfmoon Tail)",
      "unit": "Per Piece",
      "badge": "180° Caudal Spread",
      "price": 200,
      "availability": "In Stock at Store",
      "healthInfo": "Magnificent 180-degree tail flare, vibrant coloration, active bubble nester",
      "tagline": "Dramatic fighting fish boasting a breathtaking 180-degree halfmoon fin spread.",
      "description": "A pinnacle of betta selective breeding, displaying massive caudal fins that form a complete D-shape when flared. Ideal centerpiece for desktop planted aquariums.",
      "characteristics": {
        "temperament": "Solitary Male / Majestic",
        "tankSize": "10+ Litres",
        "waterTemp": "24–29°C",
        "diet": "Betta pellets, freeze-dried bloodworms"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
      ]
    },
    "betta-fish-fullmoon": {
      "id": "betta-fish-fullmoon",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Betta Fish (Fullmoon)",
      "breed": "Betta splendens (Fullmoon / Over-Halfmoon)",
      "unit": "Per Piece",
      "badge": "Full Voluminous Veil",
      "price": 250,
      "availability": "In Stock at Store",
      "healthInfo": "Exceptional ray branching, intense jewel tones, active flare response",
      "tagline": "Voluminous circular finnage with over-180 degree spread resembling a full glowing moon.",
      "description": "Features ultra-dense branched fin rays that create a circular, flowing cape of color around the body. A living jewel in any nano planted aquarium.",
      "characteristics": {
        "temperament": "Solitary Male / Showcase",
        "tankSize": "15+ Litres",
        "waterTemp": "24–29°C",
        "diet": "High-grade betta micro pellets, daphnia"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "neon-tetra": {
      "id": "neon-tetra",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Neon Tetra",
      "breed": "Paracheirodon innesi",
      "unit": "Pair",
      "badge": "Electric Iridescent",
      "price": 70,
      "availability": "In Stock at Store",
      "healthInfo": "Vivid electric blue and crimson stripes, active schooling behavior",
      "tagline": "Gleaming neon blue and scarlet shoaling fish that illuminate planted aquariums.",
      "description": "The crown jewel of planted nature aquariums. Their iridescent electric blue lateral stripe and bright red tail create a shimmering schooling spectacle.",
      "characteristics": {
        "temperament": "Peaceful Shoaler",
        "tankSize": "30+ Litres",
        "waterTemp": "20–26°C",
        "diet": "Micro flakes, baby brine, cyclops"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "reminos": {
      "id": "reminos",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Reminos",
      "breed": "Rummynose Tetra (Hemigrammus rhodostomus)",
      "unit": "Pair",
      "badge": "Tight Schooler",
      "price": 180,
      "availability": "In Stock at Store",
      "healthInfo": "Bright cherry red nose indicating pristine water quality, zebra striped tail",
      "tagline": "Celebrated as the tightest schooling freshwater fish, with ruby-red snouts and zebra tails.",
      "description": "Rummynose tetras swim in synchronized formation like a single organism. Their glowing red snout serves as a natural barometer of superb aquarium health.",
      "characteristics": {
        "temperament": "Tight Schooling Peaceful",
        "tankSize": "50+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Fine flakes, micro bits, golden pearls"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "mixed-zebra-danio": {
      "id": "mixed-zebra-danio",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Mixed Zebra Danio",
      "breed": "Danio rerio (Mixed Colours)",
      "unit": "Pair",
      "badge": "High Energy Swimmer",
      "price": 50,
      "availability": "In Stock at Store",
      "healthInfo": "Bulletproof hardiness, energetic surface swimming, multi-color mix",
      "tagline": "Zippy, virtually indestructible schooling fish with electric horizontal stripes.",
      "description": "Zebra Danios are famous for their playful speed and ironclad adaptability. They continuously dart across upper water layers, adding perpetual motion to community tanks.",
      "characteristics": {
        "temperament": "Very Active & Peaceful",
        "tankSize": "30+ Litres",
        "waterTemp": "18–26°C",
        "diet": "Crushed flakes, micro pellets"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "koi-carp": {
      "id": "koi-carp",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Koi Carp",
      "breed": "Cyprinus carpio (Ornamental Nishikigoi)",
      "unit": "Pair",
      "badge": "Living Jewel of Ponds",
      "price": 150,
      "variants": [
        {
          "id": "s",
          "name": "S (Pair)",
          "price": 150,
          "default": true
        },
        {
          "id": "m",
          "name": "M (Pair)",
          "price": 250
        },
        {
          "id": "l",
          "name": "L (Pair)",
          "price": 600
        }
      ],
      "availability": "In Stock at Store",
      "healthInfo": "Crisp pattern contrast, clear barbel whiskers, robust coldwater swimmers",
      "tagline": "Magnificent Japanese garden pond fish featuring brilliant Kohaku, Sanke, and Ogon patterns.",
      "description": "Known in Japan as 'living jewels,' Koi Carp become family heirlooms that live for decades, eating hand-fed treats and recognizing their caretakers.",
      "characteristics": {
        "temperament": "Docile & Social",
        "tankSize": "150+ Litres (Ideal for Ponds)",
        "waterTemp": "15–25°C",
        "diet": "Koi growth pellets, spirulina sticks, wheatgerm"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "tiger-shark": {
      "id": "tiger-shark",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Tiger Shark",
      "breed": "Pangasius hypophthalmus (Iridescent Shark)",
      "unit": "Pair",
      "badge": "Active Shark Silhouette",
      "price": 100,
      "availability": "In Stock at Store",
      "healthInfo": "Smooth iridescent gunmetal skin, fast schooling swimmer",
      "tagline": "Active open-water swimmer with metallic silver sheen and authentic shark-like silhouette.",
      "description": "Sleek and energetic, these catfish resemble miniature marine sharks as they patrol midwater zones with fluid swimming motions.",
      "characteristics": {
        "temperament": "Active Open-Water Swimmer",
        "tankSize": "150+ Litres",
        "waterTemp": "23–28°C",
        "diet": "Sinking carnivore pellets, flake foods"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "red-parrot-fish": {
      "id": "red-parrot-fish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Red Parrot Fish",
      "breed": "Blood Parrot Cichlid",
      "unit": "Pair",
      "badge": "Vivid Crimson Smile",
      "price": 850,
      "availability": "In Stock at Store",
      "healthInfo": "Deep ruby-orange coloration, comical beak-shaped mouth, curious swimmer",
      "tagline": "Cheerful round hybrid cichlid displaying a perpetual smile and luminous red-orange coloration.",
      "description": "Blood Parrots are famous for their friendly, clumsy swimming, endearing beak-shaped mouth, and curious temperament that quickly learns feeding schedules.",
      "characteristics": {
        "temperament": "Playful & Semi-Aggressive",
        "tankSize": "120+ Litres",
        "waterTemp": "25–28°C",
        "diet": "Colour-enhancing floating cichlid pellets"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "yellow-parrot-fish": {
      "id": "yellow-parrot-fish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Yellow Parrot Fish",
      "breed": "Yellow Blood Parrot Cichlid",
      "unit": "Pair",
      "badge": "Golden Canary Tone",
      "price": 950,
      "availability": "In Stock at Store",
      "healthInfo": "Warm canary yellow scales, bright curious eyes, well conditioned",
      "tagline": "Vibrant lemon-yellow variation of the popular parrot cichlid, bringing sunshine to aquariums.",
      "description": "A bright canary-yellow cousin of the classic red parrot fish, radiating sunny warmth in community cichlid setups.",
      "characteristics": {
        "temperament": "Sociable & Active",
        "tankSize": "120+ Litres",
        "waterTemp": "25–28°C",
        "diet": "Specialized yellow parrot pellets, krill"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "banana-fish": {
      "id": "banana-fish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Banana Fish",
      "breed": "Yellow Lab Cichlid (Labidochromis caeruleus)",
      "unit": "Pair",
      "badge": "Electric Yellow African",
      "price": 300,
      "availability": "In Stock at Store",
      "healthInfo": "Electric yellow body with jet-black dorsal accent stripe, Lake Malawi native",
      "tagline": "Stunning electric banana-yellow Lake Malawi cichlid with bold black-edged dorsal fin.",
      "description": "One of the most peaceful and popular African Mbuna cichlids, displaying solid canary-yellow body coloration contrasted by crisp black dorsal lining.",
      "characteristics": {
        "temperament": "Peaceful Mbuna Cichlid",
        "tankSize": "100+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Spirulina flakes, cichlid pellets, vegetable matter"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "mixed-cichlids": {
      "id": "mixed-cichlids",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Mixed Cichlids",
      "breed": "Assorted African & American Cichlids",
      "unit": "Pair",
      "badge": "Rainbow Cichlid Mix",
      "price": 180,
      "availability": "In Stock at Store",
      "healthInfo": "Dynamic mix of active juveniles, assorted coloration, territorial health checked",
      "tagline": "Assorted colourful cichlids providing a lively, multi-hued display in rockwork aquariums.",
      "description": "A colourful assortment of popular cichlid species that thrive in hard water setups with rocky caves and territories.",
      "characteristics": {
        "temperament": "Territorial & Colorful",
        "tankSize": "100+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Cichlid bites, spirulina pellets"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "molly": {
      "id": "molly",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Molly",
      "breed": "Poecilia sphenops (Black/Sailfin/Gold)",
      "unit": "Pair",
      "badge": "Peaceful Livebearer",
      "price": 50,
      "availability": "In Stock at Store",
      "healthInfo": "Clean scales, active livebearer, healthy nibbler of soft algae",
      "tagline": "Resilient livebearer available in velvet black, orange, and dalmatian patterns.",
      "description": "Mollies are peaceful community favorites that naturally graze on soft algae while adding rich velvety colours to community setups.",
      "characteristics": {
        "temperament": "Community Friendly",
        "tankSize": "30+ Litres",
        "waterTemp": "22–28°C",
        "diet": "Algae flakes, tropical crisps, boiled peas"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "tinfoil-barb": {
      "id": "tinfoil-barb",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Tinfoil Barb",
      "breed": "Barbonymus schwanenfeldii",
      "unit": "Pair",
      "badge": "Mirror Silver & Red",
      "price": 150,
      "variants": [
        {
          "id": "s",
          "name": "S (Pair)",
          "price": 150,
          "default": true
        },
        {
          "id": "l",
          "name": "L (Pair)",
          "price": 500
        }
      ],
      "availability": "In Stock at Store",
      "healthInfo": "Foil-reflective scales, bright blood-red tail margin, strong schooling",
      "tagline": "Fast-swimming river barb with mirror-like tinfoil scales and vibrant red-tipped fins.",
      "description": "A dazzling, powerful swimmer that reflects aquarium lights like polished silver foil. Excellent dither fish for larger aquariums.",
      "characteristics": {
        "temperament": "Active & Peaceful",
        "tankSize": "150+ Litres",
        "waterTemp": "22–27°C",
        "diet": "Vegetable pellets, sinking wafers, worms"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "albino-oscar": {
      "id": "albino-oscar",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Albino Oscar",
      "breed": "Astronotus ocellatus (Albino)",
      "unit": "Pair",
      "badge": "Porcelain & Orange",
      "price": 750,
      "availability": "In Stock at Store",
      "healthInfo": "Pink eyes, pearly white base with fiery orange marbling, voracious appetite",
      "tagline": "Stunning albino river giant with cream body, orange filigree, and playful intelligence.",
      "description": "Oscars are famed as 'water dogs' because they recognize faces and re-decorate tanks. The albino variety contrasts soft cream with fiery orange.",
      "characteristics": {
        "temperament": "Intelligent & Robust",
        "tankSize": "200+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Oscar pellets, crickets, freeze dried krill"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "tiger-oscar": {
      "id": "tiger-oscar",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Tiger Oscar",
      "breed": "Astronotus ocellatus (Tiger)",
      "unit": "Pair",
      "badge": "Fiery Tiger Stripes",
      "price": 750,
      "availability": "In Stock at Store",
      "healthInfo": "Classic dark olive base with electric orange tiger-stripe marbling",
      "tagline": "Classic Amazonian predator showcasing black velvet flanks splashed with fiery tiger stripes.",
      "description": "The quintessential Oscar variety. Exhibits high intelligence, hearty appetite, and dramatic coloration.",
      "characteristics": {
        "temperament": "Personable & Boisterous",
        "tankSize": "200+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Large cichlid sticks, earthworms, shrimp"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "copper-oscar": {
      "id": "copper-oscar",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Copper Oscar",
      "breed": "Astronotus ocellatus (Copper)",
      "unit": "Pair",
      "badge": "Burnished Metallic",
      "price": 750,
      "availability": "In Stock at Store",
      "healthInfo": "Smooth copper metallic sheen, healthy caudal ocellus eyespot",
      "tagline": "Unique burnished copper-toned Oscar featuring solid metallic rust and bronze body tones.",
      "description": "A refined colour mutation where the body is washed in solid burnished copper and bronze tones.",
      "characteristics": {
        "temperament": "Personable & Stately",
        "tankSize": "200+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Floating carnivore sticks, mealworms"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "red-oscar": {
      "id": "red-oscar",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Red Oscar",
      "breed": "Astronotus ocellatus (Red)",
      "unit": "Pair",
      "badge": "Solid Crimson Flank",
      "price": 750,
      "availability": "In Stock at Store",
      "healthInfo": "Solid deep red flanks, active swimmer, clear pectoral fins",
      "tagline": "Solid crimson-flanked Oscar variety prized for rich, un-marbled velvety red coverage.",
      "description": "Selective breeding has produced this intense red Oscar where bold scarlet sweeps across the majority of the flanks.",
      "characteristics": {
        "temperament": "Active & Interactive",
        "tankSize": "200+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Color-enhancing cichlid pellets, seafood"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "mango-oscar": {
      "id": "mango-oscar",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Mango Oscar",
      "breed": "Astronotus ocellatus (Mango / Golden Yellow)",
      "unit": "Pair",
      "badge": "Exotic Mango Tone",
      "price": 2000,
      "availability": "Rare Show Stock • Available in Shop",
      "healthInfo": "Luminous ripe-mango gold coloration, pristine finnage, certified high-grade",
      "tagline": "Rare showpiece Oscar exhibiting solid ripe-mango orange-yellow saturation across the body.",
      "description": "An extraordinary high-grade Oscar mutation prized by connoisseurs for its saturated mango-yellow hue devoid of dark barring.",
      "characteristics": {
        "temperament": "Exhibition Centerpiece",
        "tankSize": "200+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Premium cichlid sticks, fresh prawns, krill"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "albino-red-tail-shark": {
      "id": "albino-red-tail-shark",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Albino Red Tail Shark",
      "breed": "Epalzeorhynchos bicolor (Albino)",
      "unit": "Pair",
      "badge": "Ivory & Neon Tail",
      "price": 200,
      "availability": "In Stock at Store",
      "healthInfo": "Clean ivory-white body with vivid scarlet caudal fin, active bottom grazer",
      "tagline": "Striking albino shark with ivory body and glowing scarlet tail; active substrate explorer.",
      "description": "An eye-catching albino variation of the classic red-tailed shark with a snow-white body and radiant crimson finnage.",
      "characteristics": {
        "temperament": "Semi-Aggressive Bottom Dweller",
        "tankSize": "100+ Litres",
        "waterTemp": "23–27°C",
        "diet": "Algae wafers, sinking pellets, bloodworms"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "rainbow-shark": {
      "id": "rainbow-shark",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Rainbow Shark",
      "breed": "Epalzeorhynchos frenatum",
      "unit": "Pair",
      "badge": "Ruby Fins",
      "price": 250,
      "availability": "In Stock at Store",
      "healthInfo": "Velvety dark body with all fins dyed in radiant crimson-red",
      "tagline": "Sleek dark body highlighted by all-red fins; industrious grazer of rocks and driftwood.",
      "description": "Characterized by its cylindrical charcoal-grey body and bright red fins on every side, patrolling cave territories and driftwood.",
      "characteristics": {
        "temperament": "Territorial Grazer",
        "tankSize": "100+ Litres",
        "waterTemp": "24–28°C",
        "diet": "Sinking carnivore/herbivore wafers, blanched zucchini"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "sucker-catfish": {
      "id": "sucker-catfish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Sucker Catfish",
      "breed": "Common Plecostomus (Hypostomus plecostomus)",
      "unit": "Pair",
      "badge": "Master Tank Cleaner",
      "price": 200,
      "availability": "In Stock at Store",
      "healthInfo": "Strong suction mouth, armor-plated back, efficient glass and wood scraper",
      "tagline": "Indispensable tank cleaner with specialized sucker mouth that polishes glass and decor.",
      "description": "The trusted workhorse of freshwater aquariums, constantly browsing surfaces to clean algae and organic film.",
      "characteristics": {
        "temperament": "Peaceful Nocturnal Cleaner",
        "tankSize": "100+ Litres",
        "waterTemp": "22–28°C",
        "diet": "Algae wafers, sinking spirulina disks, driftwood"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "eel": {
      "id": "eel",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Eel",
      "breed": "Freshwater Spiny Eel (Mastacembelus)",
      "unit": "Per Piece",
      "badge": "Mysterious Serpent",
      "price": 300,
      "availability": "In Stock at Store",
      "healthInfo": "Flexible elongated body, inquisitive proboscis nose, healthy substrate burrower",
      "tagline": "Fascinating elongated freshwater eel with a delicate pointed snout and graceful undulating swim.",
      "description": "A captivating nocturnal bottom dweller that weaves through rockwork and peeks inquisitively from sand beds.",
      "characteristics": {
        "temperament": "Peaceful Burrower",
        "tankSize": "100+ Litres (Soft sand substrate)",
        "waterTemp": "24–28°C",
        "diet": "Frozen bloodworms, sinking pellets, tubifex"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "silver-shark": {
      "id": "silver-shark",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Silver Shark",
      "breed": "Bala Shark (Balantiocheilos melanopterus)",
      "unit": "Pair",
      "badge": "Black-Edged Finnage",
      "price": 300,
      "availability": "In Stock at Store",
      "healthInfo": "Mirror silver scales, crisp black-bordered dorsal and caudal fins, swift schooling",
      "tagline": "Stunning silver river cruiser with black-edged yellow fins and peaceful nature.",
      "description": "The Bala or Silver Shark boasts shining silver body armor and graphic black-bordered fins. Despite the 'shark' name, it is a peaceful schooling giant.",
      "characteristics": {
        "temperament": "Peaceful Active Schooler",
        "tankSize": "200+ Litres",
        "waterTemp": "22–28°C",
        "diet": "Pellets, flakes, freeze-dried treats"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "algae-eater-fish": {
      "id": "algae-eater-fish",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Algae Eater Fish",
      "breed": "Chinese Algae Eater (Gyrinocheilus aymonieri)",
      "unit": "Pair",
      "badge": "Industrious Scraper",
      "price": 300,
      "availability": "In Stock at Store",
      "healthInfo": "Robust suction mouth, constant grazing behavior, hardy constitution",
      "tagline": "Vigorous, hardworking algae grazer that cleans plant leaves, glass walls, and hardscape.",
      "description": "Renowned for working tirelessly to keep plant leaves and glass surfaces free of diatomaceous green and brown algae films.",
      "characteristics": {
        "temperament": "Active Cleaner",
        "tankSize": "60+ Litres",
        "waterTemp": "23–27°C",
        "diet": "Algae, sinking wafers, blanched vegetables"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "crystal-nose-pleco": {
      "id": "crystal-nose-pleco",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Crystal Nose Pleco",
      "breed": "Bristlenose Ancistrus Variety",
      "unit": "Pair",
      "badge": "Planted-Safe Pleco",
      "price": 300,
      "availability": "In Stock at Store",
      "healthInfo": "Intricate tentacled nose bristles, peaceful leaf grazing, stays compact",
      "tagline": "Peaceful dwarf pleco that stays compact and never damages delicate aquatic plants.",
      "description": "The ultimate planted tank plecostomus. It stays conveniently small (4-5 inches), loves green algae, and features quirky whisker-like nose tentacles.",
      "characteristics": {
        "temperament": "Peaceful Dwarf Cleaner",
        "tankSize": "60+ Litres",
        "waterTemp": "22–27°C",
        "diet": "Spirulina wafers, cucumber slices, bogwood"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "colour-video-tetra": {
      "id": "colour-video-tetra",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Colour Video Tetra",
      "breed": "Gymnocorymbus ternetzi (Glo / Colour Tetra)",
      "unit": "Pair",
      "badge": "Fluorescent Glow",
      "price": 100,
      "availability": "In Stock at Store",
      "healthInfo": "Vivid fluorescent hues under LED lighting, peaceful schooling",
      "tagline": "Vibrantly tinted schooling tetras that glow under blue and daylight aquarium lights.",
      "description": "Fun, vibrant schooling fish that bring electric purple, green, and pink highlights to modern family aquariums.",
      "characteristics": {
        "temperament": "Peaceful Community",
        "tankSize": "30+ Litres",
        "waterTemp": "22–28°C",
        "diet": "Micro pellets, flakes"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "lobster": {
      "id": "lobster",
      "category": "aquarium-fish",
      "categoryName": "Aquarium Fish",
      "name": "Lobster",
      "breed": "Freshwater Blue / Red Claw Crayfish (Procambarus)",
      "unit": "Per Piece",
      "badge": "Exotic Crustacean",
      "price": 150,
      "availability": "In Stock at Store",
      "healthInfo": "Hard exoskeleton, complete claws and walking legs, active scavenger",
      "tagline": "Fascinating armored freshwater crustacean that scavenges tank bottoms and explores caves.",
      "description": "An eye-catching armored crustacean with impressive pincers that marches across bottom gravel, providing boundless fascination.",
      "characteristics": {
        "temperament": "Territorial Bottom Scavenger",
        "tankSize": "40+ Litres with hiding caves",
        "waterTemp": "20–26°C",
        "diet": "Sinking crustacean pellets, algae wafers, dead plant matter"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
      ],
      "recommendedProducts": [
        "fish_food_taiyo_100g",
        "fish_food_tetra_bits_30g",
        "pebbles_natural"
      ]
    },
    "rabbit": {
      "id": "rabbit",
      "category": "rabbits",
      "categoryName": "Rabbits",
      "name": "Rabbit",
      "breed": "Domestic Companion Rabbit (Oryctolagus cuniculus)",
      "unit": "Pair",
      "badge": "Gentle Herbivore",
      "price": 950,
      "reservationDeposit": 300,
      "availability": "Available for Reservation • In-Store Handover",
      "age": "Baby / Adult / Young",
      "variants": [
        {
          "id": "baby",
          "name": "Baby (Pair)",
          "price": 950,
          "default": true
        },
        {
          "id": "adult",
          "name": "Adult (Pair)",
          "price": 1500
        },
        {
          "id": "young",
          "name": "Young (Pair)",
          "price": 2200
        }
      ],
      "healthInfo": "Dewormed, bright clear eyes, clean fur, comprehensive nutritional starter plan",
      "tagline": "Soft-furred, docile companion rabbits ideal for family petting and indoor bunny pens.",
      "description": "Domestic rabbits are friendly, gentle companions that form deep bonds with patient caregivers. They can be litter trained, enjoy head strokes, and thrive on fiber-rich hay and fresh greens.",
      "characteristics": {
        "temperament": "Gentle, Quiet, Inquisitive",
        "lifespan": "8–12 Years",
        "diet": "Timothy hay (85%), rabbit pellets, fresh greens",
        "housing": "Indoor exercise pen or roomy hutch with chew toys"
      },
      "gallery": [
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1518796745738-41048802f99a?auto=format&fit=crop&w=1200&q=85"
      ]
    }
  };

  // 3. PET SHOP PRODUCTS CATALOGUE (Approved 42 Records)
  const PRODUCTS_CATALOG = {
    "fish_food_taiyo_100g": {
      "id": "fish_food_taiyo_100g",
      "name": "Taiyo Fish Food 100g",
      "price": 40,
      "mrp": 75,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Taiyo",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo staple diet daily fish food pellets rich in spirulina and essential multivitamins for vibrant colouration, strong immunity, and daily vitality.",
      "variant": "100g",
      "variants": [
        {
          "id": "100g",
          "name": "100g",
          "price": 40,
          "mrp": 75,
          "default": true
        }
      ],
      "features": [
        "Original Taiyo formula with balanced protein and multivitamins",
        "Floating pellets that do not cloud aquarium water",
        "MRP: ₹75 — Special Selling Price: ₹40",
        "Ideal for all freshwater aquarium fish (Goldfish, Guppies, Tetras, Barbs)"
      ]
    },
    "fish_food_taiyo_200g": {
      "id": "fish_food_taiyo_200g",
      "name": "Taiyo Fish Food 200g",
      "price": 100,
      "mrp": 125,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Taiyo",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo daily nutrition fish food pellets for all freshwater tropical aquarium fish. Provides optimal energy and digestive wellness.",
      "variant": "200g",
      "variants": [
        {
          "id": "200g",
          "name": "200g",
          "price": 100,
          "mrp": 125,
          "default": true
        }
      ],
      "features": [
        "High protein recipe for steady growth and vitality",
        "Clean-water formula prevents water discoloration",
        "MRP: ₹125 — Special Selling Price: ₹100",
        "Genuine product stocked at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_taiyo_500g": {
      "id": "fish_food_taiyo_500g",
      "name": "Taiyo Fish Food 500g",
      "price": 200,
      "mrp": 250,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Taiyo",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo staple diet 500g value pack for healthy growth, colour, and clean water in community aquariums and goldfish ponds.",
      "variant": "500g",
      "variants": [
        {
          "id": "500g",
          "name": "500g",
          "price": 200,
          "mrp": 250,
          "default": true
        }
      ],
      "features": [
        "Economy 500g jar for medium to large fish tanks",
        "Fortified with vitamin C & E to strengthen immune response",
        "MRP: ₹250 — Special Selling Price: ₹200",
        "Fast WhatsApp enquiry and home delivery available"
      ]
    },
    "fish_food_taiyo_1000g": {
      "id": "fish_food_taiyo_1000g",
      "name": "Taiyo Fish Food 1000g",
      "price": 300,
      "mrp": 320,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Taiyo",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo economy 1kg (1000g) jumbo bucket for large community tanks, multi-tank hobbyists, and outdoor koi/goldfish ponds.",
      "variant": "1000g (1kg)",
      "variants": [
        {
          "id": "1000g",
          "name": "1000g (1kg)",
          "price": 300,
          "mrp": 320,
          "default": true
        }
      ],
      "features": [
        "1000g bulk saver size with airtight seal to preserve freshness",
        "Complete and balanced daily nutrition for all aquarium fishes",
        "MRP: ₹320 — Special Selling Price: ₹300",
        "Available for immediate pickup and delivery at UR WORLD AQUARIUM"
      ]
    },
    "fish_food_optimum_gold_100g": {
      "id": "fish_food_optimum_gold_100g",
      "name": "Optimum Gold 100g",
      "price": 100,
      "mrp": 105,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Optimum",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Optimum Gold premium fish food enriched with spirulina, carotenoids, astaxanthin, and stabilized vitamins for brilliant colour enhancement.",
      "variant": "100g",
      "variants": [
        {
          "id": "100g",
          "name": "100g",
          "price": 100,
          "mrp": 105,
          "default": true
        }
      ],
      "features": [
        "Optimum Gold superior color-enhancing formula",
        "Enriched with spirulina and natural carotenoids",
        "MRP: ₹105 — Special Selling Price: ₹100",
        "High palatability and easily digestible floating pellets"
      ]
    },
    "fish_food_optimum_gold_200g": {
      "id": "fish_food_optimum_gold_200g",
      "name": "Optimum Gold 200g",
      "price": 160,
      "mrp": 175,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Optimum",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Optimum Gold highly digestible premium formula for bright colours and enhanced disease resistance in all tropical companions.",
      "variant": "200g",
      "variants": [
        {
          "id": "200g",
          "name": "200g",
          "price": 160,
          "mrp": 175,
          "default": true
        }
      ],
      "features": [
        "Contains astaxanthin and spirulina for fast, vivid colouration",
        "Non-water polluting floating pellet composition",
        "MRP: ₹175 — Special Selling Price: ₹160",
        "Authentic store stock at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_optimum_gold_500g": {
      "id": "fish_food_optimum_gold_500g",
      "name": "Optimum Gold 500g",
      "price": 435,
      "mrp": 485,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Optimum",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Optimum Gold 500g premium nutrition for all show and community tropical fish, promoting robust immunity and lustrous finnage.",
      "variant": "500g",
      "variants": [
        {
          "id": "500g",
          "name": "500g",
          "price": 435,
          "mrp": 485,
          "default": true
        }
      ],
      "features": [
        "500g family saver container",
        "Advanced bioactive formula with natural immune stimulants",
        "MRP: ₹485 — Special Selling Price: ₹435",
        "Prompt delivery and WhatsApp guidance on feeding dosage"
      ]
    },
    "fish_food_optimum_gold_1000g": {
      "id": "fish_food_optimum_gold_1000g",
      "name": "Optimum Gold 1000g",
      "price": 550,
      "mrp": 655,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Optimum",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Optimum Gold 1kg mega saver pack with bio-active immune boosting formula for avid hobbyists and multi-aquarium collections.",
      "variant": "1000g (1kg)",
      "variants": [
        {
          "id": "1000g",
          "name": "1000g (1kg)",
          "price": 550,
          "mrp": 655,
          "default": true
        }
      ],
      "features": [
        "1000g (1kg) maximum economy pack",
        "Professional-grade fish feed trusted by breeders",
        "MRP: ₹655 — Special Selling Price: ₹550 (Save ₹105)",
        "Direct owner dispatch from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_optimum_cichlid_300g": {
      "id": "fish_food_optimum_cichlid_300g",
      "name": "Optimum Cichlid 300g",
      "price": 400,
      "mrp": 440,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Optimum",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Optimum Cichlid quick-growth colour-enhancing floating pellets specifically formulated for African and South American cichlids.",
      "variant": "300g",
      "variants": [
        {
          "id": "300g",
          "name": "300g",
          "price": 400,
          "mrp": 440,
          "default": true
        }
      ],
      "features": [
        "Customised nutrition for all cichlid species",
        "Promotes head shape, natural colouring, and active aggression balance",
        "MRP: ₹440 — Special Selling Price: ₹400",
        "In stock at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_optimum_micro_pellet_50g": {
      "id": "fish_food_optimum_micro_pellet_50g",
      "name": "Optimum Micro Pellet 50g",
      "price": 125,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Optimum",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Optimum Micro Pellets designed for small mouth tropical fishes like tetras, guppies, danios, and dwarf barbs.",
      "variant": "50g",
      "variants": [
        {
          "id": "50g",
          "name": "50g",
          "price": 125,
          "default": true
        }
      ],
      "features": [
        "Ultra-fine pellet size ideal for small mouths",
        "Semi-floating / slow-sinking action feeds all aquarium levels",
        "Actual store price: ₹125",
        "High spirulina content for rapid colour enhancement"
      ]
    },
    "fish_food_humpy_head_100g": {
      "id": "fish_food_humpy_head_100g",
      "name": "Humpy Head Flowerhorn Food 100g",
      "price": 650,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Flowerhorn Food",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Humpy Head premium head-booster growth and colour food for Flowerhorn cichlids. Enriched with protein and fatty acids to accelerate nuchal hump development.",
      "variant": "100g",
      "variants": [
        {
          "id": "100g",
          "name": "100g",
          "price": 650,
          "default": true
        }
      ],
      "features": [
        "World-renowned Flowerhorn nuchal hump enhancer",
        "High concentration of top-grade protein for fast kok growth",
        "Actual store price: ₹650",
        "Guaranteed authentic feed from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_okiko_black_pearl_100g": {
      "id": "fish_food_okiko_black_pearl_100g",
      "name": "Okiko Black Pearl Maximum Red & Head Formula 100g",
      "price": 350,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Flowerhorn Food",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Okiko Black Pearl head booster and pearl shining formula for premium Flowerhorn fish. Intensifies pearl patterns and kok size.",
      "variant": "100g",
      "variants": [
        {
          "id": "100g",
          "name": "100g",
          "price": 350,
          "default": true
        }
      ],
      "features": [
        "Okiko advanced pearl shining & kok development formula",
        "Rich in astaxanthin and spirulina for glowing body pearls",
        "Actual store price: ₹350",
        "Direct store pickup and doorstep dispatch available"
      ]
    },
    "fish_food_tusher_flowerhorn": {
      "id": "fish_food_tusher_flowerhorn",
      "name": "Tusher Nutritional Feed for Flowerhorn",
      "price": 450,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Flowerhorn Food",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Tusher specialized nutritional feed developed for maximum hump development, pearling shine, and rich red coloration in show Flowerhorns.",
      "variant": "Nutritional Feed",
      "variants": [
        {
          "id": "feed",
          "name": "Nutritional Feed",
          "price": 450,
          "default": true
        }
      ],
      "features": [
        "Specialized recipe for champion Flowerhorn care",
        "Aids in robust body shape, vigorous stamina, and sparkling scales",
        "Actual store price: ₹450",
        "Carefully stored in climate-controlled conditions at UR WORLD"
      ]
    },
    "fish_food_aquatic_remedies_micro_100g": {
      "id": "fish_food_aquatic_remedies_micro_100g",
      "name": "Aquatic Remedies Micro Pellet 100g",
      "price": 480,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Slow-sinking micro pellets enriched with spirulina and probiotics for small tropical community fish, tetras, and livebearers.",
      "variant": "100g",
      "variants": [
        {
          "id": "100g",
          "name": "100g",
          "price": 480,
          "default": true
        }
      ],
      "features": [
        "Aquatic Remedies professional micro pellet formula",
        "Slow-sinking for middle and top column feeders",
        "Actual store price: ₹480",
        "Enhances immunity and prevents swim-bladder disorders"
      ]
    },
    "fish_food_gene_eleven_30g": {
      "id": "fish_food_gene_eleven_30g",
      "name": "Gene Eleven Micro Pellet 30g (For Guppy, Tetra & Betta)",
      "price": 220,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Gene Eleven specialized colour and growth booster feed for tropical fish and delicate exotic species.",
      "variant": "30g",
      "variants": [
        {
          "id": "30g",
          "name": "30g",
          "price": 220,
          "default": true
        }
      ],
      "features": [
        "Concentrated growth formula packed with marine proteins",
        "Intensifies reds, blues, and yellows naturally",
        "Actual store price: ₹220",
        "Stocked fresh at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_gene_eleven_100g": {
      "id": "fish_food_gene_eleven_100g",
      "name": "Gene Eleven Micro Pellet 100g (For Guppy, Tetra & Betta)",
      "price": 220,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Gene Eleven 100g specialized feed for rapid growth and vibrant pigmentation in all freshwater companions.",
      "variant": "100g",
      "variants": [
        {
          "id": "100g",
          "name": "100g",
          "price": 220,
          "default": true
        }
      ],
      "features": [
        "100g value size for daily feeding",
        "Balanced amino acid profile ensures optimal nutrient absorption",
        "Actual store price: ₹220",
        "Available for prompt WhatsApp enquiry and delivery"
      ]
    },
    "fish_food_tetra_bits_300g": {
      "id": "fish_food_tetra_bits_300g",
      "name": "Tetra Bits Complete (For All Tropical Fish) 300g",
      "price": 1500,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Tetra Bits Complete premium granular food for Discus, Angelfish, and mid-water tropical fish. Made in Germany.",
      "variant": "300g",
      "variants": [
        {
          "id": "300g",
          "name": "300g",
          "price": 1500,
          "default": true
        }
      ],
      "features": [
        "World renowned staple diet for Discus and discerning fish",
        "Slow-sinking granules tailored to natural feeding habits",
        "Actual store price: ₹1,500",
        "Promotes spectacular coloration, vitality, and health"
      ]
    },
    "fish_food_tetra_bits_93g": {
      "id": "fish_food_tetra_bits_93g",
      "name": "Tetra Bits Complete (For All Tropical Fish) 93g",
      "price": 650,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Tetra Bits 93g slow sinking granules optimal for health, shape, and brilliance in Discus and tropical fish.",
      "variant": "93g",
      "variants": [
        {
          "id": "93g",
          "name": "93g",
          "price": 650,
          "default": true
        }
      ],
      "features": [
        "Original German formula Tetra Bits Complete",
        "Clinically formulated bioactive recipe for disease resistance",
        "Actual store price: ₹650",
        "Immediate stock availability at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_tetra_bits_30g": {
      "id": "fish_food_tetra_bits_30g",
      "name": "Tetra Bits Complete (For All Tropical Fish) 30g",
      "price": 300,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Tetra Bits 30g pocket pack for small community aquariums and Discus tanks.",
      "variant": "30g",
      "variants": [
        {
          "id": "30g",
          "name": "30g",
          "price": 300,
          "default": true
        }
      ],
      "features": [
        "Handy pocket canister for starter and small tanks",
        "Slow sinking bits suitable for all mid-water fish",
        "Actual store price: ₹300",
        "Direct enquiry on WhatsApp for prompt dispatch"
      ]
    },
    "fish_food_red_fin_micro_bits_30g": {
      "id": "fish_food_red_fin_micro_bits_30g",
      "name": "Red Fin Micro Bits (For All Small Fish) 30g",
      "price": 150,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Red Fin micro bits high-protein formula tailored for small tropical fish, guppies, and neon tetras.",
      "variant": "30g",
      "variants": [
        {
          "id": "30g",
          "name": "30g",
          "price": 150,
          "default": true
        }
      ],
      "features": [
        "Nutrient-dense micro granules for vibrant fins and vitality",
        "Easily consumed by nano and small community fishes",
        "Actual store price: ₹150",
        "Stored fresh at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_taiyo_bits_45g": {
      "id": "fish_food_taiyo_bits_45g",
      "name": "Taiyo Bits Complete (For All Tropical Fish) 45g",
      "price": 150,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Bits premium bite-sized nutrition for Discus, Angelfish, and tropical varieties.",
      "variant": "45g",
      "variants": [
        {
          "id": "45g",
          "name": "45g",
          "price": 150,
          "default": true
        }
      ],
      "features": [
        "Staple bite-sized formulation for mid-level aquarium fish",
        "Rich in astaxanthin and omega-3 fatty acids",
        "Actual store price: ₹150",
        "Verified store availability at UR WORLD AQUARIUM"
      ]
    },
    "fish_food_taiyo_guppy_bits_45g": {
      "id": "fish_food_taiyo_guppy_bits_45g",
      "name": "Taiyo Guppy Bits 45g",
      "price": 100,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Guppy Bits formulated for livebearers with natural colour enhancers and essential vitamins for vivid tails.",
      "variant": "45g",
      "variants": [
        {
          "id": "45g",
          "name": "45g",
          "price": 100,
          "default": true
        }
      ],
      "features": [
        "Specialized livebearer formula for guppies, mollies, and platies",
        "Improves fertility, fry health, and tail spread",
        "Actual store price: ₹100",
        "Prompt delivery support by UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_taiyo_micro_pellet_45g": {
      "id": "fish_food_taiyo_micro_pellet_45g",
      "name": "Taiyo Micro Pellet (For All Small-Mouthed Fish) 45g",
      "price": 100,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Micro Pellets for tetras, barbs, danios, and small community fish.",
      "variant": "45g",
      "variants": [
        {
          "id": "45g",
          "name": "45g",
          "price": 100,
          "default": true
        }
      ],
      "features": [
        "Micro pellet size for easy ingestion by young and small fish",
        "Enriched with spirulina for bright radiant body colours",
        "Actual store price: ₹100",
        "Direct store pickup and doorstep dispatch"
      ]
    },
    "fish_food_taiyo_bits_70g": {
      "id": "fish_food_taiyo_bits_70g",
      "name": "Taiyo Bits Complete (For All Tropical Fish) 70g",
      "price": 250,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Bits 70g granular daily nutrition for colourful tropical aquariums.",
      "variant": "70g",
      "variants": [
        {
          "id": "70g",
          "name": "70g",
          "price": 250,
          "default": true
        }
      ],
      "features": [
        "Mid-size canister for community fish keeping",
        "High vitamin stabilization protects immune system",
        "Actual store price: ₹250",
        "Stocked at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_hallofeed_tubifex_40g": {
      "id": "fish_food_hallofeed_tubifex_40g",
      "name": "Hallofeed Freeze-Dried Tubifex Worms (For All Tropical Fish) 40g",
      "price": 280,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Hallofeed freeze-dried Tubifex worms cubes. 100% natural pure protein treat for freshwater fish, conditioning breeders, and growing juveniles.",
      "variant": "40g",
      "variants": [
        {
          "id": "40g",
          "name": "40g",
          "price": 280,
          "default": true
        }
      ],
      "features": [
        "100% pure freeze-dried Tubifex worms free from pathogens",
        "Can be pressed against aquarium glass for interactive feeding",
        "Actual store price: ₹280",
        "Irresistible natural treat for Bettas, Cichlids, and Tetras"
      ]
    },
    "fish_food_xing_shrimp_e_45g": {
      "id": "fish_food_xing_shrimp_e_45g",
      "name": "Xing Shrimp-E Natural Fish Food 45g",
      "price": 600,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Xing Shrimp-E 100% freeze-dried natural shrimp packed with natural astaxanthin for explosive colour development in Arowanas, Flowerhorns, and predatory fish.",
      "variant": "45g",
      "variants": [
        {
          "id": "45g",
          "name": "45g",
          "price": 600,
          "default": true
        }
      ],
      "features": [
        "Whole freeze-dried wild shrimp treat",
        "Natural astaxanthin gives intense red and orange pigmentation",
        "Actual store price: ₹600",
        "Owner verified feed from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_zewa_cichlid_bites_45g": {
      "id": "fish_food_zewa_cichlid_bites_45g",
      "name": "Zewa Feeds Cichlid Bites (For Cichlids) 45g",
      "price": 130,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Zewa Cichlid Bites nutrient-dense daily pellets for dwarf and large cichlids, promoting vibrant coloration and healthy metabolism.",
      "variant": "45g",
      "variants": [
        {
          "id": "45g",
          "name": "45g",
          "price": 130,
          "default": true
        }
      ],
      "features": [
        "High acceptance floating cichlid bites",
        "Strengthens digestion and prevents bloat",
        "Actual store price: ₹130",
        "Available immediately at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_zewa_guppy_bites_45g": {
      "id": "fish_food_zewa_guppy_bites_45g",
      "name": "Zewa Feeds Guppy Bites (For Guppies) 45g",
      "price": 130,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Zewa Guppy Bites micro food formulated to enhance vitality, colour depth, and rapid fin formation in fancy guppies and livebearers.",
      "variant": "45g",
      "variants": [
        {
          "id": "45g",
          "name": "45g",
          "price": 130,
          "default": true
        }
      ],
      "features": [
        "Tailor-made bite size for livebearer mouths",
        "Contains spirulina and carotenoids for shimmering tail colors",
        "Actual store price: ₹130",
        "Fast WhatsApp assistance from UR WORLD AQUARIUM"
      ]
    },
    "fish_food_taiyo_aini_fast_growth_110g": {
      "id": "fish_food_taiyo_aini_fast_growth_110g",
      "name": "Taiyo Aini Fast Growth 100+10g (Free)",
      "price": 180,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Aini Fast Growth special promotional pack (100g + 10g extra free) for rapid body growth, strong skeletal development, and vigour.",
      "variant": "100+10g (110g)",
      "variants": [
        {
          "id": "110g",
          "name": "100+10g (110g)",
          "price": 180,
          "default": true
        }
      ],
      "features": [
        "High-energy growth formula with 10% bonus feed",
        "Accelerates safe, healthy weight gain and fin development",
        "Actual store price: ₹180",
        "Authentic store item from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_taiyo_aini_fast_growth_60g": {
      "id": "fish_food_taiyo_aini_fast_growth_60g",
      "name": "Taiyo Aini Fast Growth 60g",
      "price": 120,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Aini Fast Growth 60g high-grade formula for baby, juvenile, and growing fish.",
      "variant": "60g",
      "variants": [
        {
          "id": "60g",
          "name": "60g",
          "price": 120,
          "default": true
        }
      ],
      "features": [
        "Nutrient-packed mini formula for juvenile fish growth",
        "Fortified with essential vitamins and digestive enzymes",
        "Actual store price: ₹120",
        "In stock at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "fish_food_taiyo_aini_fast_growth_363g": {
      "id": "fish_food_taiyo_aini_fast_growth_363g",
      "name": "Taiyo Aini Fast Growth 330+33g (Free)",
      "price": 350,
      "category": "aquarium",
      "categoryName": "Fish Food",
      "filterCategory": "fish-food",
      "subcategory": "Specialized Foods",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Taiyo Aini Fast Growth jumbo bonus pack (330g + 33g free) for sustained healthy growth and robust vitality across all aquarium fishes.",
      "variant": "330+33g (363g)",
      "variants": [
        {
          "id": "363g",
          "name": "330+33g (363g)",
          "price": 350,
          "default": true
        }
      ],
      "features": [
        "Jumbo 363g economy tub with 10% bonus contents",
        "Optimal balance of proteins, lipids, and minerals",
        "Actual store price: ₹350",
        "Direct owner fulfillment from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "stone_black": {
      "id": "stone_black",
      "name": "Black Stone",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Stones",
      "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Premium natural black aquarium stones for aquascaping and bottom substrate decoration. Smooth, inert, and safe for all freshwater and planted tanks.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Natural decorative black stones for planted and biotope aquariums",
        "100% aquarium safe, non-toxic and water-parameter neutral",
        "Enquire on WhatsApp for bulk quantity, bag weight, and current stock",
        "Immediate doorstep delivery confirmation across Bangalore & India"
      ]
    },
    "stone_white": {
      "id": "stone_white",
      "name": "White Stone",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Stones",
      "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Natural white aquarium stones, clean and smooth, ideal for freshwater aquariums, cichlid tanks, and decorative fish bowls.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Bright natural white stones providing striking visual contrast",
        "Pre-washed and safe for aquatic environments",
        "Enquire on WhatsApp for available stone sizes and pack pricing",
        "Direct owner assistance from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "stone_brown": {
      "id": "stone_brown",
      "name": "Brown Stone",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Stones",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Earthy natural brown stones creating realistic riverbed style landscapes for planted and freshwater community aquariums.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Natural warm earth tones for authentic riverbed aquascapes",
        "Provides natural hiding spots and anchor surfaces for aquatic plants",
        "Enquire on WhatsApp for weight options and current pricing",
        "Reliable dispatch and safe packing by UR WORLD AQUARIUM"
      ]
    },
    "stone_mixed_colour": {
      "id": "stone_mixed_colour",
      "name": "Mixed Colour Stone",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Stones",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Vibrant assorted mixed colour stones for decorative aquariums, child-friendly setups, and ornamental tabletop bowls.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Assorted cheerful multi-colour stones to brighten any fish habitat",
        "Smooth edges safe for delicate fins and bottom dwellers",
        "Enquire on WhatsApp for custom bulk or small packet orders",
        "Fast response from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "pebbles_glass": {
      "id": "pebbles_glass",
      "name": "Glass Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Packet",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Translucent decorative glass pebbles for fish bowls, nano tanks, and decorative water features. Beautiful light-refracting luster.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Packet",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "High quality non-toxic glass pebbles with rounded smooth surface",
        "Refracts light beautifully under aquarium LED illumination",
        "Enquire on WhatsApp for color shades and packet quantities",
        "Authentic store item from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "pebbles_natural": {
      "id": "pebbles_natural",
      "name": "Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Natural smooth river pebbles for substrate decoration, biotope aquariums, and biological filtration beds.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Authentic smooth riverbed gravel pebbles",
        "Inert and completely safe for freshwater tropical tanks",
        "Enquire on WhatsApp for size grades and current price",
        "Fast delivery support by UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "pebbles_polished": {
      "id": "pebbles_polished",
      "name": "Polished Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "High-shine tumble-polished decorative pebbles for elegant, modern aquatic aquascapes and indoor water gardens.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Tumble-polished smooth exterior with glossy aquatic sheen",
        "Completely smooth edges preventing fin damage to fish",
        "Enquire on WhatsApp for bag sizes and pricing",
        "Owner verified quality at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "pebbles_white": {
      "id": "pebbles_white",
      "name": "White Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Snow-white smooth polished pebbles creating stunning contrast against lush green aquatic plants and colorful tropical fish.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Pristine snow-white decorative pebbles for luxury aquariums",
        "Enhances lighting reflection throughout the aquarium",
        "Enquire on WhatsApp for exact kg requirements and pricing",
        "Immediate stock availability check on WhatsApp"
      ]
    },
    "pebbles_black": {
      "id": "pebbles_black",
      "name": "Black Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Sleek jet-black rounded pebbles for sophisticated, high-contrast aquascapes that highlight vivid fish coloration.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Deep jet black tone provides dramatic contrast for fish and shrimp",
        "Rounded and smooth, safe for bottom foraging species",
        "Enquire on WhatsApp for available quantities and prices",
        "Verified stock at UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "pebbles_brown": {
      "id": "pebbles_brown",
      "name": "Brown Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Warm natural earth-tone brown river pebbles for authentic biotope setups, cichlid tanks, and natural community habitats.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Warm earthy tones mimic natural Amazonian and river environments",
        "Pre-washed natural material safe for delicate aquarium fauna",
        "Enquire on WhatsApp for bag size and pricing confirmation",
        "Prompt delivery support from UR WORLD AQUARIUM & PET SHOP"
      ]
    },
    "pebbles_mixed_colour": {
      "id": "pebbles_mixed_colour",
      "name": "Mixed Colour Pebbles",
      "price": 0,
      "isEnquiry": true,
      "unit": "Per Kg / Bag",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Pebbles",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "desc": "Colourful smooth assorted pebbles adding cheerful energy and aesthetic brilliance to home aquariums and decorative bowls.",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Pack",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Multi-hued pebble blend designed for lively aquarium aesthetics",
        "Colourfast, non-leaching and safe for fresh and salt water",
        "Enquire on WhatsApp for pricing and order placement",
        "UR WORLD AQUARIUM & PET SHOP direct customer support"
      ]
    },
    "tank_indian_12x6x6": {
      "id": "tank_indian_12x6x6",
      "name": "Fish Tank (12x6x6) with Tank Top",
      "price": 450,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Compact clear-glass Indian aquarium tank (12x6x6 inches) with protective tank top, ideal for Betta or desktop aquascaping.",
      "dimensions": "12x6x6 inches",
      "features": [
        "Dimensions: 12x6x6 inches with fitted protective tank top",
        "Durable clear-glass construction with sealed leakproof seams",
        "Actual store price: ₹450",
        "Verified stock at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "12x6x6 inches",
          "price": 450,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "12x6x6 inches"
    },
    "tank_indian_12x6x8": {
      "id": "tank_indian_12x6x8",
      "name": "Fish Tank (12x6x8) with Tank Top",
      "price": 600,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Clear-glass Indian aquarium tank (12x6x8 inches) with protective top lid for nano setups and small freshwater fish.",
      "dimensions": "12x6x8 inches",
      "features": [
        "Dimensions: 12x6x8 inches with top cover lid",
        "Extra height for enhanced aquascaping and plant growth",
        "Actual store price: ₹600",
        "Direct pickup & delivery from UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "12x6x8 inches",
          "price": 600,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "12x6x8 inches"
    },
    "tank_indian_18x9x12": {
      "id": "tank_indian_18x9x12",
      "name": "Fish Tank (18x9x12) with Tank Top",
      "price": 950,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Spacious starter Indian aquarium tank (18x9x12 inches) with fitted tank top, ideal for community fish and live plants.",
      "dimensions": "18x9x12 inches",
      "features": [
        "Dimensions: 18x9x12 inches with matching tank top",
        "Balanced footprint perfect for Tetras, Guppies, and live plants",
        "Actual store price: ₹950",
        "Safe packaging and prompt customer assistance"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "18x9x12 inches",
          "price": 950,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "18x9x12 inches"
    },
    "tank_indian_24x12x12": {
      "id": "tank_indian_24x12x12",
      "name": "Fish Tank (24x12x12) with Tank Top",
      "price": 1500,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Classic 2-foot Indian aquarium tank (24x12x12 inches) with fitted tank top for planted aquascapes and tropical fish.",
      "dimensions": "24x12x12 inches",
      "features": [
        "Standard 2-foot display tank: 24x12x12 inches with top cover",
        "Generous surface area for optimal gas exchange and water stability",
        "Actual store price: ₹1,500",
        "UR WORLD AQUARIUM & PET SHOP verified product"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "24x12x12 inches",
          "price": 1500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "24x12x12 inches"
    },
    "tank_indian_24x12x15": {
      "id": "tank_indian_24x12x15",
      "name": "Fish Tank (24x12x15) with Tank Top",
      "price": 1850,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Extra-height 2-foot Indian glass tank (24x12x15 inches) with top lid, providing greater water volume and vertical aquascaping.",
      "dimensions": "24x12x15 inches",
      "features": [
        "High-profile 2-foot tank: 24x12x15 inches with fitted lid",
        "Greater water volume accommodates vibrant mid-water shoalers",
        "Actual store price: ₹1,850",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "24x12x15 inches",
          "price": 1850,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "24x12x15 inches"
    },
    "tank_indian_30x12x15_8mm": {
      "id": "tank_indian_30x12x15_8mm",
      "name": "Fish Tank (30x12x15) with Tank Top (8mm)",
      "price": 2750,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Heavy-duty 2.5-foot Indian glass tank (30x12x15 inches) built with durable 8mm glass and fitted tank top.",
      "dimensions": "30x12x15 inches (8mm Glass)",
      "features": [
        "Robust 8mm high-grade glass construction for added strength",
        "Dimensions: 30x12x15 inches with protective tank top",
        "Actual store price: ₹2,750",
        "Supported by UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "30x12x15 inches (8mm Glass)",
          "price": 2750,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "30x12x15 inches (8mm Glass)"
    },
    "tank_indian_36x15x18_8mm": {
      "id": "tank_indian_36x15x18_8mm",
      "name": "Fish Tank (36x15x18) with Tank Top (8mm)",
      "price": 5000,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Premium 3-foot wide-body Indian aquarium tank (36x15x18 inches) crafted with 8mm glass and top lid for display biotopes.",
      "dimensions": "36x15x18 inches (8mm Glass)",
      "features": [
        "Extra wide-body dimensions: 36x15x18 inches with fitted top",
        "Engineered with 8mm glass for superior pressure endurance",
        "Actual store price: ₹5,000",
        "Ideal for Cichlids, Goldfish and expansive natural layouts"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "36x15x18 inches (8mm Glass)",
          "price": 5000,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "36x15x18 inches (8mm Glass)"
    },
    "tank_indian_36x12x15_8mm": {
      "id": "tank_indian_36x12x15_8mm",
      "name": "Fish Tank (36x12x15) with Tank Top (8mm)",
      "price": 3950,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Standard 3-foot Indian aquarium tank (36x12x15 inches) crafted with sturdy 8mm glass and fitted tank top.",
      "dimensions": "36x12x15 inches (8mm Glass)",
      "features": [
        "Classic 3-foot display size: 36x12x15 inches with 8mm glass",
        "Comes complete with protective tank top",
        "Actual store price: ₹3,950",
        "Quality checked at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "36x12x15 inches (8mm Glass)",
          "price": 3950,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "36x12x15 inches (8mm Glass)"
    },
    "tank_indian_48x12x15_8mm": {
      "id": "tank_indian_48x12x15_8mm",
      "name": "Fish Tank (48x12x15) with Tank Top (8mm)",
      "price": 6000,
      "category": "aquarium",
      "categoryName": "Fish Tank",
      "filterCategory": "fish-tank",
      "subcategory": "Indian Tank",
      "image": "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80",
      "desc": "Impressive 4-foot Indian show tank (48x12x15 inches) built with 8mm glass and protective top lid for expansive aquatic communities.",
      "dimensions": "48x12x15 inches (8mm Glass)",
      "features": [
        "Expansive 4-foot showcase tank: 48x12x15 inches with top lid",
        "Constructed with premium 8mm structural glass",
        "Actual store price: ₹6,000",
        "Safe local delivery and handling support"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1544943910-4c1dc44a04d5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "48x12x15 inches (8mm Glass)",
          "price": 6000,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "48x12x15 inches (8mm Glass)"
    },
    "tank_imported_6x8x8_set": {
      "id": "tank_imported_6x8x8_set",
      "name": "Fish Tank (6x8x8) with Tank Top, Light & Filter Set",
      "price": 1500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Complete all-in-one imported nano aquarium kit (6x8x8 inches) featuring built-in tank top, overhead LED lighting, and internal filtration.",
      "dimensions": "6x8x8 inches",
      "features": [
        "All-in-one complete imported setup: Tank + Top + Light + Filter",
        "Compact nano footprint (6x8x8 inches) perfect for desks and bedside",
        "Actual store price: ₹1,500",
        "Plug & play setup backed by UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6x8x8 inches",
          "price": 1500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6x8x8 inches"
    },
    "tank_pf_200": {
      "id": "tank_pf_200",
      "name": "PF 200",
      "price": 1300,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported curved-edge mini glass aquarium PF 200 with integrated hood, filtration, and lighting.",
      "model": "PF 200",
      "features": [
        "Imported PF Series model PF 200",
        "Curved seamless front glass corners for panoramic view",
        "Actual store price: ₹1,300",
        "Integrated filtration and hood lighting included"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 200",
          "price": 1300,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 200"
    },
    "tank_pf_235": {
      "id": "tank_pf_235",
      "name": "PF 235",
      "price": 1800,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported curved-glass aquarium PF 235 featuring an integrated hood system, lighting, and internal filter.",
      "model": "PF 235",
      "features": [
        "Model: PF 235 imported aquarium",
        "Curved front edge with built-in top hood system",
        "Actual store price: ₹1,800",
        "Tested and verified by UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 235",
          "price": 1800,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 235"
    },
    "tank_pf_285": {
      "id": "tank_pf_285",
      "name": "PF 285",
      "price": 2450,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported curved-glass aquarium PF 285 equipped with matching top cover, pump filter, and LED illumination.",
      "model": "PF 285",
      "features": [
        "Model: PF 285 imported curved tank",
        "Integrated high-output lighting and quiet internal filter",
        "Actual store price: ₹2,450",
        "Ready to scape and stock"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 285",
          "price": 2450,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 285"
    },
    "tank_pf_385": {
      "id": "tank_pf_385",
      "name": "PF 385",
      "price": 3400,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Mid-sized imported aquarium PF 385 with curved seamless front corners, complete with filtration and hood light.",
      "model": "PF 385",
      "features": [
        "Model: PF 385 curved glass system",
        "Seamless bent glass front for unhindered aquatic observation",
        "Actual store price: ₹3,400",
        "Includes multi-stage filtration compartment"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 385",
          "price": 3400,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 385"
    },
    "tank_pf_420": {
      "id": "tank_pf_420",
      "name": "PF 420",
      "price": 4500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported showcase aquarium PF 420 featuring high-clarity curved glass, top filtration system, and hood lighting.",
      "model": "PF 420",
      "features": [
        "Model: PF 420 luxury imported aquarium",
        "Stately proportions with integrated high-efficiency pump and light",
        "Actual store price: ₹4,500",
        "Premium finish from UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 420",
          "price": 4500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 420"
    },
    "tank_pf_520": {
      "id": "tank_pf_520",
      "name": "PF 520",
      "price": 4900,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported display aquarium PF 520 with spacious water capacity, sleek curved glass front, and complete filtration set.",
      "model": "PF 520",
      "features": [
        "Model: PF 520 imported aquarium setup",
        "Enhanced depth and height for elaborate aquascapes",
        "Actual store price: ₹4,900",
        "Complete set ready for immediate setup"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 520",
          "price": 4900,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 520"
    },
    "tank_pf_620": {
      "id": "tank_pf_620",
      "name": "PF 620",
      "price": 5500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Large imported curved-glass aquarium PF 620 featuring top filtration compartment, LED lighting hood, and seamless finish.",
      "model": "PF 620",
      "features": [
        "Model: PF 620 large imported showcase aquarium",
        "Panoramic bent-glass front without obstructive corner seams",
        "Actual store price: ₹5,500",
        "Comprehensive warranty support from UR WORLD AQUARIUM"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "PF 620",
          "price": 5500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "PF 620"
    },
    "tank_rs_230": {
      "id": "tank_rs_230",
      "name": "RS 230",
      "price": 1700,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported RS Series curved-glass desktop aquarium RS 230 with built-in filtration and overhead lighting.",
      "model": "RS 230",
      "features": [
        "Model: RS 230 imported series",
        "Curved front edges and matching hood system",
        "Actual store price: ₹1,700",
        "Authentic RS Series equipment"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 230",
          "price": 1700,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 230"
    },
    "tank_rs_300": {
      "id": "tank_rs_300",
      "name": "RS 300",
      "price": 2200,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported RS Series aquarium RS 300 with seamless panoramic glass view, top filtration system, and lighting.",
      "model": "RS 300",
      "features": [
        "Model: RS 300 imported series",
        "Fitted with quiet top-mounted trickle filtration and bright light",
        "Actual store price: ₹2,200",
        "Verified stock at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 300",
          "price": 2200,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 300"
    },
    "tank_rs_380": {
      "id": "tank_rs_380",
      "name": "RS 380",
      "price": 3600,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported RS Series curved-glass tank RS 380 equipped with high-efficiency filtration and bright LED hood.",
      "model": "RS 380",
      "features": [
        "Model: RS 380 imported series",
        "Seamless bent glass front for vivid aquatic viewing",
        "Actual store price: ₹3,600",
        "Complete with motor pump and lighting bar"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 380",
          "price": 3600,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 380"
    },
    "tank_rs_480": {
      "id": "tank_rs_480",
      "name": "RS 480",
      "price": 4800,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported panoramic aquarium RS 480 with curved corners, complete overhead trickle filter, and hood system.",
      "model": "RS 480",
      "features": [
        "Model: RS 480 imported aquarium",
        "Wide panoramic front glass with matching hood and filter",
        "Actual store price: ₹4,800",
        "Direct store pickup and delivery support"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 480",
          "price": 4800,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 480"
    },
    "tank_rs_580": {
      "id": "tank_rs_580",
      "name": "RS 580",
      "price": 5500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Spacious imported aquarium RS 580 featuring panoramic viewing, integrated filtration, and multi-mode lighting.",
      "model": "RS 580",
      "features": [
        "Model: RS 580 imported series",
        "Heavy-duty top filter box with ample media capacity",
        "Actual store price: ₹5,500",
        "Ideal for community fish and live planted aquascapes"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 580",
          "price": 5500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 580"
    },
    "tank_rs_600_b": {
      "id": "tank_rs_600_b",
      "name": "RS 600 B",
      "price": 6200,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Premium imported aquarium RS 600 B with curved seamless glass, built-in trickle filter, and durable top hood.",
      "model": "RS 600 B",
      "features": [
        "Model: RS 600 B premium curved aquarium",
        "Contemporary black-trim hood with integrated filtration",
        "Actual store price: ₹6,200",
        "Quality certified by UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 600 B",
          "price": 6200,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 600 B"
    },
    "tank_rs_700_el": {
      "id": "tank_rs_700_el",
      "name": "RS 700 EL",
      "price": 7500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Imported electronic series aquarium RS 700 EL featuring advanced LED lighting, robust top filter, and large capacity.",
      "model": "RS 700 EL",
      "features": [
        "Model: RS 700 EL luxury imported series",
        "Electronic lighting touch controls and heavy-duty biological filter",
        "Actual store price: ₹7,500",
        "Stunning centerpiece for home and office living rooms"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 700 EL",
          "price": 7500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 700 EL"
    },
    "tank_rs_800_el": {
      "id": "tank_rs_800_el",
      "name": "RS 800 EL",
      "price": 9500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Large showcase imported aquarium RS 800 EL with curved glass construction, high-flow filtration, and bright illumination.",
      "model": "RS 800 EL",
      "features": [
        "Model: RS 800 EL imported series",
        "80cm width showcase display with curved corner glass",
        "Actual store price: ₹9,500",
        "Full warranty support from UR WORLD AQUARIUM"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 800 EL",
          "price": 9500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 800 EL"
    },
    "tank_rs_1000_el": {
      "id": "tank_rs_1000_el",
      "name": "RS 1000 EL",
      "price": 14500,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Grand 1-meter imported luxury aquarium RS 1000 EL with curved panoramic front, heavy-duty filtration, and modern lighting.",
      "model": "RS 1000 EL",
      "features": [
        "Flagship 1-meter imported aquarium: Model RS 1000 EL",
        "High-output trickle filter and dual spectrum lighting",
        "Actual store price: ₹14,500",
        "White glove doorstep delivery available"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 1000 EL",
          "price": 14500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 1000 EL"
    },
    "tank_rs_1200_el": {
      "id": "tank_rs_1200_el",
      "name": "RS 1200 EL",
      "price": 18000,
      "category": "aquarium",
      "categoryName": "Imported Tank",
      "filterCategory": "imported-tank",
      "subcategory": "Imported Tank",
      "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "desc": "Flagship 1.2-meter imported luxury display aquarium RS 1200 EL with expansive water volume and top-tier filtration.",
      "model": "RS 1200 EL",
      "features": [
        "Expansive 1.2-meter showcase aquarium: Model RS 1200 EL",
        "Commercial-grade construction with seamless curved glass",
        "Actual store price: ₹18,000",
        "Exclusive display setup from UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 1200 EL",
          "price": 18000,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 1200 EL"
    },
    "fish_bowl_4_inch": {
      "id": "fish_bowl_4_inch",
      "name": "Fish Bowl 4 Inch",
      "price": 59,
      "category": "aquarium",
      "categoryName": "Fish Bowl",
      "filterCategory": "fish-bowl",
      "subcategory": "Fish Bowl",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "desc": "Clear glass round fish bowl (4 inch diameter) for miniature aquatic accents and desktop ornamentation.",
      "dimensions": "4 Inch",
      "features": [
        "Diameter: 4 Inch clear glass bowl",
        "Compact round profile suitable for desk decor",
        "Actual store price: ₹59",
        "Quality checked at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "4 Inch",
          "price": 59,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "4 Inch"
    },
    "fish_bowl_6_inch": {
      "id": "fish_bowl_6_inch",
      "name": "Fish Bowl 6 Inch",
      "price": 99,
      "category": "aquarium",
      "categoryName": "Fish Bowl",
      "filterCategory": "fish-bowl",
      "subcategory": "Fish Bowl",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "desc": "Clear spherical glass fish bowl (6 inch diameter) for small decorative plants and aquatic displays.",
      "dimensions": "6 Inch",
      "features": [
        "Diameter: 6 Inch round glass bowl",
        "High-transparency glass with smooth rim",
        "Actual store price: ₹99",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6 Inch",
          "price": 99,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6 Inch"
    },
    "fish_bowl_8_inch": {
      "id": "fish_bowl_8_inch",
      "name": "Fish Bowl 8 Inch",
      "price": 159,
      "category": "aquarium",
      "categoryName": "Fish Bowl",
      "filterCategory": "fish-bowl",
      "subcategory": "Fish Bowl",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "desc": "Classic clear glass fish bowl (8 inch diameter) suitable for single small fish setups and planted nano spheres.",
      "dimensions": "8 Inch",
      "features": [
        "Diameter: 8 Inch round glass bowl",
        "Popular size for miniature aquatic spheres and floating plants",
        "Actual store price: ₹159",
        "UR WORLD AQUARIUM & PET SHOP certified"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "8 Inch",
          "price": 159,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "8 Inch"
    },
    "fish_bowl_10_inch": {
      "id": "fish_bowl_10_inch",
      "name": "Fish Bowl 10 Inch",
      "price": 349,
      "category": "aquarium",
      "categoryName": "Fish Bowl",
      "filterCategory": "fish-bowl",
      "subcategory": "Fish Bowl",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "desc": "Generous clear glass fish bowl (10 inch diameter) offering clear 360-degree viewing.",
      "dimensions": "10 Inch",
      "features": [
        "Diameter: 10 Inch round bowl",
        "Sturdy thick-walled glass with polished edges",
        "Actual store price: ₹349",
        "Safe shipping and pickup support"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "10 Inch",
          "price": 349,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "10 Inch"
    },
    "fish_bowl_12_inch": {
      "id": "fish_bowl_12_inch",
      "name": "Fish Bowl 12 Inch",
      "price": 495,
      "category": "aquarium",
      "categoryName": "Fish Bowl",
      "filterCategory": "fish-bowl",
      "subcategory": "Fish Bowl",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "desc": "Large heavy-duty glass fish bowl (12 inch diameter) for stunning desktop biotope globes.",
      "dimensions": "12 Inch",
      "features": [
        "Diameter: 12 Inch large round glass bowl",
        "Maximum water capacity in a traditional spherical design",
        "Actual store price: ₹495",
        "Available at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "12 Inch",
          "price": 495,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "12 Inch"
    },
    "wall_tank_4_inch": {
      "id": "wall_tank_4_inch",
      "name": "Wall-Mounted Tank 4 Inch",
      "price": 250,
      "category": "aquarium",
      "categoryName": "Wall Tank",
      "filterCategory": "wall-tank",
      "subcategory": "Wall Mounted Tank",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "desc": "Modern wall-hanging round aquarium (4 inch) for space-saving vertical wall decor.",
      "dimensions": "4 Inch",
      "features": [
        "Size: 4 Inch wall-mounted bubble tank",
        "Durable clear acrylic with mounting slot",
        "Actual store price: ₹250",
        "Space-saving contemporary aquatic decor"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "4 Inch",
          "price": 250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "4 Inch"
    },
    "wall_tank_6_inch": {
      "id": "wall_tank_6_inch",
      "name": "Wall-Mounted Tank 6 Inch",
      "price": 350,
      "category": "aquarium",
      "categoryName": "Wall Tank",
      "filterCategory": "wall-tank",
      "subcategory": "Wall Mounted Tank",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "desc": "Sleek wall-mounted bubble aquarium (6 inch) creating a living art portrait on any interior wall.",
      "dimensions": "6 Inch",
      "features": [
        "Size: 6 Inch circular wall aquarium",
        "Clear optical grade acrylic with easy-hook mount",
        "Actual store price: ₹350",
        "Verified stock at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6 Inch",
          "price": 350,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6 Inch"
    },
    "wall_tank_8_inch": {
      "id": "wall_tank_8_inch",
      "name": "Wall-Mounted Tank 8 Inch",
      "price": 550,
      "category": "aquarium",
      "categoryName": "Wall Tank",
      "filterCategory": "wall-tank",
      "subcategory": "Wall Mounted Tank",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "desc": "Wall-hanging spherical display aquarium (8 inch) with pre-drilled wall mounting hook point.",
      "dimensions": "8 Inch",
      "features": [
        "Size: 8 Inch round wall-mounted aquarium",
        "Ample room for aquatic greenery and colorful stones",
        "Actual store price: ₹550",
        "Quick wall installation system"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "8 Inch",
          "price": 550,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "8 Inch"
    },
    "wall_tank_10_inch": {
      "id": "wall_tank_10_inch",
      "name": "Wall-Mounted Tank 10 Inch",
      "price": 750,
      "category": "aquarium",
      "categoryName": "Wall Tank",
      "filterCategory": "wall-tank",
      "subcategory": "Wall Mounted Tank",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "desc": "Spacious wall-mounted acrylic tank (10 inch) for aquatic greenery and eye-catching living wall decor.",
      "dimensions": "10 Inch",
      "features": [
        "Size: 10 Inch panoramic wall aquarium",
        "Heavy-duty transparent acrylic with wide feeding aperture",
        "Actual store price: ₹750",
        "UR WORLD AQUARIUM & PET SHOP verified item"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "10 Inch",
          "price": 750,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "10 Inch"
    },
    "wall_tank_12_inch": {
      "id": "wall_tank_12_inch",
      "name": "Wall-Mounted Tank 12 Inch",
      "price": 850,
      "category": "aquarium",
      "categoryName": "Wall Tank",
      "filterCategory": "wall-tank",
      "subcategory": "Wall Mounted Tank",
      "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "desc": "Large wall-mounted bubble aquarium (12 inch) providing a dramatic panoramic living focal point.",
      "dimensions": "12 Inch",
      "features": [
        "Size: 12 Inch large wall display aquarium",
        "Stunning wall-art focal point for living rooms and offices",
        "Actual store price: ₹850",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "12 Inch",
          "price": 850,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "12 Inch"
    },
    "fish_net_3_inch": {
      "id": "fish_net_3_inch",
      "name": "Fish Net 3 Inch",
      "price": 50,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Fine mesh soft catch fish net (3 inch) for delicate fry, small tetras, and nano aquarium maintenance.",
      "dimensions": "3 Inch",
      "features": [
        "3 Inch ultra-soft fine mesh net",
        "Rust-resistant vinyl-coated wire handle",
        "Actual store price: ₹50",
        "Safe for delicate fins and juvenile fish"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "3 Inch",
          "price": 50,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "3 Inch"
    },
    "fish_net_4_inch": {
      "id": "fish_net_4_inch",
      "name": "Fish Net 4 Inch",
      "price": 80,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Durable fine mesh fish net (4 inch) with coated handle for catching small freshwater fish without injury.",
      "dimensions": "4 Inch",
      "features": [
        "4 Inch durable soft mesh net",
        "Comfortable grip handle with hanging loop",
        "Actual store price: ₹80",
        "UR WORLD AQUARIUM & PET SHOP standard supply"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "4 Inch",
          "price": 80,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "4 Inch"
    },
    "fish_net_5_inch": {
      "id": "fish_net_5_inch",
      "name": "Fish Net 5 Inch",
      "price": 100,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Standard aquarium fish net (5 inch) with reinforced handle for safe transfer and tank cleaning.",
      "dimensions": "5 Inch",
      "features": [
        "5 Inch multi-purpose fish net",
        "Reinforced braided wire handle for added strength",
        "Actual store price: ₹100",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "5 Inch",
          "price": 100,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "5 Inch"
    },
    "fish_net_6_inch": {
      "id": "fish_net_6_inch",
      "name": "Fish Net 6 Inch",
      "price": 120,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Versatile catch net (6 inch) with flexible fine mesh for community and medium-sized aquarium fish.",
      "dimensions": "6 Inch",
      "features": [
        "6 Inch wide-mouth catch net",
        "Deep pocket design prevents active fish from jumping out",
        "Actual store price: ₹120",
        "Certified safe for all freshwater species"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6 Inch",
          "price": 120,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6 Inch"
    },
    "fish_net_8_inch": {
      "id": "fish_net_8_inch",
      "name": "Fish Net 8 Inch",
      "price": 150,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Deep-pocket fish net (8 inch) with heavy-duty handle for Goldfish, Cichlids, and quick tank maintenance.",
      "dimensions": "8 Inch",
      "features": [
        "8 Inch heavy-duty fish net",
        "Long sturdy handle reaching deep into 2-foot to 3-foot tanks",
        "Actual store price: ₹150",
        "UR WORLD AQUARIUM & PET SHOP verified item"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "8 Inch",
          "price": 150,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "8 Inch"
    },
    "fish_net_10_inch": {
      "id": "fish_net_10_inch",
      "name": "Fish Net 10 Inch",
      "price": 250,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Large heavy-duty fish net (10 inch) for large freshwater species, koi tanks, and pond setups.",
      "dimensions": "10 Inch",
      "features": [
        "10 Inch commercial-grade fish net",
        "Heavy-gauge reinforced triple wire handle",
        "Actual store price: ₹250",
        "Ideal for Oscars, Arowanas, and large Cichlids"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "10 Inch",
          "price": 250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "10 Inch"
    },
    "fish_net_12_inch": {
      "id": "fish_net_12_inch",
      "name": "Fish Net 12 Inch",
      "price": 300,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Fish Net",
      "image": "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80",
      "desc": "Extra-large commercial grade aquarium net (12 inch) for big Cichlids, Arowanas, and pond maintenance.",
      "dimensions": "12 Inch",
      "features": [
        "12 Inch extra-large display & pond net",
        "Extra deep soft mesh preventing stress and scale damage",
        "Actual store price: ₹300",
        "Stocked at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "12 Inch",
          "price": 300,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "12 Inch"
    },
    "air_pump_rs_180": {
      "id": "air_pump_rs_180",
      "name": "RS 180",
      "price": 250,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Compact high-efficiency aquarium air pump RS 180 providing steady aeration and silent operation.",
      "model": "RS 180",
      "features": [
        "Model: RS 180 compact single outlet air pump",
        "Low vibration rubber feet for quiet operation",
        "Actual store price: ₹250",
        "Reliable continuous oxygen supply"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 180",
          "price": 250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 180"
    },
    "air_pump_bl_106": {
      "id": "air_pump_bl_106",
      "name": "BL 106",
      "price": 220,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Reliable single-outlet air pump BL 106 for steady oxygenation in small and medium aquariums.",
      "model": "BL 106",
      "features": [
        "Model: BL 106 air pump",
        "Energy-saving motor delivering steady airflow",
        "Actual store price: ₹220",
        "Tested by UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BL 106",
          "price": 220,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BL 106"
    },
    "air_pump_dolphin_1502": {
      "id": "air_pump_dolphin_1502",
      "name": "Dolphin 1502",
      "price": 1200,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Heavy-duty dual outlet aquarium air pump Dolphin 1502 delivering strong pressure and quiet performance.",
      "model": "Dolphin 1502",
      "features": [
        "Model: Dolphin 1502 heavy-duty dual outlet pump",
        "Twin air outlets with adjustable output dial",
        "Actual store price: ₹1,200",
        "Long-life durable diaphragm mechanism"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "Dolphin 1502",
          "price": 1200,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "Dolphin 1502"
    },
    "air_pump_dolphin_1501": {
      "id": "air_pump_dolphin_1501",
      "name": "Dolphin 1501",
      "price": 950,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Powerful single outlet air pump Dolphin 1501 engineered for consistent airflow and longevity.",
      "model": "Dolphin 1501",
      "features": [
        "Model: Dolphin 1501 high performance pump",
        "High-pressure output suitable for deep tanks and airstones",
        "Actual store price: ₹950",
        "Official Dolphin aquatic product"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "Dolphin 1501",
          "price": 950,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "Dolphin 1501"
    },
    "filter_4w": {
      "id": "filter_4w",
      "name": "Filter 4W",
      "price": 300,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Energy-efficient 4W internal submersible filter providing biological and mechanical filtration for nano tanks.",
      "wattage": "4W",
      "features": [
        "Power rating: 4W low power consumption",
        "Includes mechanical sponge and aeration venture nozzle",
        "Actual store price: ₹300",
        "Ideal for nano tanks up to 1 foot"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "4W",
          "price": 300,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "4W"
    },
    "filter_6w": {
      "id": "filter_6w",
      "name": "Filter 6W",
      "price": 400,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Quiet 6W internal power filter with aerator venturi for 1-1.5ft freshwater aquariums.",
      "wattage": "6W",
      "features": [
        "Power: 6W submersible internal filter",
        "Smooth water flow with oxygen venture attachment",
        "Actual store price: ₹400",
        "UR WORLD AQUARIUM & PET SHOP tested"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6W",
          "price": 400,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6W"
    },
    "filter_15w": {
      "id": "filter_15w",
      "name": "Filter 15W",
      "price": 500,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Submersible 15W internal aquarium filter offering powerful circulation and crystal-clear water.",
      "wattage": "15W",
      "features": [
        "Power: 15W high-flow submersible filter",
        "Effective debris removal and dual chamber media compartment",
        "Actual store price: ₹500",
        "Suitable for 1.5ft to 2ft aquariums"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "15W",
          "price": 500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "15W"
    },
    "filter_18w": {
      "id": "filter_18w",
      "name": "Filter 18W",
      "price": 650,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "High-output 18W internal aquarium filter with dual action mechanical sponge filtration.",
      "wattage": "18W",
      "features": [
        "Power: 18W high circulation pump",
        "Dual filtration cups for extended maintenance intervals",
        "Actual store price: ₹650",
        "Verified stock at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "18W",
          "price": 650,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "18W"
    },
    "filter_25w": {
      "id": "filter_25w",
      "name": "Filter 25W",
      "price": 750,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Robust 25W internal power filter for medium to large aquariums with high bioload.",
      "wattage": "25W",
      "features": [
        "Power: 25W heavy duty submersible filter",
        "Powerful current creation and waste removal",
        "Actual store price: ₹750",
        "Suitable for 2.5ft to 3ft tanks"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "25W",
          "price": 750,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "25W"
    },
    "filter_30w": {
      "id": "filter_30w",
      "name": "Filter 30W",
      "price": 850,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Heavy-duty 30W internal aquarium power filter delivering vigorous water circulation and oxygenation.",
      "wattage": "30W",
      "features": [
        "Power: 30W high-capacity power filter",
        "Triple chamber sponge filtration for high bioload setups",
        "Actual store price: ₹850",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "30W",
          "price": 850,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "30W"
    },
    "filter_35w": {
      "id": "filter_35w",
      "name": "Filter 35W",
      "price": 900,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "High-performance 35W submersible power filter for large community and cichlid tanks.",
      "wattage": "35W",
      "features": [
        "Power: 35W maximum output internal filter",
        "Strong circulation prevents dead zones in 3ft-4ft tanks",
        "Actual store price: ₹900",
        "UR WORLD AQUARIUM certified quality"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "35W",
          "price": 900,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "35W"
    },
    "rs_liquid_filter_18w": {
      "id": "rs_liquid_filter_18w",
      "name": "RS Liquid Filter 18W",
      "price": 850,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "RS Series 18W top overhead liquid filter with spray bar for optimal biological and mechanical purification.",
      "wattage": "18W",
      "features": [
        "Model: RS Series 18W overhead trickle liquid filter",
        "Spray bar distribution over high-density filter wool and carbon",
        "Actual store price: ₹850",
        "Provides crystal clear oxygenated water"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "18W",
          "price": 850,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "18W"
    },
    "rs_liquid_filter_25w": {
      "id": "rs_liquid_filter_25w",
      "name": "RS Liquid Filter 25W",
      "price": 950,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "RS Series 25W overhead trickle filter system ensuring crystal clear, well-aerated aquarium water.",
      "wattage": "25W",
      "features": [
        "Model: RS Series 25W overhead liquid filter",
        "Large top filter box with ample media capacity",
        "Actual store price: ₹950",
        "Quality checked at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "25W",
          "price": 950,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "25W"
    },
    "rs_liquid_filter_35w": {
      "id": "rs_liquid_filter_35w",
      "name": "RS Liquid Filter 35W",
      "price": 1250,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Heavy-duty RS Series 35W top overhead liquid filter for heavy waste removal and rapid water cycling.",
      "wattage": "35W",
      "features": [
        "Model: RS Series 35W heavy-duty overhead liquid filter",
        "High flow rate suited for large display aquariums",
        "Actual store price: ₹1,250",
        "Complete set with pump, hoses, and filter box"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "35W",
          "price": 1250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "35W"
    },
    "hang_on_filter_rs_1000": {
      "id": "hang_on_filter_rs_1000",
      "name": "Hang-On Filter RS 1000",
      "price": 650,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Compact hang-on-back (HOB) waterfall filter RS 1000 for nano tanks and quiet surface skimming.",
      "model": "RS 1000",
      "features": [
        "Model: RS 1000 Hang-On Back (HOB) waterfall filter",
        "Saves internal tank space with clean external mount",
        "Actual store price: ₹650",
        "Adjustable flow control and surface skimming action"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 1000",
          "price": 650,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 1000"
    },
    "hang_on_filter_rs_2000": {
      "id": "hang_on_filter_rs_2000",
      "name": "Hang-On Filter RS 2000",
      "price": 850,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Hang-on-back waterfall filter RS 2000 with multi-stage filter cartridge and adjustable flow control.",
      "model": "RS 2000",
      "features": [
        "Model: RS 2000 external hang-on filter",
        "Multi-stage biological and mechanical filter cartridge",
        "Actual store price: ₹850",
        "Gentle waterfall return enriches water with dissolved oxygen"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 2000",
          "price": 850,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 2000"
    },
    "hang_on_filter_rs_3000": {
      "id": "hang_on_filter_rs_3000",
      "name": "Hang-On Filter RS 3000",
      "price": 1250,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Large capacity hang-on filter RS 3000 providing extensive media space and oxygenating waterfall return.",
      "model": "RS 3000",
      "features": [
        "Model: RS 3000 large hang-on filter",
        "High turnover rate with quiet energy-efficient motor",
        "Actual store price: ₹1,250",
        "Verified stock at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 3000",
          "price": 1250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 3000"
    },
    "hang_on_filter_rs_4000": {
      "id": "hang_on_filter_rs_4000",
      "name": "Hang-On Filter RS 4000",
      "price": 1350,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "High-capacity external hang-on filter RS 4000 with surface skimmer and multi-chamber media compartments.",
      "model": "RS 4000",
      "features": [
        "Model: RS 4000 premium high-capacity hang-on filter",
        "Integrated surface oil skimmer and multi-stage chambers",
        "Actual store price: ₹1,350",
        "Excellent choice for 2ft to 3ft planted and community tanks"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 4000",
          "price": 1350,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 4000"
    },
    "magnetic_glass_filter_rs_06": {
      "id": "magnetic_glass_filter_rs_06",
      "name": "Aquarium Magnetic Glass Filter RS 06",
      "price": 280,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Strong magnetic glass cleaner and internal algae scrubber RS 06 for nano glass tanks.",
      "model": "RS 06",
      "features": [
        "Model: RS 06 magnetic glass cleaner",
        "Clean aquarium glass effortlessly without wetting your hands",
        "Actual store price: ₹280",
        "Scratch-free cleaning pad for nano aquariums"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 06",
          "price": 280,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 06"
    },
    "magnetic_glass_filter_rs_09": {
      "id": "magnetic_glass_filter_rs_09",
      "name": "Aquarium Magnetic Glass Filter RS 09",
      "price": 480,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Medium magnetic glass cleaner RS 09 with comfortable grip and non-scratch cleaning pads.",
      "model": "RS 09",
      "features": [
        "Model: RS 09 medium magnetic glass cleaner",
        "Ergonomic handle with powerful neodymium magnets",
        "Actual store price: ₹480",
        "UR WORLD AQUARIUM & PET SHOP verified item"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 09",
          "price": 480,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 09"
    },
    "magnetic_glass_filter_rs_11": {
      "id": "magnetic_glass_filter_rs_11",
      "name": "Aquarium Magnetic Glass Filter RS 11",
      "price": 650,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Heavy-duty floating magnetic glass scrubber RS 11 for tanks with up to 10mm glass thickness.",
      "model": "RS 11",
      "features": [
        "Model: RS 11 heavy-duty magnetic cleaner",
        "Floating inner magnet prevents dropping into gravel",
        "Actual store price: ₹650",
        "Suitable for 8mm to 10mm glass show tanks"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 11",
          "price": 650,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 11"
    },
    "magnetic_glass_filter_rs_12": {
      "id": "magnetic_glass_filter_rs_12",
      "name": "Aquarium Magnetic Glass Filter RS 12",
      "price": 850,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Air Pumps & Filters",
      "image": "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      "desc": "Extra-strong commercial grade magnetic glass cleaner RS 12 for thick glass show tanks.",
      "model": "RS 12",
      "features": [
        "Model: RS 12 commercial strength magnetic cleaner",
        "Ultra-strong magnetic coupling for 10mm to 12mm+ glass",
        "Actual store price: ₹850",
        "Stocked at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "RS 12",
          "price": 850,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "RS 12"
    },
    "bluepet_bl_20f": {
      "id": "bluepet_bl_20f",
      "name": "Bluepet BL 20F",
      "price": 250,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Aquarium Submersible Lamps",
      "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
      "desc": "Submersible waterproof LED aquarium light bar Bluepet BL 20F for bright natural fish illumination.",
      "model": "BL 20F",
      "features": [
        "Model: Bluepet BL 20F submersible LED lamp",
        "100% waterproof design with high-adhesion suction cups",
        "Actual store price: ₹250",
        "Low power consumption with high lumen output"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BL 20F",
          "price": 250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BL 20F"
    },
    "bluepet_bl_30f": {
      "id": "bluepet_bl_30f",
      "name": "Bluepet BL 30F",
      "price": 350,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Aquarium Submersible Lamps",
      "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
      "desc": "Bluepet BL 30F submersible LED lamp designed for vibrant color enhancement in 1ft to 1.5ft aquariums.",
      "model": "BL 30F",
      "features": [
        "Model: Bluepet BL 30F submersible LED",
        "Spectrally balanced illumination highlights natural fish color",
        "Actual store price: ₹350",
        "Quality tested at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BL 30F",
          "price": 350,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BL 30F"
    },
    "bluepet_bl_40f": {
      "id": "bluepet_bl_40f",
      "name": "Bluepet BL 40F",
      "price": 450,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Aquarium Submersible Lamps",
      "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
      "desc": "Energy-efficient Bluepet BL 40F submersible underwater LED lamp with suction mount brackets.",
      "model": "BL 40F",
      "features": [
        "Model: Bluepet BL 40F submersible LED bar",
        "Even underwater light distribution for 1.5ft-2ft tanks",
        "Actual store price: ₹450",
        "Safe low-voltage operation"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BL 40F",
          "price": 450,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BL 40F"
    },
    "bluepet_bl_50f": {
      "id": "bluepet_bl_50f",
      "name": "Bluepet BL 50F",
      "price": 550,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Aquarium Submersible Lamps",
      "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
      "desc": "High-brightness submersible aquarium LED lamp Bluepet BL 50F for 2ft to 2.5ft aquariums.",
      "model": "BL 50F",
      "features": [
        "Model: Bluepet BL 50F underwater lamp",
        "High PAR output supporting live freshwater plants",
        "Actual store price: ₹550",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BL 50F",
          "price": 550,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BL 50F"
    },
    "bluepet_bl_60f": {
      "id": "bluepet_bl_60f",
      "name": "Bluepet BL 60F",
      "price": 650,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Aquarium Submersible Lamps",
      "image": "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80",
      "desc": "Full-length submersible LED light bar Bluepet BL 60F for large 2.5ft to 3ft show aquariums.",
      "model": "BL 60F",
      "features": [
        "Model: Bluepet BL 60F submersible LED lamp",
        "Full coverage illumination for large display setups",
        "Actual store price: ₹650",
        "UR WORLD AQUARIUM & PET SHOP verified item"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BL 60F",
          "price": 650,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BL 60F"
    },
    "bio_sponge_xy2535": {
      "id": "bio_sponge_xy2535",
      "name": "Bio Sponge XY2535",
      "price": 150,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Bio Sponge",
      "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "desc": "Dense biochemical sponge filter XY2535 providing gentle biological filtration for breeding tanks and fry.",
      "model": "XY2535",
      "features": [
        "Model: Biochemical Sponge Filter XY2535",
        "Fine pore structure prevents baby shrimp and fry from suction",
        "Actual store price: ₹150",
        "Connects directly to any standard air pump"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "XY2535",
          "price": 150,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "XY2535"
    },
    "bio_sponge_xy180": {
      "id": "bio_sponge_xy180",
      "name": "Bio Sponge XY180",
      "price": 220,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Bio Sponge",
      "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "desc": "High-efficiency biochemical air-driven sponge filter XY180 for Betta, shrimp, and hospital aquariums.",
      "model": "XY180",
      "features": [
        "Model: Biochemical Sponge Filter XY180",
        "Cultivates beneficial nitrifying bacteria quickly",
        "Actual store price: ₹220",
        "UR WORLD AQUARIUM & PET SHOP tested"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "XY180",
          "price": 220,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "XY180"
    },
    "bio_sponge_xy280": {
      "id": "bio_sponge_xy280",
      "name": "Bio Sponge XY280",
      "price": 380,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Bio Sponge",
      "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "desc": "Heavy-duty standing bio sponge filter XY280 featuring multilayer porous foam for dense nitrifying bacteria colonization.",
      "model": "XY280",
      "features": [
        "Model: Large Biochemical Sponge Filter XY280",
        "Weighted base prevents floating in high-flow currents",
        "Actual store price: ₹380",
        "Excellent biological filtration for Discus and breeding tanks"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "XY280",
          "price": 380,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "XY280"
    },
    "bio_sponge_xy380": {
      "id": "bio_sponge_xy380",
      "name": "Bio Sponge XY380",
      "price": 450,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Bio Sponge",
      "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "desc": "Extra-large biochemical sponge filter XY380 for superior biological filtration in large community and discus tanks.",
      "model": "XY380",
      "features": [
        "Model: Heavy-Duty Biochemical Sponge Filter XY380",
        "Extra-large sponge surface area for high bioload capacity",
        "Actual store price: ₹450",
        "Available at UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "XY380",
          "price": 450,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "XY380"
    },
    "uv_light_blf01": {
      "id": "uv_light_blf01",
      "name": "UV Light BLF01",
      "price": 1250,
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "UV Light",
      "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "desc": "Submersible UV sterilizer clarifier lamp BLF01 for controlling green water algae blooms and harmful waterborne pathogens.",
      "model": "BLF01",
      "features": [
        "Model: BLF01 submersible UV clarifier sterilizer",
        "Rapidly eliminates free-floating green water algae and pathogens",
        "Actual store price: ₹1,250",
        "Essential for crystal-clear show tanks"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "BLF01",
          "price": 1250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "BLF01"
    },
    "turtle_stand_tl40": {
      "id": "turtle_stand_tl40",
      "name": "Turtle Stand TL40",
      "price": 0,
      "isEnquiry": true,
      "priceDisplay": "Enquire for Price",
      "category": "aquarium",
      "categoryName": "Aquarium Accessories",
      "filterCategory": "aquarium-accessories",
      "subcategory": "Turtle Stand",
      "image": "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80",
      "desc": "Adjustable basking dock and platform stand TL40 for aquatic turtles, terrapins, and amphibians.",
      "model": "TL40",
      "variant": "Standard",
      "variants": [
        {
          "id": "standard",
          "name": "Standard Model",
          "price": 0,
          "isEnquiry": true,
          "default": true
        }
      ],
      "features": [
        "Model: Turtle Stand TL40 adjustable basking platform",
        "Submerged ramp with non-slip texture for easy climbing",
        "Price: Enquire for Price (Official price on request)",
        "Contact UR WORLD AQUARIUM & PET SHOP on WhatsApp for details"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?auto=format&fit=crop&w=800&q=80"
      ]
    },
    "bird_cage_1ft_x_1ft": {
      "id": "bird_cage_1ft_x_1ft",
      "name": "Bird Cage 1ft x 1ft",
      "price": 480,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Bird Cages",
      "image": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "desc": "Compact wire bird cage (1ft x 1ft) with perches, feeder cups, and pull-out cleaning tray for single finches or small canaries.",
      "dimensions": "1ft x 1ft",
      "features": [
        "Dimensions: 1ft x 1ft with coated rust-resistant wire",
        "Includes dual seed/water cups and standing perch",
        "Actual store price: ₹480",
        "Removable pull-out tray for effortless cleaning"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "1ft x 1ft",
          "price": 480,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "1ft x 1ft"
    },
    "bird_cage_15x12x12": {
      "id": "bird_cage_15x12x12",
      "name": "Bird Cage 15x12x12",
      "price": 700,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Bird Cages",
      "image": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "desc": "Sturdy wire bird cage (15x12x12 inches) with secure door latch, perches, and removable tray for small birds.",
      "dimensions": "15x12x12 inches",
      "features": [
        "Dimensions: 15x12x12 inches wire bird cage",
        "Safe bar spacing suited for Budgies, Finches, and Canaries",
        "Actual store price: ₹700",
        "UR WORLD AQUARIUM & PET SHOP verified item"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "15x12x12 inches",
          "price": 700,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "15x12x12 inches"
    },
    "bird_cage_18x12x15": {
      "id": "bird_cage_18x12x15",
      "name": "Bird Cage 18x12x15",
      "price": 950,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Bird Cages",
      "image": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "desc": "Spacious pet bird cage (18x12x15 inches) suitable for Budgerigars, Lovebirds, or pairs of small finches.",
      "dimensions": "18x12x15 inches",
      "features": [
        "Dimensions: 18x12x15 inches with spacious interior",
        "Sturdy access doors with exterior feeder cup hatches",
        "Actual store price: ₹950",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "18x12x15 inches",
          "price": 950,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "18x12x15 inches"
    },
    "bird_cage_24x16x16": {
      "id": "bird_cage_24x16x16",
      "name": "Bird Cage 24x16x16",
      "price": 1600,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Bird Cages",
      "image": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "desc": "Generous 2-foot bird cage (24x16x16 inches) providing ample flight and play space for Cockatiels and Conures.",
      "dimensions": "24x16x16 inches",
      "features": [
        "Dimensions: 24x16x16 inches roomy wire cage",
        "Accommodates toys, swings, and multiple wooden perches",
        "Actual store price: ₹1,600",
        "Ideal for Cockatiels, Conures, and Lovebirds"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "24x16x16 inches",
          "price": 1600,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "24x16x16 inches"
    },
    "bird_cage_30x15x15": {
      "id": "bird_cage_30x15x15",
      "name": "Bird Cage 30x15x15",
      "price": 2800,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Bird Cages",
      "image": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "desc": "Flight bird cage (30x15x15 inches) designed for horizontal wing flapping, ideal for Lovebirds and Cockatiels.",
      "dimensions": "30x15x15 inches",
      "features": [
        "Long horizontal flight cage: 30x15x15 inches",
        "Promotes healthy wing exercise and natural bird activity",
        "Actual store price: ₹2,800",
        "Heavy-duty powder-coated wire finish"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "30x15x15 inches",
          "price": 2800,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "30x15x15 inches"
    },
    "bird_cage_36x36x18": {
      "id": "bird_cage_36x36x18",
      "name": "Bird Cage 36x36x18",
      "price": 6000,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Bird Cages",
      "image": "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "desc": "Extra-large premium bird cage (36x36x18 inches) offering expansive multi-tier room for large parakeets, conures, or colonies.",
      "dimensions": "36x36x18 inches",
      "features": [
        "Extra-large palace aviary cage: 36x36x18 inches",
        "Multi-level perching layout with large access doors",
        "Actual store price: ₹6,000",
        "Premium construction backed by UR WORLD AQUARIUM & PET SHOP"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "36x36x18 inches",
          "price": 6000,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "36x36x18 inches"
    },
    "wooden_cage_18x15x12": {
      "id": "wooden_cage_18x15x12",
      "name": "Wooden Cage 18x15x12",
      "price": 1050,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Wooden Cages",
      "image": "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
      "desc": "Handcrafted natural wood aviary cage (18x15x12 inches) with wire mesh frontage and easy-clean slide bottom.",
      "dimensions": "18x15x12 inches",
      "features": [
        "Dimensions: 18x15x12 inches handcrafted natural wood cage",
        "Traditional warm timber design provides thermal insulation and comfort",
        "Actual store price: ₹1,050",
        "Removable slide-out cleaning tray"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "18x15x12 inches",
          "price": 1050,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "18x15x12 inches"
    },
    "wooden_cage_24x15x12": {
      "id": "wooden_cage_24x15x12",
      "name": "Wooden Cage 24x15x12",
      "price": 1800,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Wooden Cages",
      "image": "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
      "desc": "Traditional handcrafted wooden bird cage (24x15x12 inches) providing a warm, quiet habitat for songbirds.",
      "dimensions": "24x15x12 inches",
      "features": [
        "Dimensions: 24x15x12 inches solid wood cage",
        "Acoustically warm environment preferred by singing canaries and finches",
        "Actual store price: ₹1,800",
        "UR WORLD AQUARIUM & PET SHOP verified item"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "24x15x12 inches",
          "price": 1800,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "24x15x12 inches"
    },
    "wooden_cage_30x18x24": {
      "id": "wooden_cage_30x18x24",
      "name": "Wooden Cage 30x18x24",
      "price": 3500,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Wooden Cages",
      "image": "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80",
      "desc": "Large deluxe wooden aviary habitat (30x18x24 inches) featuring sturdy timber frame and dual access doors.",
      "dimensions": "30x18x24 inches",
      "features": [
        "Dimensions: 30x18x24 inches deluxe wooden aviary",
        "Spacious vertical and horizontal room with fine wire netting",
        "Actual store price: ₹3,500",
        "Immediate stock availability"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "30x18x24 inches",
          "price": 3500,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "30x18x24 inches"
    },
    "breeding_box_6x6x6": {
      "id": "breeding_box_6x6x6",
      "name": "Breeding Box 6x6x6",
      "price": 250,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Breeding Boxes",
      "image": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "desc": "Natural wood nesting and breeding box (6x6x6 inches) with inspection lid and perch for Budgerigars and finches.",
      "dimensions": "6x6x6 inches",
      "features": [
        "Dimensions: 6x6x6 inches natural wood nesting box",
        "Top inspection flap and landing peg for parent birds",
        "Actual store price: ₹250",
        "Designed for Budgies, Finches, and small birds"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6x6x6 inches",
          "price": 250,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6x6x6 inches"
    },
    "breeding_box_6x8x8": {
      "id": "breeding_box_6x8x8",
      "name": "Breeding Box 6x8x8",
      "price": 350,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Breeding Boxes",
      "image": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "desc": "Wooden bird breeding box (6x8x8 inches) offering safe dark nesting space and recessed bottom for Lovebirds.",
      "dimensions": "6x8x8 inches",
      "features": [
        "Dimensions: 6x8x8 inches wooden nesting chamber",
        "Recessed egg-holding bottom prevents rolling",
        "Actual store price: ₹350",
        "Perfect for Lovebirds and African Lovebirds"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6x8x8 inches",
          "price": 350,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6x8x8 inches"
    },
    "breeding_box_10x12x8": {
      "id": "breeding_box_10x12x8",
      "name": "Breeding Box 10x12x8",
      "price": 600,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Breeding Boxes",
      "image": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "desc": "Roomy timber breeding box (10x12x8 inches) specifically designed for Cockatiels and larger parakeets.",
      "dimensions": "10x12x8 inches",
      "features": [
        "Dimensions: 10x12x8 inches large wooden breeding box",
        "Safe interior wooden ladder for chicks and parents",
        "Actual store price: ₹600",
        "Suited for Cockatiels and Conures"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "10x12x8 inches",
          "price": 600,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "10x12x8 inches"
    },
    "breeding_box_12x8x8": {
      "id": "breeding_box_12x8x8",
      "name": "Breeding Box 12x8x8",
      "price": 650,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Breeding Boxes",
      "image": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "desc": "Horizontal wooden breeding nesting box (12x8x8 inches) with top inspection flap for Conures and Cockatiels.",
      "dimensions": "12x8x8 inches",
      "features": [
        "Dimensions: 12x8x8 inches horizontal breeding box",
        "Deep dark nesting cavity provides security for brooding pairs",
        "Actual store price: ₹650",
        "UR WORLD AQUARIUM & PET SHOP certified"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "12x8x8 inches",
          "price": 650,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "12x8x8 inches"
    },
    "lovebird_breeding_pot_6_inch": {
      "id": "lovebird_breeding_pot_6_inch",
      "name": "Lovebird Breeding Pot with Cap (6 Inch)",
      "price": 150,
      "category": "birds",
      "categoryName": "Bird Accessories",
      "filterCategory": "bird-accessories",
      "subcategory": "Lovebird Breeding Pots",
      "image": "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80",
      "desc": "Traditional earthenware terracotta breeding pot (6 inch) with matching protective cap for Lovebirds and small birds.",
      "dimensions": "6 Inch",
      "features": [
        "Size: 6 Inch porous terracotta clay breeding pot",
        "Includes fitted removable earthen cap for easy nest checks",
        "Actual store price: ₹150",
        "Natural clay maintains optimal humidity and nest temperature"
      ],
      "gallery": [
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=800&q=80"
      ],
      "variants": [
        {
          "id": "standard",
          "name": "6 Inch",
          "price": 150,
          "isEnquiry": false,
          "default": true
        }
      ],
      "variant": "6 Inch"
    }
  };

  // 4. HELPER ACCESSORS & GETTERS
  function getAllProducts() {
    return Object.values(PRODUCTS_CATALOG);
  }

  function getProductById(id) {
    if (!id) return null;
    return PRODUCTS_CATALOG[id] || null;
  }

  function getProductsByCategory(category) {
    if (!category || category === 'all') return getAllProducts();
    const target = category.toLowerCase().trim();
    return getAllProducts().filter(p => {
      const pCat = (p.filterCategory || p.category || '').toLowerCase().trim();
      return pCat === target || pCat.split(/\s+/).includes(target);
    });
  }

  function getAllPets() {
    return Object.values(PET_BREEDS_CATALOG);
  }

  function getPetById(id) {
    if (!id) return null;
    return PET_BREEDS_CATALOG[id] || null;
  }

  function getPetsByCategory(category) {
    if (!category) return getAllPets();
    const target = category.toLowerCase().trim();
    return getAllPets().filter(p => (p.category || '').toLowerCase().trim() === target);
  }

  function getAllCategories() {
    return Object.values(CATEGORIES_METADATA);
  }

  function getCategoryMeta(categoryId) {
    if (!categoryId) return null;
    return CATEGORIES_METADATA[categoryId] || null;
  }

  // Expose to window / global scope
  window.CATEGORIES_METADATA = CATEGORIES_METADATA;
  window.PET_BREEDS_CATALOG = PET_BREEDS_CATALOG;
  window.PRODUCTS_CATALOG = PRODUCTS_CATALOG;

  window.getAllProducts = getAllProducts;
  window.getProductById = getProductById;
  window.getProductsByCategory = getProductsByCategory;
  window.getAllPets = getAllPets;
  window.getPetById = getPetById;
  window.getPetsByCategory = getPetsByCategory;
  window.getAllCategories = getAllCategories;
  window.getCategoryMeta = getCategoryMeta;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      CATEGORIES_METADATA,
      PET_BREEDS_CATALOG,
      PRODUCTS_CATALOG,
      getAllProducts,
      getProductById,
      getProductsByCategory,
      getAllPets,
      getPetById,
      getPetsByCategory,
      getAllCategories,
      getCategoryMeta
    };
  }
})(typeof window !== 'undefined' ? window : global);
