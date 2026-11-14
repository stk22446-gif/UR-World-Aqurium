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
  // ==========================================================
  // 🐕 DOGS & PUPPIES
  // ==========================================================
  "golden-retriever": {
    id: "golden-retriever",
    category: "dogs",
    name: "Golden Retriever Puppy",
    breed: "Golden Retriever (Purebred Canine)",
    badge: "Family Favourite",
    price: 24999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • In-Store Handover",
    age: "3 Months",
    ageOptions: ["Puppy", "Adult"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Dewormed, 1st 7-in-1 Vaccination Administered, Vet Health Checked & Microchipped",
    tagline: "Renowned for supreme patience, joyful intelligence, and heartwarming companionship.",
    description: "The Golden Retriever is world-renowned for its eager-to-please temperament, high intelligence, and gentle nature with children and seniors. Our puppies are raised in hygienic environments, receiving early socialization, premium starter nutrition, and comprehensive veterinary care before joining their forever homes.",
    characteristics: {
      energy: "High",
      temperament: "Gentle, Devoted, Intelligent",
      lifespan: "10–12 Years",
      coat: "Dense Golden Double-Coat",
      exercise: "60+ mins daily",
      diet: "Large-Breed Puppy Kibble"
    },
    gallery: [
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=85"
    ],
  },

  "labrador-retriever": {
    id: "labrador-retriever",
    category: "dogs",
    name: "Labrador Retriever Puppy",
    breed: "Labrador Retriever",
    badge: "Loyal Companion",
    price: 21999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • Ready for Adoption",
    age: "11 Weeks",
    ageOptions: ["10 Weeks", "11 Weeks", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Dewormed, Parvo Vaccinated, Vet Health Card Provided",
    tagline: "Friendly, eager to please, and effortlessly adaptable for active families.",
    description: "Labradors are among the most loyal and versatile breeds in the world. Their friendly demeanor, love for play, and natural obedience make them phenomenal family dogs and loyal lifelong companions.",
    characteristics: {
      energy: "Medium–High",
      temperament: "Outgoing, Even-Tempered, Agile",
      lifespan: "11–13 Years",
      coat: "Short, Water-Resistant Double Coat",
      exercise: "45–60 mins daily",
      diet: "High-Protein Balanced Puppy Diet"
    },
    gallery: [
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["dog_kibble", "dog_leash", "pet_bowl", "pet_brush"]
  },

  "german-shepherd": {
    id: "german-shepherd",
    category: "dogs",
    name: "German Shepherd Puppy",
    breed: "German Shepherd Dog",
    badge: "Devoted Guardian",
    price: 25999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • Verified Lineage",
    age: "3 Months",
    ageOptions: ["2.5 Months", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Dewormed, Complete Core Vaccination, Certified Healthy by Canine Vet",
    tagline: "Vigilant protector with unmatched trainability, loyalty, and sharp focus.",
    description: "Possessing supreme intelligence, noble presence, and unwavering loyalty, the German Shepherd excels in structured households that appreciate training, outdoor activity, and steadfast companionship.",
    characteristics: {
      energy: "High",
      temperament: "Confident, Courageous, Loyal",
      lifespan: "9–13 Years",
      coat: "Dense Double Coat with Black & Tan Saddle",
      exercise: "60–90 mins daily",
      diet: "Performance Canine Nutrition"
    },
    gallery: [
      "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["dog_kibble", "dog_leash", "pet_bowl", "pet_brush"]
  },

  "beagle": {
    id: "beagle",
    category: "dogs",
    name: "Beagle Puppy",
    breed: "Beagle Hound",
    badge: "Playful Explorer",
    price: 22999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • In-Store Handover",
    age: "10 Weeks",
    ageOptions: ["10 Weeks", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Vaccinated (DHPPi), Dewormed, Ears & Joints Examined",
    tagline: "Compact, merry, and brimming with curious energy and affectionate charm.",
    description: "Famous for their soulful eyes, musical bays, and boundless enthusiasm. Beagles are sturdy, friendly hounds that get along magnificently with children, other dogs, and lively apartments or homes.",
    characteristics: {
      energy: "Medium–High",
      temperament: "Merry, Inquisitive, Friendly",
      lifespan: "12–15 Years",
      coat: "Short Tri-Colour (Black, Tan & White)",
      exercise: "45 mins daily",
      diet: "Weight-Controlled Active Formula"
    },
    gallery: [
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["dog_kibble", "dog_leash", "pet_bowl", "pet_brush"]
  },

  "pomeranian": {
    id: "pomeranian",
    category: "dogs",
    name: "Pomeranian Puppy",
    breed: "Pomeranian (Toy Spitz)",
    badge: "Fluffy Lap Companion",
    price: 18999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • Handover Ready",
    age: "10 Weeks",
    ageOptions: ["10 Weeks", "12 Weeks"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "First Vaccinations Complete, Dewormed, Oral & Coat Inspection Passed",
    tagline: "Spirited, affectionate toy companion with a luxuriant lion-like mane.",
    description: "Compact in size but bursting with personality, Pomeranians love being at the center of attention. Their buoyant walk, keen alertness, and fluffy double coat make them delightful indoor companions.",
    characteristics: {
      energy: "Moderate",
      temperament: "Lively, Affectionate, Intelligent",
      lifespan: "12–16 Years",
      coat: "Plush Double Coat (Orange / Cream)",
      exercise: "25–30 mins daily",
      diet: "Small-Breed Nutrient Kibble"
    },
    gallery: [
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["dog_kibble", "pet_bowl", "pet_brush", "dog_leash"]
  },

  "indie-rescue": {
    id: "indie-rescue",
    category: "dogs",
    name: "Indie Companion Puppy",
    breed: "Native Indie / Rescue",
    badge: "Hardy & Loving",
    price: 4999,
    reservationDeposit: 1000,
    availability: "Adoption Available • Health Checked",
    age: "3 Months",
    ageOptions: ["2.5 Months", "3 Months", "4 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Full Health Check, First Shots Administered, Parasite Treated",
    tagline: "Naturally robust, exceptionally intelligent, and deeply grateful companion.",
    description: "Indie dogs possess natural immunity, superior tropical adaptation, and deeply empathetic hearts. They make resilient, low-maintenance, and intensely devoted companions for compassionate homes.",
    characteristics: {
      energy: "Moderate–High",
      temperament: "Affectionate, Street-Smart, Loyal",
      lifespan: "14–17 Years",
      coat: "Short, Easy-Groom Coat",
      exercise: "45 mins daily",
      diet: "Wholesome Balanced Diet"
    },
    gallery: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["dog_kibble", "dog_leash", "pet_bowl", "pet_brush"]
  },

  // ==========================================================
  // 🐈 CATS & KITTENS
  // ==========================================================
  "domestic-shorthair": {
    id: "domestic-shorthair",
    category: "cats",
    name: "Domestic Short-Hair Kitten",
    breed: "Domestic Short-Hair (Felis Catus)",
    badge: "Playful & Adaptable",
    price: 9999,
    reservationDeposit: 1500,
    availability: "Available for Reservation • In-Store Handover",
    age: "2.5 Months",
    ageOptions: ["2 Months", "2.5 Months", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Dewormed, First FVRCP Vaccine, Litter-Trained & Vet Inspected",
    tagline: "Charming, healthy, and effortless companion for indoor family homes.",
    description: "Domestic Short-Hairs are resilient, affectionate, and low-maintenance feline companions. Fully litter-trained and socialized with human touch from their early weeks.",
    characteristics: {
      energy: "Medium",
      temperament: "Curious, Gentle, Affectionate",
      lifespan: "13–18 Years",
      coat: "Sleek Short Coat",
      litterTrained: "Yes (100% Guaranteed)",
      diet: "Taurine-Rich Protein Diet"
    },
    gallery: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["cat_food", "cat_scratch", "pet_bowl", "pet_brush"]
  },

  "persian-cat": {
    id: "persian-cat",
    category: "cats",
    name: "Persian Kitten",
    breed: "Persian Longhair",
    badge: "Serene & Regal",
    price: 19999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • Verified Lineage",
    age: "3 Months",
    ageOptions: ["2.5 Months", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Vaccinated, Dewormed, Clean Ear & Tear Ducts Certified",
    tagline: "Luxurious silk coat, round gentle eyes, and quiet, regal demeanor.",
    description: "Persians are cherished for their peaceful disposition and plush fur. They thrive in calm indoor environments with routine grooming and cozy resting perches.",
    characteristics: {
      energy: "Low–Medium",
      temperament: "Gentle, Quiet, Dignified",
      lifespan: "12–16 Years",
      coat: "Long, Silky Dense Coat (White / Cream)",
      grooming: "Daily brushing required",
      diet: "Hairball Care Formula"
    },
    gallery: [
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["cat_food", "cat_scratch", "pet_brush", "pet_bowl"]
  },

  "british-shorthair": {
    id: "british-shorthair",
    category: "cats",
    name: "British Shorthair Kitten",
    breed: "British Shorthair (Blue)",
    badge: "Plush & Calm",
    price: 26999,
    reservationDeposit: 2500,
    availability: "Available for Reservation • Ready for Handover",
    age: "3 Months",
    ageOptions: ["3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Full Vaccination Course, Dewormed, Microchipped & Vet Checked",
    tagline: "Round teddy-bear features, plush velvet coat, and easygoing companionship.",
    description: "Renowned for their calm, independent yet affectionate nature. British Shorthairs are content companions that blend easily into both bustling homes and peaceful studios.",
    characteristics: {
      energy: "Calm",
      temperament: "Easygoing, Loyal, Independent",
      lifespan: "14–18 Years",
      coat: "Dense Plush Blue/Grey Coat",
      litterTrained: "Yes",
      diet: "High-Protein Omega Rich"
    },
    gallery: [
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["cat_food", "cat_scratch", "pet_bowl", "pet_brush"]
  },

  "siamese-cat": {
    id: "siamese-cat",
    category: "cats",
    name: "Siamese Kitten",
    breed: "Siamese (Traditional Point)",
    badge: "Vocal & Affectionate",
    price: 18999,
    reservationDeposit: 2000,
    availability: "Available for Reservation • In-Store Handover",
    age: "11 Weeks",
    ageOptions: ["11 Weeks", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Dewormed, FVRCP Vaccinated, Vet Inspected Eyes & Heart",
    tagline: "Striking blue almond eyes, sleek point coloration, and conversational charm.",
    description: "Siamese cats are famously vocal, intensely loyal, and deeply bonded with their owners. They thrive on interactive play and curling up in warm laps.",
    characteristics: {
      energy: "High",
      temperament: "Talkative, Social, Affectionate",
      lifespan: "15–20 Years",
      coat: "Short, Glossy Seal Point Coat",
      diet: "Nutrient-Dense Lean Poultry"
    },
    gallery: [
      "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["cat_food", "cat_scratch", "pet_bowl", "pet_brush"]
  },

  "ragdoll-cat": {
    id: "ragdoll-cat",
    category: "cats",
    name: "Ragdoll Kitten",
    breed: "Ragdoll (Semi-Longhair Companion)",
    badge: "Docile & Lap Cat",
    price: 26000,
    reservationDeposit: 3000,
    availability: "Available for Reservation • In-Store Handover",
    age: "2.5 Months",
    ageOptions: ["2 Months", "2.5 Months", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Triple dewormed, feline vaccinated, vet health certified, litter trained",
    tagline: "Affectionate, blue-eyed lap companion known for going limp with joy in your arms.",
    description: "Ragdoll cats are famed for their strikingly placid, docile nature and tendency to relax completely when held. With silky, semi-long plush coats and piercing sapphire eyes, they make exquisite indoor family companions.",
    characteristics: {
      energy: "Moderate (Calm)",
      temperament: "Placid, Loving, Gentle",
      lifespan: "12–17 Years",
      coat: "Silky Semi-Longhair Pointed",
      diet: "Taurine & Omega-Rich Feline Nutrition"
    },
    gallery: [
      "https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["cat_food", "cat_scratch", "pet_bowl", "pet_brush"]
  },

  // ==========================================================
  // 🐦 BIRDS
  // ==========================================================
  "budgerigar": {
    id: "budgerigar",
    category: "birds",
    name: "Budgerigar (Budgie Pair)",
    breed: "Melopsittacus Undulatus",
    badge: "Cheerful & Social",
    price: 1499,
    reservationDeposit: 300,
    availability: "In Stock • Healthy Active Aviary",
    age: "4 Months",
    ageOptions: ["3 Months", "4 Months", "Young Adult"],
    genderOptions: ["Male & Female Pair", "Single Male", "Single Female"],
    defaultGender: "Male & Female Pair",
    healthInfo: "Quarantine Completed, Feathers & Beaks Clean, Active Appetite",
    tagline: "Lively, chatty, and colorful songbirds ideal for first-time avian enthusiasts.",
    description: "Budgies are vibrant and social companions known for chirping melodies and ability to learn words and whistles. Best kept in pairs for happiness and well-being.",
    characteristics: {
      socialNeed: "High (Best in Pairs)",
      temperament: "Playful, Cheerful, Inquisitive",
      lifespan: "7–10 Years",
      wingspan: "Small Aviary / Cage",
      diet: "Mixed Seed, Cut-tlebone & Greens"
    },
    gallery: [
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["bird_seed", "bird_cage", "pet_bowl"]
  },

  "cockatiel": {
    id: "cockatiel",
    category: "birds",
    name: "Cockatiel Companion",
    breed: "Nymphicus Hollandicus",
    badge: "Melodic Whistler",
    price: 3499,
    reservationDeposit: 500,
    availability: "Available for Handover • Hand-Fed Aviary",
    age: "5 Months",
    ageOptions: ["4 Months", "5 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Hand-reared, Vet Screened, Feathers & Wings Inspected",
    tagline: "Expressive crest, orange cheek patches, and a love for head scratches.",
    description: "Cockatiels are gentle, intelligent birds that form deep bonds with caretakers. They enjoy whistling tunes and perching sociably on shoulders.",
    characteristics: {
      temperament: "Gentle, Curious, Musical",
      lifespan: "15–20 Years",
      crest: "Expressive Crest Feathers",
      diet: "Fortified Seed, Millet & Fresh Veggies"
    },
    gallery: [
      "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1549608276-5786777e6587?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["bird_seed", "bird_cage", "pet_bowl"]
  },

  // ==========================================================
  // 🐠 AQUARIUM FISH
  // ==========================================================
  "halfmoon-betta": {
    id: "halfmoon-betta",
    category: "aquarium-fish",
    name: "Halfmoon Betta Showpiece",
    breed: "Betta Splendens (Male Show Specimen)",
    badge: "Living Aquarium Gem",
    price: 799,
    reservationDeposit: 200,
    availability: "In Stock • Quarantined & Healthy",
    age: "Young Adult",
    ageOptions: ["Young Adult (Show Quality)"],
    genderOptions: ["Male Showpiece"],
    defaultGender: "Male Showpiece",
    healthInfo: "Full 14-day quarantine completed, immaculate fins, active feeding",
    tagline: "Spectacular 180-degree fin spread with vivid metallic cyan iridescence.",
    description: "Halfmoon Bettas are the pinnacle of freshwater centerpiece fish. With sweeping fins that form a complete 180-degree half circle, they add mesmerizing movement and majestic color to planted nano aquariums.",
    characteristics: {
      temperament: "Solitary (Male Betta)",
      tankSize: "15L+ Heated & Filtered",
      waterTemp: "24°C–28°C",
      diet: "High-Protein Pellets & Frozen Bloodworms",
      finType: "180° Halfmoon Spread"
    },
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["fish_flakes", "water_cond", "air_pump"]
  },

  "neon-tetra": {
    id: "neon-tetra",
    category: "aquarium-fish",
    name: "Neon Tetra School (Set of 6)",
    breed: "Paracheirodon Innesi",
    badge: "Peaceful Schooling",
    price: 349,
    reservationDeposit: 100,
    availability: "In Stock • Schooling in Show Tank",
    age: "Juvenile",
    ageOptions: ["Juvenile School (6x)"],
    genderOptions: ["Mixed School (Unsexed)"],
    defaultGender: "Mixed School (Unsexed)",
    healthInfo: "Fully conditioned, eating micro-granules, vibrant neon stripe",
    tagline: "Electric blue and vivid red iridescent stripes illuminating aquascapes.",
    description: "Neon Tetras are peaceful, gentle community fish that swim in coordinated schools. Their luminous blue lateral line and brilliant scarlet lower half create an unforgettable visual in planted tanks.",
    characteristics: {
      temperament: "Peaceful Community",
      schoolSize: "6+ recommended",
      tankSize: "40L+ Planted Tank",
      diet: "Micro Flakes & Fine Pellets"
    },
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["fish_flakes", "water_cond", "air_pump"]
  },

  "angelfish": {
    id: "angelfish",
    category: "aquarium-fish",
    name: "Freshwater Angelfish",
    breed: "Pterophyllum Scalare",
    badge: "Graceful Showstopper",
    price: 499,
    reservationDeposit: 100,
    availability: "In Stock • Quarantined & Stable",
    age: "Medium (4–5cm)",
    ageOptions: ["Medium (4–5cm)", "Semi-Adult"],
    genderOptions: ["Unsexed Show Specimen"],
    defaultGender: "Unsexed Show Specimen",
    healthInfo: "Clean fins, clear eyes, stable water parameters",
    tagline: "Regal triangular silhouette with tall, flowing dorsal and ventral fins.",
    description: "Freshwater Angelfish glide through planted aquariums with majestic grace. Best suited for tall aquariums with gentle water flow and peaceful companion fish.",
    characteristics: {
      temperament: "Semi-Aggressive / Community",
      tankSize: "80L+ Tall Aquariums",
      diet: "Omnivorous Flakes & Brine Shrimp"
    },
    gallery: [
      "https://images.unsplash.com/photo-1520315342629-6ea920342047?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["fish_flakes", "water_cond", "air_pump"]
  },

  "betta-fish": {
    id: "betta-fish",
    category: "aquarium-fish",
    name: "Betta Fish",
    breed: "Betta splendens (Tropical Showpiece)",
    badge: "Vibrant & Bold",
    price: 349,
    reservationDeposit: 150,
    availability: "In Stock • In-Store Handover",
    age: "Adult Specimen",
    ageOptions: ["Adult Specimen"],
    genderOptions: ["Male"],
    defaultGender: "Male",
    healthInfo: "Quarantined, active finnage, premium conditioned, feeding on micro-pellets",
    tagline: "Striking tropical fish renowned for flowing fins and bold personality.",
    description: "Betta Fish (Betta splendens) bring a splash of vibrant living colour to any nano or desktop aquarium. Renowned for their independent nature, intelligence, and elaborate fins, bettas thrive in heated, filtered nano aquariums.",
    characteristics: {
      temperament: "Territorial, Active, Inquisitive",
      lifespan: "3–5 Years",
      waterTemp: "25–28°C (Tropical)",
      tankSize: "20L+ Nano Aquaria",
      diet: "High-Protein Micro-Pellets & Spirulina"
    },
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["fish_flakes", "water_cond", "fish_bowl"]
  },

  // ==========================================================
  // 🐹 HAMSTERS, MICE & SMALL PETS
  // ==========================================================
  // --- Fancy Mice ---
  "fancy-mouse-standard": {
    id: "fancy-mouse-standard",
    category: "mice",
    name: "Standard Fancy Mouse",
    breed: "Mus Musculus Domesticus",
    badge: "Inquisitive & Active",
    price: 399,
    reservationDeposit: 100,
    availability: "In Stock • Active & Healthy Colony",
    age: "8 Weeks",
    ageOptions: ["6 Weeks", "8 Weeks", "10 Weeks"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Clean coat, bright eyes, respiratory health confirmed",
    tagline: "Fascinating, clean, and gentle small companion for observation and care.",
    description: "Fancy mice are lively, clean, and endlessly curious creatures. They enjoy climbing toys, foraging puzzle treats, and nesting in cozy bedding.",
    characteristics: {
      temperament: "Curious, Agile, Sociable",
      lifespan: "1.5–2.5 Years",
      habitat: "Ventilated Wire or Glass Tank",
      diet: "Small Seed Grain Mix & Forage"
    },
    gallery: [
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["smallpet_food", "smallpet_wheel", "pet_bowl"]
  },

  // --- Hamsters & Small Companions ---
  "syrian-hamster": {
    id: "syrian-hamster",
    category: "small-pets",
    name: "Syrian Golden Hamster",
    breed: "Mesocricetus Auratus (Golden Hamster)",
    badge: "Solitary Explorer",
    price: 899,
    reservationDeposit: 200,
    availability: "In Stock • Clean Breeding Stock",
    age: "7 Weeks",
    ageOptions: ["6 Weeks", "7 Weeks", "2 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Male",
    healthInfo: "Checked for wet tail, clear eyes, teeth aligned & healthy weight",
    tagline: "Charming pocket pet that loves building tunnels and running on wheels.",
    description: "Syrian hamsters are docile, solitary pets that make delightful companions for children and quiet homes. Require solitary housing with a large wheel and deep bedding.",
    characteristics: {
      temperament: "Docile, Curious, Nocturnal",
      lifespan: "2–3 Years",
      housing: "Solitary (One per cage)",
      diet: "Hamster Grain Mix, Dried Mealworms & Hay"
    },
    gallery: [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["smallpet_food", "smallpet_wheel", "pet_bowl"]
  },

  "guinea-pig": {
    id: "guinea-pig",
    category: "small-pets",
    name: "Guinea Pig (Abyssinian)",
    breed: "Cavia Porcellus",
    badge: "Vocal & Sociable",
    price: 1299,
    reservationDeposit: 300,
    availability: "In Stock • Healthy Handover Ready",
    age: "10 Weeks",
    ageOptions: ["8 Weeks", "10 Weeks"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Nails trimmed, vitamin C supplemented, clear coat & vocal",
    tagline: "Gentle, squeaking herbivore that thrives in bonded pairs with lots of hay.",
    description: "Guinea pigs are famous for their endearing 'wheek' sounds and gentle nature. Completely herbivorous, requiring unlimited Timothy hay, daily Vitamin C, and spacious floor habitats.",
    characteristics: {
      temperament: "Gentle, Vocal, Sociable",
      lifespan: "5–8 Years",
      diet: "Timothy Hay, Vitamin C & Pellets",
      housing: "Spacious Enclosure"
    },
    gallery: [
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["smallpet_food", "pet_bowl"]
  },

  // ==========================================================
  // 🐾 OTHER ANIMALS
  // ==========================================================
  "holland-lop-rabbit": {
    id: "holland-lop-rabbit",
    category: "other-animals",
    name: "Holland Lop Bunny",
    breed: "Holland Lop Domestic Rabbit",
    badge: "Gentle & Affectionate",
    price: 3499,
    reservationDeposit: 500,
    availability: "Available for Reservation • In-Store Handover",
    age: "2.5 Months",
    ageOptions: ["2 Months", "2.5 Months", "3 Months"],
    genderOptions: ["Male", "Female"],
    defaultGender: "Female",
    healthInfo: "Vet health card, dewormed, teeth & ears checked, litter habit started",
    tagline: "Distinctive drooping ears, round plush head, and sweet gentle disposition.",
    description: "Holland Lops are dwarf domestic rabbits loved for their calm, affectionate nature and signature floppy ears. They can be litter-trained and form deep companion bonds when housed indoors.",
    characteristics: {
      temperament: "Calm, Gentle, Inquisitive",
      lifespan: "7–10 Years",
      diet: "Unlimited Timothy Hay, Fresh Greens & Pellets",
      housing: "Indoor Exercise Pen / Rabbit Habitat"
    },
    gallery: [
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1508455858334-95337ba25607?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["smallpet_food", "pet_bowl", "pet_brush"]
  },

  "hermanns-tortoise": {
    id: "hermanns-tortoise",
    category: "other-animals",
    name: "Hermann's Land Tortoise",
    breed: "Testudo Hermanni (Companion Specimen)",
    badge: "Ancient Companion",
    price: 8999,
    reservationDeposit: 1500,
    availability: "Available for Consultation & Handover",
    age: "Juvenile (1 Year)",
    ageOptions: ["Juvenile (1 Year)"],
    genderOptions: ["Unsexed Juvenile"],
    defaultGender: "Unsexed Juvenile",
    healthInfo: "Smooth carapace, bright eyes, UV basking acclimated, herbivorous diet",
    tagline: "Serene, hardy land reptile that thrives with proper UVB lighting and leafy greens.",
    description: "Land tortoises are captivating, long-lived companions. They require appropriate basking spots, UVB lighting, calcium supplementation, and dandelion/clover leafy greens.",
    characteristics: {
      temperament: "Peaceful, Slow-Paced, Hardy",
      lifespan: "40–60+ Years",
      uvRequirement: "High (10.0 UVB + 32°C Basking Spot)",
      diet: "100% Herbivorous (Calcium-Rich Weeds & Greens)"
    },
    gallery: [
      "https://images.unsplash.com/photo-1508455858334-95337ba25607?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=1200&q=85"
    ],
    recommendedProducts: ["pet_bowl"]
  }
};

// =============================================================================
// SECTION 2: PET PRODUCTS, FOOD, ACCESSORIES & TANKS
// =============================================================================
const PRODUCTS_CATALOG = {
  // ==========================================================
  // 🐶 DOG FOOD
  // ==========================================================
  dog_kibble: {
    id: "dog_kibble",
    name: "Nutri-Balance Dog Food",
    price: 499,
    category: "dog",
    categoryName: "Dog Food & Nutrition",
    filterCategory: "dog-food",
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Complete daily kibble formulated with real chicken, wholesome grains, and omega fatty acids for a glossy coat and optimal canine digestion. Specifically balanced for puppies and adult companions.",
    variant: "1kg",
    variants: [
      { id: "500g", name: "500g", price: 249 },
      { id: "1kg", name: "1kg", price: 499, default: true },
      { id: "3kg", name: "3kg", price: 1199 },
      { id: "5kg", name: "5kg", price: 1899 }
    ],
    features: [
      "Wholesome recipe formulated with real chicken and essential protein",
      "Omega 3 & 6 fatty acids for healthy skin and glossy coat",
      "Optimal digestive health with prebiotics and natural fiber",
      "Complete daily nutrition for small, medium, and active breeds"
    ],
    related: ["dog_leash", "pet_bowl", "pet_brush"]
  },

  // ==========================================================
  // 🐱 CAT FOOD
  // ==========================================================
  cat_food: {
    id: "cat_food",
    name: "Gourmet Ocean Cat Food",
    price: 389,
    category: "cat",
    categoryName: "Cat Food & Nutrition",
    filterCategory: "cat-food",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Delicious salmon and tuna recipe enriched with essential taurine, vitamins, and minerals for feline vitality. Packed with omega-3 fatty acids to reduce hairball formation and maintain a silky fur coat.",
    variant: "1kg",
    variants: [
      { id: "400g", name: "400g", price: 179 },
      { id: "1kg", name: "1kg", price: 389, default: true },
      { id: "2kg", name: "2kg", price: 729 }
    ],
    features: [
      "Real ocean fish protein (salmon & wild tuna)",
      "Fortified with essential taurine for heart and eye health",
      "Natural fiber blend helping minimize hairball buildup",
      "Zero artificial preservatives and wholesome ingredients"
    ],
    related: ["cat_scratch", "pet_bowl", "pet_brush"]
  },

  // ==========================================================
  // 🐦 BIRD FOOD
  // ==========================================================
  bird_seed: {
    id: "bird_seed",
    name: "Exotic Bird Seed Blend",
    price: 249,
    category: "bird",
    categoryName: "Bird Food & Seeds",
    filterCategory: "bird-food",
    image: "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Sun-cured yellow millet, canary seed, and sunflower kernels blended for budgies, finches, and pet birds. Quad-cleaned to eliminate dust and optimize song vitality and feather radiance.",
    variant: "1kg",
    variants: [
      { id: "500g", name: "500g", price: 139 },
      { id: "1kg", name: "1kg", price: 249, default: true }
    ],
    features: [
      "Triple-cleaned seeds and grains ensuring zero dust or residue",
      "Rich in natural oils, amino acids, and essential vitamins",
      "Encourages natural foraging and bright vibrant feather growth",
      "Formulated for budgerigars, lovebirds, finches, and songbirds"
    ],
    related: ["bird_cage", "smallpet_food", "pet_bowl"]
  },

  // ==========================================================
  // 🐹 SMALL PETS FOOD
  // ==========================================================
  smallpet_food: {
    id: "smallpet_food",
    name: "Hamster Gourmet Mix",
    price: 219,
    category: "smallpet",
    categoryName: "Small Pets Food & Mix",
    filterCategory: "small-pets-food",
    image: "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wholesome blend of seeds, dehydrated vegetables, extruded grains, and vitamins for active little foragers. Formulated specifically for Syrian hamsters, dwarf hamsters, and fancy mice.",
    variant: "800g",
    variants: [
      { id: "400g", name: "400g", price: 129 },
      { id: "800g", name: "800g", price: 219, default: true }
    ],
    features: [
      "Varied texture stimulates natural cheek pouching and foraging behavior",
      "Encourages healthy incisor dental wear through crunchable extrudates",
      "Enriched with vitamins A, D3, and E for bright eyes and soft coats",
      "Suitable for dwarf hamsters, Syrian hamsters, mice, and gerbils"
    ],
    related: ["smallpet_wheel", "pet_bowl", "bird_seed"]
  },

  // --- Small Pet Accessories & Habitats ---
  smallpet_wheel: {
    id: "smallpet_wheel",
    name: "Silent Exercise Running Wheel",
    price: 299,
    category: "smallpet",
    categoryName: "Small Pets Care & Accessories",
    filterCategory: "small-pets-accessories",
    image: "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1520087619250-584c0ebd4ec1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Smooth dual-ball-bearing mechanism ensuring quiet nocturnal running with a tail-safe solid running surface. Stand-mounted or cage-attachable for maximum flexibility.",
    variant: "18cm Silent Track",
    variants: [
      { id: "14cm_medium", name: "14cm Medium", price: 219 },
      { id: "18cm_silent", name: "18cm Silent Track", price: 299, default: true }
    ],
    features: [
      "Ultra-quiet dual ball-bearing spin: whisper silent for night runs",
      "Continuous solid running surface with zero pinch points or gaps",
      "Gentle curvature promotes correct spinal posture during sprint sessions",
      "Can be placed on cage floors via stable stand or mounted to wire bars"
    ],
    related: ["smallpet_food", "pet_bowl", "bird_cage"]
  },

  // ==========================================================
  // 🐠 FISH FOOD
  // ==========================================================
  fish_flakes: {
    id: "fish_flakes",
    name: "Daily Tropical Fish Flakes",
    price: 149,
    category: "aquarium",
    categoryName: "Aquarium Fish Food",
    filterCategory: "fish-food",
    image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Complete balanced nutrition formulated with natural spirulina and carotenoids for healthy immune systems and luminous scale coloration. High digestibility prevents aquarium water clouding.",
    variant: "100g",
    variants: [
      { id: "50g", name: "50g", price: 89 },
      { id: "100g", name: "100g", price: 149, default: true },
      { id: "250g", name: "250g", price: 329 }
    ],
    features: [
      "Rich in natural spirulina and Atlantic shrimp meal for vibrant colors",
      "Easily digestible formula keeping water crystal clear and low-waste",
      "Slow-sinking flakes accessible for top, middle, and bottom feeders",
      "Essential vitamins and bio-active trace minerals boosting immunity"
    ],
    related: ["air_pump", "water_cond", "pet_bowl"]
  },

  // ==========================================================
  // 🐕 DOG ACCESSORIES
  // ==========================================================
  dog_leash: {
    id: "dog_leash",
    name: "Reflective Harness & Leash",
    price: 349,
    category: "dog",
    categoryName: "Dog Accessories & Walking Gear",
    filterCategory: "dog-accessories",
    image: "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Durable padded harness with high-visibility reflective stitching and secure zinc-alloy safety clasp. Breathable mesh inner lining prevents chafing during daily walks and outdoor exercise.",
    variant: "Medium-Large",
    variants: [
      { id: "sm_med", name: "Small-Medium", price: 299 },
      { id: "med_lg", name: "Medium-Large", price: 349, default: true }
    ],
    features: [
      "High-visibility 3M reflective stitching for evening safety",
      "Breathable padded mesh chest plate to prevent throat pressure",
      "Heavy-duty zinc-alloy safety clasp with 360-degree swivel",
      "Quick-release snap buckles for easy fitting and adjustment"
    ],
    related: ["dog_kibble", "pet_bowl", "pet_brush"]
  },

  // --- General Pet Care Accessories (Bowls & Grooming) ---
  pet_bowl: {
    id: "pet_bowl",
    name: "Non-Slip Stainless Dual Bowl",
    price: 249,
    category: "accessories",
    categoryName: "Pet Feeding Accessories",
    filterCategory: "dog-accessories cat-accessories small-pets-accessories",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Rust-proof, hygienic stainless steel food and water bowls set inside a non-skid silicone base. Removable dish inserts are dishwasher-safe and spill-resistant for dogs, cats, and small companions.",
    variant: "Dual Medium (2 × 350ml)",
    variants: [
      { id: "dual_small", name: "Dual Small (2 × 250ml)", price: 199 },
      { id: "dual_medium", name: "Dual Medium (2 × 350ml)", price: 249, default: true },
      { id: "dual_large", name: "Dual Large (2 × 500ml)", price: 349 }
    ],
    features: [
      "Food-grade corrosion-resistant stainless steel dishes",
      "Heavy non-skid silicone base prevents bowl sliding and floor scratches",
      "Wide raised lip catches accidental water splashes and food spills",
      "Removable inserts for effortless daily hand washing or dishwasher cleaning"
    ],
    related: ["pet_brush", "dog_kibble", "cat_food"]
  },

  pet_brush: {
    id: "pet_brush",
    name: "Self-Cleaning Deshedding Brush",
    price: 229,
    category: "accessories",
    categoryName: "Pet Grooming & Care",
    filterCategory: "dog-accessories cat-accessories small-pets-accessories",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535294435445-d7249524ef2e?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Gentle curved bristle design removes loose fur and tangles for dogs, cats, and small pets with one-click fur release. Ergonomic soft-grip silicone handle ensures comfortable grooming sessions.",
    variant: "Standard Retractable",
    variants: [
      { id: "standard_retract", name: "Standard Retractable", price: 229, default: true },
      { id: "large_retract", name: "Large Retractable", price: 299 }
    ],
    features: [
      "One-click retractable bristle button cleans trapped fur in one second",
      "Fine bent wire bristles with rounded comfort tips to protect skin",
      "Gently removes dead undercoat, mats, and knots without pulling",
      "Ergonomic slip-resistant silicone grip handle reduces hand fatigue"
    ],
    related: ["pet_bowl", "dog_kibble", "cat_scratch"]
  },

  // ==========================================================
  // 🐈 CAT ACCESSORIES
  // ==========================================================
  cat_scratch: {
    id: "cat_scratch",
    name: "Sisal Scratching Post Tower",
    price: 549,
    category: "cat",
    categoryName: "Cat Furniture & Accessories",
    filterCategory: "cat-accessories",
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1513360309081-38f076278f1e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Stable wooden base wrapped in natural sisal fibers with a dangling plush bell toy to satisfy scratching instincts and protect your home furniture. Suitable for kittens and adult felines.",
    variant: "Standard Tower (45cm)",
    variants: [
      { id: "compact_30cm", name: "Compact (30cm)", price: 399 },
      { id: "standard_45cm", name: "Standard Tower (45cm)", price: 549, default: true },
      { id: "deluxe_60cm", name: "Deluxe Tower (60cm)", price: 799 }
    ],
    features: [
      "100% natural biodegradable sisal rope wrapping",
      "Solid heavy-weighted base prevents tipping during enthusiastic play",
      "Interactive plush bell toy stimulates hunting instincts",
      "Helps maintain healthy claw length while protecting home upholstery"
    ],
    related: ["cat_food", "pet_brush", "pet_bowl"]
  },

  // ==========================================================
  // 🐦 BIRD ACCESSORIES
  // ==========================================================
  bird_cage: {
    id: "bird_cage",
    name: "Enamelled Bird Habitat Cage",
    price: 899,
    category: "bird",
    categoryName: "Bird Cages & Accessories",
    filterCategory: "bird-accessories",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522858547137-f1dcec554f55?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Safe narrow wire spacing with twin feeding cups, wooden perches, and a slide-out tray for easy hygiene. Non-toxic powder-coated enamel resists rust and beak wear.",
    variant: "Standard Duo-Perch",
    variants: [
      { id: "standard_duo", name: "Standard Duo-Perch", price: 899, default: true },
      { id: "deluxe_habitat", name: "Spacious Deluxe Habitat", price: 1499 }
    ],
    features: [
      "Non-toxic baked enamel finish completely safe for curious beaks",
      "Slide-out bottom debris tray for quick, hygienic cage cleaning",
      "Includes two natural wood perches and two clear seed/water cups",
      "Top carry handle and safety door latch preventing accidental escapes"
    ],
    related: ["bird_seed", "pet_bowl", "smallpet_wheel"]
  },

  // --- Subcategory: Bird Cages ---
  cage_bird_1ftx1ft: {
    id: "cage_bird_1ftx1ft",
    name: "Bird Cage (1ft x 1ft)",
    price: 480,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Bird Cages",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wire bird cage measuring 1ft x 1ft.",
    variant: "Bird Cage (1ft x 1ft)",
    variants: [
      { id: "standard", name: "Bird Cage (1ft x 1ft)", price: 480, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹480",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_bird_15x12x12: {
    id: "cage_bird_15x12x12",
    name: "Bird Cage (15x12x12)",
    price: 700,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Bird Cages",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wire bird cage measuring 15x12x12 inches.",
    variant: "Bird Cage (15x12x12)",
    variants: [
      { id: "standard", name: "Bird Cage (15x12x12)", price: 700, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹700",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_bird_18x12x15: {
    id: "cage_bird_18x12x15",
    name: "Bird Cage (18x12x15)",
    price: 950,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Bird Cages",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wire bird cage measuring 18x12x15 inches.",
    variant: "Bird Cage (18x12x15)",
    variants: [
      { id: "standard", name: "Bird Cage (18x12x15)", price: 950, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_bird_24x16x16: {
    id: "cage_bird_24x16x16",
    name: "Bird Cage (24x16x16)",
    price: 1600,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Bird Cages",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wire bird cage measuring 24x16x16 inches.",
    variant: "Bird Cage (24x16x16)",
    variants: [
      { id: "standard", name: "Bird Cage (24x16x16)", price: 1600, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,600",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_bird_30x15x15: {
    id: "cage_bird_30x15x15",
    name: "Bird Cage (30x15x15)",
    price: 2800,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Bird Cages",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wire bird cage measuring 30x15x15 inches.",
    variant: "Bird Cage (30x15x15)",
    variants: [
      { id: "standard", name: "Bird Cage (30x15x15)", price: 2800, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,800",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_bird_36x36x18: {
    id: "cage_bird_36x36x18",
    name: "Bird Cage (36x36x18)",
    price: 6000,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Bird Cages",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Large wire bird habitat cage measuring 36x36x18 inches.",
    variant: "Bird Cage (36x36x18)",
    variants: [
      { id: "standard", name: "Bird Cage (36x36x18)", price: 6000, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹6,000",
      "Category: Bird Accessories (Bird Cages)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // --- Subcategory: Wooden Cage ---
  cage_wooden_18x15x12: {
    id: "cage_wooden_18x15x12",
    name: "Wooden Cage (18x15x12)",
    price: 1050,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Wooden Cage",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Traditional wooden bird cage measuring 18x15x12 inches.",
    variant: "Wooden Cage (18x15x12)",
    variants: [
      { id: "standard", name: "Wooden Cage (18x15x12)", price: 1050, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,050",
      "Category: Bird Accessories (Wooden Cage)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_wooden_24x15x12: {
    id: "cage_wooden_24x15x12",
    name: "Wooden Cage (24x15x12)",
    price: 1800,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Wooden Cage",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Traditional wooden bird cage measuring 24x15x12 inches.",
    variant: "Wooden Cage (24x15x12)",
    variants: [
      { id: "standard", name: "Wooden Cage (24x15x12)", price: 1800, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,800",
      "Category: Bird Accessories (Wooden Cage)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  cage_wooden_30x18x24: {
    id: "cage_wooden_30x18x24",
    name: "Wooden Cage (30x18x24)",
    price: 3500,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Wooden Cage",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Traditional wooden bird cage measuring 30x18x24 inches.",
    variant: "Wooden Cage (30x18x24)",
    variants: [
      { id: "standard", name: "Wooden Cage (30x18x24)", price: 3500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,500",
      "Category: Bird Accessories (Wooden Cage)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // --- Subcategory: Breeding Box ---
  box_breeding_6x6x6: {
    id: "box_breeding_6x6x6",
    name: "Breeding Box (6x6x6)",
    price: 250,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Breeding Box",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bird wooden breeding nest box measuring 6x6x6 inches.",
    variant: "Breeding Box (6x6x6)",
    variants: [
      { id: "standard", name: "Breeding Box (6x6x6)", price: 250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  box_breeding_6x8x8: {
    id: "box_breeding_6x8x8",
    name: "Breeding Box (6x8x8)",
    price: 350,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Breeding Box",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bird wooden breeding nest box measuring 6x8x8 inches.",
    variant: "Breeding Box (6x8x8)",
    variants: [
      { id: "standard", name: "Breeding Box (6x8x8)", price: 350, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹350",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  box_breeding_10x12x8: {
    id: "box_breeding_10x12x8",
    name: "Breeding Box (10x12x8)",
    price: 600,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Breeding Box",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bird wooden breeding nest box measuring 10x12x8 inches.",
    variant: "Breeding Box (10x12x8)",
    variants: [
      { id: "standard", name: "Breeding Box (10x12x8)", price: 600, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹600",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  box_breeding_12x8x8: {
    id: "box_breeding_12x8x8",
    name: "Breeding Box (12x8x8)",
    price: 650,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Breeding Box",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bird wooden breeding nest box measuring 12x8x8 inches.",
    variant: "Breeding Box (12x8x8)",
    variants: [
      { id: "standard", name: "Breeding Box (12x8x8)", price: 650, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Bird Accessories (Breeding Box)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // --- Subcategory: Love Birds Breeding Pot with Cap ---
  pot_breeding_lovebirds_6inch: {
    id: "pot_breeding_lovebirds_6inch",
    name: "Love Birds Breeding Pot with Cap (6 inch pot)",
    price: 150,
    category: "bird",
    categoryName: "Bird Accessories",
    filterCategory: "bird-accessories",
    subcategory: "Love Birds Breeding Pot with Cap",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Love birds earthen breeding pot with cap (6 inch pot).",
    variant: "Love Birds Breeding Pot with Cap (6 inch pot)",
    variants: [
      { id: "standard", name: "Love Birds Breeding Pot with Cap (6 inch pot)", price: 150, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹150",
      "Category: Bird Accessories (Love Birds Breeding Pot with Cap)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // ==========================================================
  // 🐠 AQUARIUM ACCESSORIES
  // ==========================================================
  // --- General Aquarium Maintenance & Care ---
  air_pump: {
    id: "air_pump",
    name: "Compact Quiet Air Pump",
    price: 399,
    category: "aquarium",
    categoryName: "Aquarium Equipment & Aeration",
    filterCategory: "aquarium-accessories",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Energy-efficient aerator maintaining steady dissolved oxygen for fish and beneficial biological filtration. Rubber shock-absorbing feet dampen motor vibration for quiet operation.",
    variant: "Single Outlet (Up to 60L)",
    variants: [
      { id: "single_outlet", name: "Single Outlet (Up to 60L)", price: 399, default: true },
      { id: "dual_outlet", name: "Dual Outlet (Up to 120L)", price: 599 }
    ],
    features: [
      "High-efficiency diaphragm motor producing steady micro-bubbles",
      "Soft silicone isolation feet significantly dampening operational sound",
      "Consumes low power while maintaining continuous oxygenation",
      "Universal nozzle compatible with standard airline tubing and air stones"
    ],
    related: ["water_cond", "fish_flakes", "pet_bowl"]
  },

  water_cond: {
    id: "water_cond",
    name: "Water Conditioner & Detoxifier",
    price: 199,
    category: "aquarium",
    categoryName: "Aquarium Water Care",
    filterCategory: "aquarium-accessories",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Instantly neutralizes tap water chlorine, chloramines, and binds harmful heavy metals during tank maintenance. Protects delicate fish gills and supports natural slime coat regeneration.",
    variant: "250ml",
    variants: [
      { id: "100ml", name: "100ml", price: 119 },
      { id: "250ml", name: "250ml", price: 199, default: true },
      { id: "500ml", name: "500ml", price: 349 }
    ],
    features: [
      "Instantly renders tap water safe for freshwater fish and aquatic plants",
      "Neutralizes aggressive chlorine, chloramines, and toxic heavy metals",
      "Aloe vera extract and colloidal polymers shield delicate gill membranes",
      "Concentrated formula: 5ml treats up to 40 litres of fresh tap water"
    ],
    related: ["fish_flakes", "air_pump", "pet_bowl"]
  },
  //================================
  // --- Subcategory: Fish Net ---
  //================================

  net_fish_3_inch: {
    id: "net_fish_3_inch",
    name: "Fish Net",
    price: 50,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Fish Net",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium fish net for safe handling and transferring of fish.",
    variant: "Fish Net 3 Inch",
    variants: [
      { id: "net_3_inch", name: "3 Inch", price: 50, default: true },
      { id: "net_4_inch", name: "4 Inch", price: 80 },
      { id: "net_5_inch", name: "5 Inch", price: 100 },
      { id: "net_6_inch", name: "6 Inch", price: 120 },
      { id: "net_8_inch", name: "8 Inch", price: 150 },
      { id: "net_10_inch", name: "10 Inch", price: 250 },
      { id: "net_12_inch", name: "12 Inch", price: 300 }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price depends on selected size",
      "Category: Aquarium Accessories (Fish Net)",
      "WhatsApp enquiry for availability and delivery confirmation"
    ]
  },

  //========================================
  // --- Subcategory: Air Pump & Filters ---
  //========================================

  pump_rs_180: {
    id: "pump_rs_180",
    name: "RS 180",
    price: 250,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "RS 180 aquarium air pump.",
    variant: "RS 180",
    variants: [
      { id: "standard", name: "RS 180", price: 250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  pump_bl_106: {
    id: "pump_bl_106",
    name: "BL 106",
    price: 220,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "BL 106 aquarium air pump.",
    variant: "BL 106",
    variants: [
      { id: "standard", name: "BL 106", price: 220, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹220",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  pump_dolphin_1502: {
    id: "pump_dolphin_1502",
    name: "DOLPHIN 1502",
    price: 1200,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "DOLPHIN 1502 aquarium air pump / filter system.",
    variant: "DOLPHIN 1502",
    variants: [
      { id: "standard", name: "DOLPHIN 1502", price: 1200, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,200",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  pump_dolphin_1501: {
    id: "pump_dolphin_1501",
    name: "DOLPHIN 1501",
    price: 950,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "DOLPHIN 1501 aquarium air pump / filter system.",
    variant: "DOLPHIN 1501",
    variants: [
      { id: "standard", name: "DOLPHIN 1501", price: 950, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_4w: {
    id: "filter_4w",
    name: "FILTER 4 W",
    price: 300,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 4 W.",
    variant: "FILTER 4 W",
    variants: [
      { id: "standard", name: "FILTER 4 W", price: 300, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹300",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_6w: {
    id: "filter_6w",
    name: "FILTER 6 W",
    price: 400,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 6 W.",
    variant: "FILTER 6 W",
    variants: [
      { id: "standard", name: "FILTER 6 W", price: 400, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹400",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_15w: {
    id: "filter_15w",
    name: "FILTER 15 W",
    price: 500,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 15 W.",
    variant: "FILTER 15 W",
    variants: [
      { id: "standard", name: "FILTER 15 W", price: 500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹500",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_18w: {
    id: "filter_18w",
    name: "FILTER 18 W",
    price: 650,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 18 W.",
    variant: "FILTER 18 W",
    variants: [
      { id: "standard", name: "FILTER 18 W", price: 650, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_25w: {
    id: "filter_25w",
    name: "FILTER 25 W",
    price: 750,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 25 W.",
    variant: "FILTER 25 W",
    variants: [
      { id: "standard", name: "FILTER 25 W", price: 750, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹750",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_30w: {
    id: "filter_30w",
    name: "FILTER 30 W",
    price: 850,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 30 W.",
    variant: "FILTER 30 W",
    variants: [
      { id: "standard", name: "FILTER 30 W", price: 850, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_35w: {
    id: "filter_35w",
    name: "FILTER 35 W",
    price: 900,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium internal power filter 35 W.",
    variant: "FILTER 35 W",
    variants: [
      { id: "standard", name: "FILTER 35 W", price: 900, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹900",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  //=================================
  //    LIQUID FILTER 
  //=================================

  filter_rs_liquid_18w: {
    id: "filter_rs_liquid_18w",
    name: "RS LIQUID FILTER 18 W",
    price: 850,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "RS LIQUID FILTER 18 W aquarium filtration system.",
    variant: "RS LIQUID FILTER 18 W",
    variants: [
      { id: "standard", name: "RS LIQUID FILTER 18 W", price: 850, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_rs_liquid_25w: {
    id: "filter_rs_liquid_25w",
    name: "RS LIQUID FILTER 25 W",
    price: 950,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "RS LIQUID FILTER 25 W aquarium filtration system.",
    variant: "RS LIQUID FILTER 25 W",
    variants: [
      { id: "standard", name: "RS LIQUID FILTER 25 W", price: 950, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_rs_liquid_35w: {
    id: "filter_rs_liquid_35w",
    name: "RS LIQUID FILTER 35 W",
    price: 1250,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "RS LIQUID FILTER 35 W aquarium filtration system.",
    variant: "RS LIQUID FILTER 35 W",
    variants: [
      { id: "standard", name: "RS LIQUID FILTER 35 W", price: 1250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,250",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // ==========================================================
  // Hang On Filter
  // ==========================================================

  filter_hang_on_rs_1000: {
    id: "filter_hang_on_rs_1000",
    name: "Hang On Filter RS 1000",
    price: 650,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Hang On Back aquarium filter RS 1000.",
    variant: "Hang On Filter RS 1000",
    variants: [
      { id: "standard", name: "Hang On Filter RS 1000", price: 650, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_hang_on_rs_2000: {
    id: "filter_hang_on_rs_2000",
    name: "Hang On Filter RS 2000",
    price: 850,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Hang On Back aquarium filter RS 2000.",
    variant: "Hang On Filter RS 2000",
    variants: [
      { id: "standard", name: "Hang On Filter RS 2000", price: 850, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_hang_on_rs_3000: {
    id: "filter_hang_on_rs_3000",
    name: "Hang On Filter RS 3000",
    price: 1250,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Hang On Back aquarium filter RS 3000.",
    variant: "Hang On Filter RS 3000",
    variants: [
      { id: "standard", name: "Hang On Filter RS 3000", price: 1250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,250",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_hang_on_rs_4000: {
    id: "filter_hang_on_rs_4000",
    name: "Hang On Filter RS 4000",
    price: 1350,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Hang On Back aquarium filter RS 4000.",
    variant: "Hang On Filter RS 4000",
    variants: [
      { id: "standard", name: "Hang On Filter RS 4000", price: 1350, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,350",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  //================================================
  // Aquarium Magnetic Glass Filter
  //================================================

  filter_mag_glass_rs_06: {
    id: "filter_mag_glass_rs_06",
    name: "Aquarium Magnetic Glass Filter RS 06",
    price: 280,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium Magnetic Glass Filter model RS 06.",
    variant: "Aquarium Magnetic Glass Filter RS 06",
    variants: [
      { id: "standard", name: "Aquarium Magnetic Glass Filter RS 06", price: 280, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹280",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_mag_glass_rs_09: {
    id: "filter_mag_glass_rs_09",
    name: "Aquarium Magnetic Glass Filter RS 09",
    price: 480,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium Magnetic Glass Filter model RS 09.",
    variant: "Aquarium Magnetic Glass Filter RS 09",
    variants: [
      { id: "standard", name: "Aquarium Magnetic Glass Filter RS 09", price: 480, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹480",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_mag_glass_rs_11: {
    id: "filter_mag_glass_rs_11",
    name: "Aquarium Magnetic Glass Filter RS 11",
    price: 650,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium Magnetic Glass Filter model RS 11.",
    variant: "Aquarium Magnetic Glass Filter RS 11",
    variants: [
      { id: "standard", name: "Aquarium Magnetic Glass Filter RS 11", price: 650, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  filter_mag_glass_rs_12: {
    id: "filter_mag_glass_rs_12",
    name: "Aquarium Magnetic Glass Filter RS 12",
    price: 850,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Air Pump & Filters",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium Magnetic Glass Filter model RS 12.",
    variant: "Aquarium Magnetic Glass Filter RS 12",
    variants: [
      { id: "standard", name: "Aquarium Magnetic Glass Filter RS 12", price: 850, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Aquarium Accessories (Air Pump & Filters)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },
  //================================================
  // --- Subcategory: Aquarium Submersible Lamp ---
  //================================================

  lamp_bluepet_bl_20f: {
    id: "lamp_bluepet_bl_20f",
    name: "Bluepet BL 20F",
    price: 250,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Aquarium Submersible Lamp",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bluepet BL 20F aquarium submersible LED lamp.",
    variant: "Bluepet BL 20F",
    variants: [
      { id: "standard", name: "Bluepet BL 20F", price: 250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  lamp_bluepet_bl_30f: {
    id: "lamp_bluepet_bl_30f",
    name: "Bluepet BL 30F",
    price: 350,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Aquarium Submersible Lamp",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bluepet BL 30F aquarium submersible LED lamp.",
    variant: "Bluepet BL 30F",
    variants: [
      { id: "standard", name: "Bluepet BL 30F", price: 350, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹350",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  lamp_bluepet_bl_40f: {
    id: "lamp_bluepet_bl_40f",
    name: "Bluepet BL 40F",
    price: 450,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Aquarium Submersible Lamp",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bluepet BL 40F aquarium submersible LED lamp.",
    variant: "Bluepet BL 40F",
    variants: [
      { id: "standard", name: "Bluepet BL 40F", price: 450, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹450",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  lamp_bluepet_bl_50f: {
    id: "lamp_bluepet_bl_50f",
    name: "Bluepet BL 50F",
    price: 550,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Aquarium Submersible Lamp",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bluepet BL 50F aquarium submersible LED lamp.",
    variant: "Bluepet BL 50F",
    variants: [
      { id: "standard", name: "Bluepet BL 50F", price: 550, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹550",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  lamp_bluepet_bl_60f: {
    id: "lamp_bluepet_bl_60f",
    name: "Bluepet BL 60F",
    price: 650,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "Aquarium Submersible Lamp",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bluepet BL 60F aquarium submersible LED lamp.",
    variant: "Bluepet BL 60F",
    variants: [
      { id: "standard", name: "Bluepet BL 60F", price: 650, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹650",
      "Category: Aquarium Accessories (Aquarium Submersible Lamp)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  //================================================
  // --- Subcategory: BIO Sponge ---
  //================================================

  sponge_bio_xy2535: {
    id: "sponge_bio_xy2535",
    name: "Bio sponge XY2535",
    price: 150,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "BIO Sponge",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bio sponge biochemical filter sponge XY2535.",
    variant: "Bio sponge XY2535",
    variants: [
      { id: "standard", name: "Bio sponge XY2535", price: 150, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹150",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  sponge_bio_xy180: {
    id: "sponge_bio_xy180",
    name: "Bio sponge XY180",
    price: 220,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "BIO Sponge",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bio sponge biochemical filter sponge XY180.",
    variant: "Bio sponge XY180",
    variants: [
      { id: "standard", name: "Bio sponge XY180", price: 220, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹220",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  sponge_bio_xy280: {
    id: "sponge_bio_xy280",
    name: "Bio sponge XY280",
    price: 380,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "BIO Sponge",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bio sponge biochemical filter sponge XY280.",
    variant: "Bio sponge XY280",
    variants: [
      { id: "standard", name: "Bio sponge XY280", price: 380, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹380",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  sponge_bio_xy380: {
    id: "sponge_bio_xy380",
    name: "Bio sponge XY380",
    price: 450,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "BIO Sponge",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Bio sponge biochemical filter sponge XY380.",
    variant: "Bio sponge XY380",
    variants: [
      { id: "standard", name: "Bio sponge XY380", price: 450, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹450",
      "Category: Aquarium Accessories (BIO Sponge)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  //================================================
  // --- Subcategory: UV Light ---
  //================================================

  uv_light_blf01: {
    id: "uv_light_blf01",
    name: "UV light BLF01",
    price: 1250,
    category: "aquarium",
    categoryName: "Aquarium Accessories",
    filterCategory: "aquarium-accessories",
    subcategory: "UV Light",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Aquarium UV clarifier light sterilizer BLF01.",
    variant: "UV light BLF01",
    variants: [
      { id: "standard", name: "UV light BLF01", price: 1250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,250",
      "Category: Aquarium Accessories (UV Light)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // ==========================================================
  // 🐟 FISH TANK — INDIAN TANK
  // ==========================================================

  fish_tank: {
    id: "fish_tank",
    name: "Rimless Float-Glass Aquarium Tank",
    price: 1799,
    category: "aquarium",
    categoryName: "Fish Tanks & Aquariums",
    filterCategory: "fish-tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Modern rimless glass aquarium with diamond-polished beveled edges and high-clarity silicone joints. Engineered for tropical freshwater species, planted aquascapes, and community fish.",
    variant: "2ft",
    variants: [
      { id: "1ft", name: "1ft", price: 899 },
      { id: "2ft", name: "2ft", price: 1799, default: true },
      { id: "3ft", name: "3ft", price: 3499 }
    ],
    features: [
      "Ultra-clear low-iron float glass with over 91% optical clarity",
      "Minimalist German silicone bonding for unobstructed panoramic view",
      "Includes protective leveling foam mat to safeguard base pane",
      "Standard dimensions optimized for canister filters and LED light fixtures"
    ],
    related: ["air_pump", "water_cond", "fish_flakes"]
  },

  // --- Subcategory: Indian Tank ---
  tank_indian_12x6x6: {
    id: "tank_indian_12x6x6",
    name: "Fish tank (12x6x6) with tank top",
    price: 450,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 12x6x6 inches with fitted tank top cover.",
    variant: "Fish tank (12x6x6) with tank top",
    variants: [
      { id: "standard", name: "Fish tank (12x6x6) with tank top", price: 450, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹450",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_12x6x8: {
    id: "tank_indian_12x6x8",
    name: "Fish tank (12x6x8) with tank top",
    price: 600,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 12x6x8 inches with fitted tank top cover.",
    variant: "Fish tank (12x6x8) with tank top",
    variants: [
      { id: "standard", name: "Fish tank (12x6x8) with tank top", price: 600, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹600",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_18x9x12: {
    id: "tank_indian_18x9x12",
    name: "Fish tank (18x9x12) with tank top",
    price: 950,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 18x9x12 inches with fitted tank top cover.",
    variant: "Fish tank (18x9x12) with tank top",
    variants: [
      { id: "standard", name: "Fish tank (18x9x12) with tank top", price: 950, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹950",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_24x12x12: {
    id: "tank_indian_24x12x12",
    name: "Fish tank (24x12x12) with tank top",
    price: 1500,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 24x12x12 inches with fitted tank top cover.",
    variant: "Fish tank (24x12x12) with tank top",
    variants: [
      { id: "standard", name: "Fish tank (24x12x12) with tank top", price: 1500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,500",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_24x12x15: {
    id: "tank_indian_24x12x15",
    name: "Fish tank (24x12x15) with tank top",
    price: 1850,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 24x12x15 inches with fitted tank top cover.",
    variant: "Fish tank (24x12x15) with tank top",
    variants: [
      { id: "standard", name: "Fish tank (24x12x15) with tank top", price: 1850, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,850",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_30x12x15: {
    id: "tank_indian_30x12x15",
    name: "Fish tank (30x12x15) with tank top (8mm)",
    price: 2750,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 30x12x15 inches with tank top (8mm glass).",
    variant: "Fish tank (30x12x15) with tank top (8mm)",
    variants: [
      { id: "standard", name: "Fish tank (30x12x15) with tank top (8mm)", price: 2750, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,750",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_36x15x18: {
    id: "tank_indian_36x15x18",
    name: "Fish tank (36x15x18) with tank top (8mm)",
    price: 5000,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 36x15x18 inches with tank top (8mm glass).",
    variant: "Fish tank (36x15x18) with tank top (8mm)",
    variants: [
      { id: "standard", name: "Fish tank (36x15x18) with tank top (8mm)", price: 5000, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹5,000",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_36x12x15: {
    id: "tank_indian_36x12x15",
    name: "Fish tank (36x12x15) with tank top (8mm)",
    price: 3950,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 36x12x15 inches with tank top (8mm glass).",
    variant: "Fish tank (36x12x15) with tank top (8mm)",
    variants: [
      { id: "standard", name: "Fish tank (36x12x15) with tank top (8mm)", price: 3950, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,950",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_indian_48x12x15: {
    id: "tank_indian_48x12x15",
    name: "Fish tank (48x12x15) with tank top (8mm)",
    price: 6000,
    category: "aquarium",
    categoryName: "Fish Tank",
    filterCategory: "fish-tank",
    subcategory: "Indian Tank",
    image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Indian Fish Tank measuring 48x12x15 inches with tank top (8mm glass).",
    variant: "Fish tank (48x12x15) with tank top (8mm)",
    variants: [
      { id: "standard", name: "Fish tank (48x12x15) with tank top (8mm)", price: 6000, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹6,000",
      "Category: Fish Tank (Indian Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // ==========================================================
  // 🐟 IMPORTED TANK
  // ==========================================================
  imported_tank: {
    id: "imported_tank",
    name: "Imported Curved-Glass Nano Aquarium",
    price: 2999,
    category: "aquarium",
    categoryName: "Imported Aquarium Systems",
    filterCategory: "imported-tank",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Seamless curved front glass corner technology offering a panoramic, distortion-free viewing experience. Fitted with integrated back filtration compartment and energy-efficient full-spectrum LED lighting.",
    variant: "Medium",
    variants: [
      { id: "small", name: "Small", price: 1499 },
      { id: "medium", name: "Medium", price: 2999, default: true },
      { id: "large", name: "Large", price: 5499 }
    ],
    features: [
      "Seamless one-piece curved front glass without silicone edge seams",
      "Hidden multi-stage bio-filtration system concealed behind sleek partition",
      "Touch-sensitive dual-mode LED lighting (daylight white & night-blue)",
      "Compact plug-and-play setup perfect for modern homes and office desks"
    ],
    related: ["fish_tank", "fish_flakes", "water_cond"]
  },

  // --- Subcategory: Imported Tank ---
  tank_imp_6x8x8: {
    id: "tank_imp_6x8x8",
    name: "Fish tank (6x8x8) with set tank top light filter",
    price: 1500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "Imported Tank",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported Fish Tank (6x8x8) complete set with tank top, lighting, and filter.",
    variant: "Fish tank (6x8x8) with set tank top light filter",
    variants: [
      { id: "standard", name: "Fish tank (6x8x8) with set tank top light filter", price: 1500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,500",
      "Category: Imported Tank (Imported Tank)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // --- Subcategory: PF Series ---
  tank_pf_200: {
    id: "tank_pf_200",
    name: "PF 200",
    price: 1300,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 200.",
    variant: "PF 200",
    variants: [
      { id: "standard", name: "PF 200", price: 1300, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,300",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_pf_235: {
    id: "tank_pf_235",
    name: "PF 235",
    price: 1800,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 235.",
    variant: "PF 235",
    variants: [
      { id: "standard", name: "PF 235", price: 1800, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,800",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_pf_285: {
    id: "tank_pf_285",
    name: "PF 285",
    price: 2450,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 285.",
    variant: "PF 285",
    variants: [
      { id: "standard", name: "PF 285", price: 2450, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,450",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_pf_385: {
    id: "tank_pf_385",
    name: "PF 385",
    price: 3400,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 385.",
    variant: "PF 385",
    variants: [
      { id: "standard", name: "PF 385", price: 3400, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,400",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_pf_420: {
    id: "tank_pf_420",
    name: "PF 420",
    price: 4500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 420.",
    variant: "PF 420",
    variants: [
      { id: "standard", name: "PF 420", price: 4500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹4,500",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_pf_520: {
    id: "tank_pf_520",
    name: "PF 520",
    price: 4900,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 520.",
    variant: "PF 520",
    variants: [
      { id: "standard", name: "PF 520", price: 4900, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹4,900",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_pf_620: {
    id: "tank_pf_620",
    name: "PF 620",
    price: 5500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "PF Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium PF Series model PF 620.",
    variant: "PF 620",
    variants: [
      { id: "standard", name: "PF 620", price: 5500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹5,500",
      "Category: Imported Tank (PF Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // --- Subcategory: RS Series ---
  tank_rs_230: {
    id: "tank_rs_230",
    name: "RS 230",
    price: 1700,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 230.",
    variant: "RS 230",
    variants: [
      { id: "standard", name: "RS 230", price: 1700, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹1,700",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_300: {
    id: "tank_rs_300",
    name: "RS 300",
    price: 2200,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 300.",
    variant: "RS 300",
    variants: [
      { id: "standard", name: "RS 300", price: 2200, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹2,200",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_380: {
    id: "tank_rs_380",
    name: "RS 380",
    price: 3600,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 380.",
    variant: "RS 380",
    variants: [
      { id: "standard", name: "RS 380", price: 3600, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹3,600",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_480: {
    id: "tank_rs_480",
    name: "RS 480",
    price: 4800,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 480.",
    variant: "RS 480",
    variants: [
      { id: "standard", name: "RS 480", price: 4800, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹4,800",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_580: {
    id: "tank_rs_580",
    name: "RS 580",
    price: 5500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 580.",
    variant: "RS 580",
    variants: [
      { id: "standard", name: "RS 580", price: 5500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹5,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_600b: {
    id: "tank_rs_600b",
    name: "RS 600 B",
    price: 6200,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 600 B.",
    variant: "RS 600 B",
    variants: [
      { id: "standard", name: "RS 600 B", price: 6200, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹6,200",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_700el: {
    id: "tank_rs_700el",
    name: "RS 700 EL",
    price: 7500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 700 EL.",
    variant: "RS 700 EL",
    variants: [
      { id: "standard", name: "RS 700 EL", price: 7500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹7,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_800el: {
    id: "tank_rs_800el",
    name: "RS 800 EL",
    price: 9500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 800 EL.",
    variant: "RS 800 EL",
    variants: [
      { id: "standard", name: "RS 800 EL", price: 9500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹9,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_1000el: {
    id: "tank_rs_1000el",
    name: "RS 1000 EL",
    price: 14500,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 1000 EL.",
    variant: "RS 1000 EL",
    variants: [
      { id: "standard", name: "RS 1000 EL", price: 14500, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹14,500",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  tank_rs_1200el: {
    id: "tank_rs_1200el",
    name: "RS 1200 EL",
    price: 18000,
    category: "aquarium",
    categoryName: "Imported Tank",
    filterCategory: "imported-tank",
    subcategory: "RS Series",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Imported curved-glass aquarium RS Series model RS 1200 EL.",
    variant: "RS 1200 EL",
    variants: [
      { id: "standard", name: "RS 1200 EL", price: 18000, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹18,000",
      "Category: Imported Tank (RS Series)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // ==========================================================
  // 🫧 FISH BOWL
  // ==========================================================
  fish_bowl: {
    id: "fish_bowl",
    name: "Ultra-Clear Glass Fish Bowl",
    price: 499,
    category: "aquarium",
    categoryName: "Aquarium Fish Bowls",
    filterCategory: "fish-bowl",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Classic spherical fish bowl hand-blown from crystal-clear, distortion-free thick glass. Ideal for small coldwater or betta fish setups, aquatic plants, and decorative tabletop aquascaping.",
    variant: "10 inch",
    variants: [
      { id: "8inch", name: "8 inch", price: 299 },
      { id: "10inch", name: "10 inch", price: 499, default: true },
      { id: "12inch", name: "12 inch", price: 699 }
    ],
    features: [
      "High-transmission automotive-grade crystal clear glass",
      "Thickened rim and flat heavy base for maximum stability",
      "Smooth polished edges ensuring safe handling and easy cleaning",
      "Versatile design suitable for bettas, aquatic marimo balls, and planted bowls"
    ],
    related: ["fish_flakes", "water_cond", "air_pump"]
  },

  // --- Subcategory: Fish Bowl ---
  bowl_4_inch: {
    id: "bowl_4_inch",
    name: "4 Inch Fish Bowl",
    price: 59,
    category: "aquarium",
    categoryName: "Fish Bowl",
    filterCategory: "fish-bowl",
    subcategory: "Fish Bowl",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Clear glass round fish bowl (4 Inch diameter).",
    variant: "4 Inch Fish Bowl",
    variants: [
      { id: "standard", name: "4 Inch Fish Bowl", price: 59, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹59",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  bowl_6_inch: {
    id: "bowl_6_inch",
    name: "6 Inch Fish Bowl",
    price: 99,
    category: "aquarium",
    categoryName: "Fish Bowl",
    filterCategory: "fish-bowl",
    subcategory: "Fish Bowl",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Clear glass round fish bowl (6 Inch diameter).",
    variant: "6 Inch Fish Bowl",
    variants: [
      { id: "standard", name: "6 Inch Fish Bowl", price: 99, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹99",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  bowl_8_inch: {
    id: "bowl_8_inch",
    name: "8 Inch Fish Bowl",
    price: 159,
    category: "aquarium",
    categoryName: "Fish Bowl",
    filterCategory: "fish-bowl",
    subcategory: "Fish Bowl",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Clear glass round fish bowl (8 Inch diameter).",
    variant: "8 Inch Fish Bowl",
    variants: [
      { id: "standard", name: "8 Inch Fish Bowl", price: 159, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹159",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  bowl_10_inch: {
    id: "bowl_10_inch",
    name: "10 Inch Fish Bowl",
    price: 349,
    category: "aquarium",
    categoryName: "Fish Bowl",
    filterCategory: "fish-bowl",
    subcategory: "Fish Bowl",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Clear glass round fish bowl (10 Inch diameter).",
    variant: "10 Inch Fish Bowl",
    variants: [
      { id: "standard", name: "10 Inch Fish Bowl", price: 349, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹349",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  bowl_12_inch: {
    id: "bowl_12_inch",
    name: "12 Inch Fish Bowl",
    price: 495,
    category: "aquarium",
    categoryName: "Fish Bowl",
    filterCategory: "fish-bowl",
    subcategory: "Fish Bowl",
    image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Clear glass round fish bowl (12 Inch diameter).",
    variant: "12 Inch Fish Bowl",
    variants: [
      { id: "standard", name: "12 Inch Fish Bowl", price: 495, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹495",
      "Category: Fish Bowl (Fish Bowl)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  // ==========================================================
  // 🏠 WALL TANK
  // ==========================================================
  wall_tank: {
    id: "wall_tank",
    name: "Panoramic Wall-Mounted Aquarium",
    price: 2499,
    category: "aquarium",
    categoryName: "Wall Aquarium Systems",
    filterCategory: "wall-tank",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Contemporary slim-profile wall aquarium that transforms living spaces into tranquil living art. Features robust brushed aluminum mounting bracket and hidden maintenance access.",
    variant: "2ft Panoramic",
    variants: [
      { id: "2ft", name: "2ft Panoramic", price: 2499, default: true },
      { id: "3ft", name: "3ft Executive", price: 4999 }
    ],
    features: [
      "Heavy-duty marine-grade aluminum frame and reinforced load brackets",
      "Ultra-slim space-saving wall profile with hidden cable channels",
      "Internal hidden power filter and LED lighting system",
      "Complete mounting template and masonry hardware included"
    ],
    related: ["fish_tank", "air_pump", "water_cond"]
  },

  // --- Subcategory: Wall Mounted ---
  wall_tank_4_inch: {
    id: "wall_tank_4_inch",
    name: "Wall Tank 4 Inch",
    price: 250,
    category: "aquarium",
    categoryName: "Wall Tank",
    filterCategory: "wall-tank",
    subcategory: "Wall Mounted",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wall Mounted Aquarium Tank (4 Inch).",
    variant: "Wall Tank 4 Inch",
    variants: [
      { id: "standard", name: "Wall Tank 4 Inch", price: 250, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹250",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  wall_tank_6_inch: {
    id: "wall_tank_6_inch",
    name: "Wall Tank 6 Inch",
    price: 350,
    category: "aquarium",
    categoryName: "Wall Tank",
    filterCategory: "wall-tank",
    subcategory: "Wall Mounted",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wall Mounted Aquarium Tank (6 Inch).",
    variant: "Wall Tank 6 Inch",
    variants: [
      { id: "standard", name: "Wall Tank 6 Inch", price: 350, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹350",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  wall_tank_8_inch: {
    id: "wall_tank_8_inch",
    name: "Wall Tank 8 Inch",
    price: 550,
    category: "aquarium",
    categoryName: "Wall Tank",
    filterCategory: "wall-tank",
    subcategory: "Wall Mounted",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wall Mounted Aquarium Tank (8 Inch).",
    variant: "Wall Tank 8 Inch",
    variants: [
      { id: "standard", name: "Wall Tank 8 Inch", price: 550, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹550",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  wall_tank_10_inch: {
    id: "wall_tank_10_inch",
    name: "Wall Tank 10 Inch",
    price: 750,
    category: "aquarium",
    categoryName: "Wall Tank",
    filterCategory: "wall-tank",
    subcategory: "Wall Mounted",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wall Mounted Aquarium Tank (10 Inch).",
    variant: "Wall Tank 10 Inch",
    variants: [
      { id: "standard", name: "Wall Tank 10 Inch", price: 750, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹750",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
    ]
  },

  wall_tank_12_inch: {
    id: "wall_tank_12_inch",
    name: "Wall Tank 12 Inch",
    price: 850,
    category: "aquarium",
    categoryName: "Wall Tank",
    filterCategory: "wall-tank",
    subcategory: "Wall Mounted",
    image: "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1508873696983-2df57046475a?auto=format&fit=crop&w=800&q=80"
    ],
    desc: "Wall Mounted Aquarium Tank (12 Inch).",
    variant: "Wall Tank 12 Inch",
    variants: [
      { id: "standard", name: "Wall Tank 12 Inch", price: 850, default: true }
    ],
    features: [
      "Genuine owner-provided product from UR WORLD AQUARIUM & PET SHOP",
      "Actual store price: ₹850",
      "Category: Wall Tank (Wall Mounted)",
      "Immediate WhatsApp availability enquiry and doorstep delivery confirmation"
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
