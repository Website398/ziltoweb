export default function Footer() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h3 className="text-2xl font-bold">
              ZILTO WEB
            </h3>

            <p className="text-gray-400 mt-4">
              Professional websites for businesses,
              startups and brands.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Navigation
            </h4>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Services
            </h4>

            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Business Website</li>
              <li>Landing Page</li>
              <li>Portfolio Website</li>
              <li>E-Commerce Website</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg">
              Connect
            </h4>

            <ul className="mt-4 space-y-2 text-gray-400">

              <li>
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/webcraft"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>

              <li>
                <a href="mailto:hello@ziltoweb.com">
                  
                </a>
              </li>

            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
          © 2026 ZILTO WEB. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}