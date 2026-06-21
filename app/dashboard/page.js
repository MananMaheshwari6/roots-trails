export default function DashboardPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-background">
      <div className="space-y-6">
        <div className="border-b border-primary/10 pb-6">
          <h1 className="text-3xl font-bold font-serif text-foreground">
            User Dashboard
          </h1>
          <p className="text-sm text-foreground/70 mt-1">
            Manage your bookings, homestay listings, and trail guides.
          </p>
        </div>
        
        <div className="bg-surface border border-primary/10 rounded-2xl p-8 shadow-sm">
          <p className="text-foreground/80 leading-relaxed font-light">
            Welcome back to Roots & Trails. You currently have no active bookings or upcoming trips. Explore our featured experiences to start planning your next journey.
          </p>
        </div>
      </div>
    </main>
  );
}
