"use client";
import React, { useEffect, useState } from "react";
import ReusableHerosection from "../../components/ReusableHerosection";
import ScrollAnimation from "../../components/ScrollAnimation";
import { PlayCircle, ExternalLink } from "lucide-react";

const videoGuides = [
  {
    id: "1",
    title: "How to Update Publication Status",
    description:
      "Learn how to update the publication status of your applications on the IPO Nigeria portal.",
    youtubeId: "AK3wHVqveQI",
    category: "Trademarks",
  },
  {
    id: "2",
    title: "How to File for Change of Applicant Name",
    description:
      "A step-by-step walkthrough of submitting a new trademark application through the portal.",
    youtubeId: "dv886pFHHJk",
    category: "All",
  },
  {
    id: "3",
    title: "File Status Search",
    description:
      "Everything you need to know about searching the status of your filed trademarks.",
    youtubeId: "uurN_NZ3G6o",
    category: "Trademarks",
  },
  // {
  //   id: "4",
  //   title: "Filing a Patent Application",
  //   description:
  //     "Understand the process of filing a patent application via the IPO Nigeria portal.",
  //   youtubeId: "dQw4w9WgXcQ",
  //   category: "Patents",
  // },
  // {
  //   id: "5",
  //   title: "Registering an Industrial Design",
  //   description:
  //     "Follow this guide to register your industrial design through the online portal.",
  //   youtubeId: "dQw4w9WgXcQ",
  //   category: "Designs",
  // },
  // {
  //   id: "6",
  //   title: "Making Payments and Downloading Receipts",
  //   description:
  //     "Learn how to make payments for your applications and access your receipts on the portal.",
  //   youtubeId: "dQw4w9WgXcQ",
  //   category: "Payments",
  // },
];

const categories = ["All", ...new Set(videoGuides.map((v) => v.category))];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);

  const filteredVideos =
    activeCategory === "All"
      ? videoGuides
      : videoGuides.filter((v) => v.category === activeCategory);

  useEffect(() => {
    if (!activeVideo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  return (
    <main>
      <ReusableHerosection title="Portal Video Guides" />

      <ScrollAnimation>
        <section className="mx-auto w-5/6">
          <div className="text-center mt-10 mb-8">
            <p className="lg:text-5xl text-green-700 text-3xl font-bold">
              Video Tutorials
              <span className="block text-black">
                {" "}
                for the IPO Nigeria Portal
              </span>
            </p>
            <p className="lg:w-4/6 mx-auto mt-4 text-gray-600">
              Watch step-by-step video guides on how to register, renew, and
              manage your Trademarks, Patents, and Industrial Designs through
              the IPO Nigeria online portal.
            </p>
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredVideos.map((video, index) => (
              <ScrollAnimation
                key={video.id}
                delay={index * 0.1}
                direction="scale"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  {/* Thumbnail */}
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="relative h-48 w-full overflow-hidden group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <PlayCircle
                        className="text-white"
                        size={64}
                        strokeWidth={1.5}
                      />
                    </div>
                    <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-md">
                      {video.category}
                    </span>
                  </button>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                      {video.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveVideo(video)}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                      >
                        <PlayCircle size={18} /> Watch
                      </button>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-green-700 text-green-700 hover:bg-green-50 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={16} /> YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-sm hover:text-gray-300"
            >
              Close ✕
            </button>
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <p className="text-white text-center mt-4 font-medium">
              {activeVideo.title}
            </p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Page;
