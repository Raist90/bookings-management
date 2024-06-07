export { bookings }

const bookings: Booking[] = [
  {
    id: 1,
    customer: {
      age: 28,
      email: "john.doe@example.com",
      gender: "Male",
      name: "John Doe",
      phone: "+1234567890",
    },
    paymentType: "Credit transfer",
    travelId: 1,
    notes: "Vegetarian meal",
  },
  {
    id: 2,
    customer: {
      age: 35,
      email: "jane.smith@example.com",
      gender: "Female",
      name: "Jane Smith",
      phone: "+0987654321",
    },
    paymentType: "PayPal",
    travelId: 2,
  },
  {
    id: 3,
    customer: {
      age: 42,
      email: "alice.jones@example.com",
      gender: "Female",
      name: "Alice Jones",
      phone: "+1122334455",
    },
    paymentType: "Revolut",
    travelId: 3,
    notes: "Window seat",
  },
  {
    id: 4,
    customer: {
      age: 50,
      email: "michael.brown@example.com",
      gender: "Male",
      name: "Michael Brown",
      phone: "+2233445566",
    },
    paymentType: "Credit transfer",
    travelId: 4,
  },
  {
    id: 5,
    customer: {
      age: 29,
      email: "emma.wilson@example.com",
      gender: "Female",
      name: "Emma Wilson",
      phone: "+3344556677",
    },
    paymentType: "PayPal",
    travelId: 5,
    notes: "Extra luggage",
  },
]
