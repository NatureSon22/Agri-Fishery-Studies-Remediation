const Banner = () => {
  return (
    <section className="relative w-full h-[65vh] bg-linear-to-br from-green-950 via-emerald-800 to-green-700 text-white flex items-center justify-center overflow-hidden shadow-xl">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604328698692-f76ea9498a2e?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')] opacity-10 mix-blend-overlay" />

      {/* Lighting gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-green-950/80 via-emerald-900/50 to-transparent" />

      {/* Animated wave overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-50">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(150%+1.3px)] h-36 animate-wave-flow"
        >
          <path
            d="M0,0V46.29c47.71,22.24,108.25,35.09,179.33,39.09C290.93,90.75,355.55,72.43,449,48.78,544.32,24.66,673.45-5.7,783.93,12.06,913,33.3,998.47,76.17,1200,49.23V0Z"
            className="fill-emerald-400/40"
          ></path>
          <path
            d="M0,0V15.81C47.71,36.3,108.25,54.61,179.33,62.25,290.93,74.84,355.55,60.84,449,39.4,544.32,17.54,673.45-9.48,783.93,5.7,913,23.32,998.47,72.15,1200,50.23V0Z"
            className="fill-green-600/40"
          ></path>
          <path
            d="M0,0V5.63C47.71,24.18,108.25,44.61,179.33,53.25,290.93,67.84,355.55,55.84,449,33.4,544.32,9.54,673.45-12.48,783.93,0.7,913,15.32,998.47,61.15,1200,40.23V0Z"
            className="fill-green-700/60"
          ></path>
        </svg>
      </div>

      {/* Text content */}
      <div className="relative z-10 text-center px-6 space-y-5">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-snug drop-shadow-lg">
          <span className="text-yellow-400">Your</span>{" "}
          <span className="text-white">Agri-Fishery</span>{" "}
          <span className="text-yellow-400">Learning</span> Adventure
        </h1>
        <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
          Complete the warm-up quiz, explore the modules, and finish strong!
        </p>
      </div>

      {/* Subtle sunlight glow element */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-yellow-400/10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Banner;
