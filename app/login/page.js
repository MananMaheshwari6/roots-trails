"use client";

export default function LoginPage() {
  return (
    <main className="max-w-md mx-auto px-4 py-20 bg-background">
      <div className="bg-surface border border-primary/10 rounded-2xl p-8 shadow-sm space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold font-serif text-foreground">
            Welcome Back
          </h1>
          <p className="text-sm text-foreground/60">
            Sign in to manage your roots and trails
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border border-primary/15 rounded-lg focus:outline-none focus:border-primary/40 bg-background/30 text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-3 border border-primary/15 rounded-lg focus:outline-none focus:border-primary/40 bg-background/30 text-sm"
              placeholder="••••••••"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/95 transition-all duration-300 cursor-pointer text-sm"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}
