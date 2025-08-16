export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">Roamah</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600">Browse Agents</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Destinations</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Holiday Types</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">How It Works</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Travel Agent</h1>
          <p className="text-xl mb-8">Connect with verified travel experts for your dream holiday</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Browse Agents
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">59</div>
              <div className="text-gray-600">Verified Travel Agents</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">238</div>
              <div className="text-gray-600">Customer Enquiries</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Mailchimp Integration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Roamah</div>
              <p className="text-gray-400">Connecting travelers with specialized travel agents</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Travelers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Browse Agents</li>
                <li>Browse Destinations</li>
                <li>Holiday Types</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Agents</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Agent Login</li>
                <li>Register</li>
                <li>Dashboard</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
