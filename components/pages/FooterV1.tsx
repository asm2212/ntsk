import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function FooterV1() {
  return (
    <footer className="relative bg-gradient-to-br from-green-400 to-blue-500 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:underline">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:underline">
                  Press Releases
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/find-doctor" className="hover:underline">
                  Find a Doctor
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="hover:underline">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/patient-resources" className="hover:underline">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/join-network" className="hover:underline">
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link href="/doctor-resources" className="hover:underline">
                  Doctor Resources
                </Link>
              </li>
              <li>
                <Link href="/telemedicine" className="hover:underline">
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/doctor-faq" className="hover:underline">
                  Doctor FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <Button
              variant="secondary"
              className="w-full bg-white text-blue-500 hover:bg-blue-100 transition-colors"
            >
              <Link href="/join/doctors">Become a Doctor</Link>
            </Button>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} AskDoc. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:underline">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full -mb-32 -mr-32 blur-3xl"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -mt-32 -ml-32 blur-3xl"></div>
    </footer>
  );
}
