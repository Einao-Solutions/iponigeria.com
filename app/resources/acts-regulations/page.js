import React from "react";
import ReusableHerosection from "../../components/ReusableHerosection";
import ScrollAnimation from "../../components/ScrollAnimation";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

const actsAndRegulations = [
  {
    id: 1,
    title: "Trademarks Act",
    description:
      "The principal legislation governing the registration, protection, and enforcement of trademarks in Nigeria.",
    file: "/trademarkact.pdf",
  },
  {
    id: 2,
    title: "Patents and Designs Act",
    description:
      "Legislation governing the registration and protection of patents and industrial designs in Nigeria.",
    file: "/patentdesignact.pdf",
  },
//   {
//     id: 3,
//     title: "Trademarks Regulations",
//     description:
//       "Subsidiary legislation providing detailed rules and procedures for trademark registration and administration.",
//     file: "/pdfs/trademarks-regulations.pdf",
//   },
//   {
//     id: 4,
//     title: "Patents and Designs Regulations",
//     description:
//       "Subsidiary legislation detailing the procedures for patent and design applications, examination, and registration.",
//     file: "/pdfs/patents-and-designs-regulations.pdf",
//   },
];

const page = () => {
  return (
    <main>
      <ReusableHerosection title="Acts & Regulations" />
      <ScrollAnimation>
        <section className="mx-auto w-5/6">
          <div className="text-center mt-10 mb-12">
            <p className="lg:text-5xl text-green-700 text-3xl font-bold">
              Trademarks, Patents & Designs
              <span className="block text-black">Acts and Regulations</span>
            </p>
            <p className="lg:w-4/6 mx-auto mt-4 text-gray-600">
              Download the official acts and regulations that govern the
              registration and protection of trademarks, patents, and industrial
              designs in Nigeria.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {actsAndRegulations.map((item, index) => (
              <ScrollAnimation
                key={item.id}
                delay={index * 0.1}
                direction="scale"
              >
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-100 p-3 rounded-xl shrink-0">
                      <FileText className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-green-900 via-green-700 to-green-600 rounded-full px-5 py-2 hover:from-green-700 hover:to-green-500 transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>
    </main>
  );
};

export default page;
