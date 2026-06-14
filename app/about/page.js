export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-background">
      <div className="text-center md:text-left space-y-6">
        <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
          Our Mission
        </span>
        <h1 className="text-4xl font-extrabold font-serif text-foreground">
          About Roots & Trails
        </h1>
        <p className="text-lg text-foreground/80 leading-relaxed font-light">
          Roots & Trails is dedicated to promoting responsible eco-tourism and authentic community-run homestays in the Himalayan region of Uttarakhand. We connect conscious travelers with local families, ensuring sustainable income for mountain communities while offering travelers immersive cultural and nature-filled experiences.
        </p>
      </div>
    </main>
  );
}
