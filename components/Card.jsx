export default function Card({ image, title, description }) {
  return (
    <div className="group flex flex-col bg-surface border border-primary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary/5">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5 text-primary/40">
            <span className="text-4xl">🏔️</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold font-serif text-foreground group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="mt-2 text-foreground/75 text-sm leading-relaxed flex-1">
          {description}
        </p>
        
        {/* Read More Link */}
        <div className="mt-4 flex items-center text-primary font-medium text-xs tracking-wider uppercase gap-1 group-hover:translate-x-1 transition-transform duration-200">
          <span>Read More</span>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
