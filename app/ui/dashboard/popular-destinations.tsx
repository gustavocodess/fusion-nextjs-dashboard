import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { popularDestinations } from "@/app/lib/travel-data";
import { StarIcon } from "@heroicons/react/24/solid";

export default function PopularDestinations() {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Popular Destinations
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {popularDestinations.map((destination, i) => {
            return (
              <div
                key={destination.id}
                className={`flex flex-row items-center justify-between py-4 ${
                  i !== 0 ? "border-t" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-md">
                    <Image
                      src={destination.image_url}
                      alt={`${destination.name}`}
                      className="object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {destination.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {destination.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <p
                    className={`${lusitana.className} mr-2 text-sm font-medium md:text-base`}
                  >
                    {destination.rating}
                  </p>
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
