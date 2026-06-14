import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function Home() {
  const cardsData = [
    {
      title: "Khati Village Homestay",
      description: "Experience the warm hospitality of the last village on the Pindari Glacier trek. Enjoy local organic cuisine.",
      image: "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Binsar Forest Trail",
      description: "Walk through dense oak and rhododendron forests with majestic views of the Nanda Devi mountain range.",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop"
    },
    {
      title: "Munsiyari Heritage Stay",
      description: "Wake up to the stunning views of the Panchachuli peaks. Learn about the rich Johar valley culture.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <main className="pb-16 bg-background">
      <Hero />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold font-serif text-foreground">Featured Experiences</h2>
          <p className="mt-2 text-foreground/75 font-light">Handpicked homestays and guided treks in the heart of Uttarakhand.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardsData.map((card, idx) => (
            <Card 
              key={idx}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
