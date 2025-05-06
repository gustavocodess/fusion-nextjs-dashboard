import {
  GlobeAltIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { lusitana } from "@/app/ui/fonts";
import { dashboardMetrics, formatCurrency } from "@/app/lib/travel-data";

const iconMap = {
  bookings: GlobeAltIcon,
  revenue: CurrencyDollarIcon,
  customers: UserGroupIcon,
  rating: StarIcon,
};

export default function TravelMetrics() {
  const { totalBookings, totalRevenue, activeCustomers, averageRating } =
    dashboardMetrics;

  return (
    <>
      <TravelCard
        title="Total Bookings"
        value={totalBookings}
        type="bookings"
      />
      <TravelCard
        title="Total Revenue"
        value={formatCurrency(totalRevenue)}
        type="revenue"
      />
      <TravelCard
        title="Active Customers"
        value={activeCustomers}
        type="customers"
      />
      <TravelCard title="Average Rating" value={averageRating} type="rating" />
    </>
  );
}

export function TravelCard({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "bookings" | "revenue" | "customers" | "rating";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
