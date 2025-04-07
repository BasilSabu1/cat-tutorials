// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 md:px-8">
        {/* Top section with columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Newsletter column */}
          <div className="col-span-1">
            <div className="flex items-center mb-3">
              <Image src="/headerlogo.png" alt="Prep Academy Logo" width={24} height={24} className="mr-2" />
              <span className="font-semibold text-md uppercase">Prep Academy</span>
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              Stay up to date on the latest features and releases by joining our newsletter.
            </p>
            <div className="mb-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-600 text-sm w-full mb-2"
              />
              <button className="bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded text-sm w-full">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Page Links */}
          <div className="col-span-1">
            <h3 className="font-medium mb-4 text-sm">Page</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/past-paper" className="hover:text-white transition-colors">Past paper</Link></li>
              <li><Link href="/know-your-college" className="hover:text-white transition-colors">Know your college</Link></li>
              <li><Link href="/materials" className="hover:text-white transition-colors">Materials</Link></li>
              <li><Link href="/gdpi-sessions" className="hover:text-white transition-colors">GDPI Sessions</Link></li>
            </ul>
          </div>

          {/* Videos Links */}
          <div className="col-span-1">
            <h3 className="font-medium mb-4 text-sm">Videos</h3>
            <ul className="text-sm text-gray-300 space-y-2">
              <li><Link href="/updates" className="hover:text-white transition-colors">Updates</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/blog-post" className="hover:text-white transition-colors">Blog Post</Link></li>
            </ul>
          </div>

          {/* Combined Results and Follow us columns */}
          <div className="col-span-1">
            <div className="mb-6">
              <h3 className="font-medium mb-4 text-sm">Results</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><Link href="/result-1" className="hover:text-white transition-colors">Result 1</Link></li>
                <li><Link href="/result-2" className="hover:text-white transition-colors">Result 2</Link></li>
                <li><Link href="/result-3" className="hover:text-white transition-colors">Result 3</Link></li>
                <li><Link href="/result-4" className="hover:text-white transition-colors">Result 4</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-4 text-sm">Follow us</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors flex items-center">
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom copyright section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div>© 2025 Created by AI rights reserved.</div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies-settings" className="hover:text-white transition-colors">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;