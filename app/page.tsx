export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="space-y-6 max-w-3xl">
          {/* Logo/Brand */}
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-gradient">Hero</span>
            <span className="text-gray-900 dark:text-white"> Fitness</span>
            <span className="text-purple-600"> AI</span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
            AI-Powered Workout Builder for Your Fitness Journey
          </p>
          
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium">Landing Page Coming Soon</span>
          </div>
          
          {/* Placeholder Message */}
          <p className="text-gray-500 dark:text-gray-400 mt-8">
            We're crafting an amazing experience. Check back soon!
          </p>
        </div>
      </div>
    </main>
  );
}