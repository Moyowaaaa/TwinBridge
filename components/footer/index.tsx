import { Button } from "../ui/button";
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-[#293e6d] text-white pt-20 pb-8 px-4 md:px-8 flex flex-col items-center"
    >
      {/* Top CTA Section */}
      <div className="w-full max-w-[800px] flex flex-col items-center justify-center text-center mb-24">
        <h2 className="text-[32px] md:text-[44px] lg:text-[50px] font-bold mb-6 leading-[1.2]">
          Ready to Start Your Journey?
        </h2>
        <p className="text-[15px] md:text-[16px] text-white/90 mb-8 max-w-[650px] leading-[1.6]">
          Take the first step towards your new beginning. Get a free eligibility
          assessment or schedule a consultation with our experts today.
        </p>
        <Button variant="white" className="font-semibold text-[15px] px-8 h-12">
          Book a Consultation
        </Button>
      </div>

      {/* Main Footer Links */}
      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
        {/* Brand Information */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="text-[24px] font-bold mb-4">TwinBridge Travels</h3>
          <p className="text-[14px] text-white/80 leading-[1.6] max-w-[320px]">
            Your bridge to a new beginning in Canada. Professional immigration
            guidance you can trust.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[16px] mb-5">Quick links</h4>
          <ul className="space-y-4 text-[14px] text-white/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Faq
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-[16px] mb-5">Social Links</h4>
          <ul className="space-y-4 text-[14px] text-white/80">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                x (Twitter)
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-[16px] mb-5">Contact</h4>
          <ul className="space-y-5 text-[14px] text-white/80">
            <li className="flex items-start gap-4">
              <Mail className="w-5 h-5 shrink-0 mt-0.5" />
              <a
                href="mailto:info@twinbridge.com"
                className="hover:text-white transition-colors"
              >
                info@twinbridge.com
              </a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="leading-[1.6]">
                Dantata Plaza, Opposite Airforce Base, Kano State
              </span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
              <span className="leading-[1.6]">
                Ososami Road, Oke Ado, Ibadan, Oyo State
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="w-full max-w-[1200px] border-t border-white/20 pt-8 flex justify-center text-center">
        <p className="text-[12px] md:text-[13px] text-white/70">
          © 2026 TwinBridge Travels. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
