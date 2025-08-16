import { Switch, Route } from "wouter";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Roamah Travel Platform</h1>
          <p className="mt-2 text-gray-600">Connecting travelers with specialized travel agents</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Platform Successfully Deployed!</h2>
          <p className="text-gray-600">Your Roamah platform is now live on Vercel.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">59 Travel Agents</h3>
              <p className="text-gray-600">Ready to help customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">238 Enquiries</h3>
              <p className="text-gray-600">Customer interactions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold">Mailchimp Active</h3>
              <p className="text-gray-600">Email automation running</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function NotFound() {
  return <div>Page not found</div>;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}
