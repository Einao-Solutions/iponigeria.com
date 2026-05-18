import Image from "next/image";
import React from "react";
import Link from "next/link";
import poweredby from "../../public/Poweredby.png";
import { IoDocument, IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { IoHandshakeOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <section className="bg-[#166534] text-white py-10">
      <div className="w-5/6 lg:w-11/12 mx-auto font-light ">
        <div className="lg:flex">
          <div>
            <p className="mb-4 text-3xl font-semibold">Contact Us</p>
            <div className="lg:flex gap-10">
              <div className="lg:w-2/6">
                <p className="font-semibold text-lg">
                  Federal Ministry of Industry, Trade & Investment{" "}
                  <span className="block">Commercial Law Department</span>
                </p>
                <div className="mt-5 flex items-start gap-2">
                  <div className="flex justify-center items-center h-10 w-10 bg-white rounded-full flex-shrink-0">
                    <IoLocationOutline className="h-5 w-5 text-green-700" />
                  </div>
                  <p>Block D, Old secretariat, Area 1, Garki, Abuja, Nigeria</p>
                </div>
              </div>

              <div className="space-y-2 mt-8 lg:mt-0">
                <p className="font-semibold text-lg">Trademark Registry</p>
                <div className="flex gap-1 items-center">
                  <div className="flex justify-center items-center h-4 w-4 bg-white rounded-full">
                    <MdMailOutline className="h-2 w-2 text-green-700" />
                  </div>
                  trademark@iponigeria.com
                </div>
                <div className="flex gap-1 items-center">
                  <div className="flex justify-center items-center h-4 w-4 bg-white rounded-full">
                    <IoCallOutline className="h-2 w-2 text-green-700" />
                  </div>
                  080 3435 1514
                </div>
              </div>

              <div className="space-y-2 mt-8 lg:mt-0">
                <p className="font-semibold text-lg">
                  Patent and Design Registry
                </p>
                <div className="flex gap-1 items-center">
                  <div className="flex justify-center items-center h-4 w-4 bg-white rounded-full">
                    <MdMailOutline className="h-2 w-2 text-green-700" />
                  </div>
                  patent.design@iponigeria.com
                </div>
                <div className="flex gap-1 items-center">
                  <div className="flex justify-center items-center h-4 w-4 bg-white rounded-full">
                    <IoCallOutline className="h-2 w-2 text-green-700" />
                  </div>
                  091 6357 0744
                </div>
                <div className="flex gap-1 items-center">
                  <div className="flex justify-center items-center h-4 w-4 bg-white rounded-full">
                    <IoDocument className="h-2 w-2 text-green-700" />
                  </div>
                  <a
                    href="/patentdesign_sla.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-200 transition-colors"
                  >
                    Service Level Agreement
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:w-1/6">
            <div className="flex text-lg flex-col gap-2">
              <p className="font-semibold text-2xl">Quick Links</p>
              <Link href="/" className="cursor-pointer">
                <p>Home</p>
              </Link>
              <Link href="/about" className="cursor-pointer">
                <p>About Us</p>
              </Link>
              <Link href="/services" className="cursor-pointer">
                <p>Our Services</p>
              </Link>
              <Link href="/resources" className="cursor-pointer">
                <p>Resources</p>
              </Link>
              <Link href="/contact" className="cursor-pointer">
                <p>Contact Us</p>
              </Link>
              <Link
                href="https://www.pebec.gov.ng/reportgov-ng"
                className="underline hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>report.gov</p>
              </Link>
            </div>
          </div>
        </div>

        <hr className="border border-gray-100 my-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p>© 2025 IPO Nigeria</p>
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm">Powered by</p>
            <Image src={poweredby} alt="Logo" className="h-10 w-24" />
          </div>
          <div className="flex gap-4 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              href="/terms-of-use"
              className="hover:text-gray-200 transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
