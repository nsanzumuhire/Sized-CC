"use client";

import Link from "next/link";
import {
  Sofa,
  Palette,
  Gift,
  Printer,
  House,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  HangingSign,
  Visa,
  Mastercard,
  MtnMoMo,
  AirtelMoney
} from "@/components/custom-icons";

const services = [
  { name: "Signage", icon: HangingSign, href: "#services" },
  { name: "Branding", icon: Palette, href: "#services" },
  { name: "Furniture", icon: Sofa, href: "#services" },
  { name: "Home Décor", icon: House, href: "#services" },
  { name: "Gifts", icon: Gift, href: "#services" },
  { name: "Print", icon: Printer, href: "#services" },
];

const paymentMethods = [
  { name: "Visa", icon: Visa, color: "hover:text-[#1A1F71] hover:bg-[#1A1F71]/10" },
  { name: "Mastercard", icon: Mastercard, color: "hover:text-[#EB001B] hover:bg-[#EB001B]/10" },
  { name: "MTN MoMo", icon: MtnMoMo, color: "hover:text-[#FFCC00] hover:bg-[#FFCC00]/10" },
  { name: "Airtel Money", icon: AirtelMoney, color: "hover:text-[#E60000] hover:bg-[#E60000]/10" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-white/10 pt-16 pb-8 scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-white">
                SIZED<span className="text-primary">.CC</span>
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Precision metal cutting and custom fabrication for industrial and
                commercial applications.
              </p>
            </div>
          </div>

          {/* Services Column - Synchronized */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link
                    href={service.href}
                    className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors"
                  >
                    <div className="p-1 rounded bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      <service.icon className="w-3 h-3" />
                    </div>
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column - Cleaned */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              {/* Contact link removed as likely redundant */}
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods - Dedicated Column 4 */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">We Accept</h4>
            <div className="flex flex-col gap-2">
              {paymentMethods.map((method, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-2 p-1.5 rounded bg-white/5 border border-white/5 text-neutral-400 transition-all duration-300 group ${method.color}`}
                >
                  <method.icon className="w-4 h-4" />
                  <span className="text-xs font-medium group-hover:text-current transition-colors">{method.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Column - Dedicated Column 5 with Icons */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">Contact Us</h4>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-center gap-2 group">
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:sizedrwanda@gmail.com" className="hover:text-white transition-colors">sizedrwanda@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:+250795555575" className="hover:text-white transition-colors">+250 795 555 575</a>
              </li>
              <li className="flex items-start gap-2 group">
                <div className="p-1.5 rounded bg-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span>120 KG 19 Ave, Kigali<br />Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Centered Copyright */}
        <div className="border-t border-white/10 pt-8 flex justify-center items-center">
          <p className="text-[10px] text-muted-foreground text-center">
            © {new Date().getFullYear()} SIZED.CC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
