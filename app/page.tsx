export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <nav className="flex items-center justify-between py-6 border-b border-gray-200">
          <div className="text-2xl font-bold text-black">Fabric</div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition">
              Finance
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Operations
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Data & Analytics
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition">
              Marketing & Sales
            </a>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 text-center">
          <h1 className="text-6xl font-bold text-black mb-6">
            The liquidity layer for AI agents and global treasury
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Powering autonomous commerce at code speed
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition text-lg font-semibold">
            Explore Fabric
          </button>
        </section>

        {/* Features Section */}
        <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="mb-4 text-4xl">💰</div>
            <h3 className="text-xl font-semibold mb-3">Liquidity Management</h3>
            <p className="text-gray-600">
              Seamless liquidity solutions for AI agents operating at scale
            </p>
          </div>
          <div>
            <div className="mb-4 text-4xl">🔄</div>
            <h3 className="text-xl font-semibold mb-3">Global Treasury</h3>
            <p className="text-gray-600">
              Manage treasury operations across multiple currencies and markets
            </p>
          </div>
          <div>
            <div className="mb-4 text-4xl">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Code Speed</h3>
            <p className="text-gray-600">
              Deploy and execute transactions at the speed of your application
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black text-white rounded-xl p-12 text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join forward-thinking organizations leveraging Fabric for autonomous finance
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-200 transition text-lg font-semibold">
            Schedule a Demo
          </button>
        </section>
      </div>
    </main>
  )
}
