import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import {
  recentBookings,
  formatCurrency,
  formatDate,
} from "@/app/lib/travel-data";
import clsx from "clsx";

export default function RecentBookings() {
  return (
    <div className="flex w-full flex-col">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Bookings
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden rounded-md bg-white p-2">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Destination
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Dates
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentBookings.map((booking) => (
                      <tr key={booking.id} className="group">
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center gap-3">
                            <Image
                              src={booking.customerImage}
                              className="rounded-full"
                              alt={booking.customerName}
                              width={28}
                              height={28}
                            />
                            <p>{booking.customerName}</p>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm">
                          {booking.destination}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                          {formatDate(booking.departureDate)} -{" "}
                          {formatDate(booking.returnDate)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm">
                          {formatCurrency(booking.amount)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span
                            className={clsx(
                              "inline-flex items-center rounded-full px-2 py-1 text-xs",
                              {
                                "bg-green-100 text-green-700":
                                  booking.status === "confirmed",
                                "bg-yellow-100 text-yellow-700":
                                  booking.status === "pending",
                                "bg-red-100 text-red-700":
                                  booking.status === "cancelled",
                              },
                            )}
                          >
                            {booking.status.charAt(0).toUpperCase() +
                              booking.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
