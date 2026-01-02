// app.js - Expanded Logic for Pawsome Puppies

// Initial Data - Will be synced with localStorage
const initialPoliciesData = [
    { title: "Reservation & Deposits", icon: "ðŸ¤", text: "A non-refundable reservation fee of $250 is required to hold any puppy for a period of up to 7 days. This fee is credited towards the final adoption price. A 20% down payment is required once the adoption contract is signed to initiate health certifications." },
    { title: "Payment Methods", icon: "ðŸ’³", text: "We accept all major credit cards, bank wire transfers, and verified digital payments. For your security, all transactions are encrypted and processed through our secure partner portal. In-house financing is available for qualified adopters." },
    { title: "Refund & Health Guarantee", icon: "ðŸ›¡ï¸", text: "We provide a 1-year genetic health guarantee. If a puppy is found to have a life-threatening genetic defect within 12 months, we offer a full replacement or refund. Adoption fees are final once the puppy has been delivered and inspected by the new owner." }
];

const initialFaqData = [
    { q: "How do you handle shipping?", a: "We use specialized pet couriers who ensure your puppy travels in climate-controlled, safe conditions. Air travel is always with a dedicated 'flight nanny' who keeps the puppy in the cabin for personalized care." },
    { q: "Are the puppies vaccinated?", a: "Yes, every single puppy comes with a complete, certified health record showing all age-appropriate vaccinations and deworming treatments performed by a licensed veterinarian." },
    { q: "Can I visit the puppies in person?", a: "Absolutely! We encourage local visits by appointment. For those living further away, we offer high-definition 4K video calls to meet your potential new family member virtually." },
    { q: "What comes with the puppy?", a: "Each puppy arrives with a 'Starter Pack' including: AKC/Official Registration papers, a 1-week supply of premium food, a familiar scent blanket, and their full health certificate." }
];

const initialAboutData = {
    heroTitle: "About Our Mission",
    storyTitle: "The Pawsome Story",
    storyText: "Founded with a single goal: to match loving families with the perfect puppy companions. We work directly with trusted local puppy homes and breeders, purchasing quality puppies in bulk to offer competitive prices. Our careful selection process ensures every puppy meets our high health and temperament standards before being matched with their forever family.",
    valuesTitle: "Our Values",
    valuesList: ["Uncompromising Health Standards", "Compassionate Care", "Transparent Adoption Process", "Ethical Sourcing from Trusted Local Breeders"],
    visionTitle: "Our Vision",
    visionText: "To be the most trusted name in puppy adoption by 2026, setting a new global standard for animal welfare and customer joy.",
    locationTitle: "Our Business Model",
    locationText: "We've built strong relationships with reputable local puppy homes and small-scale breeders in the area. By purchasing puppies in bulk directly from these trusted sources, we're able to offer premium purebred puppies at competitive prices while ensuring each one receives proper care and health certifications. When you reserve a puppy, we coordinate with our network of suppliers to bring your new companion home safely and efficiently."
};

const initialGlobalSettings = {
    siteName: "Pawsome Puppies",
    heroTitle: "Find Your Forever Best Friend Today",
    heroSubtitle: "Luxury Puppy Adoption with Heart & Integrity. Every puppy is a promise of joy, health, and lifelong companionship.",
    heroBg: "1.jpg"
};

const initialBreedsData = [
    {
        "size":  "medium",
        "id":  "beagle",
        "energy":  "high",
        "name":  "Beagle",
        "description":  "Merry, friendly, and curious.",
        "priceRange":  "$1,500 - $2,200",
        "puppies":  [
                        {
                            "id":  "b1",
                            "name":  "Buddy",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/1/1767372803796.jpg",
                                           "PICTURES/Beagle puppies/1/1767372813573.jpg",
                                           "PICTURES/Beagle puppies/1/1767372817406.jpg",
                                           "PICTURES/Beagle puppies/1/1767372824761.jpg"
                                       ],
                            "fee":  "$1,500",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "b2",
                            "name":  "Charlie",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/2/1767373155605.jpg"
                                       ],
                            "fee":  "$1,600",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "b3",
                            "name":  "Cooper",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/3/1767373148610.jpg",
                                           "PICTURES/Beagle puppies/3/1767373153270.jpg"
                                       ],
                            "fee":  "$1,700",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "b4",
                            "name":  "Daisy",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/4/1767373112797.jpg",
                                           "PICTURES/Beagle puppies/4/1767373116304.jpg"
                                       ],
                            "fee":  "$1,800",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "b5",
                            "name":  "Lucy",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/5/1767373087871.jpg",
                                           "PICTURES/Beagle puppies/5/1767373100002.jpg"
                                       ],
                            "fee":  "$1,900",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "b6",
                            "name":  "Max",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/6/1767373027845.jpg",
                                           "PICTURES/Beagle puppies/6/1767373029430.jpg",
                                           "PICTURES/Beagle puppies/6/1767373031140.jpg",
                                           "PICTURES/Beagle puppies/6/1767373034812.jpg"
                                       ],
                            "fee":  "$2,000",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "b7",
                            "name":  "Molly",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/7/1767372976711.jpg",
                                           "PICTURES/Beagle puppies/7/1767372979268.jpg",
                                           "PICTURES/Beagle puppies/7/1767372998032.jpg",
                                           "PICTURES/Beagle puppies/7/1767373003250.jpg",
                                           "PICTURES/Beagle puppies/7/1767373004946.jpg"
                                       ],
                            "fee":  "$2,100",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "b8",
                            "name":  "Rocky",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/8/1767372954811.jpg",
                                           "PICTURES/Beagle puppies/8/1767372961540.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "b9",
                            "name":  "Sadie",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/9/1767372937824.jpg",
                                           "PICTURES/Beagle puppies/9/1767372939515.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "b10",
                            "name":  "Snoopy",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Beagle puppies/10/1767372904104.jpg",
                                           "PICTURES/Beagle puppies/10/1767372906222.jpg",
                                           "PICTURES/Beagle puppies/10/1767372907900.jpg",
                                           "PICTURES/Beagle puppies/10/1767372909873.jpg",
                                           "PICTURES/Beagle puppies/10/1767372911391.jpg"
                                       ],
                            "fee":  "$2,400",
                            "attitude":  "Social"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "large",
        "id":  "cane-corso",
        "energy":  "low",
        "name":  "Cane Corso",
        "description":  "Affectionate, intelligent, and majestic.",
        "priceRange":  "$2,800 - $4,500",
        "puppies":  [
                        {
                            "id":  "c1",
                            "name":  "Titan",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/1/1767366321687.jpg",
                                           "PICTURES/CANE CORSO/1/1767366328146.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "c2",
                            "name":  "Zeus",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/2/1767366347430.jpg",
                                           "PICTURES/CANE CORSO/2/1767366351982.jpg",
                                           "PICTURES/CANE CORSO/2/1767366354447.jpg",
                                           "PICTURES/CANE CORSO/2/1767366359550.jpg"
                                       ],
                            "fee":  "$2,900",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "c3",
                            "name":  "Athena",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/3/1767366428549.jpg",
                                           "PICTURES/CANE CORSO/3/1767366433015.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "c4",
                            "name":  "Bruno",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/4/1767366518611.jpg",
                                           "PICTURES/CANE CORSO/4/1767366521188.jpg",
                                           "PICTURES/CANE CORSO/4/1767366527738.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "c5",
                            "name":  "Rex",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/5/1767366670735.jpg",
                                           "PICTURES/CANE CORSO/5/1767366723213.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "c6",
                            "name":  "Maya",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/6/1767366830651.jpg",
                                           "PICTURES/CANE CORSO/6/1767366856880.jpg",
                                           "PICTURES/CANE CORSO/6/1767366879619.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "c7",
                            "name":  "Koda",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/7/1767366920444.jpg",
                                           "PICTURES/CANE CORSO/7/1767366923011.jpg",
                                           "PICTURES/CANE CORSO/7/1767366929535.jpg"
                                       ],
                            "fee":  "$3,400",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "c8",
                            "name":  "Simba",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/8/1767367305977.jpg",
                                           "PICTURES/CANE CORSO/8/1767367309726.jpg"
                                       ],
                            "fee":  "$3,500",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "c9",
                            "name":  "Nala",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/9/1767367374758.jpg",
                                           "PICTURES/CANE CORSO/9/1767367376432.jpg",
                                           "PICTURES/CANE CORSO/9/1767367378028.jpg"
                                       ],
                            "fee":  "$3,600",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "c10",
                            "name":  "Duke",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/10/1767367405320.jpg",
                                           "PICTURES/CANE CORSO/10/1767367407524.jpg",
                                           "PICTURES/CANE CORSO/10/1767367409097.jpg",
                                           "PICTURES/CANE CORSO/10/1767367410598.jpg"
                                       ],
                            "fee":  "$3,700",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "c11",
                            "name":  "Shadow",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/11/1767367419660.jpg",
                                           "PICTURES/CANE CORSO/11/1767367421302.jpg"
                                       ],
                            "fee":  "$3,800",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "c12",
                            "name":  "Ranger",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/12/1767367461498.jpg",
                                           "PICTURES/CANE CORSO/12/1767367464452.jpg",
                                           "PICTURES/CANE CORSO/12/1767367466369.jpg",
                                           "PICTURES/CANE CORSO/12/1767367468565.jpg",
                                           "PICTURES/CANE CORSO/12/1767367470698.jpg"
                                       ],
                            "fee":  "$3,900",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "c13",
                            "name":  "Bellara",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/13/1767367480978.jpg",
                                           "PICTURES/CANE CORSO/13/1767367482558.jpg",
                                           "PICTURES/CANE CORSO/13/1767367484032.jpg",
                                           "PICTURES/CANE CORSO/13/1767367485593.jpg"
                                       ],
                            "fee":  "$4,000",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "c14",
                            "name":  "Chief",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/14/1767367528768.jpg",
                                           "PICTURES/CANE CORSO/14/1767367530464.jpg",
                                           "PICTURES/CANE CORSO/14/1767367533884.jpg",
                                           "PICTURES/CANE CORSO/14/1767367583709.jpg",
                                           "PICTURES/CANE CORSO/14/1767367592316.jpg",
                                           "PICTURES/CANE CORSO/14/1767367596491.jpg",
                                           "PICTURES/CANE CORSO/14/1767367598199.jpg",
                                           "PICTURES/CANE CORSO/14/1767367599750.jpg",
                                           "PICTURES/CANE CORSO/14/1767367602626.jpg"
                                       ],
                            "fee":  "$4,100",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "cbreeder liesen",
                            "name":  "Titan 2",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/breeder liesen/1767367636979.jpg",
                                           "PICTURES/CANE CORSO/breeder liesen/1767367673219.jpg"
                                       ],
                            "fee":  "$4,200",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "cgroup of pic",
                            "name":  "Zeus 2",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/group of pic/1767367426956.jpg",
                                           "PICTURES/CANE CORSO/group of pic/1767367428514.jpg",
                                           "PICTURES/CANE CORSO/group of pic/1767367433341.jpg",
                                           "PICTURES/CANE CORSO/group of pic/1767367434920.jpg",
                                           "PICTURES/CANE CORSO/group of pic/1767367444420.jpg",
                                           "PICTURES/CANE CORSO/group of pic/1767367456222.jpg"
                                       ],
                            "fee":  "$4,300",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "cnew borns",
                            "name":  "Athena 2",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/CANE CORSO/new borns/1767366906741.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767366909529.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767366916889.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767366955002.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767366959250.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767367248560.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767367254848.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767367270069.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767367293506.jpg",
                                           "PICTURES/CANE CORSO/new borns/1767367297092.jpg"
                                       ],
                            "fee":  "$4,400",
                            "attitude":  "Merry"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "small",
        "id":  "chihuahua",
        "energy":  "medium",
        "name":  "Chihuahua",
        "description":  "Charming, graceful, and sassy.",
        "priceRange":  "$1,400 - $2,500",
        "puppies":  [
                        {
                            "id":  "c1",
                            "name":  "Chico",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/1/1767371336223.jpg",
                                           "PICTURES/Chihauah/1/1767371338242.jpg",
                                           "PICTURES/Chihauah/1/1767371340405.jpg"
                                       ],
                            "fee":  "$1,400",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "c2",
                            "name":  "Taco",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/2/1767371367610.jpg",
                                           "PICTURES/Chihauah/2/1767371399742.jpg",
                                           "PICTURES/Chihauah/2/1767371411316.jpg",
                                           "PICTURES/Chihauah/2/1767371599822.jpg",
                                           "PICTURES/Chihauah/2/1767371603447.jpg"
                                       ],
                            "fee":  "$1,500",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "c3",
                            "name":  "Coco",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/3/1767371605306.jpg",
                                           "PICTURES/Chihauah/3/1767371614073.jpg",
                                           "PICTURES/Chihauah/3/1767371615670.jpg"
                                       ],
                            "fee":  "$1,600",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "c4",
                            "name":  "Peanut",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/4/1767371626249.jpg",
                                           "PICTURES/Chihauah/4/1767371627965.jpg",
                                           "PICTURES/Chihauah/4/1767371629662.jpg",
                                           "PICTURES/Chihauah/4/1767371631705.jpg"
                                       ],
                            "fee":  "$1,700",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "c5",
                            "name":  "Bibi",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/5/1767371639812.jpg",
                                           "PICTURES/Chihauah/5/1767371641633.jpg",
                                           "PICTURES/Chihauah/5/1767371643230.jpg",
                                           "PICTURES/Chihauah/5/1767371644901.jpg",
                                           "PICTURES/Chihauah/5/1767371694166.jpg",
                                           "PICTURES/Chihauah/5/1767371726415.jpg",
                                           "PICTURES/Chihauah/5/1767371741105.jpg"
                                       ],
                            "fee":  "$1,800",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "c6",
                            "name":  "Gigi",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/6/1767371689853.jpg"
                                       ],
                            "fee":  "$1,900",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "c7",
                            "name":  "Paco",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/7/1767371650733.jpg",
                                           "PICTURES/Chihauah/7/1767371652292.jpg",
                                           "PICTURES/Chihauah/7/1767371653937.jpg"
                                       ],
                            "fee":  "$2,000",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "c8",
                            "name":  "Mimi",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/8/1767371597889.jpg"
                                       ],
                            "fee":  "$2,100",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "c9",
                            "name":  "Nano",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/9/1767371333402.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "c10",
                            "name":  "Lulu",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Chihauah/10/1767370908499.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Social"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "small",
        "id":  "dachshund",
        "energy":  "medium",
        "name":  "Dachshund",
        "description":  "Clever, lively, and courageous.",
        "priceRange":  "$1,800 - $3,200",
        "puppies":  [
                        {
                            "id":  "d1",
                            "name":  "Oscar",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/1/1767372097195.jpg",
                                           "PICTURES/Dashunde puppies/1/1767372099076.jpg",
                                           "PICTURES/Dashunde puppies/1/1767372100783.jpg"
                                       ],
                            "fee":  "$1,800",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "d2",
                            "name":  "Frank",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/2/1767372152309.jpg",
                                           "PICTURES/Dashunde puppies/2/1767372154478.jpg",
                                           "PICTURES/Dashunde puppies/2/1767372156150.jpg"
                                       ],
                            "fee":  "$1,900",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "d3",
                            "name":  "Penny",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/3/1767372200735.jpg",
                                           "PICTURES/Dashunde puppies/3/1767372203639.jpg",
                                           "PICTURES/Dashunde puppies/3/1767372205674.jpg"
                                       ],
                            "fee":  "$2,000",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "d4",
                            "name":  "Wiener",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/4/1767372230032.jpg",
                                           "PICTURES/Dashunde puppies/4/1767372234318.jpg",
                                           "PICTURES/Dashunde puppies/4/1767372236250.jpg"
                                       ],
                            "fee":  "$2,100",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "d5",
                            "name":  "Dash",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/5/1767372255131.jpg",
                                           "PICTURES/Dashunde puppies/5/1767372257393.jpg",
                                           "PICTURES/Dashunde puppies/5/1767372259860.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "d6",
                            "name":  "Wally",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/6/1767372360100.jpg",
                                           "PICTURES/Dashunde puppies/6/1767372362049.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "d7",
                            "name":  "Lola",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/7/1767372363875.jpg",
                                           "PICTURES/Dashunde puppies/7/1767372367989.jpg"
                                       ],
                            "fee":  "$2,400",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "d8",
                            "name":  "Winnie",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/8/1767372419722.jpg",
                                           "PICTURES/Dashunde puppies/8/1767372421544.jpg",
                                           "PICTURES/Dashunde puppies/8/1767372424043.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "d9",
                            "name":  "Bean",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/9/1767372446768.jpg",
                                           "PICTURES/Dashunde puppies/9/1767372448442.jpg",
                                           "PICTURES/Dashunde puppies/9/1767372450153.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "d10",
                            "name":  "Noodle",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/10/1767372558634.jpg",
                                           "PICTURES/Dashunde puppies/10/1767372560659.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "d11",
                            "name":  "Snickers",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/11/1767372535572.jpg",
                                           "PICTURES/Dashunde puppies/11/1767372537938.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "d12",
                            "name":  "Pretzel",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/12/1767372499651.jpg",
                                           "PICTURES/Dashunde puppies/12/1767372501342.jpg",
                                           "PICTURES/Dashunde puppies/12/1767372503714.jpg"
                                       ],
                            "fee":  "$2,900",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "d13",
                            "name":  "Shorty",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/13/1767372594575.jpg",
                                           "PICTURES/Dashunde puppies/13/1767372607440.jpg",
                                           "PICTURES/Dashunde puppies/13/1767372610348.jpg",
                                           "PICTURES/Dashunde puppies/13/1767372614491.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "d14",
                            "name":  "Slider",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/14/1767372308807.jpg",
                                           "PICTURES/Dashunde puppies/14/1767372311117.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "d15",
                            "name":  "Dobby",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/15/1767372433308.jpg",
                                           "PICTURES/Dashunde puppies/15/1767372437649.jpg",
                                           "PICTURES/Dashunde puppies/15/1767372440797.jpg",
                                           "PICTURES/Dashunde puppies/15/1767372482806.jpg",
                                           "PICTURES/Dashunde puppies/15/1767372485133.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "d16",
                            "name":  "Fritz",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/16/1767372487887.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "d17",
                            "name":  "Otto",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Dashunde puppies/17/1767372369998.jpg"
                                       ],
                            "fee":  "$3,400",
                            "attitude":  "Merry"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "medium",
        "id":  "bulldogs",
        "energy":  "low",
        "name":  "Bulldogs (French \u0026 English)",
        "description":  "Docile, willful, and friendly.",
        "priceRange":  "$3,000 - $6,500",
        "puppies":  [
                        {
                            "id":  "b1",
                            "name":  "Max",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/1/1767367833102.jpg",
                                           "PICTURES/Bulldog/1/1767367834700.jpg",
                                           "PICTURES/Bulldog/1/1767367836224.jpg",
                                           "PICTURES/Bulldog/1/1767367837835.jpg",
                                           "PICTURES/Bulldog/1/1767367839686.jpg",
                                           "PICTURES/Bulldog/1/1767367841034.jpg",
                                           "PICTURES/Bulldog/1/1767367842543.jpg",
                                           "PICTURES/Bulldog/1/1767367844589.jpg",
                                           "PICTURES/Bulldog/1/1767367846713.jpg",
                                           "PICTURES/Bulldog/1/1767367848140.jpg",
                                           "PICTURES/Bulldog/1/1767367849518.jpg",
                                           "PICTURES/Bulldog/1/1767367852262.jpg",
                                           "PICTURES/Bulldog/1/1767367853972.jpg",
                                           "PICTURES/Bulldog/1/1767367855422.jpg",
                                           "PICTURES/Bulldog/1/1767367856885.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "b2",
                            "name":  "Bella",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/2/1767367873818.jpg",
                                           "PICTURES/Bulldog/2/1767367876116.jpg",
                                           "PICTURES/Bulldog/2/1767367877658.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "b3",
                            "name":  "Winston",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/3/1767367892218.jpg",
                                           "PICTURES/Bulldog/3/1767367893745.jpg",
                                           "PICTURES/Bulldog/3/1767367895224.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "b4",
                            "name":  "Stella",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/4/1767367905339.jpg",
                                           "PICTURES/Bulldog/4/1767367906757.jpg",
                                           "PICTURES/Bulldog/4/1767367908634.jpg",
                                           "PICTURES/Bulldog/4/1767367910490.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "b5",
                            "name":  "Tank",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/5/1767367919946.jpg",
                                           "PICTURES/Bulldog/5/1767367921822.jpg",
                                           "PICTURES/Bulldog/5/1767367929904.jpg",
                                           "PICTURES/Bulldog/5/1767367969897.jpg",
                                           "PICTURES/Bulldog/5/1767367971698.jpg"
                                       ],
                            "fee":  "$3,400",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "b6",
                            "name":  "Macy",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/6/1767367980728.jpg",
                                           "PICTURES/Bulldog/6/1767367982284.jpg",
                                           "PICTURES/Bulldog/6/1767367983721.jpg"
                                       ],
                            "fee":  "$3,500",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "b7",
                            "name":  "Bentley",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/7/1767367989206.jpg",
                                           "PICTURES/Bulldog/7/1767367990669.jpg",
                                           "PICTURES/Bulldog/7/1767367993375.jpg"
                                       ],
                            "fee":  "$3,600",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "b8",
                            "name":  "Dora",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/8/1767368024097.jpg",
                                           "PICTURES/Bulldog/8/1767368025461.jpg"
                                       ],
                            "fee":  "$3,700",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "b9",
                            "name":  "Hulk",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/9/1767368045166.jpg",
                                           "PICTURES/Bulldog/9/1767368046665.jpg",
                                           "PICTURES/Bulldog/9/1767368048167.jpg",
                                           "PICTURES/Bulldog/9/1767368049744.jpg"
                                       ],
                            "fee":  "$3,800",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "b10",
                            "name":  "Lulu",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/10/1767368055471.jpg",
                                           "PICTURES/Bulldog/10/1767368057045.jpg",
                                           "PICTURES/Bulldog/10/1767368078134.jpg",
                                           "PICTURES/Bulldog/10/1767368080211.jpg",
                                           "PICTURES/Bulldog/10/1767368082405.jpg",
                                           "PICTURES/Bulldog/10/1767368083869.jpg"
                                       ],
                            "fee":  "$3,900",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "b11",
                            "name":  "Gus",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Bulldog/11/1767368000606.jpg",
                                           "PICTURES/Bulldog/11/1767368002102.jpg",
                                           "PICTURES/Bulldog/11/1767368003537.jpg"
                                       ],
                            "fee":  "$4,000",
                            "attitude":  "Active"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "large",
        "id":  "gsd",
        "energy":  "high",
        "name":  "German Shepherd",
        "description":  "Confident, courageous, and smart.",
        "priceRange":  "$2,200 - $4,000",
        "puppies":  [
                        {
                            "id":  "g1",
                            "name":  "Rex",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/1/1767368191920.jpg",
                                           "PICTURES/GERMAN SHEPHERD/1/1767368193998.jpg",
                                           "PICTURES/GERMAN SHEPHERD/1/1767368195468.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "g2",
                            "name":  "Hulk",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/2/1767368512912.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "g3",
                            "name":  "Sarge",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/3/1767368613519.jpg",
                                           "PICTURES/GERMAN SHEPHERD/3/1767368620037.jpg",
                                           "PICTURES/GERMAN SHEPHERD/3/1767368621421.jpg"
                                       ],
                            "fee":  "$2,400",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "g4",
                            "name":  "Kaiser",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/4/1767368953672.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "g5",
                            "name":  "Wolf",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/5/1767368986749.jpg",
                                           "PICTURES/GERMAN SHEPHERD/5/1767368989245.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "g6",
                            "name":  "Xena",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/6/1767368211429.jpg",
                                           "PICTURES/GERMAN SHEPHERD/6/1767368366604.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "g7",
                            "name":  "Rudy",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/7/1767369035481.jpg",
                                           "PICTURES/GERMAN SHEPHERD/7/1767369037050.jpg",
                                           "PICTURES/GERMAN SHEPHERD/7/1767369038724.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "g8",
                            "name":  "Scout",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/8/1767369019876.jpg",
                                           "PICTURES/GERMAN SHEPHERD/8/1767369021618.jpg",
                                           "PICTURES/GERMAN SHEPHERD/8/1767369023225.jpg"
                                       ],
                            "fee":  "$2,900",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "g9",
                            "name":  "Blitz",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/9/1767368950473.jpg",
                                           "PICTURES/GERMAN SHEPHERD/9/1767368952172.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "g10",
                            "name":  "Rocky",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/10/1767368664684.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368667365.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368669331.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368671082.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368893401.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368899206.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368901926.jpg",
                                           "PICTURES/GERMAN SHEPHERD/10/1767368903588.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "g11",
                            "name":  "Major",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/11/1767369012170.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "g12",
                            "name":  "Ghost",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GERMAN SHEPHERD/12/1767368984665.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Friendly"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "large",
        "id":  "golden-retriever",
        "energy":  "high",
        "name":  "Golden Retriever",
        "description":  "Intelligent, friendly, and devoted.",
        "priceRange":  "$2,500 - $4,500",
        "puppies":  [
                        {
                            "id":  "g1",
                            "name":  "Cooper",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/1/1767373521039.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/1/1767373524283.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "g2",
                            "name":  "Honey",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/2/1767373500881.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/2/1767373504403.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "g3",
                            "name":  "Goldie",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/3/1767373582771.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/3/1767373584563.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/3/1767373586148.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/3/1767373587669.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/3/1767373589310.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "g4",
                            "name":  "Sunshine",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/4/1767373706384.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/4/1767373708047.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/4/1767373710397.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "g5",
                            "name":  "Duke",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/5/1767373720224.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/5/1767373723643.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/5/1767373725535.jpg"
                                       ],
                            "fee":  "$2,900",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "g6",
                            "name":  "Bailey",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/6/1767373496511.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "g7",
                            "name":  "Sophie",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/7/1767373552991.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/7/1767373554601.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "g8",
                            "name":  "Gus",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/8/1767373628519.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/8/1767373630461.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/8/1767373634299.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "g11",
                            "name":  "Nala",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/11/1767373551406.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/11/1767373772589.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "g12",
                            "name":  "Teddy",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/12/1767373741525.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/12/1767373744375.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/12/1767373746719.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/12/1767373767990.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/12/1767373770739.jpg"
                                       ],
                            "fee":  "$3,400",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "g13",
                            "name":  "Finn",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/GOLDEN RETRIEVER/13/1767373671222.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/13/1767373673283.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/13/1767373675267.jpg",
                                           "PICTURES/GOLDEN RETRIEVER/13/1767373683893.jpg"
                                       ],
                            "fee":  "$3,500",
                            "attitude":  "Active"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "medium",
        "id":  "poodle",
        "energy":  "high",
        "name":  "Poodle",
        "description":  "Proud, active, and very smart.",
        "priceRange":  "$2,000 - $4,500",
        "puppies":  [
                        {
                            "id":  "p1",
                            "name":  "Fifi",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/1/1767374003253.jpg",
                                           "PICTURES/Poodle puppies/1/1767374005926.jpg",
                                           "PICTURES/Poodle puppies/1/1767374007677.jpg",
                                           "PICTURES/Poodle puppies/1/1767374031042.jpg",
                                           "PICTURES/Poodle puppies/1/1767374033111.jpg",
                                           "PICTURES/Poodle puppies/1/1767374034967.jpg",
                                           "PICTURES/Poodle puppies/1/1767374159055.jpg",
                                           "PICTURES/Poodle puppies/1/1767374161198.jpg",
                                           "PICTURES/Poodle puppies/1/1767374168875.jpg"
                                       ],
                            "fee":  "$2,000",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "p2",
                            "name":  "Coco",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/2/1767374546379.jpg",
                                           "PICTURES/Poodle puppies/2/1767374549461.jpg",
                                           "PICTURES/Poodle puppies/2/1767374551377.jpg",
                                           "PICTURES/Poodle puppies/2/1767374553969.jpg"
                                       ],
                            "fee":  "$2,100",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "p3",
                            "name":  "Bear",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/3/1767374643335.jpg",
                                           "PICTURES/Poodle puppies/3/1767374651646.jpg",
                                           "PICTURES/Poodle puppies/3/1767374659179.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "p4",
                            "name":  "Prince",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/4/1767374730783.jpg",
                                           "PICTURES/Poodle puppies/4/1767374845313.jpg",
                                           "PICTURES/Poodle puppies/4/1767374846850.jpg",
                                           "PICTURES/Poodle puppies/4/1767374849223.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "p5",
                            "name":  "Gigi",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/5/1767374873212.jpg",
                                           "PICTURES/Poodle puppies/5/1767374874877.jpg"
                                       ],
                            "fee":  "$2,400",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "p6",
                            "name":  "Cleo",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/6/1767374878534.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "p7",
                            "name":  "Bambi",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/7/1767374920044.jpg",
                                           "PICTURES/Poodle puppies/7/1767374922724.jpg",
                                           "PICTURES/Poodle puppies/7/1767374925286.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "p8",
                            "name":  "Romeo",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/8/1767374882212.jpg",
                                           "PICTURES/Poodle puppies/8/1767374890596.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "p9",
                            "name":  "Pippin",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Poodle puppies/9/1767374973945.jpg",
                                           "PICTURES/Poodle puppies/9/1767374976038.jpg",
                                           "PICTURES/Poodle puppies/9/1767374977869.jpg",
                                           "PICTURES/Poodle puppies/9/1767374981854.jpg",
                                           "PICTURES/Poodle puppies/9/1767374984810.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Loyal"
                        }
                    ],
        "coat":  "non-shed"
    },
    {
        "size":  "large",
        "id":  "rottweiler",
        "energy":  "low",
        "name":  "Rottweiler",
        "description":  "Loyal, loving, and a confident guardian.",
        "priceRange":  "$2,500 - $4,500",
        "puppies":  [
                        {
                            "id":  "r1",
                            "name":  "Thor",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/1/1767365949685.jpg",
                                           "PICTURES/Rottweiler/1/1767365951998.jpg",
                                           "PICTURES/Rottweiler/1/1767365954998.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "r2",
                            "name":  "Bear",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/2/1767365900467.jpg",
                                           "PICTURES/Rottweiler/2/1767365904696.jpg",
                                           "PICTURES/Rottweiler/2/1767365915107.jpg",
                                           "PICTURES/Rottweiler/2/1767365916986.jpg",
                                           "PICTURES/Rottweiler/2/1767365918607.jpg",
                                           "PICTURES/Rottweiler/2/1767365928938.jpg",
                                           "PICTURES/Rottweiler/2/1767365931400.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "r3",
                            "name":  "Roxie",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/3/1767365884845.jpg",
                                           "PICTURES/Rottweiler/3/1767365887599.jpg",
                                           "PICTURES/Rottweiler/3/1767365889883.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "r4",
                            "name":  "Kane",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/4/1767365516748.jpg",
                                           "PICTURES/Rottweiler/4/1767365522430.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "r5",
                            "name":  "Major",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/5/1767365007941.jpg",
                                           "PICTURES/Rottweiler/5/1767365009609.jpg",
                                           "PICTURES/Rottweiler/5/1767365015977.jpg"
                                       ],
                            "fee":  "$2,900",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "r6",
                            "name":  "Brutus",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/6/1767365502376.jpg",
                                           "PICTURES/Rottweiler/6/1767365504798.jpg",
                                           "PICTURES/Rottweiler/6/1767365506396.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "r7",
                            "name":  "Echo",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/7/1767365548750.jpg",
                                           "PICTURES/Rottweiler/7/1767365550710.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "r8",
                            "name":  "Harley",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/8/1767365585913.jpg",
                                           "PICTURES/Rottweiler/8/1767365591259.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "r9",
                            "name":  "Tank",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/9/1767365839095.jpg",
                                           "PICTURES/Rottweiler/9/1767365843209.jpg",
                                           "PICTURES/Rottweiler/9/1767365846318.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "r10",
                            "name":  "Vader",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/10/1767365865336.jpg",
                                           "PICTURES/Rottweiler/10/1767365867134.jpg",
                                           "PICTURES/Rottweiler/10/1767365869050.jpg"
                                       ],
                            "fee":  "$3,400",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "r11",
                            "name":  "Axel",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/11/1767366079929.jpg",
                                           "PICTURES/Rottweiler/11/1767366090121.jpg"
                                       ],
                            "fee":  "$3,500",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "r12",
                            "name":  "Hera",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/12/1767365973699.jpg",
                                           "PICTURES/Rottweiler/12/1767365978534.jpg",
                                           "PICTURES/Rottweiler/12/1767365987062.jpg",
                                           "PICTURES/Rottweiler/12/1767366109675.jpg"
                                       ],
                            "fee":  "$3,600",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "r13",
                            "name":  "Diesel",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/13/1767365878856.jpg",
                                           "PICTURES/Rottweiler/13/1767365880337.jpg",
                                           "PICTURES/Rottweiler/13/1767365962660.jpg",
                                           "PICTURES/Rottweiler/13/1767365965731.jpg",
                                           "PICTURES/Rottweiler/13/1767365969437.jpg"
                                       ],
                            "fee":  "$3,700",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "r14",
                            "name":  "Gia",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/14/1767365661761.jpg",
                                           "PICTURES/Rottweiler/14/1767365662071.jpg",
                                           "PICTURES/Rottweiler/14/1767365665441.jpg",
                                           "PICTURES/Rottweiler/14/1767365667732.jpg"
                                       ],
                            "fee":  "$3,800",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "r15",
                            "name":  "Remo",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/15/1767365006408.jpg",
                                           "PICTURES/Rottweiler/15/1767365594829.jpg"
                                       ],
                            "fee":  "$3,900",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "r16",
                            "name":  "Nora",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/16/1767365793803.jpg",
                                           "PICTURES/Rottweiler/16/1767365796971.jpg"
                                       ],
                            "fee":  "$4,000",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "r17",
                            "name":  "Kaiser",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/17/1767364837729.jpg",
                                           "PICTURES/Rottweiler/17/1767364839728.jpg"
                                       ],
                            "fee":  "$4,100",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "r18",
                            "name":  "Sable",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Rottweiler/18/1767365787402.jpg",
                                           "PICTURES/Rottweiler/18/1767365833474.jpg"
                                       ],
                            "fee":  "$4,200",
                            "attitude":  "Sweet"
                        }
                    ],
        "coat":  "short"
    },
    {
        "size":  "small",
        "id":  "shih-tzu",
        "energy":  "low",
        "name":  "Shih Tzu",
        "description":  "Affectionate, playful, and outgoing.",
        "priceRange":  "$1,200 - $2,400",
        "puppies":  [
                        {
                            "id":  "s1",
                            "name":  "Mochi",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/1/1767369210647.jpg",
                                           "PICTURES/Shi zuu/1/1767369212329.jpg",
                                           "PICTURES/Shi zuu/1/1767369216718.jpg",
                                           "PICTURES/Shi zuu/1/1767369219443.jpg",
                                           "PICTURES/Shi zuu/1/1767369226064.jpg",
                                           "PICTURES/Shi zuu/1/1767369227848.jpg",
                                           "PICTURES/Shi zuu/1/1767369232260.jpg",
                                           "PICTURES/Shi zuu/1/1767369242932.jpg",
                                           "PICTURES/Shi zuu/1/1767369244315.jpg",
                                           "PICTURES/Shi zuu/1/1767369246906.jpg",
                                           "PICTURES/Shi zuu/1/1767369248708.jpg"
                                       ],
                            "fee":  "$1,200",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "s2",
                            "name":  "Teddy",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/2/1767369466428.jpg",
                                           "PICTURES/Shi zuu/2/1767369467900.jpg",
                                           "PICTURES/Shi zuu/2/1767369469347.jpg"
                                       ],
                            "fee":  "$1,300",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "s3",
                            "name":  "Cookie",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/3/1767369481714.jpg",
                                           "PICTURES/Shi zuu/3/1767369485201.jpg",
                                           "PICTURES/Shi zuu/3/1767369486563.jpg",
                                           "PICTURES/Shi zuu/3/1767369489082.jpg",
                                           "PICTURES/Shi zuu/3/1767369507937.jpg",
                                           "PICTURES/Shi zuu/3/1767369522149.jpg",
                                           "PICTURES/Shi zuu/3/1767369527703.jpg"
                                       ],
                            "fee":  "$1,400",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "s4",
                            "name":  "Lulu",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/4/1767369589924.jpg",
                                           "PICTURES/Shi zuu/4/1767369591612.jpg",
                                           "PICTURES/Shi zuu/4/1767369595728.jpg"
                                       ],
                            "fee":  "$1,500",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "s5",
                            "name":  "Pochi",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/5/1767370850523.jpg",
                                           "PICTURES/Shi zuu/5/1767370859068.jpg",
                                           "PICTURES/Shi zuu/5/1767370861834.jpg"
                                       ],
                            "fee":  "$1,600",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "s6",
                            "name":  "Bibi",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/6/1767370905047.jpg",
                                           "PICTURES/Shi zuu/6/1767370906784.jpg"
                                       ],
                            "fee":  "$1,700",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "s7",
                            "name":  "Nini",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/7/1767370819569.jpg",
                                           "PICTURES/Shi zuu/7/1767370821975.jpg"
                                       ],
                            "fee":  "$1,800",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "s8",
                            "name":  "Tutu",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/8/1767370783910.jpg",
                                           "PICTURES/Shi zuu/8/1767370788578.jpg"
                                       ],
                            "fee":  "$1,900",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "s9",
                            "name":  "Zuzu",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/9/1767370745091.jpg",
                                           "PICTURES/Shi zuu/9/1767370746412.jpg",
                                           "PICTURES/Shi zuu/9/1767370748011.jpg",
                                           "PICTURES/Shi zuu/9/1767370760444.jpg",
                                           "PICTURES/Shi zuu/9/1767370764200.jpg"
                                       ],
                            "fee":  "$2,000",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "s10",
                            "name":  "Fifi",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/10/1767369642067.jpg",
                                           "PICTURES/Shi zuu/10/1767369643659.jpg",
                                           "PICTURES/Shi zuu/10/1767369645191.jpg",
                                           "PICTURES/Shi zuu/10/1767369646774.jpg",
                                           "PICTURES/Shi zuu/10/1767369661071.jpg"
                                       ],
                            "fee":  "$2,100",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "s11",
                            "name":  "Coco",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/11/1767370581230.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "s12",
                            "name":  "Bambi",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/12/1767369663890.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "s13",
                            "name":  "Mimi",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/13/1767369662509.jpg"
                                       ],
                            "fee":  "$2,400",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "s14",
                            "name":  "Nana",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/14/1767369612158.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "s15",
                            "name":  "Popo",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/15/1767369531624.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "s16",
                            "name":  "Ruru",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/16/1767369162022.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "s17",
                            "name":  "Susu",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/17/1767370583529.jpg"
                                       ],
                            "fee":  "$2,800",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "s18",
                            "name":  "Kiki",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/18/1767370585228.jpg"
                                       ],
                            "fee":  "$2,900",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "s19",
                            "name":  "Lala",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/19/1767370590093.jpg"
                                       ],
                            "fee":  "$3,000",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "s20",
                            "name":  "Gogo",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/20/1767370723832.jpg",
                                           "PICTURES/Shi zuu/20/1767370725471.jpg"
                                       ],
                            "fee":  "$3,100",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "s21",
                            "name":  "Dodo",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/21/1767370721825.jpg"
                                       ],
                            "fee":  "$3,200",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "s22",
                            "name":  "Jojo",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/22/1767370599064.jpg"
                                       ],
                            "fee":  "$3,300",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "s23",
                            "name":  "Vivi",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/Shi zuu/23/1767370727441.jpg"
                                       ],
                            "fee":  "$3,400",
                            "attitude":  "Curious"
                        }
                    ],
        "coat":  "non-shed"
    },
    {
        "size":  "small",
        "id":  "yorkie",
        "energy":  "high",
        "name":  "Yorkie",
        "description":  "Sprightly, tomboyish, and affectionate.",
        "priceRange":  "$1,600 - $3,500",
        "puppies":  [
                        {
                            "id":  "y1",
                            "name":  "Bentley",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/1/1767362001427.jpg",
                                           "PICTURES/yorkIE/1/1767362003464.jpg"
                                       ],
                            "fee":  "$1,600",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "y2",
                            "name":  "Misty",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/2/1767363420250.jpg",
                                           "PICTURES/yorkIE/2/1767363429431.jpg",
                                           "PICTURES/yorkIE/2/1767363433099.jpg"
                                       ],
                            "fee":  "$1,700",
                            "attitude":  "Friendly"
                        },
                        {
                            "id":  "y3",
                            "name":  "Sparky",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/3/1767363423638.jpg",
                                           "PICTURES/yorkIE/3/1767363426544.jpg"
                                       ],
                            "fee":  "$1,800",
                            "attitude":  "Curious"
                        },
                        {
                            "id":  "y4",
                            "name":  "Dot",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/4/1767363477676.jpg",
                                           "PICTURES/yorkIE/4/1767363548928.jpg",
                                           "PICTURES/yorkIE/4/1767363552954.jpg"
                                       ],
                            "fee":  "$1,900",
                            "attitude":  "Bold"
                        },
                        {
                            "id":  "y5",
                            "name":  "Pixie",
                            "age":  "12 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/5/1767364130231.jpg",
                                           "PICTURES/yorkIE/5/1767364134267.jpg",
                                           "PICTURES/yorkIE/5/1767364137877.jpg"
                                       ],
                            "fee":  "$2,000",
                            "attitude":  "Gentle"
                        },
                        {
                            "id":  "y6",
                            "name":  "Ace",
                            "age":  "13 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/6/1767364198649.jpg",
                                           "PICTURES/yorkIE/6/1767364200399.jpg"
                                       ],
                            "fee":  "$2,100",
                            "attitude":  "Playful"
                        },
                        {
                            "id":  "y7",
                            "name":  "Toby",
                            "age":  "14 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/7/1767364218511.jpg",
                                           "PICTURES/yorkIE/7/1767364220426.jpg",
                                           "PICTURES/yorkIE/7/1767364222077.jpg"
                                       ],
                            "fee":  "$2,200",
                            "attitude":  "Merry"
                        },
                        {
                            "id":  "y8",
                            "name":  "Willow",
                            "age":  "15 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/8/1767364244343.jpg",
                                           "PICTURES/yorkIE/8/1767364245877.jpg",
                                           "PICTURES/yorkIE/8/1767364246560.jpg"
                                       ],
                            "fee":  "$2,300",
                            "attitude":  "Sweet"
                        },
                        {
                            "id":  "y9",
                            "name":  "Zara",
                            "age":  "8 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/9/1767364286754.jpg",
                                           "PICTURES/yorkIE/9/1767364289702.jpg",
                                           "PICTURES/yorkIE/9/1767364293594.jpg"
                                       ],
                            "fee":  "$2,400",
                            "attitude":  "Loyal"
                        },
                        {
                            "id":  "y10",
                            "name":  "Pip",
                            "age":  "9 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/10/1767364468183.jpg",
                                           "PICTURES/yorkIE/10/1767364469736.jpg"
                                       ],
                            "fee":  "$2,500",
                            "attitude":  "Social"
                        },
                        {
                            "id":  "y11",
                            "name":  "Buddy",
                            "age":  "10 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/11/1767364583783.jpg",
                                           "PICTURES/yorkIE/11/1767364586018.jpg",
                                           "PICTURES/yorkIE/11/1767364589605.jpg"
                                       ],
                            "fee":  "$2,600",
                            "attitude":  "Active"
                        },
                        {
                            "id":  "y12",
                            "name":  "Rocky",
                            "age":  "11 weeks",
                            "vaccinated":  "Yes",
                            "images":  [
                                           "PICTURES/yorkIE/12/1767364608767.jpg",
                                           "PICTURES/yorkIE/12/1767364610057.jpg",
                                           "PICTURES/yorkIE/12/1767364611711.jpg",
                                           "PICTURES/yorkIE/12/1767364613979.jpg"
                                       ],
                            "fee":  "$2,700",
                            "attitude":  "Friendly"
                        }
                    ],
        "coat":  "non-shed"
    }
];;;;

const initialStoriesData = [
    {
        id: "story-1",
        name: "Jane & Daniel",
        role: "Adopted Buddy (Beagle)",
        initials: "JD",
        color: "var(--secondary)",
        quote: "Adopting Buddy was the best decision we ever made. The process was so professional and we felt supported every step of the way!",
        image: "BACKGROUNDS/puppy.jpg"
    },
    {
        id: "story-2",
        name: "The Miller Family",
        role: "Adopted Luna (Bulldog)",
        initials: "MS",
        color: "#e8f5e9",
        quote: "We were nervous about the health records, but Pawsome Puppies provided everything. Luna is healthy, happy, and so smart!",
        image: "BACKGROUNDS/997e98052583b14e1fe580b3f3efd0b3.jpg"
    },
    {
        id: "story-3",
        name: "Thomas R.",
        role: "Adopted Thor (Rottweiler)",
        initials: "TR",
        color: "#fff3e0",
        quote: "The payment plans were a life-saver for us. We got our dream Rottweiler without any financial stress. Highly recommend!",
        image: "BACKGROUNDS/9a18b214495d55cd378597335010560b (1).jpg"
    }
];

// Data Sync Logic
let breedsData = JSON.parse(localStorage.getItem('breedsData')) || initialBreedsData;
let storiesData = JSON.parse(localStorage.getItem('storiesData')) || initialStoriesData;
let policiesData = JSON.parse(localStorage.getItem('policiesData')) || initialPoliciesData;
let faqData = JSON.parse(localStorage.getItem('faqData')) || initialFaqData;
let aboutData = JSON.parse(localStorage.getItem('aboutData')) || initialAboutData;
let globalSettings = JSON.parse(localStorage.getItem('globalSettings')) || initialGlobalSettings;

// Force update if the data version is old
const currentVersion = "9.0"; // Multi-Image Support Enabled
const savedVersion = localStorage.getItem('dataVersion');
if (savedVersion !== currentVersion) {
    breedsData = initialBreedsData;
    storiesData = initialStoriesData;
    policiesData = initialPoliciesData;
    faqData = initialFaqData;
    aboutData = initialAboutData;
    globalSettings = initialGlobalSettings;

    localStorage.setItem('breedsData', JSON.stringify(breedsData));
    localStorage.setItem('storiesData', JSON.stringify(storiesData));
    localStorage.setItem('policiesData', JSON.stringify(policiesData));
    localStorage.setItem('faqData', JSON.stringify(faqData));
    localStorage.setItem('aboutData', JSON.stringify(aboutData));
    localStorage.setItem('globalSettings', JSON.stringify(globalSettings));
    localStorage.setItem('dataVersion', currentVersion);
}

const saveToLocal = () => {
    localStorage.setItem('breedsData', JSON.stringify(breedsData));
    localStorage.setItem('storiesData', JSON.stringify(storiesData));
    localStorage.setItem('policiesData', JSON.stringify(policiesData));
    localStorage.setItem('faqData', JSON.stringify(faqData));
    localStorage.setItem('aboutData', JSON.stringify(aboutData));
    localStorage.setItem('globalSettings', JSON.stringify(globalSettings));
};

// 0. GLOBAL STATE VARIABLES
let isAdmin = localStorage.getItem('isAdmin') === 'true';
let isCustomer = localStorage.getItem('isCustomer') === 'true';
let currentUserEmail = localStorage.getItem('currentUserEmail') || null;
let adminRole = localStorage.getItem('adminRole') || 'none';

document.addEventListener('DOMContentLoaded', () => {
    // Sync states from storage
    isAdmin = localStorage.getItem('isAdmin') === 'true';
    isCustomer = localStorage.getItem('isCustomer') === 'true';
    currentUserEmail = localStorage.getItem('currentUserEmail') || null;
    adminRole = localStorage.getItem('adminRole') || 'none';

    // Force sessions to check for remote logout
    setInterval(() => {
        if (isAdmin && localStorage.getItem('forceLogoutSignal') === 'true') {
            if (adminRole === 'lesser') {
                localStorage.setItem('isAdmin', false);
                localStorage.setItem('adminRole', 'none');
                alert("The system administrator has logged you out.");
                location.reload();
            }
        }
    }, 2000);

    // 0. GLOBAL SITE SETTINGS
    const applySiteSettings = () => {
        const logo = document.querySelector('.logo');
        if (logo) logo.innerText = globalSettings.siteName;

        // Only apply if on index.html and specifically targeting the hero section
        if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') {
            const heroSection = document.getElementById('home-hero');
            if (heroSection) {
                const h1 = heroSection.querySelector('h1');
                const p = heroSection.querySelector('p');
                if (h1) h1.innerText = globalSettings.heroTitle;
                if (p) p.innerText = globalSettings.heroSubtitle;
                if (globalSettings.heroBg) {
                    heroSection.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${globalSettings.heroBg}')`;
                }
            }
        }

        // Apply page-specific backgrounds centrally
        const path = window.location.pathname;
        if (path.includes('about.html')) {
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('BACKGROUNDS/about us bagkground.jpg')";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
        } else if (path.includes('breeds.html')) {
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('BACKGROUNDS/breed available backgrounds.jpg')";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
        } else if (path.includes('services.html')) {
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('BACKGROUNDS/services baground.jpg')";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
        } else if (path.includes('contact.html')) {
            document.body.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url('BACKGROUNDS/puppy.jpg')";
            document.body.style.backgroundAttachment = "fixed";
            document.body.style.backgroundSize = "cover";
        }
        document.title = `${globalSettings.siteName} | Luxury Puppy Adoption`;
    };
    applySiteSettings();

    // Global Smooth Scroll & UI Polish
    document.documentElement.style.scrollBehavior = 'smooth';

    // Scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const hero = document.getElementById('home-hero');
        if (hero && window.scrollY < 50) {
            header.classList.remove('scrolled');
        } else {
            header.classList.add('scrolled');
        }
    });
    if (!document.getElementById('home-hero')) document.querySelector('header').classList.add('scrolled');

    // 0.1 RESERVATION PORTAL LOGIC
    window.openReservationPortal = (puppyName, fee) => {
        const fields = [
            { id: 'fullName', label: 'Full Legal Name', type: 'text', value: '' },
            { id: 'reserveEmail', label: 'Preferred Email', type: 'text', value: '' },
            { id: 'phone', label: 'Contact Number', type: 'text', value: '' },
            { id: 'experience', label: 'Prior Dog Ownership Experience?', type: 'textarea', value: '' },
            { id: 'houseType', label: 'Type of Home (House/Apt, Yard?)', type: 'text', value: '' },
            { id: 'timeframe', label: 'When do you want to bring them home?', type: 'text', value: 'As soon as possible' }
        ];

        openEditModal(`Adopt ${puppyName} - Formal Application`, fields, (data) => {
            alert(`Application Submitted! ðŸŽ‰\n\nOur concierge will review your application for ${puppyName} and contact you at ${data.reserveEmail} within 4 hours to finalize the health contract.\n\nThank you for choosing Pawsome Puppies!`);

            // Log as a special message in chat
            const chatLogs = JSON.parse(localStorage.getItem('chatLogs')) || [];
            chatLogs.push({
                role: 'customer',
                text: `ðŸ“œ FORMAL APPLICATION SUBMITTED for ${puppyName}.\nApplicant: ${data.fullName}\nEmail: ${data.reserveEmail}\nPhone: ${data.phone}\nHome: ${data.houseType}\nExperience: ${data.experience}`,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                type: 'text'
            });
            localStorage.setItem('chatLogs', JSON.stringify(chatLogs));

            // Redirect to chat to see the confirmation
            window.location.href = 'contact.html';
        });
    };

    // 0.1 THEME LOGIC
    const themeToggle = document.getElementById('theme-toggle');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    themeToggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        if (themeToggle) themeToggle.innerText = isDark ? 'â˜€ï¸' : 'ðŸŒ“';
    });

    if (localStorage.getItem('theme') === 'dark' && themeToggle) {
        themeToggle.innerText = 'â˜€ï¸';
    }

    // 0.2 NEWSLETTER SIGNUP (Global)
    const initNewsletter = () => {
        const newsletterBtns = document.querySelectorAll('#newsletter-signup-btn');
        newsletterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const container = e.target.parentElement;
                const newsletterEmail = container.querySelector('#newsletter-email');
                const email = newsletterEmail?.value.trim();

                if (email && email.includes('@')) {
                    alert(`Thank you! Puppy alerts for ${email} have been activated. ðŸ¾`);
                    if (newsletterEmail) newsletterEmail.value = '';
                    const subs = JSON.parse(localStorage.getItem('newsletterSubs')) || [];
                    if (!subs.includes(email)) {
                        subs.push(email);
                        localStorage.setItem('newsletterSubs', JSON.stringify(subs));
                    }
                } else {
                    alert("Please enter a valid email address.");
                }
            });
        });
    };
    initNewsletter();

    // 0.2 PERSISTENT LOGIN (Handled in AUTH MODAL LOGIC)

    // 1. NAVIGATION & UI UPDATES
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const header = document.getElementById('main-header');
    const siteName = document.getElementById('site-name');
    const headerActions = document.querySelector('.header-actions');

    const updateUIForLogin = () => {
        if (isAdmin || isCustomer) {
            if (navLinks) navLinks.style.display = 'flex';
            if (hamburger) hamburger.style.display = 'flex';

            if (siteName) {
                siteName.innerText = isAdmin ? "ðŸ¾ Admin Dashboard" : "ðŸ¾ Customer Portal";
                siteName.style.color = isAdmin ? "var(--primary-dark)" : "#606c38";
            }

            if (headerActions) {
                // Get customer name if logged in
                let displayName = '';
                if (isCustomer && currentUserEmail) {
                    const users = JSON.parse(localStorage.getItem('registeredUsers')) || {};
                    displayName = users[currentUserEmail]?.name || 'Customer';
                }

                // Calculate unread messages
                let unreadCount = 0;
                if (isAdmin) {
                    const globalLogs = JSON.parse(localStorage.getItem('chatLogs_GLOBAL')) || [];
                    const lastRead = parseInt(localStorage.getItem('admin_lastReadIndex')) || 0;
                    unreadCount = Math.max(0, globalLogs.length - lastRead);
                } else if (currentUserEmail) {
                    const userLogs = JSON.parse(localStorage.getItem(`chatLogs_${currentUserEmail}`)) || [];
                    const lastRead = parseInt(localStorage.getItem(`customer_${currentUserEmail}_lastReadIndex`)) || 0;
                    unreadCount = Math.max(0, userLogs.length - lastRead);
                }

                const currentToggle = document.getElementById('theme-toggle')?.outerHTML || '<button id="theme-toggle" class="theme-toggle-btn">ðŸŒ“</button>';
                headerActions.innerHTML = `
                    ${currentToggle}
                    <span style="margin-right:15px; font-weight:600; font-size:0.9rem; color:var(--text-muted);">
                        ${isAdmin ? 'Logged in as Admin' : `Hi, ${displayName}`}
                    </span>
                    <a href="contact.html" style="position: relative; margin-right: 15px; text-decoration: none;">
                        <button class="btn btn-secondary" style="padding:0.7rem 1.5rem;">
                            ðŸ’¬ Messages
                            ${unreadCount > 0 ? `<span style="position:absolute; top:-8px; right:-8px; background:#dc3545; color:white; width:22px; height:22px; border-radius:50%; font-size:0.7rem; display:flex; align-items:center; justify-content:center; font-weight:700; border:2px solid white;">${unreadCount}</span>` : ''}
                        </button>
                    </a>
                    <button class="btn btn-primary" id="logout-btn" style="background:#dc3545;">Logout</button>
                `;

                // Re-bind theme toggle since we replaced the HTML
                const newToggle = document.getElementById('theme-toggle');
                newToggle?.addEventListener('click', () => {
                    document.body.classList.toggle('dark-mode');
                    const isDark = document.body.classList.contains('dark-mode');
                    localStorage.setItem('theme', isDark ? 'dark' : 'light');
                    if (newToggle) newToggle.innerText = isDark ? 'â˜€ï¸' : 'ðŸŒ“';
                });
                if (localStorage.getItem('theme') === 'dark' && newToggle) newToggle.innerText = 'â˜€ï¸';

                document.getElementById('logout-btn')?.addEventListener('click', () => {
                    localStorage.setItem('isAdmin', false);
                    localStorage.setItem('isCustomer', false);
                    localStorage.setItem('currentUserEmail', '');
                    location.href = 'index.html';
                });
            }
        }
    };

    updateUIForLogin();

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });

    // 2. AUTH MODAL LOGIC
    const authModal = document.getElementById('auth-modal');
    const closeModal = document.querySelector('.close-modal');
    const toggleSignup = document.getElementById('toggle-signup');
    const toggleLogin = document.getElementById('toggle-login');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginBtnAction = document.getElementById('login-btn-action');
    const loginEmailInput = document.getElementById('login-email');
    const loginPassInput = document.getElementById('login-password');
    const rememberMeCheck = document.getElementById('remember-me');

    // Pre-fill remembered credentials
    if (loginEmailInput && loginPassInput) {
        const remembered = JSON.parse(localStorage.getItem('rememberedUser'));
        if (remembered) {
            loginEmailInput.value = remembered.email || '';
            loginPassInput.value = remembered.password || '';
            if (rememberMeCheck) rememberMeCheck.checked = true;
        }
    }

    document.querySelectorAll('#login-open, #login-open-mobile').forEach(btn => {
        if (btn) {
            btn.onclick = (e) => {
                e.preventDefault();
                if (authModal) authModal.style.display = 'flex';
            };
        }
    });

    closeModal?.addEventListener('click', () => {
        authModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === authModal) authModal.style.display = 'none';
    });

    toggleSignup?.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    });

    toggleLogin?.addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    loginBtnAction?.addEventListener('click', (e) => {
        e.preventDefault();
        const email = loginEmailInput?.value.trim().toLowerCase();
        const pass = loginPassInput?.value;

        if (!email || !pass) {
            alert("Please fill in both email and password.");
            return;
        }

        let users = JSON.parse(localStorage.getItem('registeredUsers')) || {};

        if (users[email] && users[email].password === pass) {
            localStorage.setItem('currentUserEmail', email);
            localStorage.setItem('isCustomer', true);
            localStorage.setItem('isAdmin', false);

            if (rememberMeCheck && rememberMeCheck.checked) {
                localStorage.setItem('rememberedUser', JSON.stringify({ email, password: pass }));
            } else {
                localStorage.removeItem('rememberedUser');
            }

            alert(`Welcome back, ${users[email].name}!`);
            location.reload();
        } else {
            alert("Invalid email or password.");
        }
    });

    const signupBtnAction = document.getElementById('signup-btn-action');
    const signupName = document.getElementById('signup-name');
    const signupEmail = document.getElementById('signup-email');
    const signupPass = document.getElementById('signup-password');

    signupBtnAction?.addEventListener('click', (e) => {
        e.preventDefault();
        const name = signupName.value.trim();
        const email = signupEmail.value.trim().toLowerCase();
        const pass = signupPass.value;

        if (!name || !email || !pass) return alert("Please fill all fields.");

        let users = JSON.parse(localStorage.getItem('registeredUsers')) || {};
        if (users[email]) return alert("Email already registered.");

        users[email] = { name, password: pass, role: 'customer', registeredAt: new Date().toISOString() };
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        localStorage.setItem('currentUserEmail', email);
        localStorage.setItem('isCustomer', true);
        localStorage.setItem('isAdmin', false);

        // Auto-create a profile
        const profile = { name: name, email: email, phone: '', address: '' };
        localStorage.setItem(`profile_${email}`, JSON.stringify(profile));

        alert("Account Created! Redirecting to your portal...");
        location.reload();
    });

    // 2.1 ADMIN EDIT MODAL LOGIC
    const adminEditModal = document.getElementById('admin-edit-modal');
    const adminFormContainer = document.getElementById('admin-form-container');
    const adminSaveBtn = document.getElementById('admin-save-btn');
    const closeAdminModal = document.getElementById('close-admin-modal');
    const adminModalTitle = document.getElementById('admin-modal-title');

    let currentEditCallback = null;

    const openEditModal = (title, fields, callback) => {
        if (!adminEditModal) return;
        adminModalTitle.innerText = title;
        adminFormContainer.innerHTML = '';
        currentEditCallback = callback;

        fields.forEach(field => {
            const group = document.createElement('div');
            group.className = 'admin-form-group';
            let inputHtml = '';

            if (field.type === 'textarea') {
                inputHtml = `<textarea id="edit-${field.id}" rows="4">${field.value}</textarea>`;
            } else if (field.type === 'file') {
                const existingPath = field.value || 'None';
                const fileName = existingPath.split('/').pop() || 'None';
                inputHtml = `<input type="file" id="edit-${field.id}" accept="image/*" style="display:none;">
                             <div style="display:flex; gap:10px; align-items:center;">
                                <button class="btn btn-secondary" onclick="document.getElementById('edit-${field.id}').click()" style="padding:5px 15px; font-size:0.8rem;">Pick New Photo</button>
                                <span id="file-name-${field.id}" style="font-size:0.8rem; color:var(--text-muted);">${fileName}</span>
                             </div>`;
            } else {
                inputHtml = `<input type="${field.type}" id="edit-${field.id}" value="${field.value}">`;
            }

            group.innerHTML = `
                <label>${field.label}</label>
                ${inputHtml}
            `;
            adminFormContainer.appendChild(group);

            if (field.type === 'file') {
                const fInput = document.getElementById(`edit-${field.id}`);
                fInput.onchange = (e) => {
                    const file = e.target.files[0];
                    if (file) {
                        document.getElementById(`file-name-${field.id}`).innerText = file.name;
                        const reader = new FileReader();
                        reader.onload = (evt) => {
                            fInput.dataset.newVal = evt.target.result; // Store Base64
                        };
                        reader.readAsDataURL(file);
                    }
                };
                // Store existing value
                fInput.dataset.existing = field.value || '';
            }
        });

        adminEditModal.style.display = 'flex';
    };

    closeAdminModal?.addEventListener('click', () => {
        adminEditModal.style.display = 'none';
    });

    adminSaveBtn?.addEventListener('click', () => {
        if (currentEditCallback) {
            const formData = {};
            adminFormContainer.querySelectorAll('input, textarea, input[type="file"]').forEach(el => {
                const id = el.id.replace('edit-', '');
                if (el.type === 'file') {
                    formData[id] = el.dataset.newVal || el.dataset.existing || '';
                } else {
                    formData[id] = el.value;
                }
            });
            currentEditCallback(formData);
            adminEditModal.style.display = 'none';
            saveToLocal();
            // Removed location.reload() for better performance
            // The callback should handle re-rendering specific sections
        }
    });

    // 3. SEARCH LOGIC
    const searchInput = document.getElementById('breed-search');
    const searchBtn = document.getElementById('search-trigger');

    searchBtn?.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) window.location.href = `breeds.html?search=${encodeURIComponent(query)}`;
    });

    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });

    // 4. BREEDS PAGE LOGIC
    if (window.location.pathname.includes('breeds.html')) {
        const breedsContainer = document.getElementById('breeds-container');
        const puppyExplorer = document.getElementById('puppy-explorer');
        const breedsTitle = document.getElementById('breeds-main-title');
        const puppiesList = document.getElementById('puppies-list');
        const selectedBreedName = document.getElementById('selected-breed-name');
        const backBtn = document.getElementById('back-to-breeds');
        const puppyModal = document.getElementById('puppy-modal');
        const puppyDetails = document.getElementById('puppy-details');



        const renderBreeds = (filterStr = '') => {
            if (!breedsContainer) return;
            breedsContainer.innerHTML = '';

            const sizeVal = document.getElementById('filter-size')?.value || 'all';
            const energyVal = document.getElementById('filter-energy')?.value || 'all';
            const coatVal = document.getElementById('filter-coat')?.value || 'all';

            const filtered = breedsData.filter(b => {
                const matchesSearch = b.name.toLowerCase().includes(filterStr.toLowerCase());
                const matchesSize = sizeVal === 'all' || b.size === sizeVal;
                const matchesEnergy = energyVal === 'all' || b.energy === energyVal;
                const matchesCoat = coatVal === 'all' || b.coat === coatVal;
                return matchesSearch && matchesSize && matchesEnergy && matchesCoat;
            });

            // Re-render message if empty
            if (filtered.length === 0) {
                breedsContainer.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 3rem; background: var(--bg-light); border-radius: 20px;"><p style="font-weight:600; color:var(--text-muted);">No breeds match your current filters. Try relaxing them!</p></div>';
            }

            filtered.forEach(breed => {
                const card = document.createElement('div');
                card.className = 'glass';
                card.style.padding = '1.8rem';
                card.style.borderRadius = '25px';
                card.style.cursor = 'pointer';
                const mainImg = (breed.puppies && breed.puppies.length > 0) ? breed.puppies[0].images[0] : 'assets/placeholder.jpg';
                card.innerHTML = `
                    <img src="${mainImg}" onerror="this.src='assets/placeholder.jpg'" style="width: 100%; height: 220px; object-fit: cover; border-radius: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.2rem;">
                        <h3 style="color: var(--primary-dark);">${breed.name}</h3>
                        ${isAdmin ? `<button class="btn-edit-breed" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">âš™ï¸</button>` : ''}
                    </div>
                    <p style="font-weight: 600; opacity: 0.8;">${breed.priceRange}</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 5px;">${breed.description}</p>
                    ${isAdmin ? `<button class="btn-delete-breed" style="color:#d9534f; background:none; border:none; margin-top:15px; cursor:pointer; font-size:0.8rem; font-weight:600;">DELETE BREED</button>` : ''}
                `;

                if (isAdmin) {
                    card.querySelector('.btn-edit-breed').onclick = (e) => {
                        e.stopPropagation();
                        openEditModal(`Edit ${breed.name}`, [
                            { id: 'name', label: 'Breed Name', type: 'text', value: breed.name },
                            { id: 'priceRange', label: 'Price Range', type: 'text', value: breed.priceRange },
                            { id: 'description', label: 'Description', type: 'textarea', value: breed.description }
                        ], (data) => {
                            breed.name = data.name;
                            breed.priceRange = data.priceRange;
                            breed.description = data.description;
                        });
                    };
                    card.querySelector('.btn-delete-breed').onclick = (e) => {
                        e.stopPropagation();
                        if (confirm(`Delete ${breed.name} and all data?`)) {
                            breedsData = breedsData.filter(b => b.id !== breed.id);
                            saveToLocal();
                            renderBreeds();
                        }
                    };
                }
                card.onclick = () => showVarieties(breed);
                breedsContainer.appendChild(card);
            });

            if (isAdmin) {
                const addBreedBtn = document.createElement('button');
                addBreedBtn.className = 'btn btn-primary';
                addBreedBtn.innerText = '+ Add New Breed';
                addBreedBtn.style.margin = '40px auto';
                addBreedBtn.style.display = 'block';
                addBreedBtn.onclick = () => {
                    openEditModal('New Breed', [
                        { id: 'name', label: 'Breed Name', type: 'text', value: '' },
                        { id: 'priceRange', label: 'Price Range', type: 'text', value: '$1000 - $2000' },
                        { id: 'description', label: 'Description', type: 'textarea', value: '' }
                    ], (data) => {
                        breedsData.push({
                            id: data.name.toLowerCase().replace(/ /g, '-'),
                            name: data.name,
                            priceRange: data.priceRange,
                            description: data.description,
                            puppies: []
                        });
                    });
                };
                breedsContainer.after(addBreedBtn);
            }
        };

        const showVarieties = (breed) => {
            breedsContainer.style.display = 'none';
            if (breedsTitle) breedsTitle.style.display = 'none';
            // Hide add breed btn if exists
            document.getElementById('add-breed-btn')?.remove();
            puppyExplorer.style.display = 'block';
            selectedBreedName.innerText = `Varieties of ${breed.name}`;

            puppiesList.innerHTML = '';
            breed.puppies.forEach(puppy => {
                const card = document.createElement('div');
                card.className = 'glass';
                card.style.padding = '1.2rem';
                card.style.borderRadius = '25px';
                const feeNum = parseInt(puppy.fee.replace(/[^0-9]/g, '')) || 1000;
                const installment = Math.round(feeNum / 12);
                card.innerHTML = `
                    <div style="position: relative;">
                        <img src="${puppy.images[0]}" onerror="this.src='assets/placeholder.jpg'" style="width: 100%; height: 280px; object-fit: cover; border-radius: 20px;">
                        <span style="position: absolute; top: 15px; right: 15px; background: var(--primary-dark); color: white; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${puppy.age}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.2rem;">
                        <h3>${puppy.name}</h3>
                        <div style="text-align: right;">
                            <span style="color: var(--primary-dark); font-weight: 700; font-size: 1.1rem; display: block;">${puppy.fee}</span>
                            <span style="font-size:0.75rem; color:var(--text-muted);">or $${installment}/mo</span>
                        </div>
                    </div>
                    <div style="display:flex; gap:10px; margin-top:15px;">
                         <button class="btn btn-primary view-details-btn" style="flex:1;">View Details</button>
                         ${isAdmin ? `<button class="btn-edit-puppy" style="background:var(--secondary); border:none; padding:10px; border-radius:12px; cursor:pointer;">âš™ï¸</button>` : ''}
                    </div>
                    ${isAdmin ? `<button class="btn-delete-puppy" style="color:#d9534f; width:100%; background:none; border:none; margin-top:10px; cursor:pointer; font-size:0.75rem;">DELETE PUPPY</button>` : ''}
                `;
                card.querySelector('.view-details-btn').onclick = () => showPuppyDetails(puppy, breed);

                if (isAdmin) {
                    card.querySelector('.btn-edit-puppy').onclick = () => {
                        openEditModal(`Edit ${puppy.name}`, [
                            { id: 'name', label: 'Name', type: 'text', value: puppy.name },
                            { id: 'age', label: 'Age', type: 'text', value: puppy.age },
                            { id: 'fee', label: 'Fee', type: 'text', value: puppy.fee },
                            { id: 'attitude', label: 'Attitude (Detailed)', type: 'textarea', value: puppy.attitude },
                            { id: 'vaccinated', label: 'Vaccinated', type: 'text', value: puppy.vaccinated },
                            { id: 'images', label: 'Main Image', type: 'file', value: '' }
                        ], (data) => {
                            puppy.name = data.name;
                            puppy.age = data.age;
                            puppy.fee = data.fee;
                            puppy.attitude = data.attitude;
                            puppy.vaccinated = data.vaccinated;
                            if (data.images) puppy.images = [data.images];
                        });
                    };
                    card.querySelector('.btn-delete-puppy').onclick = () => {
                        if (confirm(`Delete ${puppy.name}?`)) {
                            breed.puppies = breed.puppies.filter(p => p.id !== puppy.id);
                            saveToLocal();
                            showVarieties(breed);
                        }
                    };
                }
                puppiesList.appendChild(card);
            });

            if (isAdmin) {
                const addPBtn = document.createElement('div');
                addPBtn.className = 'glass';
                addPBtn.style.cssText = 'padding:2rem; border-radius:25px; display:flex; flex-direction:column; justify-content:center; align-items:center; cursor:pointer; border:2px dashed #ccc;';
                addPBtn.innerHTML = '<span style="font-size:3rem; color:#ccc;">+</span><span style="font-weight:600; color:#999;">Add New Puppy</span>';
                openEditModal('New Puppy', [
                    { id: 'name', label: 'Name', type: 'text', value: '' },
                    { id: 'age', label: 'Age', type: 'text', value: '10 weeks' },
                    { id: 'fee', label: 'Fee', type: 'text', value: '$1500' },
                    { id: 'attitude', label: 'Attitude', type: 'textarea', value: '' },
                    { id: 'vaccinated', label: 'Vaccinated', type: 'text', value: 'Yes' },
                    { id: 'images', label: 'Image', type: 'file', value: '' }
                ], (data) => {
                    const newPuppy = {
                        id: Date.now().toString(),
                        name: data.name,
                        age: data.age,
                        fee: data.fee,
                        attitude: data.attitude,
                        vaccinated: data.vaccinated,
                        images: data.images ? [data.images] : ['assets/placeholder.jpg']
                    };
                    breed.puppies.push(newPuppy);
                    saveToLocal();
                    showVarieties(breed);
                });
                puppiesList.appendChild(addPBtn);
            }
        };

        const showPuppyDetails = (puppy, breed) => {
            const monthly = Math.round((parseInt(puppy.fee.replace(/[^0-9]/g, '')) || 0) / 12);
            puppyDetails.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 4rem; padding: 1rem;">
                    <div class="puppy-gallery">
                        <div class="main-img-wrap" style="position: relative; overflow: hidden; border-radius: 35px; box-shadow: 0 25px 60px rgba(0,0,0,0.15);">
                            <img id="main-puppy-img" src="${puppy.images[0]}" style="width: 100%; height: 500px; object-fit: cover; transition: 0.5s ease-in-out;">
                            ${puppy.images.length > 1 ? `
                                <button id="gal-prev" style="position:absolute; left:20px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.9); border:none; width:50px; height:50px; border-radius:50%; cursor:pointer; font-weight:bold; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: 0.3s;">&larr;</button>
                                <button id="gal-next" style="position:absolute; right:20px; top:50%; transform:translateY(-50%); background:rgba(255,255,255,0.9); border:none; width:50px; height:50px; border-radius:50%; cursor:pointer; font-weight:bold; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: 0.3s;">&rarr;</button>
                            ` : ''}
                            <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(0,0,0,0.5); color: white; padding: 8px 15px; border-radius: 12px; font-size: 0.8rem; backdrop-filter: blur(5px);">
                                Premium Verified Health Record
                            </div>
                        </div>
                        <div class="thumb-list" style="display:flex; gap:15px; margin-top:25px; overflow-x:auto; padding: 10px 0;">
                            ${puppy.images.map((img, i) => `<img src="${img}" class="thumb" data-index="${i}" style="width:85px; height:85px; object-fit:cover; border-radius:18px; cursor:pointer; opacity:${i === 0 ? '1' : '0.5'}; border: 3px solid ${i === 0 ? 'var(--primary-dark)' : 'transparent'}; transition:0.3s; transform: scale(${i === 0 ? '1.05' : '1'});">`).join('')}
                        </div>
                    </div>
                    
                    <div style="display: flex; flex-direction: column;">
                        <span style="text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; font-weight: 700; color: var(--primary); margin-bottom: 0.8rem;">Adoption Profile</span>
                        <h2 style="font-size: 3.5rem; color: var(--primary-dark); margin-bottom: 0.5rem; line-height: 1.1; font-weight: 800;">${puppy.name}</h2>
                        <p style="color:var(--text-muted); font-size: 1.1rem; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 8px;">
                            <span>ðŸ·ï¸</span> Exotic ${breed.name} Variety
                        </p>
                        
                        <!-- Premium Info Table - Now "Beside" and Prominent -->
                        <table class="info-table" style="margin: 0 0 2rem 0; background: var(--secondary); border: 1px solid rgba(188, 108, 37, 0.1);">
                            <tr><th>Age</th><td>${puppy.age}</td></tr>
                            <tr><th>Vaccinated</th><td>${puppy.vaccinated}</td></tr>
                            <tr><th>Temperament</th><td>${puppy.attitude.substring(0, 50)}...</td></tr>
                            <tr><th>Microchipped</th><td>Included</td></tr>
                            <tr><th>Health Cert</th><td>Verified 2026</td></tr>
                            ${isAdmin ? `
                            <tr style="background: rgba(188,108,37,0.1); border-top: 2px solid var(--primary-dark);">
                                <td colspan="2" style="text-align: center; padding: 10px;">
                                    <div style="display: flex; gap: 8px;">
                                        <button class="btn btn-secondary" style="flex: 1; border: none; background: transparent; color: var(--primary-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 10px;" onclick="window.triggerInlineEdit('${puppy.id}', 'full')">
                                            âœ¨ EDIT INFO
                                        </button>
                                        <button class="btn btn-secondary" style="flex: 1; border: none; background: transparent; color: var(--primary-dark); font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 10px;" onclick="window.openGalleryManager('${puppy.id}')">
                                            ðŸ–¼ï¸ MANAGE GALLERY
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ` : ''}
                        </table>

                        <div class="attitude-details" style="margin-bottom: 2rem; padding: 1.5rem; background: var(--bg-light); border: 1px solid rgba(0,0,0,0.05); border-radius: 20px;">
                            <h4 style="color: var(--primary-dark); margin-bottom: 0.8rem; display: flex; align-items: center; gap: 10px; font-size: 1.1rem; font-weight: 700;">
                                <span>âœ¨</span> Personality
                            </h4>
                            <p style="font-size: 1rem; line-height: 1.6; color: var(--text-main);">${puppy.attitude}</p>
                        </div>

                        <div style="margin-bottom: 2rem; padding: 1.2rem; background: #fffcf0; border: 1px dashed #d4a373; border-radius: 15px;">
                            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 5px;">
                                <span style="font-weight:700;">TOTAL ADOPTION FEE:</span>
                                <strong style="color: var(--primary-dark); font-size:1.4rem;">${puppy.fee}</strong>
                            </div>
                            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 8px; border-top: 1px solid rgba(188, 108, 37, 0.1);">
                                <span style="font-size: 0.85rem;">Financing from:</span>
                                <span style="font-weight: 700; color: var(--primary-dark);">$${monthly}/mo</span>
                            </div>
                        </div>



                        ${!isAdmin ? `
                        <button class="btn btn-premium" style="width: 100%; padding: 1.1rem; font-size: 1.1rem; border-radius: 15px; background: var(--primary-dark); color: white; margin-bottom: 10px; display:flex; align-items:center; justify-content:center; gap:10px;" onclick="window.location.href='contact.html?adopt=${encodeURIComponent(puppy.name)}'">
                            <span>ðŸ’Ž</span> Adopt & Reserve via Chat
                        </button>
                        ` : ''}
                        ${!isAdmin ? `
                        <button class="btn btn-secondary" style="width: 100%; padding: 0.9rem; font-size: 1rem; border-radius: 15px; border: 2px solid var(--primary-dark); color: var(--primary-dark); font-weight: 600;" onclick="window.location.href='contact.html?adopt=${encodeURIComponent(puppy.name)}'">
                            ðŸ’¬ Ask a Question
                        </button>

                        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(0,0,0,0.05); text-align: center;">
                            <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 0.5rem;">Need to know more?</p>
                            <a href="contact.html?adopt=${encodeURIComponent(puppy.name)}" style="color: var(--primary-dark); font-weight: 800; font-size: 1rem; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px; cursor:pointer;">
                                <span>âœ¨</span> Chat with us about the details
                            </a>
                        </div>
                        ` : ''
                }
                    </div >
                </div >
            `;

            // Global trigger for inline edit (needs breed context)
            window.triggerInlineEdit = (pId, type) => {
                const p = breed.puppies.find(x => x.id === pId);
                if (!p) return;

                // If 'images' type, redirect to new Gallery Manager
                if (type === 'gallery') {
                    window.openGalleryManager(pId);
                    return;
                }

                const fields = [
                    { id: 'name', label: 'Name', type: 'text', value: p.name },
                    { id: 'age', label: 'Age', type: 'text', value: p.age },
                    { id: 'fee', label: 'Fee', type: 'text', value: p.fee },
                    { id: 'attitude', label: 'Attitude (Detailed Personality)', type: 'textarea', value: p.attitude },
                    { id: 'vaccinated', label: 'Vaccinated', type: 'text', value: p.vaccinated }
                ];

                openEditModal(`Edit ${p.name} `, fields, (data) => {
                    p.name = data.name;
                    p.age = data.age;
                    p.fee = data.fee;
                    p.attitude = data.attitude;
                    p.vaccinated = data.vaccinated;
                    saveToLocal();
                    if (window.showPuppyDetails) window.showPuppyDetails(p, breed);
                    // Re-render the parent list as well for consistency
                    if (window.renderBreeds) window.renderBreeds();
                });
            };

            // NEW: Full Gallery Manager
            window.openGalleryManager = (pId) => {
                const p = breed.puppies.find(x => x.id === pId);
                if (!p) return;

                // Create Modal
                const modalId = 'gallery-manager-modal';
                let modal = document.getElementById(modalId);
                if (modal) modal.remove(); // Reset if exists

                modal = document.createElement('div');
                modal.id = modalId;
                modal.style.cssText = 'position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:10000; display:flex; flex-direction:column; align-items:center; justify-content:center; backdrop-filter:blur(5px);';

                const renderGalleryUI = () => {
                    modal.innerHTML = `
            <div class="glass" style="background:white; width:90%; max-width:800px; max-height:90vh; border-radius:20px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 20px 60px rgba(0,0,0,0.5);">
                            <div style="padding:20px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center; background:#f8f9fa;">
                                <div>
                                    <h3 style="margin:0; text-transform:uppercase; font-size:0.9rem; color:#888; letter-spacing:1px;">Gallery Manager</h3>
                                    <h2 style="margin:5px 0 0 0; color:var(--primary-dark);">${p.name}'s Photos</h2>
                                </div>
                                <button onclick="document.getElementById('${modalId}').remove()" style="background:none; border:none; font-size:2rem; cursor:pointer;">&times;</button>
                            </div>
                            
                            <div style="flex:1; overflow-y:auto; padding:30px; background:#fafafa;">
                                <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); gap:20px;">
                                    ${p.images.map((img, idx) => `
                                        <div style="position:relative; aspect-ratio:1; border-radius:15px; overflow:hidden; box-shadow:0 5px 15px rgba(0,0,0,0.1); border:3px solid ${idx === 0 ? '#25D366' : 'white'};">
                                            <img src="${img}" style="width:100%; height:100%; object-fit:cover;">
                                            <div style="position:absolute; bottom:0; left:0; width:100%; background:rgba(0,0,0,0.7); display:flex; justify-content:space-around; padding:8px 0; backdrop-filter:blur(2px);">
                                                ${idx > 0 ? `<button onclick="window.moveImage('${p.id}', ${idx}, -1)" style="background:none; border:none; color:white; cursor:pointer; font-size:1.2rem;" title="Make Main / Move Left">â¬…ï¸</button>` : '<span style="color:#25D366; font-size:1.2rem;">â˜…</span>'}
                                                <button onclick="window.deleteImage('${p.id}', ${idx})" style="background:none; border:none; color:#ff4d4d; cursor:pointer; font-size:1.2rem;" title="Delete">ðŸ—‘ï¸</button>
                                                ${idx < p.images.length - 1 ? `<button onclick="window.moveImage('${p.id}', ${idx}, 1)" style="background:none; border:none; color:white; cursor:pointer; font-size:1.2rem;" title="Move Right">âž¡ï¸</button>` : ''}
                                            </div>
                                            ${idx === 0 ? '<div style="position:absolute; top:10px; left:10px; background:#25D366; color:white; padding:3px 8px; border-radius:10px; font-size:0.7rem; font-weight:700; box-shadow:0 2px 5px rgba(0,0,0,0.2);">MAIN</div>' : ''}
                                        </div>
                                    `).join('')}
                                    
                                    <!-- Add New Button -->
                                    <div onclick="document.getElementById('gallery-upload').click()" style="aspect-ratio:1; border-radius:15px; border:3px dashed #ccc; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; background:white; transition:0.2s; color:#888;">
                                        <span style="font-size:2rem; margin-bottom:10px;">ðŸ“¸</span>
                                        <span style="font-weight:600;">Add Photo</span>
                                        <input type="file" id="gallery-upload" multiple accept="image/*" style="display:none;" onchange="window.handleGalleryUpload('${p.id}', this, renderGalleryUI)">
                                    </div>
                                </div>
                            </div>
                            
                            <div style="padding:20px; background:white; border-top:1px solid #eee; text-align:right;">
                                <button class="btn btn-premium" onclick="document.getElementById('${modalId}').remove(); showPuppyDetails(breed.puppies.find(x => x.id === '${p.id}'), breed);" style="padding:12px 30px;">Done / Refresh View</button>
                            </div>
                        </div>
            `;
                };

                document.body.appendChild(modal);
                renderGalleryUI();

                // Helpers attached to window for inline HTML access
                window.moveImage = (pid, idx, dir) => {
                    const pup = breed.puppies.find(x => x.id === pid);
                    const newIdx = idx + dir;
                    if (newIdx < 0 || newIdx >= pup.images.length) return;

                    // Swap
                    [pup.images[idx], pup.images[newIdx]] = [pup.images[newIdx], pup.images[idx]];
                    saveToLocal();
                    renderGalleryUI();
                };

                window.deleteImage = (pid, idx) => {
                    const pup = breed.puppies.find(x => x.id === pid);
                    if (pup.images.length <= 1) return alert("A puppy must have at least one photo!");
                    if (confirm("Delete this photo permanently?")) {
                        pup.images.splice(idx, 1);
                        saveToLocal();
                        renderGalleryUI();
                    }
                };

                window.handleGalleryUpload = (pid, input) => {
                    const pup = breed.puppies.find(x => x.id === pid);
                    const files = Array.from(input.files);
                    let processed = 0;

                    files.forEach(file => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            pup.images.push(e.target.result);
                            processed++;
                            if (processed === files.length) {
                                saveToLocal();
                                renderGalleryUI();
                            }
                        };
                        reader.readAsDataURL(file);
                    });
                };
            };

            // Gallery logic
            let cur = 0;
            const galMain = document.getElementById('main-puppy-img');
            const galThumbs = document.querySelectorAll('.thumb');
            const updateGal = (idx) => {
                cur = (idx + puppy.images.length) % puppy.images.length;
                galMain.src = puppy.images[cur];
                galThumbs.forEach((t, i) => {
                    t.style.opacity = i === cur ? '1' : '0.5';
                    t.style.border = i === cur ? '2px solid var(--primary-dark)' : '2px solid transparent';
                });
            };
            document.getElementById('gal-next')?.addEventListener('click', () => updateGal(cur + 1));
            document.getElementById('gal-prev')?.addEventListener('click', () => updateGal(cur - 1));
            galThumbs.forEach(t => t.onclick = () => updateGal(parseInt(t.dataset.index)));

            puppyModal.style.display = 'flex';
        };

        backBtn.onclick = () => {
            puppyExplorer.style.display = 'none';
            breedsContainer.style.display = 'grid';
            if (breedsTitle) breedsTitle.style.display = 'block';
            renderBreeds(); // Re-render to show add btn
        };

        puppyModal?.querySelector('.close-modal')?.addEventListener('click', () => puppyModal.style.display = 'none');

        const params = new URLSearchParams(window.location.search);
        renderBreeds(params.get('search') || '');

        // Add filter listeners
        ['filter-size', 'filter-energy', 'filter-coat'].forEach(id => {
            document.getElementById(id)?.addEventListener('change', () => {
                renderBreeds(params.get('search') || '');
            });
        });
    }

    // 5. CHAT LOGIC (Manual Two-Way)
    if (window.location.pathname.includes('contact.html')) {
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const chatSend = document.getElementById('chat-send');

        // Load persistent chat - Keyed for Customers, Global for Admins
        let activeChatEmail = localStorage.getItem('adminActiveChatEmail');

        const getChatKey = (email = null) => {
            const target = email || (isAdmin ? activeChatEmail : currentUserEmail);
            if (!target) return null; // No log if no target
            return `chatLogs_${target}`;
        }

        let chatLogs = [];
        const currentKey = getChatKey();
        if (currentKey) {
            chatLogs = JSON.parse(localStorage.getItem(currentKey)) || [];
        }

        const renderChat = () => {
            const chatMessages = document.getElementById('chat-messages');
            if (!chatMessages) return;

            // CRITICAL: Empty if not logged in (unless Admin)
            if (!isAdmin && !currentUserEmail) {
                chatMessages.innerHTML = `
                    <div style="height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--text-muted); padding: 40px;">
                        <span style="font-size: 4rem; opacity: 0.2; margin-bottom: 20px;">ðŸ”’</span>
                        <h3 style="color: var(--primary-dark); margin-bottom: 10px;">Private Chat Locked</h3>
                        <p style="max-width: 300px; font-size: 0.9rem;">Please login or create an account to start a secure conversation as requested.</p>
                        <button class="btn btn-primary" onclick="document.getElementById('login-open').click()" style="margin-top: 20px;">Sign In to Message</button>
                    </div>
                `;
                return;
            }

            chatMessages.innerHTML = '<div class="date-divider">Today</div>';

            chatLogs.forEach(msg => {
                const div = document.createElement('div');
                const isSent = (isAdmin && msg.role === 'admin') || (!isAdmin && msg.role === 'customer');
                div.className = `message-bubble ${isSent ? 'msg-sent' : 'msg-received'}`;

                let content = '';
                if (msg.type === 'image') {
                    content = `<img src="${msg.text}" class="msg-media" onclick="window.open('${msg.text}')">`;
                } else if (msg.type === 'video') {
                    content = `<video controls class="msg-media"><source src="${msg.text}"></video>`;
                } else if (msg.type === 'voice') {
                    content = `<audio controls src="${msg.text}"></audio>`;
                } else if (msg.type === 'payment') {
                    content = `<div class="payment-msg" style="padding:15px; background:rgba(188, 108, 37, 0.1); border-radius:12px; border:1px solid var(--primary);">
                        <strong style="color:var(--primary-dark);">ðŸ’³ Payment Requested</strong><br>
                        <span style="font-size:0.9rem; color:var(--text-main);">Method: <strong>${msg.text}</strong></span><br>
                        <button class="btn btn-primary" onclick="window.processSamplePayment('${msg.text}')" style="margin-top:12px; width:100%; padding:10px; font-weight:700;">Pay Now</button>
                    </div>`;
                } else {
                    content = msg.text;
                }

                div.innerHTML = `${content} <span class="msg-time">${msg.time}</span>`;
                chatMessages.appendChild(div);
            });

            chatMessages.scrollTop = chatMessages.scrollHeight;
        };

        const sendMessage = (content = null, type = 'text') => {
            if (!isAdmin && !currentUserEmail) {
                alert("Please login to send a message.");
                return;
            }
            const text = content || (document.getElementById('chat-input') ? document.getElementById('chat-input').value.trim() : '');
            if (!text && type === 'text') return;

            const customerProfile = JSON.parse(localStorage.getItem('customerProfile')) || {};
            const senderName = isAdmin ? 'Admin' : (customerProfile.name || 'Customer');

            const newMsg = {
                role: isAdmin ? 'admin' : 'customer',
                senderName: senderName,
                text: text,
                type: type,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };

            const key = getChatKey();
            let logs = JSON.parse(localStorage.getItem(key)) || [];
            logs.push(newMsg);
            localStorage.setItem(key, JSON.stringify(logs));

            // If customer sends, update admin global tracker
            if (!isAdmin) {
                let activeChats = JSON.parse(localStorage.getItem('activeChatUsers')) || {};
                activeChats[currentUserEmail] = {
                    name: senderName,
                    time: newMsg.time,
                    preview: type === 'text' ? text.substring(0, 30) : `Sent a ${type}`,
                    unread: (activeChats[currentUserEmail]?.unread || 0) + 1
                };
                localStorage.setItem('activeChatUsers', JSON.stringify(activeChats));
            }

            if (document.getElementById('chat-input')) document.getElementById('chat-input').value = '';
            chatLogs = logs;
            renderChat();
        };

        // Event Listeners for Chat
        document.getElementById('chat-send-btn')?.addEventListener('click', () => sendMessage());
        document.getElementById('chat-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
            }
        });

        // Emoji Picker
        document.getElementById('emoji-trigger')?.addEventListener('click', () => {
            const picker = document.getElementById('emoji-picker');
            picker.style.display = picker.style.display === 'none' ? 'grid' : 'none';
        });

        document.querySelectorAll('.emoji-item').forEach(el => {
            el.addEventListener('click', () => {
                const input = document.getElementById('chat-input');
                input.value += el.innerText;
                document.getElementById('emoji-picker').style.display = 'none';
                input.focus();
            });
        });

        // Media Upload
        document.getElementById('media-trigger')?.addEventListener('click', () => document.getElementById('chat-media-input').click());
        document.getElementById('chat-media-input')?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
                const type = file.type.startsWith('image/') ? 'image' : 'video';
                sendMessage(ev.target.result, type);
            };
            reader.readAsDataURL(file);
        });

        // Payment Modal
        document.getElementById('payment-trigger')?.addEventListener('click', () => {
            document.getElementById('payment-modal').style.display = 'flex';
        });

        document.querySelectorAll('.payment-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                sendMessage(opt.getAttribute('data-type'), 'payment');
                document.getElementById('payment-modal').style.display = 'none';
            });
        });

        document.querySelector('.close-chat-modal')?.addEventListener('click', () => {
            document.getElementById('payment-modal').style.display = 'none';
        });

        window.processSamplePayment = (method) => {
            alert(`Initiating ${method} Payment Securely... ðŸ”’\n\nYou will be redirected to the secure portal. Please ensure you have your reference ID ready.\n\nThank you for choosing Pawsome Puppies!`);
            // Mock dynamic response
            setTimeout(() => {
                sendMessage(`âœ… I've initiated the payment via ${method}. Please let me know once verified!`, 'text');
            }, 1000);
        };

        // Voice Recording Logic
        let mediaRecorder;
        let audioChunks = [];
        let startTime;
        let timerInterval;

        document.getElementById('voice-mail-btn')?.addEventListener('click', async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                audioChunks = [];

                mediaRecorder.ondataavailable = (e) => audioChunks.push(e.data);
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                    const reader = new FileReader();
                    reader.onload = (ev) => sendMessage(ev.target.result, 'voice');
                    reader.readAsDataURL(audioBlob);
                    stream.getTracks().forEach(track => track.stop());
                };

                mediaRecorder.start();
                document.getElementById('voice-overlay').style.display = 'flex';
                startTime = Date.now();
                timerInterval = setInterval(() => {
                    const elapsed = Math.floor((Date.now() - startTime) / 1000);
                    const mins = Math.floor(elapsed / 60);
                    const secs = elapsed % 60;
                    document.getElementById('recording-time').innerText = `${mins}:${secs.toString().padStart(2, '0')}`;
                }, 1000);
            } catch (err) {
                alert("Microphone access denied or not supported.");
            }
        });

        document.getElementById('stop-voice')?.addEventListener('click', () => {
            mediaRecorder.stop();
            document.getElementById('voice-overlay').style.display = 'none';
            clearInterval(timerInterval);
        });

        document.getElementById('cancel-voice')?.addEventListener('click', () => {
            mediaRecorder.onstop = null;
            mediaRecorder.stop();
            document.getElementById('voice-overlay').style.display = 'none';
            clearInterval(timerInterval);
        });

        // Hide input area if not logged in
        if (!isAdmin && !currentUserEmail) {
            const inputArea = document.querySelector('.chat-input-area');
            if (inputArea) inputArea.style.display = 'none';
        }

        renderChat();

        // Fix Contact Form Visibility (No ID number for Admins)
        if (isAdmin) {
            const customerForm = document.getElementById('customer-info-form');
            if (customerForm) customerForm.style.display = 'none';

            const supportTitle = document.getElementById('support-numbers-title');
            if (supportTitle) supportTitle.innerText = 'ðŸ›¡ï¸ Admin Tools';

            const adminMgr = document.getElementById('admin-number-mgr');
            if (adminMgr) adminMgr.style.display = 'none'; // Admins don't need to add numbers here if confusing
        }

        // 5.1 CHAT ENHANCEMENTS (Emoji, Media, Profile)
        const emojiTrigger = document.getElementById('emoji-trigger');
        const emojiPicker = document.getElementById('emoji-picker');
        const mediaTrigger = document.getElementById('media-trigger');
        const chatMediaInput = document.getElementById('chat-media-input');
        const saveProfileBtn = document.getElementById('save-profile');

        emojiTrigger?.addEventListener('click', () => {
            emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'grid' : 'none';
        });

        document.querySelectorAll('.emoji-item').forEach(em => {
            em.onclick = () => {
                chatInput.value += em.innerText;
                emojiPicker.style.display = 'none';
                chatInput.focus();
            };
        });

        mediaTrigger?.addEventListener('click', () => chatMediaInput.click());

        chatMediaInput?.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (event) => {
                const type = file.type.startsWith('image/') ? 'image' : 'video';
                sendMessage(event.target.result, type);
            };
            reader.readAsDataURL(file);
        });

        const custName = document.getElementById('cust-name');
        const custPhone = document.getElementById('cust-phone');
        const custEmail = document.getElementById('cust-email');
        const custAddr = document.getElementById('cust-address');

        const loadProfile = () => {
            const profile = JSON.parse(localStorage.getItem('customerProfile')) || {};
            if (custName) custName.value = profile.name || '';
            if (custPhone) custPhone.value = profile.phone || '';
            if (custEmail) custEmail.value = profile.email || '';
            if (custAddr) custAddr.value = profile.address || '';
        };
        loadProfile();

        saveProfileBtn?.addEventListener('click', () => {
            const profile = {
                name: custName.value,
                phone: custPhone.value,
                email: custEmail.value,
                address: custAddr.value
            };
            localStorage.setItem('customerProfile', JSON.stringify(profile));
            alert("Profile updated! Your info will be sent with your messages.");
        });

        // 5.2 NOTIFICATIONS
        if (Notification.permission === 'default') {
            document.body.onclick = () => {
                if (Notification.permission === 'default') Notification.requestPermission();
            };
        }

        const showNotification = (msg) => {
            if (Notification.permission === 'granted' && document.hidden) {
                new Notification("New Message from Pawsome", {
                    body: msg.text.length > 50 ? msg.text.substring(0, 50) + "..." : msg.text,
                    icon: "assets/logo.png"
                });
            }
        };

        // Periodically check for new messages
        setInterval(() => {
            const currentLogKey = isAdmin ? 'chatLogs_GLOBAL' : `chatLogs_${currentUserEmail}`;
            const newLogs = JSON.parse(localStorage.getItem(currentLogKey)) || [];

            // Sync login state for multiple tab support
            isAdmin = localStorage.getItem('isAdmin') === 'true';
            isCustomer = localStorage.getItem('isCustomer') === 'true';

            // Dynamic key for admins
            let activeKey = currentLogKey;
            if (isAdmin) {
                const activeEmail = localStorage.getItem('adminActiveChatEmail');
                if (activeEmail) activeKey = `chatLogs_${activeEmail}`;
                else activeKey = 'chatLogs_GLOBAL';
            }

            const logsToCheck = JSON.parse(localStorage.getItem(activeKey)) || [];

            if (logsToCheck.length !== chatLogs.length) {
                const latest = logsToCheck[logsToCheck.length - 1];
                const myRole = localStorage.getItem('isAdmin') === 'true' ? 'admin' : 'customer';
                if (latest.role !== myRole) {
                    showNotification(latest);
                }
                chatLogs = logsToCheck;
                renderChat();

                // Notify other pages to update badge counts
                localStorage.setItem('chatUpdateTrigger', Date.now().toString());
            }
        }, 1000);

        // Listen for cross-tab updates
        window.addEventListener('storage', (e) => {
            if (e.key === 'chatUpdateTrigger') {
                updateUIForLogin();
            }
        });


        // Admin User List (Sidebar)
        const renderUserList = () => {
            const list = document.getElementById('chat-user-list');
            if (!isAdmin || !list) return;

            const activeUsers = JSON.parse(localStorage.getItem('activeChatUsers')) || {};
            const emails = Object.keys(activeUsers);

            if (emails.length === 0) {
                list.innerHTML = '<div class="empty-list-msg">No active chats</div>';
                return;
            }

            list.innerHTML = '';
            emails.forEach(email => {
                const user = activeUsers[email];
                const isActive = email === activeChatEmail;
                const div = document.createElement('div');
                div.className = `chat-user-item ${isActive ? 'active' : ''}`;
                div.innerHTML = `
                    <div class="avatar">${user.name.charAt(0)}</div>
                    <div class="user-info">
                        <h4>${user.name}</h4>
                        <p>${user.preview}</p>
                    </div>
                    ${user.unread > 0 ? `<span class="badge" style="background:var(--primary-dark); color:white; padding:2px 6px; border-radius:10px; font-size:0.7rem; margin-left:auto;">${user.unread}</span>` : ''}
                `;
                div.onclick = () => {
                    localStorage.setItem('adminActiveChatEmail', email);
                    activeChatEmail = email;
                    user.unread = 0;
                    localStorage.setItem('activeChatUsers', JSON.stringify(activeUsers));
                    chatLogs = JSON.parse(localStorage.getItem(`chatLogs_${email}`)) || [];
                    document.getElementById('chat-with-name').innerText = user.name;
                    document.getElementById('chat-avatar').innerText = user.name.charAt(0);
                    renderUserList();
                    renderChat();
                };
                list.appendChild(div);
            });
        };

        if (isAdmin && document.getElementById('admin-sidebar')) {
            document.getElementById('admin-sidebar').style.display = 'flex';
            renderUserList();
        }

        // Floating "Message Me" Icon
        if (!window.location.pathname.includes('contact.html')) {
            const floatBtn = document.createElement('div');
            floatBtn.className = 'floating-message-icon';
            floatBtn.innerHTML = 'ðŸ’¬';
            floatBtn.onclick = () => window.location.href = 'contact.html';

            // Notification Badge
            const activeUsers = JSON.parse(localStorage.getItem('activeChatUsers')) || {};
            let totalUnread = 0;
            if (isAdmin) {
                totalUnread = Object.values(activeUsers).reduce((sum, u) => sum + (u.unread || 0), 0);
            } else if (currentUserEmail) {
                const userLogs = JSON.parse(localStorage.getItem(`chatLogs_${currentUserEmail}`)) || [];
                const lastRead = parseInt(localStorage.getItem(`lastRead_${currentUserEmail}`)) || 0;
                totalUnread = Math.max(0, userLogs.length - lastRead);
            }

            if (totalUnread > 0) {
                const badge = document.createElement('span');
                badge.className = 'notification-badge';
                badge.innerText = totalUnread > 9 ? '9+' : totalUnread;
                floatBtn.appendChild(badge);
            }

            document.body.appendChild(floatBtn);
        }

        // Handle "Chat Me" from Breeds
        const adoptParam = new URLSearchParams(window.location.search).get('adopt');
        if (adoptParam && !isAdmin) {
            const greet = `Hi! I'm interested in adopting ${adoptParam}. Can you tell me more about him?`;
            // Only send if no previous chat or last message is old
            if (chatLogs.length === 0) {
                setTimeout(() => sendMessage(greet), 1000);
            }
        }
    }

    // Newsletter Subscription Logic
    const newsletterBtn = document.getElementById('newsletter-signup-btn');
    const newsletterInput = document.getElementById('newsletter-email');

    if (localStorage.getItem('isSubscribed') === 'true' && newsletterBtn) {
        newsletterBtn.innerText = 'Subscribed!';
        newsletterBtn.disabled = true;
        if (newsletterInput) newsletterInput.style.display = 'none';
    }

    newsletterBtn?.addEventListener('click', () => {
        const email = newsletterInput.value.trim();
        if (email) {
            localStorage.setItem('isSubscribed', 'true');
            alert('Thank you for subscribing! You will now receive instant alerts.');
            newsletterBtn.innerText = 'Subscribed!';
            newsletterBtn.disabled = true;
            newsletterInput.style.display = 'none';
        }
    });

    // reservation logic
    const breedsContainer = document.getElementById('breeds-list');
    if (breedsContainer) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'glass';
        infoDiv.style.cssText = 'padding:20px; margin-bottom:30px; border-radius:20px; background:rgba(255,193,7,0.1); border-left:5px solid #ffc107;';
        infoDiv.innerHTML = `
                <h4 style="color:#856404; margin-bottom:10px;">ðŸ›¡ï¸ Reservation & Down Payment Information</h4>
                <p style="font-size:0.9rem; color:#856404; line-height:1.5;">To secure your chosen puppy, a non-refundable reservation fee is required. This fee goes towards the total adoption cost. Down payments are required before the puppy is marked as "Reserved".</p>
            `;
        breedsContainer.prepend(infoDiv);
    }

    // 7. ADMIN MANAGEMENT (Legacy prompt removed, handled by admin-login-ui.js modal)
    // Legacy triggerAdmin removed

    if (isAdmin) {
        // Floating Admin Dock - Redesigned to be less intrusive
        const adminDock = document.createElement('div');
        adminDock.className = 'glass';
        adminDock.style.cssText = 'position:fixed; top:80px; right:20px; background:rgba(11, 20, 26, 0.95); color:white; padding:15px; border-radius:25px; z-index:9999; display:flex; flex-direction:column; gap:10px; box-shadow:0 15px 40px rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.1); backdrop-filter:blur(20px); min-width:200px;';

        adminDock.innerHTML = `
            <div style="padding:5px 10px; border-bottom:1px solid rgba(255,255,255,0.1); margin-bottom:5px;">
                <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:1px; opacity:0.8; font-weight:700;">Admin Active</span>
                <div style="font-weight:700; font-size:0.9rem; color:var(--primary);">${adminRole.toUpperCase()} DASHBOARD</div>
            </div>
        `;

        const settingsBtn = document.createElement('button');
        settingsBtn.innerText = 'âš™ï¸ Site Settings';
        settingsBtn.style.cssText = 'background:rgba(255,255,255,0.2); border:none; color:white; padding:8px 15px; border-radius:15px; cursor:pointer; font-weight:600;';
        settingsBtn.onclick = () => {
            openEditModal('Global Site Settings', [
                { id: 'siteName', label: 'Website Name', type: 'text', value: globalSettings.siteName },
                { id: 'heroTitle', label: 'Hero Home Header', type: 'text', value: globalSettings.heroTitle },
                { id: 'heroSubtitle', label: 'Hero Home Subtitle', type: 'textarea', value: globalSettings.heroSubtitle }
            ], (data) => {
                globalSettings.siteName = data.siteName;
                globalSettings.heroTitle = data.heroTitle;
                globalSettings.heroSubtitle = data.heroSubtitle;
                saveToLocal();
                applySiteSettings();
                location.reload();
            });
        };

        if (adminRole === 'main') {
            const manageAdminBtn = document.createElement('button');
            manageAdminBtn.innerText = 'ðŸ‘¥ Manage Admins';
            manageAdminBtn.style.cssText = 'background:rgba(255,255,255,0.2); border:none; color:white; padding:8px 15px; border-radius:15px; cursor:pointer; font-weight:600;';
            manageAdminBtn.onclick = () => {
                const currentAdmins = JSON.parse(localStorage.getItem('adminPasswords')) || ["staff456", "puppy000", "paws111"];
                const action = prompt("Type 'add' to add staff, 'remove' to delete staff, or 'list' for all:");

                if (action === 'add') {
                    const newPass = prompt("Enter new staff password:");
                    if (newPass && !currentAdmins.includes(newPass)) {
                        currentAdmins.push(newPass);
                        localStorage.setItem('adminPasswords', JSON.stringify(currentAdmins));
                        alert("Staff member added!");
                    }
                } else if (action === 'remove') {
                    const toRemove = prompt("Enter the staff password to remove:\n\nCurrently:\n" + currentAdmins.join("\n"));
                    if (toRemove) {
                        const filtered = currentAdmins.filter(p => p !== toRemove);
                        if (filtered.length !== currentAdmins.length) {
                            localStorage.setItem('adminPasswords', JSON.stringify(filtered));
                            alert("Staff password removed.");
                        } else {
                            alert("Password not found.");
                        }
                    }
                } else if (action === 'list') {
                    alert("Current Staff Passwords:\n" + currentAdmins.join("\n") + "\n\n(Main Admin password 'admin123' cannot be changed here)");
                }
            };
            adminDock.appendChild(manageAdminBtn);
        }

        const logoutBtn = document.createElement('button');
        logoutBtn.innerText = 'ðŸ›¡ï¸ Logout Admin';
        logoutBtn.style.cssText = 'background:#dc3545; border:none; color:white; padding:8px 15px; border-radius:15px; cursor:pointer; font-weight:600;';
        logoutBtn.onclick = () => {
            localStorage.setItem('isAdmin', false);
            localStorage.setItem('isCustomer', false);
            localStorage.setItem('adminRole', 'none');
            localStorage.setItem('currentUserEmail', '');
            location.reload();
        };

        adminDock.appendChild(settingsBtn);
        if (adminRole === 'main') {
            adminDock.appendChild(manageAdminBtn);
        }
        adminDock.appendChild(logoutBtn);
        document.body.appendChild(adminDock);
    }

    // 8. FLOATING CHAT BUTTON (Injected on all excluding contact.html)
    if (!window.location.pathname.includes('contact.html')) {
        const floatBtn = document.createElement('div');
        floatBtn.id = 'floating-chat-btn';
        floatBtn.className = 'btn-premium';
        floatBtn.style.cssText = 'position:fixed; bottom:30px; left:30px; width:70px; height:70px; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:9998; cursor:pointer; font-size:1.8rem; box-shadow:0 10px 30px rgba(0,0,0,0.2); transition:0.4s;';
        floatBtn.innerHTML = 'ðŸ’¬';
        floatBtn.onclick = () => window.location.href = 'contact.html';

        // Add unread badge based on role
        let unreadCount = 0;
        if (isAdmin) {
            const globalLogs = JSON.parse(localStorage.getItem('chatLogs_GLOBAL')) || [];
            const lastRead = parseInt(localStorage.getItem('admin_lastReadIndex')) || 0;
            unreadCount = Math.max(0, globalLogs.length - lastRead);
        } else if (currentUserEmail) {
            const userLogs = JSON.parse(localStorage.getItem(`chatLogs_${currentUserEmail}`)) || [];
            const lastRead = parseInt(localStorage.getItem(`customer_${currentUserEmail}_lastReadIndex`)) || 0;
            unreadCount = Math.max(0, userLogs.length - lastRead);
        }

        if (unreadCount > 0) {
            const badge = document.createElement('span');
            badge.style.cssText = 'position:absolute; top:-5px; right:-5px; background:#dc3545; color:white; width:25px; height:25px; border-radius:50%; font-size:0.75rem; display:flex; align-items:center; justify-content:center; font-weight:700; border:2px solid white;';
            badge.innerText = unreadCount;
            floatBtn.appendChild(badge);
        }
        document.body.appendChild(floatBtn);

        // Listen for updates to refresh badge
        window.addEventListener('storage', (e) => {
            if (e.key === 'chatUpdateTrigger') {
                location.reload(); // Simple refresh for now
            }
        });
    }

    // 9. GLOBAL RENDERING BOOTSTRAP
    const renderStories = () => {
        const storiesContainer = document.getElementById('stories-grid');
        if (!storiesContainer) return;
        storiesContainer.innerHTML = '';

        // Add "Sweet" background decoration to the parent section
        const storySection = storiesContainer.closest('section');
        if (storySection) {
            storySection.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('BACKGROUNDS/puppy.jpg')";
            storySection.style.backgroundSize = "cover";
            storySection.style.backgroundAttachment = "fixed";
            storySection.style.position = "relative";

            // Add a soft title decoration if not present
            if (!document.getElementById('story-decor')) {
                const decor = document.createElement('div');
                decor.id = 'story-decor';
                decor.style.cssText = 'position:absolute; top:0; left:0; right:0; height:300px; background: url("BACKGROUNDS/top of home page background.jpg") no-repeat center bottom; background-size:contain; opacity:0.1; pointer-events:none;';
                storySection.prepend(decor);
            }
        }

        storiesData.forEach((story, idx) => {
            const card = document.createElement('div');
            card.className = 'glass';
            card.style.cssText = 'padding:0; border-radius:35px; transition:0.5s; overflow:hidden; position:relative; box-shadow:0 25px 50px rgba(0,0,0,0.1); border:1px solid rgba(255,255,255,0.4);';
            card.onmouseover = () => {
                card.style.transform = 'translateY(-15px)';
                card.style.boxShadow = '0 35px 70px rgba(0,0,0,0.2)';
            };
            card.onmouseout = () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 25px 50px rgba(0,0,0,0.1)';
            };

            card.innerHTML = `
                <div style="height:350px; position:relative; overflow:hidden;">
                    ${isAdmin ? `
                    <div style="position:absolute; top:20px; left:20px; z-index:15; display:flex; gap:10px;">
                        <button class="btn-edit-story" style="background:var(--primary-dark); color:white; border:none; padding:10px 18px; border-radius:20px; cursor:pointer; font-size:0.8rem; font-weight:700; box-shadow:0 8px 15px rgba(0,0,0,0.3); backdrop-filter:blur(10px);">ðŸ“ Edit</button>
                        <button class="btn-delete-story" style="background:#dc3545; color:white; border:none; padding:10px 18px; border-radius:20px; cursor:pointer; font-size:0.8rem; font-weight:700; box-shadow:0 8px 15px rgba(0,0,0,0.3);">ðŸ—‘ï¸</button>
                    </div>` : ''}
                    <img src="${story.image}" style="width: 100%; height: 100%; object-fit: cover; transition: 1s;">
                    <div style="position:absolute; bottom:0; left:0; right:0; padding:50px 35px; background:linear-gradient(transparent, rgba(0,0,0,0.8)); color:white;">
                        <span style="font-size:0.75rem; text-transform:uppercase; letter-spacing:3px; font-weight:800; opacity:0.9; display:inline-block; margin-bottom:8px; background:var(--primary); padding:4px 12px; border-radius:50px;">Verified Success</span>
                        <h4 style="font-size:1.6rem; margin:0; font-weight:800; font-family:'Poppins', sans-serif;">${story.name}</h4>
                    </div>
                </div>
                <div style="padding:40px; background:white;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:25px;">
                        <div style="display:flex; align-items:center; gap:15px;">
                            <div style="width:55px; height:55px; background:${story.color}; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:800; color:var(--primary-dark); font-size:1rem; border:2px solid rgba(0,0,0,0.05);">${story.initials}</div>
                            <div>
                                <div style="font-weight:800; font-size:1rem; color:var(--primary-dark);">${story.name}</div>
                                <div style="font-size:0.8rem; color:var(--text-muted); font-weight:500;">${story.role}</div>
                            </div>
                        </div>
                        <div style="color:var(--primary); font-size:1.3rem; letter-spacing:2px;">â­â­â­â­â­</div>
                    </div>
                    <p style="font-style: italic; color: #444; line-height: 2; font-size:1.1rem; letter-spacing:-0.01em;">"${story.quote}"</p>
                </div>
            `;

            if (isAdmin) {
                card.querySelector('.btn-edit-story').onclick = (e) => {
                    e.stopPropagation();
                    const fields = [
                        { id: 'name', label: 'Adopter Name', type: 'text', value: story.name },
                        { id: 'role', label: 'Adopted Pet Info', type: 'text', value: story.role },
                        { id: 'quote', label: 'Success Story', type: 'textarea', value: story.quote },
                        { id: 'image', label: 'Story Photo', type: 'file', value: story.image, dataExisting: story.image }
                    ];
                    openEditModal(`Edit ${story.name}'s Story`, fields, (data) => {
                        story.name = data.name;
                        story.role = data.role;
                        story.quote = data.quote;
                        story.initials = data.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
                        // Significant Fix: Handle existing image properly if no new file is selected
                        if (data.image && data.image !== story.image) {
                            story.image = data.image;
                        }
                        saveToLocal();
                        renderStories();
                    });
                };
                card.querySelector('.btn-delete-story').onclick = (e) => {
                    e.stopPropagation();
                    if (confirm(`Delete ${story.name}'s story?`)) {
                        storiesData.splice(idx, 1);
                        saveToLocal();
                        renderStories();
                    }
                };
            }
            storiesContainer.appendChild(card);
        });

        if (isAdmin) {
            const addBtn = document.createElement('div');
            addBtn.className = 'glass';
            addBtn.style.cssText = 'padding:2.5rem; border-radius:35px; border:2px dashed var(--primary); display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer; min-height:580px; transition: 0.4s; background:rgba(188, 108, 37, 0.05);';
            addBtn.onmouseover = () => addBtn.style.background = 'rgba(188, 108, 37, 0.1)';
            addBtn.onmouseout = () => addBtn.style.background = 'rgba(188, 108, 37, 0.05)';
            addBtn.innerHTML = '<div style="text-align:center; color:var(--primary-dark);"><span style="font-size:5rem; filter:drop-shadow(0 10px 20px rgba(0,0,0,0.1));">âž•</span><br><br><span style="font-weight:800; text-transform:uppercase; letter-spacing:3px; font-size:0.9rem;">Add New Success Story</span></div>';
            addBtn.onclick = () => {
                const fields = [
                    { id: 'name', label: 'Adopter Name', type: 'text', value: '' },
                    { id: 'role', label: 'Adopted Pet Info', type: 'text', value: '' },
                    { id: 'quote', label: 'Success Story', type: 'textarea', value: '' },
                    { id: 'image', label: 'Story Photo', type: 'file', value: '' }
                ];
                openEditModal('Feature a New Happy Tail', fields, (data) => {
                    if (!data.name || !data.quote) return alert("Please fill required fields.");
                    storiesData.push({
                        id: 'story-' + Date.now(),
                        name: data.name,
                        role: data.role,
                        quote: data.quote,
                        image: data.image || 'BACKGROUNDS/puppy.jpg',
                        initials: data.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
                        color: ['#fdf2f8', '#f0f9ff', '#f5f3ff', '#fffbeb'][Math.floor(Math.random() * 4)]
                    });
                    saveToLocal();
                    renderStories();
                });
            };
            storiesContainer.appendChild(addBtn);
        }
    };

    const renderPolicies = () => {
        const policiesContainer = document.getElementById('policies-grid');
        if (!policiesContainer) return;

        // Background for policies section (Services page)
        const policySection = policiesContainer.closest('section');
        if (policySection) {
            policySection.style.backgroundImage = "linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url('BACKGROUNDS/997e98052583b14e1fe580b3f3efd0b3.jpg')";
            policySection.style.backgroundSize = "cover";
            policySection.style.backgroundAttachment = "fixed";
        }

        policiesContainer.innerHTML = '';
        policiesData.forEach((policy, idx) => {
            const card = document.createElement('div');
            card.className = 'glass';
            card.style.cssText = 'padding:2.5rem; border-radius:30px; position:relative; display:flex; gap:2rem; align-items:center; transition:0.3s;';
            card.innerHTML = `
                <div style="width:70px; height:70px; background:var(--secondary); border-radius:20px; display:flex; align-items:center; justify-content:center; font-size:1.8rem; flex-shrink:0;">${policy.icon}</div>
                <div>
                    <h4 style="color:var(--primary-dark); margin-bottom:0.5rem; font-size:1.2rem;">${policy.title}</h4>
                    <p style="color:var(--text-main); line-height:1.7; opacity:0.8;">${policy.text}</p>
                </div>
                ${isAdmin ? `<button class="btn-edit-policy" style="position:absolute; top:20px; right:20px; background:var(--primary-dark); color:white; border:none; padding:5px 12px; border-radius:15px; cursor:pointer; font-size:0.75rem;">ðŸ“ Edit</button>` : ''}
            `;
            if (isAdmin) {
                card.querySelector('.btn-edit-policy').onclick = () => {
                    openEditModal(`Edit ${policy.title}`, [
                        { id: 'title', label: 'Policy Title', type: 'text', value: policy.title },
                        { id: 'icon', label: 'Emoji Icon', type: 'text', value: policy.icon },
                        { id: 'text', label: 'Policy Content', type: 'textarea', value: policy.text }
                    ], (data) => {
                        policy.title = data.title;
                        policy.icon = data.icon;
                        policy.text = data.text;
                        saveToLocal();
                        renderPolicies();
                    });
                };
            }
            policiesContainer.appendChild(card);
        });
    };

    const renderFaq = () => {
        const faqContainer = document.getElementById('faq-accordion');
        if (!faqContainer) return;
        faqContainer.innerHTML = '';
        faqData.forEach((faq, idx) => {
            const details = document.createElement('details');
            details.className = 'glass';
            details.style.cssText = 'padding:1.5rem; border-radius:20px; cursor:pointer; position:relative; margin-bottom:15px; border:1px solid rgba(0,0,0,0.03);';
            details.innerHTML = `
                ${isAdmin ? `
                <div style="position:absolute; top:15px; right:50px; display:flex; gap:10px; z-index:10;">
                    <button class="btn-edit-faq" style="background:var(--primary-dark); color:white; border:none; padding:5px 12px; border-radius:12px; cursor:pointer; font-size:0.65rem;">ðŸ“ Edit</button>
                    <button class="btn-delete-faq" style="background:#dc3545; color:white; border:none; padding:5px 12px; border-radius:12px; cursor:pointer; font-size:0.65rem;">ðŸ—‘ï¸</button>
                </div>` : ''}
                <summary style="font-weight:700; color:var(--primary-dark); list-style:none; display:flex; justify-content:space-between; align-items:center; font-size:1.1rem;">
                    ${faq.q} <span style="color:var(--primary); font-size:1.4rem; transition:0.3s;">âŒ„</span>
                </summary>
                <div style="margin-top:20px; color:var(--text-main); line-height:1.8; opacity:0.85; padding-right:20px;">${faq.a}</div>
            `;
            if (isAdmin) {
                details.querySelector('.btn-edit-faq').onclick = (e) => {
                    e.preventDefault(); e.stopPropagation();
                    openEditModal('Edit FAQ', [
                        { id: 'q', label: 'Question', type: 'text', value: faq.q },
                        { id: 'a', label: 'Answer', type: 'textarea', value: faq.a }
                    ], (data) => {
                        faq.q = data.q; faq.a = data.a;
                        saveToLocal(); renderFaq();
                    });
                };
                details.querySelector('.btn-delete-faq').onclick = (e) => {
                    e.preventDefault(); e.stopPropagation();
                    if (confirm('Delete this FAQ Item?')) {
                        faqData.splice(idx, 1);
                        saveToLocal(); renderFaq();
                    }
                };
            }
            faqContainer.appendChild(details);
        });

        if (isAdmin) {
            const addFaqBtn = document.createElement('button');
            addFaqBtn.className = 'btn-premium';
            addFaqBtn.style.cssText = 'margin-top:20px; width:100%; border:2px dashed var(--primary); background:rgba(188, 108, 37, 0.05); color:var(--primary-dark); padding:20px; border-radius:20px; cursor:pointer; font-weight:700;';
            addFaqBtn.innerText = 'âž• Add New FAQ Item';
            addFaqBtn.onclick = () => {
                openEditModal('Add FAQ', [
                    { id: 'q', label: 'Question', type: 'text', value: '' },
                    { id: 'a', label: 'Answer', type: 'textarea', value: '' }
                ], (data) => {
                    faqData.push({ q: data.q, a: data.a });
                    saveToLocal(); renderFaq();
                });
            };
            faqContainer.appendChild(addFaqBtn);
        }
    };

    const renderAbout = () => {
        const aboutContainer = document.getElementById('about-container');
        if (!aboutContainer) return;
        aboutContainer.innerHTML = `
            <div style="text-align:center; margin-bottom:5rem; position:relative;">
                <h6 style="text-transform:uppercase; letter-spacing:4px; color:var(--primary); font-weight:800; margin-bottom:15px;">Est. 2012</h6>
                <h1 style="color:var(--primary-dark); font-size:4.5rem; font-weight:900; line-height:1; margin-bottom:20px;">${aboutData.heroTitle}</h1>
                <div style="width:100px; height:5px; background:var(--primary); margin:0 auto; border-radius:10px;"></div>
                ${isAdmin ? `<button id="edit-about-hero" style="position:absolute; top:0; right:0; background:var(--primary-dark); color:white; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; font-size:0.8rem; font-weight:700; box-shadow:0 10px 20px rgba(0,0,0,0.1);">ðŸ“ Edit Hero</button>` : ''}
            </div>

            <div class="glass" style="padding:6rem; border-radius:60px; margin-bottom:5rem; position:relative; background:white; overflow:hidden; box-shadow:0 40px 100px rgba(0,0,0,0.05);">
                <div style="position:absolute; top:-100px; right:-100px; width:300px; height:300px; background:var(--secondary); opacity:0.3; border-radius:50%; filter:blur(80px);"></div>
                ${isAdmin ? `<button id="edit-about-story" style="position:absolute; top:30px; right:30px; background:var(--primary-dark); color:white; border:none; padding:10px 20px; border-radius:20px; cursor:pointer; font-size:0.8rem; font-weight:700; z-index:10;">ðŸ“ Edit Story</button>` : ''}
                <h2 style="color:var(--primary-dark); font-size:2.8rem; margin-bottom:30px; font-weight:800; position:relative;">${aboutData.storyTitle}</h2>
                <p style="font-size:1.3rem; color:var(--text-main); line-height:2.2; opacity:0.8; font-weight:400;">${aboutData.storyText}</p>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(350px, 1fr)); gap:3rem;">
                <div class="glass" style="padding:4rem; border-radius:50px; position:relative; background:white; transition:0.4s;">
                    ${isAdmin ? `<button id="edit-about-values" style="position:absolute; top:30px; right:30px; background:var(--primary-dark); color:white; border:none; padding:8px 15px; border-radius:15px; cursor:pointer; font-size:0.75rem;">ðŸ“ Edit</button>` : ''}
                    <h3 style="color:var(--primary-dark); margin-bottom:2rem; font-size:1.8rem; font-weight:800; display:flex; align-items:center; gap:15px;"><span>ðŸ’Ž</span> ${aboutData.valuesTitle}</h3>
                    <ul style="padding:0; list-style:none; color:var(--text-main); font-size:1.2rem;">
                        ${aboutData.valuesList.map(v => `<li style="margin-bottom:20px; display:flex; align-items:flex-start; gap:15px;"><span style="color:var(--primary); font-weight:900; margin-top:4px;">âœ¦</span> <span>${v}</span></li>`).join('')}
                    </ul>
                </div>
                <div class="glass" style="padding:4rem; border-radius:50px; position:relative; background:var(--primary-dark); transition:0.4s;">
                    ${isAdmin ? `<button id="edit-about-vision" style="position:absolute; top:30px; right:30px; background:rgba(255,255,255,0.2); color:white; border:none; padding:8px 15px; border-radius:15px; cursor:pointer; font-size:0.75rem;">ðŸ“ Edit</button>` : ''}
                    <h3 style="color:white; margin-bottom:2rem; font-size:1.8rem; font-weight:800; display:flex; align-items:center; gap:15px;"><span>ðŸš€</span> ${aboutData.visionTitle}</h3>
                    <p style="color:rgba(255,255,255,0.9); line-height:2; font-size:1.2rem; font-weight:300;">${aboutData.visionText}</p>
                </div>
            </div>
        `;

        if (isAdmin) {
            document.getElementById('edit-about-hero')?.addEventListener('click', () => {
                openEditModal('Edit Hero', [{ id: 'heroTitle', label: 'Main Header', type: 'text', value: aboutData.heroTitle }], (data) => {
                    aboutData.heroTitle = data.heroTitle;
                    saveToLocal(); renderAbout();
                });
            });
            document.getElementById('edit-about-story')?.addEventListener('click', () => {
                openEditModal('Edit Story', [
                    { id: 'storyTitle', label: 'Heading', type: 'text', value: aboutData.storyTitle },
                    { id: 'storyText', label: 'Content', type: 'textarea', value: aboutData.storyText }
                ], (data) => {
                    aboutData.storyTitle = data.storyTitle;
                    aboutData.storyText = data.storyText;
                    saveToLocal(); renderAbout();
                });
            });
            document.getElementById('edit-about-values')?.addEventListener('click', () => {
                openEditModal('Edit Values', [
                    { id: 'valuesTitle', label: 'Heading', type: 'text', value: aboutData.valuesTitle },
                    { id: 'v1', label: 'Value 1', type: 'text', value: aboutData.valuesList[0] || '' },
                    { id: 'v2', label: 'Value 2', type: 'text', value: aboutData.valuesList[1] || '' },
                    { id: 'v3', label: 'Value 3', type: 'text', value: aboutData.valuesList[2] || '' }
                ], (data) => {
                    aboutData.valuesTitle = data.valuesTitle;
                    aboutData.valuesList = [data.v1, data.v2, data.v3].filter(v => v.trim() !== '');
                    saveToLocal(); renderAbout();
                });
            });
            document.getElementById('edit-about-vision')?.addEventListener('click', () => {
                openEditModal('Edit Vision', [
                    { id: 'visionTitle', label: 'Heading', type: 'text', value: aboutData.visionTitle },
                    { id: 'visionText', label: 'Content', type: 'textarea', value: aboutData.visionText }
                ], (data) => {
                    aboutData.visionTitle = data.visionTitle;
                    aboutData.visionText = data.visionText;
                    saveToLocal(); renderAbout();
                });
            });
        }
    };

    renderStories();
    renderPolicies();
    renderFaq();
    renderAbout();

    // Fix role confusion in contact sidebar
    if (window.location.pathname.includes('contact.html')) {
        const adminSidebar = document.getElementById('admin-sidebar');
        const shippingSidebar = document.getElementById('shipping-sidebar');

        if (isAdmin) {
            if (adminSidebar) adminSidebar.style.display = 'flex';
            if (shippingSidebar) shippingSidebar.style.display = 'none'; // Hide shipping for admin command center

            const custForm = document.getElementById('customer-info-form');
            if (custForm) custForm.style.display = 'none';
        } else {
            if (adminSidebar) adminSidebar.style.display = 'none';
            if (shippingSidebar) shippingSidebar.style.display = 'flex';
        }
    }
});




