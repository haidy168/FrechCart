import Link from "next/link";

export default function DealsBanner() {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-center md:gap-6 items-center">

        {/* Deal of the Day */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white p-8 w-full md:w-[45%] min-h-[330px]">

          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-10 translate-y-10"></div>

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4 text-sm">
              <span className="text-red-500 text-lg">🔥</span>
              <span>Deal of the Day</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Fresh Organic Fruits
            </h3>

            <p className="text-white/80 mb-4">
              Get up to 40% off on selected organic fruits
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold">40% OFF</span>
              <span className="text-sm text-white">
                Use code: <span className="font-semibold text-white">ORGANIC40</span>
              </span>
            </div>

            <Link
              href="/deals"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition mb-1"
            >
              Shop Now
              <span className="text-emerald-600">→</span>
            </Link>

          </div>
        </div>

        {/* New Arrivals */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 text-white p-8 w-full md:w-[45%] min-h-[330px] mt-6 md:mt-0">

          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full translate-x-10 -translate-y-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-10 translate-y-10"></div>

          <div className="relative z-10">

            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full mb-4 text-sm">
              ✨
              <span>New Arrivals</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Exotic Vegetables
            </h3>

            <p className="text-white/80 mb-4">
              Discover our latest collection of premium vegetables
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold">25% OFF</span>
              <span className="text-sm text-white">
                Use code: <span className="font-semibold text-white">FRESH25</span>
              </span>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition mb-1"
            >
              Explore Now
              <span className="text-orange-500">→</span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}