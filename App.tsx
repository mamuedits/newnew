import React from 'react';
import { Trophy, Users, Calendar, Activity, Bell, BarChart3, Shield, MessageSquare } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Testimonial({ name, role, content, image }: { name: string, role: string, content: string, image: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <p className="text-gray-600 mb-4">"{content}"</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Where Sports and Technology Meet!</h1>
            <p className="text-xl mb-8">Manage your sports tournaments effortlessly with our comprehensive platform. From team registrations to live scoring, we've got you covered.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Users}
              title="Team Management"
              description="Easily register and manage teams with customizable profiles and player details."
            />
            <FeatureCard
              icon={Calendar}
              title="Smart Scheduling"
              description="Automated match fixtures based on team availability and tournament format."
            />
            <FeatureCard
              icon={Activity}
              title="Live Updates"
              description="Real-time score tracking and instant leaderboard updates."
            />
            <FeatureCard
              icon={Trophy}
              title="Tournament Formats"
              description="Support for league, knockout, and round-robin tournaments."
            />
            <FeatureCard
              icon={Shield}
              title="User Roles"
              description="Assign roles to organizers, referees, and participants."
            />
            <FeatureCard
              icon={Bell}
              title="Notifications"
              description="Instant alerts for match updates and announcements."
            />
            <FeatureCard
              icon={BarChart3}
              title="Analytics"
              description="Comprehensive statistics and performance analysis."
            />
            <FeatureCard
              icon={MessageSquare}
              title="Communication"
              description="Built-in messaging for seamless team coordination."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial
              name="Sarah Johnson"
              role="League Organizer"
              content="This platform has revolutionized how we manage our local basketball league. The automated scheduling alone has saved us countless hours!"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
            />
            <Testimonial
              name="Michael Chen"
              role="Sports Club Director"
              content="The real-time scoring and statistics have made our tournaments more engaging for players and spectators alike."
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
            />
            <Testimonial
              name="David Williams"
              role="Tournament Director"
              content="Finally, a complete solution that handles everything from registration to results. Highly recommended!"
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Elevate Your Sports Tournaments?</h2>
          <p className="text-xl text-white mb-8">Join thousands of satisfied organizers and transform how you manage sports events.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Sign Up Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">Empowering sports communities with innovative tournament management solutions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@sportstournament.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Sports Ave, City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Stay updated with our latest features and updates.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sports Tournament Manager. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;