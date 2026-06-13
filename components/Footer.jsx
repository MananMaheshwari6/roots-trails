import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-background/90 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold tracking-wide flex items-center gap-2">
              <span className="text-2xl">🌲</span>
              <span className="font-serif text-white">Roots & Trails</span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed font-light">
              Promoting responsible eco-tourism and authentic local homestays across the pristine valleys of Uttarakhand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Dashboard", href: "/dashboard" },
                { name: "Login", href: "/login" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-accent transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Eco Experiences */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">Experiences</h4>
            <ul className="space-y-2">
              {[
                { name: "Local Homestays", href: "#" },
                { name: "Trekking Trails", href: "#" },
                { name: "Cultural Tours", href: "#" },
                { name: "Nature Guides", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-background/70 hover:text-accent transition-colors duration-200">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">Connect with us</h4>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors duration-200" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors duration-200" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition-colors duration-200" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between items-center text-xs text-background/60">
          <p>&copy; {currentYear} Roots & Trails. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
