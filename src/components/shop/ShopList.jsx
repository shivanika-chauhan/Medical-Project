// ShopList.jsx
const products = [
  // Shop By Category
  { id: 1, name: "Systane Gil Eye Drop 10ml", price: 300, category: "ShopByCategory", image: "/images/12.jpg" },
  { id: 2, name: "Himalaya Liv 52 Tablet 100", price: 255, category: "ShopByCategory", image: "/images/13.jpg" },
  { id: 3, name: "COdevel", price: 423, category: "ShopByCategory", image: "/images/14.jpg" },
  { id: 4, name: "Hairbless Tablet 30", price: 223, category: "ShopByCategory", image: "/images/15.jpg" },
  { id: 5, name: "Seven Seas Original Capsule 100", price: 85, category: "ShopByCategory", image: "/images/16.jpg" },
  { id: 6, name: "Reffron", price: 60, category: "ShopByCategory", image: "/images/17.jpg" },
  { id: 7, name: "Cetaphil Dam Daily Advance Ultra Hydrating Lotion 100gm", price: 620, category: "ShopByCategory", image: "/images/18.jpg" },
  { id: 8, name: "Ubicar Tablet 10", price: 100, category: "ShopByCategory", image: "/images/19.jpg" },
  { id: 9, name: "Cetaphil Oily Skin Cleanser 125ml", price: 120, category: "ShopByCategory", image: "/images/20.jpg" },
  { id: 10, name: "Dettol Antiseptic Liquid 60ml", price: 80, category: "ShopByCategory", image: "/images/21.jpg" },
  { id: 11, name: "Diataal Nutripop Multivitamin Hair & Skin Energy & Immunity For Fitness & Wellness 30 Capsules", price: 150, category: "ShopByCategory", image: "/images/22.jpg" },
  { id: 12, name: "Ketoscalp Shampoo 100ml", price: 6.0, category: "ShopByCategory", image: "/images/23.jpg" },
  { id: 13, name: "Naturolax-a Tasty Orange Flavour Powder 300gm", price: 150, category: "ShopByCategory", image: "/images/24.jpg" },
  { id: 14, name: "Virilex Tablet 20", price: 152, category: "ShopByCategory", image: "/images/25.jpg" },
  { id: 15, name: "Nurokind Gold Rf Capsule 10", price: 613, category: "ShopByCategory", image: "/images/26.jpg" },

  // New Launches
  { id: 16, name: "Shelcal Pro | Kids | Calcium & Vitamin D3 | Lemon Orange & Mixed Berries | Sugar Free | 30 Gummies", price: 150, category: "NewLaunches", image: "/images/27.jpg" },
  { id: 17, name: "Shelcal 500mg Bottle Of 30 Tablets", price: 140, category: "NewLaunches", image: "/images/28.jpg" },
  { id: 18, name: "Baidyanath Nagpur Triphala Churna 500", price: 145, category: "NewLaunches", image: "/images/29.jpg" },
  { id: 19, name: "Flamingo Orthopaedic Electric Heating Pad | Regular", price: 620, category: "NewLaunches", image: "/images/30.jpg" },
  { id: 20, name: "Fixderma Salyzap Az For Body Acne Spray 100ml", price: 60, category: "NewLaunches", image: "/images/31.jpg" },
  { id: 21, name: "Protinex Health Supplement And Nutritional Protein Mix For Adults Creamy Vanilla Flavour Box 200 Gm", price: 120, category: "NewLaunches", image: "/images/32.jpg" },
  { id: 22, name: "Improsyn Strip Of 10 Tablets", price: 160, category: "NewLaunches", image: "/images/33.jpg" },
  { id: 23, name: "Hansaplast Elastic Antiseptic Bandages Pack Of 50", price: 260, category: "NewLaunches", image: "/images/34.jpg" },
  { id: 24, name: "Dhootapapeshwar Swamala Classic - 500gm", price: 280, category: "NewLaunches", image: "/images/35.jpg" },
  { id: 25, name: "Kesh King Gold Anti Hairfall Shampoo Bottle Of 600 Ml", price: 250, category: "NewLaunches", image: "/images/36.jpg" },

  // Trending
  { id: 26, name: "Shelcal 500mg Strip Of 15 Tablets", price: 250, category: "Trending", image: "/images/37.jpg" },
  { id: 27, name: "Abzorb Total Skin Relief Dusting Powder (20% Extra) Bottle Of 120gm", price: 240, category: "Trending", image: "/images/38.jpg" },
  { id: 28, name: "Liveasy Wellness Calcium Magnesium Vitamin D3 & Zinc - Bones & Dental Health - Bottle 60 Tabs", price: 420, category: "Trending", image: "/images/39.jpg" },
  { id: 29, name: "Evion 400mg Strip Of 20 Capsule", price: 140, category: "Trending", image: "/images/40.jpg" },
  { id: 30, name: "Revital Men Complete Multivitamin | With Natural Ginseng | 60 Capsules", price: 140, category: "Trending", image: "/images/41.jpg" },
  { id: 31, name: "Dr. Morepen Gluco One Blood Glucose Test Strip | Bg-03 | 50 No''S", price: 140, category: "Trending", image: "/images/42.jpg" },
  { id: 32, name: "Everherb Karela Jamun Juice - Helps Maintains Healthy Sugar Levels -Helps In Weight Management - 1 L", price: 600, category: "Trending", image: "/images/50.jpg" },
  { id: 33, name: "Supradyn Daily Multivitamin For Men & Women Builds Energy & Immunity Strip Of 15 Tablets", price: 60, category: "Trending", image: "/images/45.jpg" },
  { id: 34, name: "I Pill Emergency Contraceptive Pill | 1 No'S", price: 140, category: "Trending", image: "/images/sh.jpg" },

  //personal care
  { id: 35, name: "Kera Xl New Hair Growth Serum 60ml", price: 140, category: "personalcare", image: "/images/51.jpg" },
  { id: 36, name: "Morr Pro Hair Serum 60ml", price: 140, category: "personalcare", image: "/images/52.jpg" },
  { id: 37, name: "Indulekha Bringha Oil 100ml", price: 150, category: "personalcare", image: "/images/53.jpg" },
  { id: 38, name: "Follihair A Tablet 15", price: 170, category: "personalcare", image: "/images/54.jpg" },
  { id: 39, name: "Lice Clear Shampoo 50ml", price: 178, category: "personalcare", image: "/images/55.jpg" },
  { id: 40, name: "Navratna Ayurvedic Cool Hair Oil 450ml", price: 140, category: "personalcare", image: "/images/56.jpg" },
  { id: 41, name: "Biokesh Advanced New Tablet 10", price: 170, category: "personalcare", image: "/images/57.jpg" },
  { id: 42, name: "Keraglo Men Tablet 30", price: 165, category: "personalcare", image: "/images/58.jpg" },
  { id: 43, name: "Navratna Ayurvedic Cool Hair Oil 270ml", price: 230, category: "personalcare", image: "/images/59.jpg" },
  { id: 44, name: "Skinshine Spf 30 Sunscreen Lotion 100ml", price: 240, category: "personalcare", image: "/images/60.jpg" },
  { id: 45, name: "Ahaglow S Foaming Face Wash 100ml", price: 320, category: "personalcare", image: "/images/61.jpg" },
  { id: 46, name: "Excela Moisturiser For Oily & Acne Prone Skin 50gm", price: 140, category: "personalcare", image: "/images/62.jpg" },
  { id: 47, name: "Paternia Xt Tablet 10", price: 420, category: "personalcare", image: "/images/63.jpg" },
  { id: 48, name: "Proanagen Solution 100ml", price: 647, category: "personalcare", image: "/images/64.jpg" },
  { id: 49, name: "Triclenz Hair Cleanser 250ml", price: 600, category: "personalcare", image: "/images/65.jpg" },
    
  //Health Condition 

 { id: 50, name: "Limcee Orange Flavour Chewable Tablet 15", price: 150, category: "Healthcondition", image: "/images/66.jpg" },
  { id: 51, name: "Cartigen Pro Tablet 10", price: 140, category: "Healthcondition", image: "/images/67.jpg" },
  { id: 52, name: "Tendotrust Tablet 15", price: 124, category: "Healthcondition", image: "/images/69.jpg" },
  { id: 53, name: "Digene Mint Flavour Gel 450ml", price: 620, category: "Healthcondition", image: "/images/68.jpg" },
  { id: 54, name: "Softovac Sf Powder 250gm", price: 620, category: "Healthcondition", image: "/images/70.jpg" },
  { id: 55, name: "Gaviscon Peppermint Liquid 150ml", price: 150, category: "Healthcondition", image: "/images/72.jpg" },
  { id: 56, name: "Baidyanath Triphala Churna 500gm", price: 260, category: "Healthcondition", image: "/images/71.jpg" },
  { id: 57, name: "Omee Mint Flavour Chewable Tablet 12", price: 230, category: "Healthcondition", image: "/images/73.jpg" },
  { id: 58, name: "Etazyme Pineapple Flavoured Syrup 200ml", price: 320, category: "Healthcondition", image: "/images/74.jpg" },
  { id: 59, name: "Cremaffin Mixed Fruit Flavour Emulsion 225ml", price: 350, category: "Healthcondition", image: "/images/75.jpg" },
  { id: 60, name: "Refresh Tears Eye Drops 10ml", price: 263, category: "Healthcondition", image: "/images/76.jpg" },
  { id: 61, name: "Duphalac Lemon Flavour Solution 450ml", price: 510, category: "Healthcondition", image: "/images/77.jpg" },
  { id: 62, name: "Shelcal Joints Capsule 10", price: 230, category: "Healthcondition", image: "/images/78.jpg" },
  { id: 63, name: "Softovac Sf Powder 450gm", price: 230, category: "Healthcondition", image: "/images/79.jpg" },
  { id: 64, name: "Rejoint New Tablet 15", price: 214, category: "Healthcondition", image: "/images/80.jpg" },

//vitamins & suppliments
{ id: 65, name: "Diataal Nutripop Multivitamin Hair & Skin Energy & Immunity Fitness & Wellness Capsule 15", price: 120, category: "Vitamins", image: "/images/81.jpg" },
  { id: 66, name: "A To Z Gold New Capsule 15", price: 140, category: "Vitamins", image: "/images/82.jpg" },
  { id: 67, name: "Zincovit Syrup 200ml", price: 253, category: "Vitamins", image: "/images/83.jpg" },
  { id: 68, name: "Fercee Red Syrup 225ml", price: 241, category: "Vitamins", image: "/images/84.jpg" },
  { id: 69, name: "Health Ok For Men Tablet 10", price: 324, category: "Vitamins", image: "/images/85.jpg" },
  { id: 70, name: "Folirange Capsule 30", price: 123, category: "Vitamins", image: "/images/86.jpg" },
  { id: 71, name: "Argistrong Lemon Orange Flavour Sugar Free Sachet 6.5gm", price: 263, category: "Vitamins", image: "/images/88.jpg" },
  { id: 72, name: "Cipcal 500 Tablet 15", price: 260, category: "Vitamins", image: "/images/89.jpg" },
  { id: 73, name: "Shelcal 500 Tablet 15", price: 263, category: "Vitamins", image: "/images/87.jpg" },
  { id: 74, name: "Evion 400 Capsule 20", price: 650, category: "Vitamins", image: "/images/90.jpg" },
  { id: 75, name: "Meganeuron Od + Capsule 10", price: 152, category: "Vitamins", image: "/images/91.jpg" },
  { id: 76, name: "Neurobion Forte Tablet 30", price: 320, category: "Vitamins", image: "/images/93.jpg" },
  { id: 77, name: "Ccm Tablet 40", price: 200, category: "Vitamins", image: "/images/94.jpg" },
  { id: 78, name: "Shelcal Hd Tablet 15", price: 236, category: "Vitamins", image: "/images/92.jpg" },
  { id: 79, name: "Maxvida High Protein Vanilla Flavour Zero Added Sugars", price: 320, category: "Vitamins", image: "/images/95.jpg" },
//Diabites
{ id: 80, name: "Accu Chek Instant Blood Glucose Meter With 10 Test Strips Free", price: 200, category: "Diabites", image: "/images/97.jpg" },
  { id: 81, name: "Accu Chek Active Test Strips 50", price: 320, category: "Diabites", image: "/images/96.jpg" },
  //Health care
  { id: 82, name: "Omron Hem 7121j Blood Pressure Monitor 1", price: 140, category: "healthcare", image: "/images/98.jpg" },
  { id: 83, name: "Tynor A 05 Lumbo Sacral Large Grey Belt 1", price: 250, category: "healthcare", image: "/images/99.jpg" },
//homeopethic
   { id: 84, name: "Dr Reckeweg Calcarea Phosphorica 6x Biochemic Tablet 20gm", price: 320, category: "homeopethic", image: "/images/100.jpg" },
  { id: 85, name: "Dr Reckeweg R25 Drops 22ml", price: 230, category: "homeopethic", image: "/images/101.jpg" },
  
  
];

export default products;
