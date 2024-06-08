export { travels }

const travels: Travel[] = [
  {
    id: 1,
    name: "Trip to Paris",
    departureDate: "2024-06-01",
    returnDate: "2024-06-10",
    description: "Explore the city of love and its historic landmarks.",
    price: 1200,
    averageRating: 4.5,
    images: [
      {
        alt: "Paris",
        src: `${PICSUM_URL}/2000?random=1`,
      },
    ],
  },
  {
    id: 2,
    name: "Adventure in the Amazon",
    departureDate: "2024-07-15",
    returnDate: "2024-07-25",
    description:
      "Experience the wildlife and natural beauty of the Amazon rainforest.",
    price: 2500,
    averageRating: 4.8,
    images: [
      {
        alt: "Amazon",
        src: `${PICSUM_URL}/2000?random=2`,
      },
    ],
  },
  {
    id: 3,
    name: "Safari in Kenya",
    departureDate: "2024-08-05",
    returnDate: "2024-08-15",
    description: "Go on a safari and see the majestic animals of Kenya.",
    price: 3000,
    averageRating: 4.9,
    images: [
      {
        alt: "Kenya Safari",
        src: `${PICSUM_URL}/2000?random=3`,
      },
    ],
  },
  {
    id: 4,
    name: "Relax in the Maldives",
    departureDate: "2024-09-01",
    returnDate: "2024-09-10",
    description:
      "Enjoy the serene beaches and luxurious resorts of the Maldives.",
    price: 4000,
    averageRating: 4.7,
    images: [
      {
        alt: "Maldives",
        src: `${PICSUM_URL}/2000?random=4`,
      },
    ],
  },
  {
    id: 5,
    name: "Cultural Tour of Japan",
    departureDate: "2024-10-10",
    returnDate: "2024-10-20",
    description: "Experience the unique culture and history of Japan.",
    price: 3500,
    averageRating: 4.6,
    images: [
      {
        alt: "Japan",
        src: `${PICSUM_URL}/2000?random=5`,
      },
    ],
  },
  {
    id: 6,
    name: "Beach Vacation in Hawaii",
    departureDate: "2024-11-05",
    returnDate: "2024-11-15",
    description:
      "Relax on the beautiful beaches of Hawaii and explore its islands.",
    price: 2800,
    averageRating: 4.7,
    images: [
      {
        alt: "Hawaii",
        src: `${PICSUM_URL}/2000?random=6`,
      },
    ],
  },
  {
    id: 7,
    name: "Historical Tour of Rome",
    departureDate: "2024-12-01",
    returnDate: "2024-12-10",
    description: "Discover the ancient history and architecture of Rome.",
    price: 1300,
    averageRating: 4.5,
    images: [
      {
        alt: "Rome",
        src: `${PICSUM_URL}/2000?random=7`,
      },
    ],
  },
  {
    id: 8,
    name: "Cruise in the Caribbean",
    departureDate: "2024-01-05",
    returnDate: "2024-01-15",
    description:
      "Sail through the Caribbean and visit multiple tropical destinations.",
    price: 3200,
    averageRating: 4.8,
    images: [
      {
        alt: "Caribbean Cruise",
        src: `${PICSUM_URL}/2000?random=8`,
      },
    ],
  },
  {
    id: 9,
    name: "Exploration of the Great Wall of China",
    departureDate: "2024-02-10",
    returnDate: "2024-02-20",
    description: "Walk along the Great Wall and learn about its history.",
    price: 1500,
    averageRating: 4.6,
    images: [
      {
        alt: "Great Wall of China",
        src: `${PICSUM_URL}/2000?random=9`,
      },
    ],
  },
  {
    id: 10,
    name: "City Tour of New York",
    departureDate: "2024-03-01",
    returnDate: "2024-03-10",
    description:
      "Explore the iconic landmarks and vibrant culture of New York City.",
    price: 2100,
    averageRating: 4.7,
    images: [
      {
        alt: "New York City",
        src: `${PICSUM_URL}/2000?random=10`,
      },
    ],
  },
  {
    id: 11,
    name: "Northern Lights in Iceland",
    departureDate: "2024-04-05",
    returnDate: "2024-04-15",
    description: "Witness the breathtaking Northern Lights in Iceland.",
    price: 2800,
    averageRating: 4.9,
    images: [
      {
        alt: "Iceland",
        src: `${PICSUM_URL}/2000?random=11`,
      },
    ],
  },
  {
    id: 12,
    name: "Desert Adventure in Dubai",
    departureDate: "2024-05-01",
    returnDate: "2024-05-10",
    description: "Experience the luxury and adventure of Dubai.",
    price: 3700,
    averageRating: 4.8,
    images: [
      {
        alt: "Dubai",
        src: `${PICSUM_URL}/2000?random=12`,
      },
    ],
  },
  {
    id: 13,
    name: "Safari in South Africa",
    departureDate: "2024-06-15",
    returnDate: "2024-06-25",
    description: "Explore the diverse wildlife and landscapes of South Africa.",
    price: 3300,
    averageRating: 4.9,
    images: [
      {
        alt: "South Africa Safari",
        src: `${PICSUM_URL}/2000?random=13`,
      },
    ],
  },
  {
    id: 14,
    name: "Historical Sites of Egypt",
    departureDate: "2024-07-05",
    returnDate: "2024-07-15",
    description: "Visit the ancient pyramids and temples of Egypt.",
    price: 2600,
    averageRating: 4.7,
    images: [
      {
        alt: "Egypt",
        src: `${PICSUM_URL}/2000?random=14`,
      },
    ],
  },
  {
    id: 15,
    name: "Tour of Australia",
    departureDate: "2024-08-10",
    returnDate: "2024-08-20",
    description: "Explore the diverse landscapes and cities of Australia.",
    price: 3500,
    averageRating: 4.6,
    images: [
      {
        alt: "Australia",
        src: `${PICSUM_URL}/2000?random=15`,
      },
    ],
  },
  {
    id: 16,
    name: "Winter Wonderland in Switzerland",
    departureDate: "2024-09-05",
    returnDate: "2024-09-15",
    description: "Enjoy the scenic beauty and winter sports in Switzerland.",
    price: 2900,
    averageRating: 4.8,
    images: [
      {
        alt: "Switzerland",
        src: `${PICSUM_URL}/2000?random=16`,
      },
    ],
  },
  {
    id: 17,
    name: "Cultural Experience in India",
    departureDate: "2024-10-10",
    returnDate: "2024-10-20",
    description: "Immerse yourself in the rich culture and history of India.",
    price: 2400,
    averageRating: 4.7,
    images: [
      {
        alt: "India",
        src: `${PICSUM_URL}/2000?random=17`,
      },
    ],
  },
  {
    id: 18,
    name: "Island Hopping in Greece",
    departureDate: "2024-11-05",
    returnDate: "2024-11-15",
    description:
      "Visit the beautiful islands of Greece and enjoy the Mediterranean climate.",
    price: 2200,
    averageRating: 4.8,
    images: [
      {
        alt: "Greece",
        src: `${PICSUM_URL}/2000?random=18`,
      },
    ],
  },
  {
    id: 19,
    name: "Alaskan Cruise",
    departureDate: "2024-12-01",
    returnDate: "2024-12-10",
    description: "Sail through the glaciers and scenic landscapes of Alaska.",
    price: 3200,
    averageRating: 4.9,
    images: [
      {
        alt: "Alaska",
        src: `${PICSUM_URL}/2000?random=19`,
      },
    ],
  },
  {
    id: 20,
    name: "City Break in London",
    departureDate: "2025-01-05",
    returnDate: "2025-01-15",
    description: "Explore the historic and modern attractions of London.",
    price: 2100,
    averageRating: 4.7,
    images: [
      {
        alt: "London",
        src: `${PICSUM_URL}/2000?random=20`,
      },
    ],
  },
]
