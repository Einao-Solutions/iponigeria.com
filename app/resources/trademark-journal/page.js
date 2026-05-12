"use client";
import React, { useState } from "react";
import ReusableHerosection from "../../components/ReusableHerosection";
import ScrollAnimation from "../../components/ScrollAnimation";
import { BookOpen, Download, ChevronDown, FileText } from "lucide-react";
import Link from "next/link";

const journals = [
  {
    year: 2025,
    files: [
      // { label: "Volume 1", file: "/journals/2025/trademark-journal-vol1.pdf" },
      // { label: "Volume 2", file: "/journals/2025/trademark-journal-vol2.pdf" },
    ],
  },
  {
    year: 2024,
    files: [
      // { label: "Volume 1", file: "/journals/2024/trademark-journal-vol1.pdf" },
      // { label: "Volume 2", file: "/journals/2024/trademark-journal-vol2.pdf" },
      // { label: "Volume 3", file: "/journals/2024/trademark-journal-vol3.pdf" },
    ],
  },
  {
    year: 2023,
    files: [
      // { label: "Volume 1", file: "/journals/2023/trademark-journal-vol1.pdf" },
      // { label: "Volume 2", file: "/journals/2023/trademark-journal-vol2.pdf" },
    ],
  },
  {
    year: 2022,
    files: [
      // { label: "Volume 1", file: "/journals/2022/trademark-journal-vol1.pdf" },
    ],
  },
  {
    year: 2021,
    files: [
      // { label: "Volume 1", file: "/journals/2021/trademark-journal-vol1.pdf" },
    ],
  },
  {
    year: 2020,
    files: [
      // { label: "Volume 1", file: "/journals/2020/trademark-journal-vol1.pdf" },
    ],
  },
];

const page = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const selectedJournal = journals.find(
    (j) => j.year === Number(selectedYear)
  );

  return (
    <main>
      <ReusableHerosection title="Trademark Journal" />
      <ScrollAnimation>
        <section className="mx-auto w-5/6">
          <div className="text-center mt-10 mb-12">
            <p className="lg:text-5xl text-green-700 text-3xl font-bold">
              Trademark Publication
              <span className="block text-black">Journal</span>
            </p>
            <p className="lg:w-4/6 mx-auto mt-4 text-gray-600">
              Select a year to download the corresponding Trademark Publication
              Journal.
            </p>
          </div>

          <div className="mb-20 max-w-xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Download Journal
                </h3>
              </div>

              {/* Year Selector */}
              <label
                htmlFor="year-select"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Select Year
              </label>
              <div className="relative mb-6">
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full appearance-none bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 pr-10 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent cursor-pointer"
                >
                  <option value="" disabled>
                    -- Choose a year --
                  </option>
                  {journals.map((j) => (
                    <option key={j.year} value={j.year}>
                      {j.year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Portal Notice */}
              {selectedJournal ? (
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                    <BookOpen className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      To download the {selectedYear} Trademark Journal, please
                      proceed to the official IPO Nigeria portal where the
                      journal files are hosted.
                    </p>
                  </div>
                  <Link
                    href="https://portal.iponigeria.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors duration-200"
                  >
                    <Download className="w-4 h-4" />
                    Proceed to Portal
                  </Link>
                </div>
              ) : (
                <div className="text-center py-4 text-sm text-gray-400">
                  Select a year above to see available journals.
                </div>
              )}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default page;
