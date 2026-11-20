/**
 * =============================================================================
 * UR WORLD AQUARIUM & PET SHOP — MASTER CATALOG DATABASE
 * SINGLE SOURCE OF TRUTH FOR ALL PETS & PRODUCTS
 * =============================================================================
 *
 * DEVELOPER NOTICE:
 * All product, animal, price, variant, and inventory updates across the entire website
 * MUST be made directly in this file (`catalog-data.js`).
 * Do not hardcode or duplicate pet or product data anywhere else.
 *
 * =============================================================================
 */

// =============================================================================
// SECTION 1: LIVE ANIMAL COMPANIONS (PET BREEDS & LINEUP)
// =============================================================================
const PET_BREEDS_CATALOG = {
  "golden-retriever": {
    "id": "golden-retriever",
    "category": "dogs",
    "name": "Golden Retriever Puppy",
    "breed": "Golden Retriever (Purebred Canine)",
    "badge": "Family Favourite",
    "price": 24999,
    "reservationDeposit": 2000,
    "availability": "Available for Reservation • In-Store Handover",
    "age": "3 Months",
    "ageOptions": [
      "Puppy",
      "Adult"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Male",
    "healthInfo": "Dewormed, 1st 7-in-1 Vaccination Administered, Vet Health Checked & Microchipped",
    "tagline": "Renowned for supreme patience, joyful intelligence, and heartwarming companionship.",
    "description": "The Golden Retriever is world-renowned for its eager-to-please temperament, high intelligence, and gentle nature with children and seniors. Our puppies are raised in hygienic environments, receiving early socialization, premium starter nutrition, and comprehensive veterinary care before joining their forever homes.",
    "characteristics": {
      "energy": "High",
      "temperament": "Gentle, Devoted, Intelligent",
      "lifespan": "10–12 Years",
      "coat": "Dense Golden Double-Coat",
      "exercise": "60+ mins daily",
      "diet": "Large-Breed Puppy Kibble"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1579213838051-dc00a12e584a?auto=format&fit=crop&w=1200&q=85"
    ]
  },
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
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  "indie-rescue": {
    "id": "indie-rescue",
    "category": "dogs",
    "name": "Indie Companion Puppy",
    "breed": "Native Indie / Rescue",
    "badge": "Hardy & Loving",
    "price": 4999,
    "reservationDeposit": 1000,
    "availability": "Adoption Available • Health Checked",
    "age": "3 Months",
    "ageOptions": [
      "2.5 Months",
      "3 Months",
      "4 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Female",
    "healthInfo": "Full Health Check, First Shots Administered, Parasite Treated",
    "tagline": "Naturally robust, exceptionally intelligent, and deeply grateful companion.",
    "description": "Indie dogs possess natural immunity, superior tropical adaptation, and deeply empathetic hearts. They make resilient, low-maintenance, and intensely devoted companions for compassionate homes.",
    "characteristics": {
      "energy": "Moderate–High",
      "temperament": "Affectionate, Street-Smart, Loyal",
      "lifespan": "14–17 Years",
      "coat": "Short, Easy-Groom Coat",
      "exercise": "45 mins daily",
      "diet": "Wholesome Balanced Diet"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "dog_kibble",
      "dog_leash",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "domestic-shorthair": {
    "id": "domestic-shorthair",
    "category": "cats",
    "name": "Domestic Short-Hair Kitten",
    "breed": "Domestic Short-Hair (Felis Catus)",
    "badge": "Playful & Adaptable",
    "price": 9999,
    "reservationDeposit": 1500,
    "availability": "Available for Reservation • In-Store Handover",
    "age": "2.5 Months",
    "ageOptions": [
      "2 Months",
      "2.5 Months",
      "3 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Female",
    "healthInfo": "Dewormed, First FVRCP Vaccine, Litter-Trained & Vet Inspected",
    "tagline": "Charming, healthy, and effortless companion for indoor family homes.",
    "description": "Domestic Short-Hairs are resilient, affectionate, and low-maintenance feline companions. Fully litter-trained and socialized with human touch from their early weeks.",
    "characteristics": {
      "energy": "Medium",
      "temperament": "Curious, Gentle, Affectionate",
      "lifespan": "13–18 Years",
      "coat": "Sleek Short Coat",
      "litterTrained": "Yes (100% Guaranteed)",
      "diet": "Taurine-Rich Protein Diet"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "cat_food",
      "cat_scratch",
      "pet_bowl",
      "pet_brush"
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
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  "british-shorthair": {
    "id": "british-shorthair",
    "category": "cats",
    "name": "British Shorthair Kitten",
    "breed": "British Shorthair (Blue)",
    "badge": "Plush & Calm",
    "price": 26999,
    "reservationDeposit": 2500,
    "availability": "Available for Reservation • Ready for Handover",
    "age": "3 Months",
    "ageOptions": [
      "3 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Male",
    "healthInfo": "Full Vaccination Course, Dewormed, Microchipped & Vet Checked",
    "tagline": "Round teddy-bear features, plush velvet coat, and easygoing companionship.",
    "description": "Renowned for their calm, independent yet affectionate nature. British Shorthairs are content companions that blend easily into both bustling homes and peaceful studios.",
    "characteristics": {
      "energy": "Calm",
      "temperament": "Easygoing, Loyal, Independent",
      "lifespan": "14–18 Years",
      "coat": "Dense Plush Blue/Grey Coat",
      "litterTrained": "Yes",
      "diet": "High-Protein Omega Rich"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "cat_food",
      "cat_scratch",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "siamese-cat": {
    "id": "siamese-cat",
    "category": "cats",
    "name": "Siamese Kitten",
    "breed": "Siamese (Traditional Point)",
    "badge": "Vocal & Affectionate",
    "price": 18999,
    "reservationDeposit": 2000,
    "availability": "Available for Reservation • In-Store Handover",
    "age": "11 Weeks",
    "ageOptions": [
      "11 Weeks",
      "3 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Female",
    "healthInfo": "Dewormed, FVRCP Vaccinated, Vet Inspected Eyes & Heart",
    "tagline": "Striking blue almond eyes, sleek point coloration, and conversational charm.",
    "description": "Siamese cats are famously vocal, intensely loyal, and deeply bonded with their owners. They thrive on interactive play and curling up in warm laps.",
    "characteristics": {
      "energy": "High",
      "temperament": "Talkative, Social, Affectionate",
      "lifespan": "15–20 Years",
      "coat": "Short, Glossy Seal Point Coat",
      "diet": "Nutrient-Dense Lean Poultry"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "cat_food",
      "cat_scratch",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "ragdoll-cat": {
    "id": "ragdoll-cat",
    "category": "cats",
    "name": "Ragdoll Kitten",
    "breed": "Ragdoll (Semi-Longhair Companion)",
    "badge": "Docile & Lap Cat",
    "price": 26000,
    "reservationDeposit": 3000,
    "availability": "Available for Reservation • In-Store Handover",
    "age": "2.5 Months",
    "ageOptions": [
      "2 Months",
      "2.5 Months",
      "3 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Female",
    "healthInfo": "Triple dewormed, feline vaccinated, vet health certified, litter trained",
    "tagline": "Affectionate, blue-eyed lap companion known for going limp with joy in your arms.",
    "description": "Ragdoll cats are famed for their strikingly placid, docile nature and tendency to relax completely when held. With silky, semi-long plush coats and piercing sapphire eyes, they make exquisite indoor family companions.",
    "characteristics": {
      "energy": "Moderate (Calm)",
      "temperament": "Placid, Loving, Gentle",
      "lifespan": "12–17 Years",
      "coat": "Silky Semi-Longhair Pointed",
      "diet": "Taurine & Omega-Rich Feline Nutrition"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "cat_food",
      "cat_scratch",
      "pet_bowl",
      "pet_brush"
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
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  "cockatiel": {
    "id": "cockatiel",
    "category": "birds",
    "name": "Cockatiel Companion",
    "breed": "Nymphicus Hollandicus",
    "badge": "Melodic Whistler",
    "price": 3499,
    "reservationDeposit": 500,
    "availability": "Available for Handover • Hand-Fed Aviary",
    "age": "5 Months",
    "ageOptions": [
      "4 Months",
      "5 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Male",
    "healthInfo": "Hand-reared, Vet Screened, Feathers & Wings Inspected",
    "tagline": "Expressive crest, orange cheek patches, and a love for head scratches.",
    "description": "Cockatiels are gentle, intelligent birds that form deep bonds with caretakers. They enjoy whistling tunes and perching sociably on shoulders.",
    "characteristics": {
      "temperament": "Gentle, Curious, Musical",
      "lifespan": "15–20 Years",
      "crest": "Expressive Crest Feathers",
      "diet": "Fortified Seed, Millet & Fresh Veggies"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "bird_seed",
      "bird_cage",
      "pet_bowl"
    ]
  },
  "halfmoon-betta": {
    "id": "halfmoon-betta",
    "category": "aquarium-fish",
    "name": "Halfmoon Betta Showpiece",
    "breed": "Betta Splendens (Male Show Specimen)",
    "badge": "Living Aquarium Gem",
    "price": 799,
    "reservationDeposit": 200,
    "availability": "In Stock • Quarantined & Healthy",
    "age": "Young Adult",
    "ageOptions": [
      "Young Adult (Show Quality)"
    ],
    "genderOptions": [
      "Male Showpiece"
    ],
    "defaultGender": "Male Showpiece",
    "healthInfo": "Full 14-day quarantine completed, immaculate fins, active feeding",
    "tagline": "Spectacular 180-degree fin spread with vivid metallic cyan iridescence.",
    "description": "Halfmoon Bettas are the pinnacle of freshwater centerpiece fish. With sweeping fins that form a complete 180-degree half circle, they add mesmerizing movement and majestic color to planted nano aquariums.",
    "characteristics": {
      "temperament": "Solitary (Male Betta)",
      "tankSize": "15L+ Heated & Filtered",
      "waterTemp": "24°C–28°C",
      "diet": "High-Protein Pellets & Frozen Bloodworms",
      "finType": "180° Halfmoon Spread"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "fish_flakes",
      "water_cond",
      "air_pump"
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
    ]
  },
  "angelfish": {
    "id": "angelfish",
    "category": "aquarium-fish",
    "name": "Freshwater Angelfish",
    "breed": "Pterophyllum Scalare",
    "badge": "Graceful Showstopper",
    "price": 499,
    "reservationDeposit": 100,
    "availability": "In Stock • Quarantined & Stable",
    "age": "Medium (4–5cm)",
    "ageOptions": [
      "Medium (4–5cm)",
      "Semi-Adult"
    ],
    "genderOptions": [
      "Unsexed Show Specimen"
    ],
    "defaultGender": "Unsexed Show Specimen",
    "healthInfo": "Clean fins, clear eyes, stable water parameters",
    "tagline": "Regal triangular silhouette with tall, flowing dorsal and ventral fins.",
    "description": "Freshwater Angelfish glide through planted aquariums with majestic grace. Best suited for tall aquariums with gentle water flow and peaceful companion fish.",
    "characteristics": {
      "temperament": "Semi-Aggressive / Community",
      "tankSize": "80L+ Tall Aquariums",
      "diet": "Omnivorous Flakes & Brine Shrimp"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "fish_flakes",
      "water_cond",
      "air_pump"
    ]
  },
  "betta-fish": {
    "id": "betta-fish",
    "category": "aquarium-fish",
    "name": "Betta Fish",
    "breed": "Betta splendens (Tropical Showpiece)",
    "badge": "Vibrant & Bold",
    "price": 349,
    "reservationDeposit": 150,
    "availability": "In Stock • In-Store Handover",
    "age": "Adult Specimen",
    "ageOptions": [
      "Adult Specimen"
    ],
    "genderOptions": [
      "Male"
    ],
    "defaultGender": "Male",
    "healthInfo": "Quarantined, active finnage, premium conditioned, feeding on micro-pellets",
    "tagline": "Striking tropical fish renowned for flowing fins and bold personality.",
    "description": "Betta Fish (Betta splendens) bring a splash of vibrant living colour to any nano or desktop aquarium. Renowned for their independent nature, intelligence, and elaborate fins, bettas thrive in heated, filtered nano aquariums.",
    "characteristics": {
      "temperament": "Territorial, Active, Inquisitive",
      "lifespan": "3–5 Years",
      "waterTemp": "25–28°C (Tropical)",
      "tankSize": "20L+ Nano Aquaria",
      "diet": "High-Protein Micro-Pellets & Spirulina"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "fish_flakes",
      "water_cond",
      "fish_bowl"
    ]
  },
  "fancy-mouse-standard": {
    "id": "fancy-mouse-standard",
    "category": "mice",
    "name": "Standard Fancy Mouse",
    "breed": "Mus Musculus Domesticus",
    "badge": "Inquisitive & Active",
    "price": 399,
    "reservationDeposit": 100,
    "availability": "In Stock • Active & Healthy Colony",
    "age": "8 Weeks",
    "ageOptions": [
      "6 Weeks",
      "8 Weeks",
      "10 Weeks"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Female",
    "healthInfo": "Clean coat, bright eyes, respiratory health confirmed",
    "tagline": "Fascinating, clean, and gentle small companion for observation and care.",
    "description": "Fancy mice are lively, clean, and endlessly curious creatures. They enjoy climbing toys, foraging puzzle treats, and nesting in cozy bedding.",
    "characteristics": {
      "temperament": "Curious, Agile, Sociable",
      "lifespan": "1.5–2.5 Years",
      "habitat": "Ventilated Wire or Glass Tank",
      "diet": "Small Seed Grain Mix & Forage"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "smallpet_food",
      "smallpet_wheel",
      "pet_bowl"
    ]
  },
  "syrian-hamster": {
    "id": "syrian-hamster",
    "category": "small-pets",
    "name": "Syrian Golden Hamster",
    "breed": "Mesocricetus Auratus (Golden Hamster)",
    "badge": "Solitary Explorer",
    "price": 899,
    "reservationDeposit": 200,
    "availability": "In Stock • Clean Breeding Stock",
    "age": "7 Weeks",
    "ageOptions": [
      "6 Weeks",
      "7 Weeks",
      "2 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Male",
    "healthInfo": "Checked for wet tail, clear eyes, teeth aligned & healthy weight",
    "tagline": "Charming pocket pet that loves building tunnels and running on wheels.",
    "description": "Syrian hamsters are docile, solitary pets that make delightful companions for children and quiet homes. Require solitary housing with a large wheel and deep bedding.",
    "characteristics": {
      "temperament": "Docile, Curious, Nocturnal",
      "lifespan": "2–3 Years",
      "housing": "Solitary (One per cage)",
      "diet": "Hamster Grain Mix, Dried Mealworms & Hay"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "smallpet_food",
      "smallpet_wheel",
      "pet_bowl"
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
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  "holland-lop-rabbit": {
    "id": "holland-lop-rabbit",
    "category": "other-animals",
    "name": "Holland Lop Bunny",
    "breed": "Holland Lop Domestic Rabbit",
    "badge": "Gentle & Affectionate",
    "price": 3499,
    "reservationDeposit": 500,
    "availability": "Available for Reservation • In-Store Handover",
    "age": "2.5 Months",
    "ageOptions": [
      "2 Months",
      "2.5 Months",
      "3 Months"
    ],
    "genderOptions": [
      "Male",
      "Female"
    ],
    "defaultGender": "Female",
    "healthInfo": "Vet health card, dewormed, teeth & ears checked, litter habit started",
    "tagline": "Distinctive drooping ears, round plush head, and sweet gentle disposition.",
    "description": "Holland Lops are dwarf domestic rabbits loved for their calm, affectionate nature and signature floppy ears. They can be litter-trained and form deep companion bonds when housed indoors.",
    "characteristics": {
      "temperament": "Calm, Gentle, Inquisitive",
      "lifespan": "7–10 Years",
      "diet": "Unlimited Timothy Hay, Fresh Greens & Pellets",
      "housing": "Indoor Exercise Pen / Rabbit Habitat"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508455858334-95337ba25607?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "smallpet_food",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "hermanns-tortoise": {
    "id": "hermanns-tortoise",
    "category": "other-animals",
    "name": "Hermann's Land Tortoise",
    "breed": "Testudo Hermanni (Companion Specimen)",
    "badge": "Ancient Companion",
    "price": 8999,
    "reservationDeposit": 1500,
    "availability": "Available for Consultation & Handover",
    "age": "Juvenile (1 Year)",
    "ageOptions": [
      "Juvenile (1 Year)"
    ],
    "genderOptions": [
      "Unsexed Juvenile"
    ],
    "defaultGender": "Unsexed Juvenile",
    "healthInfo": "Smooth carapace, bright eyes, UV basking acclimated, herbivorous diet",
    "tagline": "Serene, hardy land reptile that thrives with proper UVB lighting and leafy greens.",
    "description": "Land tortoises are captivating, long-lived companions. They require appropriate basking spots, UVB lighting, calcium supplementation, and dandelion/clover leafy greens.",
    "characteristics": {
      "temperament": "Peaceful, Slow-Paced, Hardy",
      "lifespan": "40–60+ Years",
      "uvRequirement": "High (10.0 UVB + 32°C Basking Spot)",
      "diet": "100% Herbivorous (Calcium-Rich Weeds & Greens)"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1508455858334-95337ba25607?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85"
    ],
    "recommendedProducts": [
      "pet_bowl"
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
      "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1596727147705-61a532a659bd?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  "rabbit": {
    "id": "rabbit",
    "category": "other-animals",
    "categoryName": "Other Animals",
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
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
    ]
  },
  "imported-guppy": {
    "id": "imported-guppy",
    "category": "aquarium-fish",
    "categoryName": "Aquarium Fish",
    "name": "Imported Guppy",
    "breed": "High-Grade Show Guppy Lineage",
    "unit": "Pair",
    "isEnquiry": true,
    "price": 0,
    "priceDisplay": "Enquire for Price",
    "badge": "Exotic Import Strain",
    "availability": "Limited Batches • WhatsApp for Strains",
    "healthInfo": "Direct import quarantine cleared, exotic tail genetics, disease-free certification",
    "tagline": "Prized imported show-grade guppy strains featuring giant delta, albino, and mosaic tail genetics.",
    "description": "Specially selected imported exhibition guppies including Dumbo Ear, Albino Full Red, and Moscow Blue strains with supreme fin symmetry.",
    "characteristics": {
      "temperament": "Peaceful Showcase",
      "tankSize": "15+ Litres",
      "waterTemp": "24–28°C",
      "diet": "High-protein micro pellets & live foods"
    },
    "gallery": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85"
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
    ]
  }
};

// =============================================================================
// SECTION 2: PET PRODUCTS, FOOD, ACCESSORIES & TANKS
// =============================================================================
const PRODUCTS_CATALOG = {
  "dog_kibble": {
    "id": "dog_kibble",
    "name": "Nutri-Balance Dog Food",
    "price": 499,
    "category": "dog",
    "categoryName": "Dog Food & Nutrition",
    "filterCategory": "dog-food",
    "image": "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Complete daily kibble formulated with real chicken, wholesome grains, and omega fatty acids for a glossy coat and optimal canine digestion. Specifically balanced for puppies and adult companions.",
    "variant": "1kg",
    "variants": [
      {
        "id": "500g",
        "name": "500g",
        "price": 249
      },
      {
        "id": "1kg",
        "name": "1kg",
        "price": 499,
        "default": true
      },
      {
        "id": "3kg",
        "name": "3kg",
        "price": 1199
      },
      {
        "id": "5kg",
        "name": "5kg",
        "price": 1899
      }
    ],
    "features": [
      "Wholesome recipe formulated with real chicken and essential protein",
      "Omega 3 & 6 fatty acids for healthy skin and glossy coat",
      "Optimal digestive health with prebiotics and natural fiber",
      "Complete daily nutrition for small, medium, and active breeds"
    ],
    "related": [
      "dog_leash",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "cat_food": {
    "id": "cat_food",
    "name": "Gourmet Ocean Cat Food",
    "price": 389,
    "category": "cat",
    "categoryName": "Cat Food & Nutrition",
    "filterCategory": "cat-food",
    "image": "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Delicious salmon and tuna recipe enriched with essential taurine, vitamins, and minerals for feline vitality. Packed with omega-3 fatty acids to reduce hairball formation and maintain a silky fur coat.",
    "variant": "1kg",
    "variants": [
      {
        "id": "400g",
        "name": "400g",
        "price": 179
      },
      {
        "id": "1kg",
        "name": "1kg",
        "price": 389,
        "default": true
      },
      {
        "id": "2kg",
        "name": "2kg",
        "price": 729
      }
    ],
    "features": [
      "Real ocean fish protein (salmon & wild tuna)",
      "Fortified with essential taurine for heart and eye health",
      "Natural fiber blend helping minimize hairball buildup",
      "Zero artificial preservatives and wholesome ingredients"
    ],
    "related": [
      "cat_scratch",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "bird_seed": {
    "id": "bird_seed",
    "name": "Exotic Bird Seed Blend",
    "price": 249,
    "category": "bird",
    "categoryName": "Bird Food & Seeds",
    "filterCategory": "bird-food",
    "image": "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Sun-cured yellow millet, canary seed, and sunflower kernels blended for budgies, finches, and pet birds. Quad-cleaned to eliminate dust and optimize song vitality and feather radiance.",
    "variant": "1kg",
    "variants": [
      {
        "id": "500g",
        "name": "500g",
        "price": 139
      },
      {
        "id": "1kg",
        "name": "1kg",
        "price": 249,
        "default": true
      }
    ],
    "features": [
      "Triple-cleaned seeds and grains ensuring zero dust or residue",
      "Rich in natural oils, amino acids, and essential vitamins",
      "Encourages natural foraging and bright vibrant feather growth",
      "Formulated for budgerigars, lovebirds, finches, and songbirds"
    ],
    "related": [
      "bird_cage",
      "smallpet_food",
      "pet_bowl"
    ]
  },
  "smallpet_food": {
    "id": "smallpet_food",
    "name": "Hamster Gourmet Mix",
    "price": 219,
    "category": "smallpet",
    "categoryName": "Small Pets Food & Mix",
    "filterCategory": "small-pets-food",
    "image": "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wholesome blend of seeds, dehydrated vegetables, extruded grains, and vitamins for active little foragers. Formulated specifically for Syrian hamsters, dwarf hamsters, and fancy mice.",
    "variant": "800g",
    "variants": [
      {
        "id": "400g",
        "name": "400g",
        "price": 129
      },
      {
        "id": "800g",
        "name": "800g",
        "price": 219,
        "default": true
      }
    ],
    "features": [
      "Varied texture stimulates natural cheek pouching and foraging behavior",
      "Encourages healthy incisor dental wear through crunchable extrudates",
      "Enriched with vitamins A, D3, and E for bright eyes and soft coats",
      "Suitable for dwarf hamsters, Syrian hamsters, mice, and gerbils"
    ],
    "related": [
      "smallpet_wheel",
      "pet_bowl",
      "bird_seed"
    ]
  },
  "smallpet_wheel": {
    "id": "smallpet_wheel",
    "name": "Silent Exercise Running Wheel",
    "price": 299,
    "category": "smallpet",
    "categoryName": "Small Pets Care & Accessories",
    "filterCategory": "small-pets-accessories",
    "image": "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Smooth dual-ball-bearing mechanism ensuring quiet nocturnal running with a tail-safe solid running surface. Stand-mounted or cage-attachable for maximum flexibility.",
    "variant": "18cm Silent Track",
    "variants": [
      {
        "id": "14cm_medium",
        "name": "14cm Medium",
        "price": 219
      },
      {
        "id": "18cm_silent",
        "name": "18cm Silent Track",
        "price": 299,
        "default": true
      }
    ],
    "features": [
      "Ultra-quiet dual ball-bearing spin: whisper silent for night runs",
      "Continuous solid running surface with zero pinch points or gaps",
      "Gentle curvature promotes correct spinal posture during sprint sessions",
      "Can be placed on cage floors via stable stand or mounted to wire bars"
    ],
    "related": [
      "smallpet_food",
      "pet_bowl",
      "bird_cage"
    ]
  },
  "fish_flakes": {
    "id": "fish_flakes",
    "name": "Daily Tropical Fish Flakes",
    "price": 149,
    "category": "aquarium",
    "categoryName": "Aquarium Fish Food",
    "filterCategory": "fish-food",
    "image": "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Complete balanced nutrition formulated with natural spirulina and carotenoids for healthy immune systems and luminous scale coloration. High digestibility prevents aquarium water clouding.",
    "variant": "100g",
    "variants": [
      {
        "id": "50g",
        "name": "50g",
        "price": 89
      },
      {
        "id": "100g",
        "name": "100g",
        "price": 149,
        "default": true
      },
      {
        "id": "250g",
        "name": "250g",
        "price": 329
      }
    ],
    "features": [
      "Rich in natural spirulina and Atlantic shrimp meal for vibrant colors",
      "Easily digestible formula keeping water crystal clear and low-waste",
      "Slow-sinking flakes accessible for top, middle, and bottom feeders",
      "Essential vitamins and bio-active trace minerals boosting immunity"
    ],
    "related": [
      "air_pump",
      "water_cond",
      "pet_bowl"
    ]
  },
  "dog_leash": {
    "id": "dog_leash",
    "name": "Reflective Harness & Leash",
    "price": 349,
    "category": "dog",
    "categoryName": "Dog Accessories & Walking Gear",
    "filterCategory": "dog-accessories",
    "image": "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Durable padded harness with high-visibility reflective stitching and secure zinc-alloy safety clasp. Breathable mesh inner lining prevents chafing during daily walks and outdoor exercise.",
    "variant": "Medium-Large",
    "variants": [
      {
        "id": "sm_med",
        "name": "Small-Medium",
        "price": 299
      },
      {
        "id": "med_lg",
        "name": "Medium-Large",
        "price": 349,
        "default": true
      }
    ],
    "features": [
      "High-visibility 3M reflective stitching for evening safety",
      "Breathable padded mesh chest plate to prevent throat pressure",
      "Heavy-duty zinc-alloy safety clasp with 360-degree swivel",
      "Quick-release snap buckles for easy fitting and adjustment"
    ],
    "related": [
      "dog_kibble",
      "pet_bowl",
      "pet_brush"
    ]
  },
  "pet_bowl": {
    "id": "pet_bowl",
    "name": "Non-Slip Stainless Dual Bowl",
    "price": 249,
    "category": "accessories",
    "categoryName": "Pet Feeding Accessories",
    "filterCategory": "dog-accessories cat-accessories small-pets-accessories",
    "image": "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Rust-proof, hygienic stainless steel food and water bowls set inside a non-skid silicone base. Removable dish inserts are dishwasher-safe and spill-resistant for dogs, cats, and small companions.",
    "variant": "Dual Medium (2 × 350ml)",
    "variants": [
      {
        "id": "dual_small",
        "name": "Dual Small (2 × 250ml)",
        "price": 199
      },
      {
        "id": "dual_medium",
        "name": "Dual Medium (2 × 350ml)",
        "price": 249,
        "default": true
      },
      {
        "id": "dual_large",
        "name": "Dual Large (2 × 500ml)",
        "price": 349
      }
    ],
    "features": [
      "Food-grade corrosion-resistant stainless steel dishes",
      "Heavy non-skid silicone base prevents bowl sliding and floor scratches",
      "Wide raised lip catches accidental water splashes and food spills",
      "Removable inserts for effortless daily hand washing or dishwasher cleaning"
    ],
    "related": [
      "pet_brush",
      "dog_kibble",
      "cat_food"
    ]
  },
  "pet_brush": {
    "id": "pet_brush",
    "name": "Self-Cleaning Deshedding Brush",
    "price": 229,
    "category": "accessories",
    "categoryName": "Pet Grooming & Care",
    "filterCategory": "dog-accessories cat-accessories small-pets-accessories",
    "image": "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Gentle curved bristle design removes loose fur and tangles for dogs, cats, and small pets with one-click fur release. Ergonomic soft-grip silicone handle ensures comfortable grooming sessions.",
    "variant": "Standard Retractable",
    "variants": [
      {
        "id": "standard_retract",
        "name": "Standard Retractable",
        "price": 229,
        "default": true
      },
      {
        "id": "large_retract",
        "name": "Large Retractable",
        "price": 299
      }
    ],
    "features": [
      "One-click retractable bristle button cleans trapped fur in one second",
      "Fine bent wire bristles with rounded comfort tips to protect skin",
      "Gently removes dead undercoat, mats, and knots without pulling",
      "Ergonomic slip-resistant silicone grip handle reduces hand fatigue"
    ],
    "related": [
      "pet_bowl",
      "dog_kibble",
      "cat_scratch"
    ]
  },
  "cat_scratch": {
    "id": "cat_scratch",
    "name": "Sisal Scratching Post Tower",
    "price": 549,
    "category": "cat",
    "categoryName": "Cat Furniture & Accessories",
    "filterCategory": "cat-accessories",
    "image": "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Stable wooden base wrapped in natural sisal fibers with a dangling plush bell toy to satisfy scratching instincts and protect your home furniture. Suitable for kittens and adult felines.",
    "variant": "Standard Tower (45cm)",
    "variants": [
      {
        "id": "compact_30cm",
        "name": "Compact (30cm)",
        "price": 399
      },
      {
        "id": "standard_45cm",
        "name": "Standard Tower (45cm)",
        "price": 549,
        "default": true
      },
      {
        "id": "deluxe_60cm",
        "name": "Deluxe Tower (60cm)",
        "price": 799
      }
    ],
    "features": [
      "100% natural biodegradable sisal rope wrapping",
      "Solid heavy-weighted base prevents tipping during enthusiastic play",
      "Interactive plush bell toy stimulates hunting instincts",
      "Helps maintain healthy claw length while protecting home upholstery"
    ],
    "related": [
      "cat_food",
      "pet_brush",
      "pet_bowl"
    ]
  },
  "bird_cage": {
    "id": "bird_cage",
    "name": "Enamelled Bird Habitat Cage",
    "price": 899,
    "category": "bird",
    "categoryName": "Bird Cages & Accessories",
    "filterCategory": "bird-accessories",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Safe narrow wire spacing with twin feeding cups, wooden perches, and a slide-out tray for easy hygiene. Non-toxic powder-coated enamel resists rust and beak wear.",
    "variant": "Standard Duo-Perch",
    "variants": [
      {
        "id": "standard_duo",
        "name": "Standard Duo-Perch",
        "price": 899,
        "default": true
      },
      {
        "id": "deluxe_habitat",
        "name": "Spacious Deluxe Habitat",
        "price": 1499
      }
    ],
    "features": [
      "Non-toxic baked enamel finish completely safe for curious beaks",
      "Slide-out bottom debris tray for quick, hygienic cage cleaning",
      "Includes two natural wood perches and two clear seed/water cups",
      "Top carry handle and safety door latch preventing accidental escapes"
    ],
    "related": [
      "bird_seed",
      "pet_bowl",
      "smallpet_wheel"
    ]
  },
  "cage_bird_1ftx1ft": {
    "id": "cage_bird_1ftx1ft",
    "name": "Bird Cage (1ft x 1ft)",
    "price": 480,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Bird Cages",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wire bird cage measuring 1ft x 1ft.",
    "variant": "Bird Cage (1ft x 1ft)",
    "variants": [
      {
        "id": "standard",
        "name": "Bird Cage (1ft x 1ft)",
        "price": 480,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹480",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_bird_15x12x12": {
    "id": "cage_bird_15x12x12",
    "name": "Bird Cage (15x12x12)",
    "price": 700,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Bird Cages",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wire bird cage measuring 15x12x12 inches.",
    "variant": "Bird Cage (15x12x12)",
    "variants": [
      {
        "id": "standard",
        "name": "Bird Cage (15x12x12)",
        "price": 700,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹700",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_bird_18x12x15": {
    "id": "cage_bird_18x12x15",
    "name": "Bird Cage (18x12x15)",
    "price": 950,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Bird Cages",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wire bird cage measuring 18x12x15 inches.",
    "variant": "Bird Cage (18x12x15)",
    "variants": [
      {
        "id": "standard",
        "name": "Bird Cage (18x12x15)",
        "price": 950,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_bird_24x16x16": {
    "id": "cage_bird_24x16x16",
    "name": "Bird Cage (24x16x16)",
    "price": 1600,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Bird Cages",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wire bird cage measuring 24x16x16 inches.",
    "variant": "Bird Cage (24x16x16)",
    "variants": [
      {
        "id": "standard",
        "name": "Bird Cage (24x16x16)",
        "price": 1600,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,600",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_bird_30x15x15": {
    "id": "cage_bird_30x15x15",
    "name": "Bird Cage (30x15x15)",
    "price": 2800,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Bird Cages",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wire bird cage measuring 30x15x15 inches.",
    "variant": "Bird Cage (30x15x15)",
    "variants": [
      {
        "id": "standard",
        "name": "Bird Cage (30x15x15)",
        "price": 2800,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,800",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_bird_36x36x18": {
    "id": "cage_bird_36x36x18",
    "name": "Bird Cage (36x36x18)",
    "price": 6000,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Bird Cages",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Large wire bird habitat cage measuring 36x36x18 inches.",
    "variant": "Bird Cage (36x36x18)",
    "variants": [
      {
        "id": "standard",
        "name": "Bird Cage (36x36x18)",
        "price": 6000,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹6,000",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_wooden_18x15x12": {
    "id": "cage_wooden_18x15x12",
    "name": "Wooden Cage (18x15x12)",
    "price": 1050,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Wooden Cage",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Traditional wooden bird cage measuring 18x15x12 inches.",
    "variant": "Wooden Cage (18x15x12)",
    "variants": [
      {
        "id": "standard",
        "name": "Wooden Cage (18x15x12)",
        "price": 1050,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,050",
      "Category: Bird Accessories (Wooden Cage)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_wooden_24x15x12": {
    "id": "cage_wooden_24x15x12",
    "name": "Wooden Cage (24x15x12)",
    "price": 1800,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Wooden Cage",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Traditional wooden bird cage measuring 24x15x12 inches.",
    "variant": "Wooden Cage (24x15x12)",
    "variants": [
      {
        "id": "standard",
        "name": "Wooden Cage (24x15x12)",
        "price": 1800,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,800",
      "Category: Bird Accessories (Wooden Cage)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "cage_wooden_30x18x24": {
    "id": "cage_wooden_30x18x24",
    "name": "Wooden Cage (30x18x24)",
    "price": 3500,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Wooden Cage",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Traditional wooden bird cage measuring 30x18x24 inches.",
    "variant": "Wooden Cage (30x18x24)",
    "variants": [
      {
        "id": "standard",
        "name": "Wooden Cage (30x18x24)",
        "price": 3500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,500",
      "Category: Bird Accessories (Wooden Cage)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "box_breeding_6x6x6": {
    "id": "box_breeding_6x6x6",
    "name": "Breeding Box (6x6x6)",
    "price": 250,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Breeding Box",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bird wooden breeding nest box measuring 6x6x6 inches.",
    "variant": "Breeding Box (6x6x6)",
    "variants": [
      {
        "id": "standard",
        "name": "Breeding Box (6x6x6)",
        "price": 250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "box_breeding_6x8x8": {
    "id": "box_breeding_6x8x8",
    "name": "Breeding Box (6x8x8)",
    "price": 350,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Breeding Box",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bird wooden breeding nest box measuring 6x8x8 inches.",
    "variant": "Breeding Box (6x8x8)",
    "variants": [
      {
        "id": "standard",
        "name": "Breeding Box (6x8x8)",
        "price": 350,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹350",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "box_breeding_10x12x8": {
    "id": "box_breeding_10x12x8",
    "name": "Breeding Box (10x12x8)",
    "price": 600,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Breeding Box",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bird wooden breeding nest box measuring 10x12x8 inches.",
    "variant": "Breeding Box (10x12x8)",
    "variants": [
      {
        "id": "standard",
        "name": "Breeding Box (10x12x8)",
        "price": 600,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹600",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "box_breeding_12x8x8": {
    "id": "box_breeding_12x8x8",
    "name": "Breeding Box (12x8x8)",
    "price": 650,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Breeding Box",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bird wooden breeding nest box measuring 12x8x8 inches.",
    "variant": "Breeding Box (12x8x8)",
    "variants": [
      {
        "id": "standard",
        "name": "Breeding Box (12x8x8)",
        "price": 650,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "pot_breeding_lovebirds_6inch": {
    "id": "pot_breeding_lovebirds_6inch",
    "name": "Love Birds Breeding Pot with Cap (6 inch pot)",
    "price": 150,
    "category": "bird",
    "categoryName": "Bird Accessories",
    "filterCategory": "bird-accessories",
    "subcategory": "Love Birds Breeding Pot with Cap",
    "image": "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Love birds earthen breeding pot with cap (6 inch pot).",
    "variant": "Love Birds Breeding Pot with Cap (6 inch pot)",
    "variants": [
      {
        "id": "standard",
        "name": "Love Birds Breeding Pot with Cap (6 inch pot)",
        "price": 150,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹150",
      "Category: Bird Accessories (Love Birds Breeding Pot with Cap)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "air_pump": {
    "id": "air_pump",
    "name": "Compact Quiet Air Pump",
    "price": 399,
    "category": "aquarium",
    "categoryName": "Aquarium Equipment & Aeration",
    "filterCategory": "aquarium-accessories",
    "image": "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Energy-efficient aerator maintaining steady dissolved oxygen for fish and beneficial biological filtration. Rubber shock-absorbing feet dampen motor vibration for quiet operation.",
    "variant": "Single Outlet (Up to 60L)",
    "variants": [
      {
        "id": "single_outlet",
        "name": "Single Outlet (Up to 60L)",
        "price": 399,
        "default": true
      },
      {
        "id": "dual_outlet",
        "name": "Dual Outlet (Up to 120L)",
        "price": 599
      }
    ],
    "features": [
      "High-efficiency diaphragm motor producing steady micro-bubbles",
      "Soft silicone isolation feet significantly dampening operational sound",
      "Consumes low power while maintaining continuous oxygenation",
      "Universal nozzle compatible with standard airline tubing and air stones"
    ],
    "related": [
      "water_cond",
      "fish_flakes",
      "pet_bowl"
    ]
  },
  "water_cond": {
    "id": "water_cond",
    "name": "Water Conditioner & Detoxifier",
    "price": 199,
    "category": "aquarium",
    "categoryName": "Aquarium Water Care",
    "filterCategory": "aquarium-accessories",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Instantly neutralizes tap water chlorine, chloramines, and binds harmful heavy metals during tank maintenance. Protects delicate fish gills and supports natural slime coat regeneration.",
    "variant": "250ml",
    "variants": [
      {
        "id": "100ml",
        "name": "100ml",
        "price": 119
      },
      {
        "id": "250ml",
        "name": "250ml",
        "price": 199,
        "default": true
      },
      {
        "id": "500ml",
        "name": "500ml",
        "price": 349
      }
    ],
    "features": [
      "Instantly renders tap water safe for freshwater fish and aquatic plants",
      "Neutralizes aggressive chlorine, chloramines, and toxic heavy metals",
      "Aloe vera extract and colloidal polymers shield delicate gill membranes",
      "Concentrated formula: 5ml treats up to 40 litres of fresh tap water"
    ],
    "related": [
      "fish_flakes",
      "air_pump",
      "pet_bowl"
    ]
  },
  "net_fish_3_inch": {
    "id": "net_fish_3_inch",
    "name": "Fish Net",
    "price": 50,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Fish Net",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium fish net for safe handling and transferring of fish.",
    "variant": "Fish Net 3 Inch",
    "variants": [
      {
        "id": "net_3_inch",
        "name": "3 Inch",
        "price": 50,
        "default": true
      },
      {
        "id": "net_4_inch",
        "name": "4 Inch",
        "price": 80
      },
      {
        "id": "net_5_inch",
        "name": "5 Inch",
        "price": 100
      },
      {
        "id": "net_6_inch",
        "name": "6 Inch",
        "price": 120
      },
      {
        "id": "net_8_inch",
        "name": "8 Inch",
        "price": 150
      },
      {
        "id": "net_10_inch",
        "name": "10 Inch",
        "price": 250
      },
      {
        "id": "net_12_inch",
        "name": "12 Inch",
        "price": 300
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price depends on selected size",
      "Category: Aquarium Accessories (Fish Net)",
      "WhatsApp enquiry for availability and delivery confirmation"
    ]
  },
  "pump_rs_180": {
    "id": "pump_rs_180",
    "name": "RS 180",
    "price": 250,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "RS 180 aquarium air pump.",
    "variant": "RS 180",
    "variants": [
      {
        "id": "standard",
        "name": "RS 180",
        "price": 250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "pump_bl_106": {
    "id": "pump_bl_106",
    "name": "BL 106",
    "price": 220,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "BL 106 aquarium air pump.",
    "variant": "BL 106",
    "variants": [
      {
        "id": "standard",
        "name": "BL 106",
        "price": 220,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹220",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "pump_dolphin_1502": {
    "id": "pump_dolphin_1502",
    "name": "DOLPHIN 1502",
    "price": 1200,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "DOLPHIN 1502 aquarium air pump / filter system.",
    "variant": "DOLPHIN 1502",
    "variants": [
      {
        "id": "standard",
        "name": "DOLPHIN 1502",
        "price": 1200,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,200",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "pump_dolphin_1501": {
    "id": "pump_dolphin_1501",
    "name": "DOLPHIN 1501",
    "price": 950,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "DOLPHIN 1501 aquarium air pump / filter system.",
    "variant": "DOLPHIN 1501",
    "variants": [
      {
        "id": "standard",
        "name": "DOLPHIN 1501",
        "price": 950,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_4w": {
    "id": "filter_4w",
    "name": "FILTER 4 W",
    "price": 300,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 4 W.",
    "variant": "FILTER 4 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 4 W",
        "price": 300,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹300",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_6w": {
    "id": "filter_6w",
    "name": "FILTER 6 W",
    "price": 400,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 6 W.",
    "variant": "FILTER 6 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 6 W",
        "price": 400,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹400",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_15w": {
    "id": "filter_15w",
    "name": "FILTER 15 W",
    "price": 500,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 15 W.",
    "variant": "FILTER 15 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 15 W",
        "price": 500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹500",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_18w": {
    "id": "filter_18w",
    "name": "FILTER 18 W",
    "price": 650,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 18 W.",
    "variant": "FILTER 18 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 18 W",
        "price": 650,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_25w": {
    "id": "filter_25w",
    "name": "FILTER 25 W",
    "price": 750,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 25 W.",
    "variant": "FILTER 25 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 25 W",
        "price": 750,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹750",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_30w": {
    "id": "filter_30w",
    "name": "FILTER 30 W",
    "price": 850,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 30 W.",
    "variant": "FILTER 30 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 30 W",
        "price": 850,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_35w": {
    "id": "filter_35w",
    "name": "FILTER 35 W",
    "price": 900,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium internal power filter 35 W.",
    "variant": "FILTER 35 W",
    "variants": [
      {
        "id": "standard",
        "name": "FILTER 35 W",
        "price": 900,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹900",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_rs_liquid_18w": {
    "id": "filter_rs_liquid_18w",
    "name": "RS LIQUID FILTER 18 W",
    "price": 850,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "RS LIQUID FILTER 18 W aquarium filtration system.",
    "variant": "RS LIQUID FILTER 18 W",
    "variants": [
      {
        "id": "standard",
        "name": "RS LIQUID FILTER 18 W",
        "price": 850,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_rs_liquid_25w": {
    "id": "filter_rs_liquid_25w",
    "name": "RS LIQUID FILTER 25 W",
    "price": 950,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "RS LIQUID FILTER 25 W aquarium filtration system.",
    "variant": "RS LIQUID FILTER 25 W",
    "variants": [
      {
        "id": "standard",
        "name": "RS LIQUID FILTER 25 W",
        "price": 950,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_rs_liquid_35w": {
    "id": "filter_rs_liquid_35w",
    "name": "RS LIQUID FILTER 35 W",
    "price": 1250,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "RS LIQUID FILTER 35 W aquarium filtration system.",
    "variant": "RS LIQUID FILTER 35 W",
    "variants": [
      {
        "id": "standard",
        "name": "RS LIQUID FILTER 35 W",
        "price": 1250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,250",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_hang_on_rs_1000": {
    "id": "filter_hang_on_rs_1000",
    "name": "Hang On Filter RS 1000",
    "price": 650,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Hang On Back aquarium filter RS 1000.",
    "variant": "Hang On Filter RS 1000",
    "variants": [
      {
        "id": "standard",
        "name": "Hang On Filter RS 1000",
        "price": 650,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_hang_on_rs_2000": {
    "id": "filter_hang_on_rs_2000",
    "name": "Hang On Filter RS 2000",
    "price": 850,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Hang On Back aquarium filter RS 2000.",
    "variant": "Hang On Filter RS 2000",
    "variants": [
      {
        "id": "standard",
        "name": "Hang On Filter RS 2000",
        "price": 850,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_hang_on_rs_3000": {
    "id": "filter_hang_on_rs_3000",
    "name": "Hang On Filter RS 3000",
    "price": 1250,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Hang On Back aquarium filter RS 3000.",
    "variant": "Hang On Filter RS 3000",
    "variants": [
      {
        "id": "standard",
        "name": "Hang On Filter RS 3000",
        "price": 1250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,250",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_hang_on_rs_4000": {
    "id": "filter_hang_on_rs_4000",
    "name": "Hang On Filter RS 4000",
    "price": 1350,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Hang On Back aquarium filter RS 4000.",
    "variant": "Hang On Filter RS 4000",
    "variants": [
      {
        "id": "standard",
        "name": "Hang On Filter RS 4000",
        "price": 1350,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,350",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_mag_glass_rs_06": {
    "id": "filter_mag_glass_rs_06",
    "name": "Aquarium Magnetic Glass Filter RS 06",
    "price": 280,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium Magnetic Glass Filter model RS 06.",
    "variant": "Aquarium Magnetic Glass Filter RS 06",
    "variants": [
      {
        "id": "standard",
        "name": "Aquarium Magnetic Glass Filter RS 06",
        "price": 280,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹280",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_mag_glass_rs_09": {
    "id": "filter_mag_glass_rs_09",
    "name": "Aquarium Magnetic Glass Filter RS 09",
    "price": 480,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium Magnetic Glass Filter model RS 09.",
    "variant": "Aquarium Magnetic Glass Filter RS 09",
    "variants": [
      {
        "id": "standard",
        "name": "Aquarium Magnetic Glass Filter RS 09",
        "price": 480,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹480",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_mag_glass_rs_11": {
    "id": "filter_mag_glass_rs_11",
    "name": "Aquarium Magnetic Glass Filter RS 11",
    "price": 650,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium Magnetic Glass Filter model RS 11.",
    "variant": "Aquarium Magnetic Glass Filter RS 11",
    "variants": [
      {
        "id": "standard",
        "name": "Aquarium Magnetic Glass Filter RS 11",
        "price": 650,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "filter_mag_glass_rs_12": {
    "id": "filter_mag_glass_rs_12",
    "name": "Aquarium Magnetic Glass Filter RS 12",
    "price": 850,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Air Pump & Filters",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium Magnetic Glass Filter model RS 12.",
    "variant": "Aquarium Magnetic Glass Filter RS 12",
    "variants": [
      {
        "id": "standard",
        "name": "Aquarium Magnetic Glass Filter RS 12",
        "price": 850,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "lamp_bluepet_bl_20f": {
    "id": "lamp_bluepet_bl_20f",
    "name": "Bluepet BL 20F",
    "price": 250,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Aquarium Submersible Lamp",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bluepet BL 20F aquarium submersible LED lamp.",
    "variant": "Bluepet BL 20F",
    "variants": [
      {
        "id": "standard",
        "name": "Bluepet BL 20F",
        "price": 250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "lamp_bluepet_bl_30f": {
    "id": "lamp_bluepet_bl_30f",
    "name": "Bluepet BL 30F",
    "price": 350,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Aquarium Submersible Lamp",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bluepet BL 30F aquarium submersible LED lamp.",
    "variant": "Bluepet BL 30F",
    "variants": [
      {
        "id": "standard",
        "name": "Bluepet BL 30F",
        "price": 350,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹350",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "lamp_bluepet_bl_40f": {
    "id": "lamp_bluepet_bl_40f",
    "name": "Bluepet BL 40F",
    "price": 450,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Aquarium Submersible Lamp",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bluepet BL 40F aquarium submersible LED lamp.",
    "variant": "Bluepet BL 40F",
    "variants": [
      {
        "id": "standard",
        "name": "Bluepet BL 40F",
        "price": 450,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹450",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "lamp_bluepet_bl_50f": {
    "id": "lamp_bluepet_bl_50f",
    "name": "Bluepet BL 50F",
    "price": 550,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Aquarium Submersible Lamp",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bluepet BL 50F aquarium submersible LED lamp.",
    "variant": "Bluepet BL 50F",
    "variants": [
      {
        "id": "standard",
        "name": "Bluepet BL 50F",
        "price": 550,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹550",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "lamp_bluepet_bl_60f": {
    "id": "lamp_bluepet_bl_60f",
    "name": "Bluepet BL 60F",
    "price": 650,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "Aquarium Submersible Lamp",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bluepet BL 60F aquarium submersible LED lamp.",
    "variant": "Bluepet BL 60F",
    "variants": [
      {
        "id": "standard",
        "name": "Bluepet BL 60F",
        "price": 650,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "sponge_bio_xy2535": {
    "id": "sponge_bio_xy2535",
    "name": "Bio sponge XY2535",
    "price": 150,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "BIO Sponge",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bio sponge biochemical filter sponge XY2535.",
    "variant": "Bio sponge XY2535",
    "variants": [
      {
        "id": "standard",
        "name": "Bio sponge XY2535",
        "price": 150,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹150",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "sponge_bio_xy180": {
    "id": "sponge_bio_xy180",
    "name": "Bio sponge XY180",
    "price": 220,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "BIO Sponge",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bio sponge biochemical filter sponge XY180.",
    "variant": "Bio sponge XY180",
    "variants": [
      {
        "id": "standard",
        "name": "Bio sponge XY180",
        "price": 220,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹220",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "sponge_bio_xy280": {
    "id": "sponge_bio_xy280",
    "name": "Bio sponge XY280",
    "price": 380,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "BIO Sponge",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bio sponge biochemical filter sponge XY280.",
    "variant": "Bio sponge XY280",
    "variants": [
      {
        "id": "standard",
        "name": "Bio sponge XY280",
        "price": 380,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹380",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "sponge_bio_xy380": {
    "id": "sponge_bio_xy380",
    "name": "Bio sponge XY380",
    "price": 450,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "BIO Sponge",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Bio sponge biochemical filter sponge XY380.",
    "variant": "Bio sponge XY380",
    "variants": [
      {
        "id": "standard",
        "name": "Bio sponge XY380",
        "price": 450,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹450",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "uv_light_blf01": {
    "id": "uv_light_blf01",
    "name": "UV light BLF01",
    "price": 1250,
    "category": "aquarium",
    "categoryName": "Aquarium Accessories",
    "filterCategory": "aquarium-accessories",
    "subcategory": "UV Light",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Aquarium UV clarifier light sterilizer BLF01.",
    "variant": "UV light BLF01",
    "variants": [
      {
        "id": "standard",
        "name": "UV light BLF01",
        "price": 1250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,250",
      "Category: Aquarium Accessories (UV Light)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "fish_tank": {
    "id": "fish_tank",
    "name": "Rimless Float-Glass Aquarium Tank",
    "price": 1799,
    "category": "aquarium",
    "categoryName": "Fish Tanks & Aquariums",
    "filterCategory": "fish-tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Modern rimless glass aquarium with diamond-polished beveled edges and high-clarity silicone joints. Engineered for tropical freshwater species, planted aquascapes, and community fish.",
    "variant": "2ft",
    "variants": [
      {
        "id": "1ft",
        "name": "1ft",
        "price": 899
      },
      {
        "id": "2ft",
        "name": "2ft",
        "price": 1799,
        "default": true
      },
      {
        "id": "3ft",
        "name": "3ft",
        "price": 3499
      }
    ],
    "features": [
      "Ultra-clear low-iron float glass with over 91% optical clarity",
      "Minimalist German silicone bonding for unobstructed panoramic view",
      "Includes protective leveling foam mat to safeguard base pane",
      "Standard dimensions optimized for canister filters and LED light fixtures"
    ],
    "related": [
      "air_pump",
      "water_cond",
      "fish_flakes"
    ]
  },
  "tank_indian_12x6x6": {
    "id": "tank_indian_12x6x6",
    "name": "Fish tank (12x6x6) with tank top",
    "price": 450,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 12x6x6 inches with fitted tank top cover.",
    "variant": "Fish tank (12x6x6) with tank top",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (12x6x6) with tank top",
        "price": 450,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹450",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_12x6x8": {
    "id": "tank_indian_12x6x8",
    "name": "Fish tank (12x6x8) with tank top",
    "price": 600,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 12x6x8 inches with fitted tank top cover.",
    "variant": "Fish tank (12x6x8) with tank top",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (12x6x8) with tank top",
        "price": 600,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹600",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_18x9x12": {
    "id": "tank_indian_18x9x12",
    "name": "Fish tank (18x9x12) with tank top",
    "price": 950,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 18x9x12 inches with fitted tank top cover.",
    "variant": "Fish tank (18x9x12) with tank top",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (18x9x12) with tank top",
        "price": 950,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_24x12x12": {
    "id": "tank_indian_24x12x12",
    "name": "Fish tank (24x12x12) with tank top",
    "price": 1500,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 24x12x12 inches with fitted tank top cover.",
    "variant": "Fish tank (24x12x12) with tank top",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (24x12x12) with tank top",
        "price": 1500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,500",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_24x12x15": {
    "id": "tank_indian_24x12x15",
    "name": "Fish tank (24x12x15) with tank top",
    "price": 1850,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 24x12x15 inches with fitted tank top cover.",
    "variant": "Fish tank (24x12x15) with tank top",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (24x12x15) with tank top",
        "price": 1850,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,850",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_30x12x15": {
    "id": "tank_indian_30x12x15",
    "name": "Fish tank (30x12x15) with tank top (8mm)",
    "price": 2750,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 30x12x15 inches with tank top (8mm glass).",
    "variant": "Fish tank (30x12x15) with tank top (8mm)",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (30x12x15) with tank top (8mm)",
        "price": 2750,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,750",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_36x15x18": {
    "id": "tank_indian_36x15x18",
    "name": "Fish tank (36x15x18) with tank top (8mm)",
    "price": 5000,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 36x15x18 inches with tank top (8mm glass).",
    "variant": "Fish tank (36x15x18) with tank top (8mm)",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (36x15x18) with tank top (8mm)",
        "price": 5000,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹5,000",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_36x12x15": {
    "id": "tank_indian_36x12x15",
    "name": "Fish tank (36x12x15) with tank top (8mm)",
    "price": 3950,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 36x12x15 inches with tank top (8mm glass).",
    "variant": "Fish tank (36x12x15) with tank top (8mm)",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (36x12x15) with tank top (8mm)",
        "price": 3950,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,950",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_indian_48x12x15": {
    "id": "tank_indian_48x12x15",
    "name": "Fish tank (48x12x15) with tank top (8mm)",
    "price": 6000,
    "category": "aquarium",
    "categoryName": "Fish Tank",
    "filterCategory": "fish-tank",
    "subcategory": "Indian Tank",
    "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Indian Fish Tank measuring 48x12x15 inches with tank top (8mm glass).",
    "variant": "Fish tank (48x12x15) with tank top (8mm)",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (48x12x15) with tank top (8mm)",
        "price": 6000,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹6,000",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "imported_tank": {
    "id": "imported_tank",
    "name": "Imported Curved-Glass Nano Aquarium",
    "price": 2999,
    "category": "aquarium",
    "categoryName": "Imported Aquarium Systems",
    "filterCategory": "imported-tank",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Seamless curved front glass corner technology offering a panoramic, distortion-free viewing experience. Fitted with integrated back filtration compartment and energy-efficient full-spectrum LED lighting.",
    "variant": "Medium",
    "variants": [
      {
        "id": "small",
        "name": "Small",
        "price": 1499
      },
      {
        "id": "medium",
        "name": "Medium",
        "price": 2999,
        "default": true
      },
      {
        "id": "large",
        "name": "Large",
        "price": 5499
      }
    ],
    "features": [
      "Seamless one-piece curved front glass without silicone edge seams",
      "Hidden multi-stage bio-filtration system concealed behind sleek partition",
      "Touch-sensitive dual-mode LED lighting (daylight white & night-blue)",
      "Compact plug-and-play setup perfect for modern homes and office desks"
    ],
    "related": [
      "fish_tank",
      "fish_flakes",
      "water_cond"
    ]
  },
  "tank_imp_6x8x8": {
    "id": "tank_imp_6x8x8",
    "name": "Fish tank (6x8x8) with set tank top light filter",
    "price": 1500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "Imported Tank",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported Fish Tank (6x8x8) complete set with tank top, lighting, and filter.",
    "variant": "Fish tank (6x8x8) with set tank top light filter",
    "variants": [
      {
        "id": "standard",
        "name": "Fish tank (6x8x8) with set tank top light filter",
        "price": 1500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,500",
      "Category: Imported Tank (Imported Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_200": {
    "id": "tank_pf_200",
    "name": "PF 200",
    "price": 1300,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 200.",
    "variant": "PF 200",
    "variants": [
      {
        "id": "standard",
        "name": "PF 200",
        "price": 1300,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,300",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_235": {
    "id": "tank_pf_235",
    "name": "PF 235",
    "price": 1800,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 235.",
    "variant": "PF 235",
    "variants": [
      {
        "id": "standard",
        "name": "PF 235",
        "price": 1800,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,800",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_285": {
    "id": "tank_pf_285",
    "name": "PF 285",
    "price": 2450,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 285.",
    "variant": "PF 285",
    "variants": [
      {
        "id": "standard",
        "name": "PF 285",
        "price": 2450,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,450",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_385": {
    "id": "tank_pf_385",
    "name": "PF 385",
    "price": 3400,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 385.",
    "variant": "PF 385",
    "variants": [
      {
        "id": "standard",
        "name": "PF 385",
        "price": 3400,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,400",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_420": {
    "id": "tank_pf_420",
    "name": "PF 420",
    "price": 4500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 420.",
    "variant": "PF 420",
    "variants": [
      {
        "id": "standard",
        "name": "PF 420",
        "price": 4500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹4,500",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_520": {
    "id": "tank_pf_520",
    "name": "PF 520",
    "price": 4900,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 520.",
    "variant": "PF 520",
    "variants": [
      {
        "id": "standard",
        "name": "PF 520",
        "price": 4900,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹4,900",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_pf_620": {
    "id": "tank_pf_620",
    "name": "PF 620",
    "price": 5500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "PF Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium PF Series model PF 620.",
    "variant": "PF 620",
    "variants": [
      {
        "id": "standard",
        "name": "PF 620",
        "price": 5500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹5,500",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_230": {
    "id": "tank_rs_230",
    "name": "RS 230",
    "price": 1700,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 230.",
    "variant": "RS 230",
    "variants": [
      {
        "id": "standard",
        "name": "RS 230",
        "price": 1700,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,700",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_300": {
    "id": "tank_rs_300",
    "name": "RS 300",
    "price": 2200,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 300.",
    "variant": "RS 300",
    "variants": [
      {
        "id": "standard",
        "name": "RS 300",
        "price": 2200,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,200",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_380": {
    "id": "tank_rs_380",
    "name": "RS 380",
    "price": 3600,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 380.",
    "variant": "RS 380",
    "variants": [
      {
        "id": "standard",
        "name": "RS 380",
        "price": 3600,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,600",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_480": {
    "id": "tank_rs_480",
    "name": "RS 480",
    "price": 4800,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 480.",
    "variant": "RS 480",
    "variants": [
      {
        "id": "standard",
        "name": "RS 480",
        "price": 4800,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹4,800",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_580": {
    "id": "tank_rs_580",
    "name": "RS 580",
    "price": 5500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 580.",
    "variant": "RS 580",
    "variants": [
      {
        "id": "standard",
        "name": "RS 580",
        "price": 5500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹5,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_600b": {
    "id": "tank_rs_600b",
    "name": "RS 600 B",
    "price": 6200,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 600 B.",
    "variant": "RS 600 B",
    "variants": [
      {
        "id": "standard",
        "name": "RS 600 B",
        "price": 6200,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹6,200",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_700el": {
    "id": "tank_rs_700el",
    "name": "RS 700 EL",
    "price": 7500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 700 EL.",
    "variant": "RS 700 EL",
    "variants": [
      {
        "id": "standard",
        "name": "RS 700 EL",
        "price": 7500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹7,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_800el": {
    "id": "tank_rs_800el",
    "name": "RS 800 EL",
    "price": 9500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 800 EL.",
    "variant": "RS 800 EL",
    "variants": [
      {
        "id": "standard",
        "name": "RS 800 EL",
        "price": 9500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹9,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_1000el": {
    "id": "tank_rs_1000el",
    "name": "RS 1000 EL",
    "price": 14500,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 1000 EL.",
    "variant": "RS 1000 EL",
    "variants": [
      {
        "id": "standard",
        "name": "RS 1000 EL",
        "price": 14500,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹14,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "tank_rs_1200el": {
    "id": "tank_rs_1200el",
    "name": "RS 1200 EL",
    "price": 18000,
    "category": "aquarium",
    "categoryName": "Imported Tank",
    "filterCategory": "imported-tank",
    "subcategory": "RS Series",
    "image": "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Imported curved-glass aquarium RS Series model RS 1200 EL.",
    "variant": "RS 1200 EL",
    "variants": [
      {
        "id": "standard",
        "name": "RS 1200 EL",
        "price": 18000,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹18,000",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "fish_bowl": {
    "id": "fish_bowl",
    "name": "Ultra-Clear Glass Fish Bowl",
    "price": 499,
    "category": "aquarium",
    "categoryName": "Aquarium Fish Bowls",
    "filterCategory": "fish-bowl",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Classic spherical fish bowl hand-blown from crystal-clear, distortion-free thick glass. Ideal for small coldwater or betta fish setups, aquatic plants, and decorative tabletop aquascaping.",
    "variant": "10 inch",
    "variants": [
      {
        "id": "8inch",
        "name": "8 inch",
        "price": 299
      },
      {
        "id": "10inch",
        "name": "10 inch",
        "price": 499,
        "default": true
      },
      {
        "id": "12inch",
        "name": "12 inch",
        "price": 699
      }
    ],
    "features": [
      "High-transmission automotive-grade crystal clear glass",
      "Thickened rim and flat heavy base for maximum stability",
      "Smooth polished edges ensuring safe handling and easy cleaning",
      "Versatile design suitable for bettas, aquatic marimo balls, and planted bowls"
    ],
    "related": [
      "fish_flakes",
      "water_cond",
      "air_pump"
    ]
  },
  "bowl_4_inch": {
    "id": "bowl_4_inch",
    "name": "4 Inch Fish Bowl",
    "price": 59,
    "category": "aquarium",
    "categoryName": "Fish Bowl",
    "filterCategory": "fish-bowl",
    "subcategory": "Fish Bowl",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Clear glass round fish bowl (4 Inch diameter).",
    "variant": "4 Inch Fish Bowl",
    "variants": [
      {
        "id": "standard",
        "name": "4 Inch Fish Bowl",
        "price": 59,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹59",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "bowl_6_inch": {
    "id": "bowl_6_inch",
    "name": "6 Inch Fish Bowl",
    "price": 99,
    "category": "aquarium",
    "categoryName": "Fish Bowl",
    "filterCategory": "fish-bowl",
    "subcategory": "Fish Bowl",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Clear glass round fish bowl (6 Inch diameter).",
    "variant": "6 Inch Fish Bowl",
    "variants": [
      {
        "id": "standard",
        "name": "6 Inch Fish Bowl",
        "price": 99,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹99",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "bowl_8_inch": {
    "id": "bowl_8_inch",
    "name": "8 Inch Fish Bowl",
    "price": 159,
    "category": "aquarium",
    "categoryName": "Fish Bowl",
    "filterCategory": "fish-bowl",
    "subcategory": "Fish Bowl",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Clear glass round fish bowl (8 Inch diameter).",
    "variant": "8 Inch Fish Bowl",
    "variants": [
      {
        "id": "standard",
        "name": "8 Inch Fish Bowl",
        "price": 159,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹159",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "bowl_10_inch": {
    "id": "bowl_10_inch",
    "name": "10 Inch Fish Bowl",
    "price": 349,
    "category": "aquarium",
    "categoryName": "Fish Bowl",
    "filterCategory": "fish-bowl",
    "subcategory": "Fish Bowl",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Clear glass round fish bowl (10 Inch diameter).",
    "variant": "10 Inch Fish Bowl",
    "variants": [
      {
        "id": "standard",
        "name": "10 Inch Fish Bowl",
        "price": 349,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹349",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "bowl_12_inch": {
    "id": "bowl_12_inch",
    "name": "12 Inch Fish Bowl",
    "price": 495,
    "category": "aquarium",
    "categoryName": "Fish Bowl",
    "filterCategory": "fish-bowl",
    "subcategory": "Fish Bowl",
    "image": "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Clear glass round fish bowl (12 Inch diameter).",
    "variant": "12 Inch Fish Bowl",
    "variants": [
      {
        "id": "standard",
        "name": "12 Inch Fish Bowl",
        "price": 495,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹495",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "wall_tank": {
    "id": "wall_tank",
    "name": "Panoramic Wall-Mounted Aquarium",
    "price": 2499,
    "category": "aquarium",
    "categoryName": "Wall Aquarium Systems",
    "filterCategory": "wall-tank",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Contemporary slim-profile wall aquarium that transforms living spaces into tranquil living art. Features robust brushed aluminum mounting bracket and hidden maintenance access.",
    "variant": "2ft Panoramic",
    "variants": [
      {
        "id": "2ft",
        "name": "2ft Panoramic",
        "price": 2499,
        "default": true
      },
      {
        "id": "3ft",
        "name": "3ft Executive",
        "price": 4999
      }
    ],
    "features": [
      "Heavy-duty marine-grade aluminum frame and reinforced load brackets",
      "Ultra-slim space-saving wall profile with hidden cable channels",
      "Internal hidden power filter and LED lighting system",
      "Complete mounting template and masonry hardware included"
    ],
    "related": [
      "fish_tank",
      "air_pump",
      "water_cond"
    ]
  },
  "wall_tank_4_inch": {
    "id": "wall_tank_4_inch",
    "name": "Wall Tank 4 Inch",
    "price": 250,
    "category": "aquarium",
    "categoryName": "Wall Tank",
    "filterCategory": "wall-tank",
    "subcategory": "Wall Mounted",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wall Mounted Aquarium Tank (4 Inch).",
    "variant": "Wall Tank 4 Inch",
    "variants": [
      {
        "id": "standard",
        "name": "Wall Tank 4 Inch",
        "price": 250,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "wall_tank_6_inch": {
    "id": "wall_tank_6_inch",
    "name": "Wall Tank 6 Inch",
    "price": 350,
    "category": "aquarium",
    "categoryName": "Wall Tank",
    "filterCategory": "wall-tank",
    "subcategory": "Wall Mounted",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wall Mounted Aquarium Tank (6 Inch).",
    "variant": "Wall Tank 6 Inch",
    "variants": [
      {
        "id": "standard",
        "name": "Wall Tank 6 Inch",
        "price": 350,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹350",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "wall_tank_8_inch": {
    "id": "wall_tank_8_inch",
    "name": "Wall Tank 8 Inch",
    "price": 550,
    "category": "aquarium",
    "categoryName": "Wall Tank",
    "filterCategory": "wall-tank",
    "subcategory": "Wall Mounted",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wall Mounted Aquarium Tank (8 Inch).",
    "variant": "Wall Tank 8 Inch",
    "variants": [
      {
        "id": "standard",
        "name": "Wall Tank 8 Inch",
        "price": 550,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹550",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "wall_tank_10_inch": {
    "id": "wall_tank_10_inch",
    "name": "Wall Tank 10 Inch",
    "price": 750,
    "category": "aquarium",
    "categoryName": "Wall Tank",
    "filterCategory": "wall-tank",
    "subcategory": "Wall Mounted",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wall Mounted Aquarium Tank (10 Inch).",
    "variant": "Wall Tank 10 Inch",
    "variants": [
      {
        "id": "standard",
        "name": "Wall Tank 10 Inch",
        "price": 750,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹750",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  "wall_tank_12_inch": {
    "id": "wall_tank_12_inch",
    "name": "Wall Tank 12 Inch",
    "price": 850,
    "category": "aquarium",
    "categoryName": "Wall Tank",
    "filterCategory": "wall-tank",
    "subcategory": "Wall Mounted",
    "image": "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    "desc": "Wall Mounted Aquarium Tank (12 Inch).",
    "variant": "Wall Tank 12 Inch",
    "variants": [
      {
        "id": "standard",
        "name": "Wall Tank 12 Inch",
        "price": 850,
        "default": true
      }
    ],
    "features": [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
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
  }
};

// =============================================================================
// SECTION 3: ANIMAL CATEGORIES METADATA & SPECIFICATIONS
// =============================================================================
const CATEGORIES_METADATA = {
  dogs: {
    id: "dogs",
    name: "Dogs & Puppies",
    index: "01",
    cardTitle: "Dogs & Puppies",
    badge: "LOYAL COMPANIONS",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=85",
    eyebrow: "CANINE COMPANIONS & CARE",
    heading: "Canine Breeds & Lineup",
    subheading: "Explore verified canine companions, breed profiles, temperament guides, and ethical care standards.",
    cardDesc: "Devoted companions filled with affection, loyalty, and boundless joy. We offer trusted guidance on puppy care, nutrition, and training accessories.",
    specs: [
      { label: "Care", val: "Daily Exercise" },
      { label: "Diet", val: "High-Protein" },
      { label: "Nature", val: "Affectionate" }
    ],
    collectionUrl: "collections/dogs.html"
  },
  cats: {
    id: "cats",
    name: "Cats & Kittens",
    index: "02",
    cardTitle: "Cats & Kittens",
    badge: "GRACEFUL & CALM",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85",
    eyebrow: "FELINE GRACE & AFFECTION",
    heading: "Feline Breeds & Lineup",
    subheading: "Explore tranquil, playful, and affectionate cat breeds with verified health inspections.",
    cardDesc: "Independent, curious, and deeply soothing. Perfect indoor companions that enjoy cozy corners, playful moments, and quality feline nutrition.",
    specs: [
      { label: "Care", val: "Indoor / Play" },
      { label: "Diet", val: "Taurine-Rich" },
      { label: "Nature", val: "Gentle & Curious" }
    ],
    collectionUrl: "collections/cats.html"
  },
  birds: {
    id: "birds",
    name: "Pet & Songbirds",
    index: "03",
    cardTitle: "Pet & Songbirds",
    badge: "MELODIC WONDERS",
    image: "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=900&q=85",
    eyebrow: "FEATHERED MELODIES & COLOR",
    heading: "Bird Species & Collection",
    subheading: "Explore cheerful songbirds, social parrots, and vibrant finches for joyful homes.",
    cardDesc: "Charming melodies, vibrant plumage, and spirited intelligence. From cheerful budgies and finches to gentle cockatiels and pet birds.",
    specs: [
      { label: "Care", val: "Spacious Cage" },
      { label: "Diet", val: "Seeds & Fruits" },
      { label: "Nature", val: "Social & Vocal" }
    ],
    collectionUrl: "collections/birds.html"
  },
  mice: {
    id: "mice",
    name: "Fancy Mice",
    index: "04",
    cardTitle: "Fancy Mice",
    badge: "CLEAN & CURIOUS",
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=900&q=85",
    eyebrow: "INTELLIGENT TINY COMPANIONS",
    heading: "Fancy Mice Varieties & Lineup",
    subheading: "Fascinating, clean, and gentle small companions for observation and gentle handling.",
    cardDesc: "Intelligent, agile, and endlessly entertaining. Fancy mice are social, clean micro-pets that thrive in multi-level habitats with safe foraging toys.",
    specs: [
      { label: "Care", val: "Ventilated Cage" },
      { label: "Diet", val: "Grains & Mixes" },
      { label: "Nature", val: "Lively & Inquisitive" }
    ],
    collectionUrl: "collections/mice.html"
  },
  "small-pets": {
    id: "small-pets",
    name: "Hamsters & Small Pets",
    index: "05",
    cardTitle: "Hamsters & Small Pets",
    badge: "SWEET & GENTLE",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=85",
    eyebrow: "POCKET PETS & SMALL MAMMALS",
    heading: "Small Pets & Lineup",
    subheading: "Discover curious hamsters, playful guinea pigs, and small pocket pets with starter habitat advice.",
    cardDesc: "Syrian and dwarf hamsters, guinea pigs, and small furry pets. Wonderful first-time pets that enjoy soft bedding, exercise wheels, and fresh treats.",
    specs: [
      { label: "Care", val: "Wheel & Bedding" },
      { label: "Diet", val: "Balanced Muesli" },
      { label: "Nature", val: "Quiet & Sweet" }
    ],
    collectionUrl: "collections/small-pets.html"
  },
  "aquarium-fish": {
    id: "aquarium-fish",
    name: "Aquarium Fish",
    index: "06",
    cardTitle: "Aquarium Fish",
    badge: "LIVING UNDERWATER ART",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=900&q=85",
    eyebrow: "FRESHWATER ECOSYSTEMS",
    heading: "Aquarium Fish Collection",
    subheading: "Healthy, quarantined tropical fish, vibrant schooling species, and showpiece aquatic life.",
    cardDesc: "Showstopper Bettas, peaceful neon tetras, fancy guppies, and healthy tropical freshwater fish that turn your aquarium into a peaceful sanctuary.",
    specs: [
      { label: "Care", val: "Filtered Tank" },
      { label: "Diet", val: "Spirulina Flakes" },
      { label: "Nature", val: "Peaceful & Serene" }
    ],
    collectionUrl: "collections/aquarium-fish.html"
  },
  "other-animals": {
    id: "other-animals",
    name: "Other Animals",
    index: "07",
    cardTitle: "Other Animals",
    badge: "COMPANIONS & MORE",
    image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=85",
    eyebrow: "SPECIALTY COMPANIONS",
    heading: "Specialty Animals & Lineup",
    subheading: "Gentle domestic rabbits, land tortoises, and exotic companion guidance with specialized habitat care.",
    cardDesc: "Rabbits, tortoises, and specialty companion pets. Reach out directly to discuss ethical acquisition, specific requirements, and habitat setups.",
    specs: [
      { label: "Care", val: "Custom Habitat" },
      { label: "Diet", val: "Species-Specific" },
      { label: "Nature", val: "Calm & Unique" }
    ],
    collectionUrl: "collections/other-animals.html"
  }
};

// =============================================================================
// SECTION 4: REVIEWS & TESTIMONIALS
// =============================================================================
const GOOGLE_REVIEWS_CATALOG = [
  {
    id: "g-rev-1",
    author: "Pooja Hegde",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    date: "a month ago",
    text: "Had a wonderful experience! The team was helpful and made finding the right companion so much easier. Great guidance and a lovely experience overall."
  },
  {
    id: "g-rev-2",
    author: "Arjun Sundaram",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    date: "2 months ago",
    text: "A great place for pet lovers. Appreciated the care, helpful guidance and variety of pet essentials available."
  },
  {
    id: "g-rev-3",
    author: "Sneha Pillai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    date: "3 months ago",
    text: "Really happy with the experience. The team was friendly and helped us understand the right care and nutrition for our companion."
  }
];

const CUSTOMER_REVIEWS = [];

// =============================================================================
// SECTION 5: HELPER QUERY FUNCTIONS & GLOBAL EXPORTS
// =============================================================================
function getAllProducts() {
  return Object.values(PRODUCTS_CATALOG);
}

function getProductById(id) {
  return PRODUCTS_CATALOG[id] || null;
}

function getProductsByCategory(category) {
  if (!category || category === "all") return getAllProducts();
  return Object.values(PRODUCTS_CATALOG).filter((p) => {
    const cats = (p.filterCategory || p.category || "").toLowerCase().split(/\s+/);
    return cats.includes(category.toLowerCase());
  });
}

function getAllPets() {
  return Object.values(PET_BREEDS_CATALOG);
}

function getPetById(id) {
  return PET_BREEDS_CATALOG[id] || null;
}

function getPetsByCategory(categoryId) {
  return Object.values(PET_BREEDS_CATALOG).filter((pet) => pet.category === categoryId);
}

function getAllCategories() {
  return Object.values(CATEGORIES_METADATA);
}

function getCategoryMeta(categoryId) {
  return CATEGORIES_METADATA[categoryId] || null;
}

// Global scope export for browser scripts
if (typeof window !== "undefined") {
  window.PRODUCTS_CATALOG = PRODUCTS_CATALOG;
  window.CATEGORIES_METADATA = CATEGORIES_METADATA;
  window.PET_BREEDS_CATALOG = PET_BREEDS_CATALOG;
  window.getAllProducts = getAllProducts;
  window.getProductById = getProductById;
  window.getProductsByCategory = getProductsByCategory;
  window.getAllPets = getAllPets;
  window.getPetById = getPetById;
  window.getPetsByCategory = getPetsByCategory;
  window.getAllCategories = getAllCategories;
  window.getCategoryMeta = getCategoryMeta;
}

// Module export for node / testing
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    PRODUCTS_CATALOG,
    CATEGORIES_METADATA,
    PET_BREEDS_CATALOG,
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
