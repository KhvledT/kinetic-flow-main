import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Youtube, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">
                PULSE<span className="text-primary">FIT</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transform your body and mind with expert-led workouts, personalized training plans, and a supportive community.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Workouts */}
          <div>
            <h4 className="font-semibold mb-4">Workouts</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/workouts" className="text-muted-foreground hover:text-foreground transition-colors">All Workouts</Link></li>
              <li><Link to="/workouts?type=hiit" className="text-muted-foreground hover:text-foreground transition-colors">HIIT</Link></li>
              <li><Link to="/workouts?type=strength" className="text-muted-foreground hover:text-foreground transition-colors">Strength</Link></li>
              <li><Link to="/workouts?type=yoga" className="text-muted-foreground hover:text-foreground transition-colors">Yoga</Link></li>
              <li><Link to="/workouts?type=cardio" className="text-muted-foreground hover:text-foreground transition-colors">Cardio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/trainers" className="text-muted-foreground hover:text-foreground transition-colors">Our Trainers</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><Link to="/subscription" className="text-muted-foreground hover:text-foreground transition-colors">Manage Subscription</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PulseFit. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with 💚 for fitness enthusiasts everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};
