import TravelLogo from "@/app/ui/travel-logo";
import { lusitana } from "@/app/ui/fonts";
import TravelMetrics from "@/app/ui/dashboard/travel-metrics";
import BookingsChart from "@/app/ui/dashboard/bookings-chart";
import PopularDestinations from "@/app/ui/dashboard/popular-destinations";
import RecentBookings from "@/app/ui/dashboard/recent-bookings";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* Header */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-green-600 p-4 md:h-52">
        <div className="w-full flex justify-between items-end">
          <TravelLogo />
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-white px-6 py-3 text-sm font-medium text-green-600 transition-colors hover:bg-gray-100 md:text-base"
          >
            <span>Log in</span>
          </Link>
        </div>
      </div>

      {/* Dashboard Title */}
      <div className="mt-6">
        <h1 className={`${lusitana.className} mb-4 text-2xl md:text-3xl`}>
          Travel Agency Dashboard
        </h1>
      </div>

      {/* Dashboard Metrics */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
        <TravelMetrics />
      </div>

      {/* Booking Trends and Popular Destinations */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <BookingsChart />
        <PopularDestinations />
      </div>

      {/* Recent Bookings */}
      <div className="mt-6">
        <RecentBookings />
      </div>
    </main>
  );
}
