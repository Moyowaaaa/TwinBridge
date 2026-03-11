"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

type link = {
  label: string;
  onClick?: () => void;
};

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const navLinks: link[] = [
    {
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      label: "Services",
    },
    {
      label: "About",
      onClick: () => router.push("/about"),
    },
    {
      label: "FAQ",
      onClick: () =>
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Contact",
      onClick: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="w-full min-h-[5rem] max-h-[5rem] flex items-center justify-center bg-white border-b border-[#eaeaea] relative z-50">
        <div className="w-full max-w-[85rem] flex items-center justify-between px-[1.25rem] md:px-0">
          <div
            onClick={() => router.push("/")}
            className="w-[60px] relative h-[60px]"
          >
            <Image
              src="/images/logo.svg"
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-[2rem]">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <div
                  className="font-medium text-[0.875rem] text-[#7c7c7c] hover:text-[#111111] cursor-pointer transition-colors flex items-center gap-[0.25rem]"
                  onClick={link.onClick}
                >
                  {link.label}
                  {link.label === "Services" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 transition-transform group-hover:rotate-180"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  )}
                </div>

                {link.label === "Services" && (
                  <div className="absolute top-[1.5rem] left-1/2 -translate-x-1/2 pt-[1.5rem] opacity-0 translate-y-[0.5rem] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 w-max z-50">
                    <div className="bg-white rounded-[1.25rem] border border-[#eaeaea] shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-[1.5rem] px-[1.5rem] flex flex-col gap-[1.25rem] min-w-[15.687rem]">
                      <Link
                        href="/services/permanent-residency"
                        className="text-[0.875rem] text-[#111111] hover:text-[#2a3e6f] cursor-pointer transition-colors block leading-none font-normal"
                      >
                        Canada Permanent Residency (PR)
                      </Link>
                      <Link
                        href="/services/visiting-visa"
                        className="text-[0.875rem] text-[#111111] hover:text-[#2a3e6f] cursor-pointer transition-colors block leading-none font-normal"
                      >
                        Canada Visiting Visa
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button>Book a Consultation</Button>
          </div>

          <div
            className="flex md:hidden items-center justify-center cursor-pointer relative w-9 h-9"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div
              className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`}
            >
              <Menu className="w-9 h-9 text-[#111111]" strokeWidth={2} />
            </div>
            <div
              className={`absolute transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`}
            >
              <X className="w-9 h-9 text-[#111111]" strokeWidth={2} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[5rem] bg-white z-40 flex flex-col items-center pt-[2rem] px-[1.25rem] gap-[1.5rem] md:hidden h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-[1rem] opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <div key={link.label} className="w-full flex flex-col items-center">
            <div
              className="font-medium text-[1.125rem] text-[#111111] hover:text-[#2a3e6f] cursor-pointer transition-colors flex items-center gap-[0.25rem]"
              onClick={() => {
                if (link.label === "Services") {
                  setIsMobileServicesOpen(!isMobileServicesOpen);
                } else {
                  link.onClick?.();
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              {link.label}
              {link.label === "Services" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </div>

            {link.label === "Services" && (
              <div
                className={`flex flex-col items-center gap-[1rem] overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-[10rem] mt-[1rem] opacity-100" : "max-h-0 opacity-0"}`}
              >
                <Link
                  href="/services/permanent-residency"
                  className="text-[1rem] text-[#666666] hover:text-[#2a3e6f] cursor-pointer transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Canada Permanent Residency (PR)
                </Link>
                <Link
                  href="/services/visiting-visa"
                  className="text-[1rem] text-[#666666] hover:text-[#2a3e6f] cursor-pointer transition-colors text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Canada Visiting Visa
                </Link>
              </div>
            )}
          </div>
        ))}
        <Button
          className="w-full max-w-[20rem] mt-[1rem]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Book a Consultation
        </Button>
      </div>
    </>
  );
};

export default Navbar;
