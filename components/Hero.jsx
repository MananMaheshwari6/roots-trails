export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32 border-b border-primary/5">
      {/* Decorative background gradients */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -right-12 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Tagline */}
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/15 rounded-full mb-6">
            Uttarakhand Eco-Tourism
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-serif leading-tight">
            Discover Authentic <span className="text-primary">Uttarakhand</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-foreground/80 leading-relaxed font-light">
            Immerse yourself in nature. Experience warm mountain hospitality, rich local culture, and untouched forest trails. Stay in authentic, community-run homestays that directly support local families.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-primary text-background font-medium rounded-lg shadow-md hover:bg-primary/95 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer">
              Explore Homestays
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
