// Mock data for travel agency dashboard

export type Destination = {
  id: string;
  name: string;
  location: string;
  image_url: string;
  bookings: number;
  rating: number;
};

export type Booking = {
  id: string;
  customerName: string;
  customerImage: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  amount: number;
  status: "confirmed" | "pending" | "cancelled";
};

export type BookingTrend = {
  month: string;
  bookings: number;
};

// Mock popular destinations
export const popularDestinations: Destination[] = [
  {
    id: "1",
    name: "Bali Paradise Resort",
    location: "Bali, Indonesia",
    image_url: "/destinations/bali.jpg",
    bookings: 145,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Santorini Villas",
    location: "Santorini, Greece",
    image_url: "/destinations/santorini.jpg",
    bookings: 132,
    rating: 4.9,
  },
  {
    id: "3",
    name: "Kyoto Gardens Hotel",
    location: "Kyoto, Japan",
    image_url: "/destinations/kyoto.jpg",
    bookings: 118,
    rating: 4.7,
  },
  {
    id: "4",
    name: "Machu Picchu Retreat",
    location: "Cusco, Peru",
    image_url: "/destinations/machu-picchu.jpg",
    bookings: 98,
    rating: 4.6,
  },
];

// Mock recent bookings
export const recentBookings: Booking[] = [
  {
    id: "b1",
    customerName: "Emma Johnson",
    customerImage: "/customers/emma-johnson.png",
    destination: "Bali Paradise Resort",
    departureDate: "2023-07-15",
    returnDate: "2023-07-22",
    amount: 189500,
    status: "confirmed",
  },
  {
    id: "b2",
    customerName: "James Smith",
    customerImage: "/customers/james-smith.png",
    destination: "Santorini Villas",
    departureDate: "2023-08-03",
    returnDate: "2023-08-10",
    amount: 245000,
    status: "confirmed",
  },
  {
    id: "b3",
    customerName: "Sophia Chen",
    customerImage: "/customers/sophia-chen.png",
    destination: "Kyoto Gardens Hotel",
    departureDate: "2023-09-12",
    returnDate: "2023-09-20",
    amount: 178000,
    status: "pending",
  },
  {
    id: "b4",
    customerName: "Michael Rodriguez",
    customerImage: "/customers/michael-rodriguez.png",
    destination: "Machu Picchu Retreat",
    departureDate: "2023-10-05",
    returnDate: "2023-10-12",
    amount: 214500,
    status: "pending",
  },
];

// Mock booking trends
export const bookingTrends: BookingTrend[] = [
  { month: "Jan", bookings: 120 },
  { month: "Feb", bookings: 140 },
  { month: "Mar", bookings: 190 },
  { month: "Apr", bookings: 220 },
  { month: "May", bookings: 280 },
  { month: "Jun", bookings: 350 },
  { month: "Jul", bookings: 410 },
  { month: "Aug", bookings: 390 },
  { month: "Sep", bookings: 320 },
  { month: "Oct", bookings: 260 },
  { month: "Nov", bookings: 210 },
  { month: "Dec", bookings: 290 },
];

// Dashboard metrics
export const dashboardMetrics = {
  totalBookings: 2458,
  totalRevenue: 432650000, // in cents
  activeCustomers: 1842,
  averageRating: 4.7,
};

// Function to generate Y-axis labels for booking trends chart
export function generateBookingYAxis(trends: BookingTrend[]) {
  const yAxisLabels = [];
  const highestRecord = Math.max(...trends.map((month) => month.bookings));
  const topLabel = Math.ceil(highestRecord / 100) * 100;

  for (let i = topLabel; i >= 0; i -= 100) {
    yAxisLabels.push(i);
  }

  return { yAxisLabels, topLabel };
}

// Function to format currency (from cents to dollars)
export function formatCurrency(amount: number) {
  return (amount / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}

// Function to format date
export function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
