import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import {
  faLeaf,
  faTruck,
  faTag,
  faArrowRight,
  faStar,
  faAppleWhole
} from "@fortawesome/free-solid-svg-icons";

import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";

export default function NewsletterSection() {

  return (

    <section className="py-20 bg-[#f7fdfb]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-[#eaf7f3] rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* title */}
            <div className="flex items-center gap-4 mb-6">

              <div className="bg-emerald-500 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                <FontAwesomeIcon icon={faEnvelope}/>
              </div>

              <div>
                <p className="text-emerald-600 text-sm font-semibold">
                  NEWSLETTER
                </p>

                <p className="text-gray-500 text-sm">
                  50,000+ subscribers
                </p>
              </div>

            </div>

            <h2 className="text-4xl font-bold text-gray-800 leading-snug mb-4">
              Get the Freshest Updates
              <span className="text-emerald-500"> Delivered Free</span>
            </h2>

            <p className="text-gray-500 mb-6">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            {/* features */}
            <div className="flex flex-wrap gap-4 mb-8">

              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 text-sm">

                <FontAwesomeIcon
                  icon={faLeaf}
                  className="text-emerald-500"
                />

                Fresh Picks Weekly

              </span>

              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 text-sm">

                <FontAwesomeIcon
                  icon={faTruck}
                  className="text-emerald-500"
                />

                Free Delivery Codes

              </span>

              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 text-sm">

                <FontAwesomeIcon
                  icon={faTag}
                  className="text-emerald-500"
                />

                Members-Only Deals

              </span>

            </div>

            {/* input */}
            <div className="flex w-full max-w-lg">

              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 border border-gray-200 px-5 py-4 rounded-l-xl outline-none"
              />

              <button className="bg-emerald-500 text-white px-8 rounded-r-xl flex items-center gap-2 hover:bg-emerald-600 transition">

                Subscribe

                <FontAwesomeIcon icon={faArrowRight}/>

              </button>

            </div>

            <p className="text-xs text-gray-400 mt-3">
              ✨ Unsubscribe anytime. No spam, ever.
            </p>

          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center">

            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 rounded-3xl w-[340px] shadow-xl">

              <span className="bg-emerald-500 text-xs px-3 py-1 rounded-full">
                MOBILE APP
              </span>

              <h3 className="text-2xl font-semibold mt-4 mb-2">
                Shop Faster on Our App
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                Get app-exclusive deals & 15% off your first order.
              </p>

              {/* buttons */}
              <div className="space-y-4">

                <button className="w-full bg-white/10 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition">

                  <FontAwesomeIcon icon={faAppleWhole}/>

                  Download on App Store

                </button>

                <button className="w-full bg-white/10 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-white/20 transition">

                  <FontAwesomeIcon icon={faGooglePlay}/>

                  Get it on Google Play

                </button>

              </div>

              {/* rating */}
              <div className="flex items-center gap-1 text-yellow-400 mt-6">

                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>

                <span className="text-gray-300 ml-2 text-sm">
                  4.9 • 100K+ downloads
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}