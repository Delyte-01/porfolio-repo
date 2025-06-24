"use client"
import  { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Shield,
  Calendar,
  Quote,
  Pause,
  Play,
} from "lucide-react";
import Image from "next/image";

export const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Emma Rodriguez",
      location: "San Francisco, CA",
      rating: 5,
      quote:
        "Transformed our e-commerce site - 3x conversion rate increase in just 2 weeks!",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1737485260/front-view-smiley-man-outdoors_23-2148612976_ulougw.avif",
      purchaseDate: "2024-01-15",
      verified: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Austin, TX",
      rating: 5,
      quote:
        "Lightning-fast delivery and pixel-perfect design. Best developer I've worked with!",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1747926464/This_striking_digital_artwork_captures_the_essence_of_a_mysterious_bearded_figure_tlzxwi.jpg",
      purchaseDate: "2024-02-03",
      verified: true,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      quote:
        "Mobile performance improved by 85%. Our users love the new interface!",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1742584967/Ellipse_53_nhahx3.png",
      purchaseDate: "2024-01-28",
      verified: true,
    },
    {
      id: 4,
      name: "David Park",
      location: "Seattle, WA",
      rating: 4,
      quote:
        "Professional, responsive, and delivered exactly what we needed on time.",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1746600553/2d4e3c4ddee47bbb4418cde62a68b01bb316e9e7_opvt3j.jpg",
      purchaseDate: "2024-02-10",
      verified: false,
    },
    {
      id: 5,
      name: "Lisa Thompson",
      location: "Miami, FL",
      rating: 5,
      quote:
        "Outstanding work! Reduced our bounce rate by 60% with beautiful UX design.",
      image:
        "https://res.cloudinary.com/dk5mfu099/image/upload/v1737485260/cheerful-brunette-curly-brown-eyes-woman-pink-sunglasses-purple-hoodie-smiles-takes-selfie-near-stairs-outside_197531-24283_wqmbzt.jpg",
      purchaseDate: "2024-01-22",
      verified: true,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reviews.length]);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToReview = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300 dark:text-gray-600"
        }`}
      />
    ));
  };

  return (
    <section
      id="testimonial"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-space">
            What Clients{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from satisfied clients who've experienced measurable
            results
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Review Card */}
          <div className="relative h-80 mb-8 overflow-hidden ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                className="absolute inset-0"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />

                  {/* Header */}
                  <div className="flex items-start mx-auto justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        src={reviews[currentIndex].image}
                        alt={reviews[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white font-space">
                          {reviews[currentIndex].name}
                        </h3>
                        <div className="text-gray-600 dark:text-gray-400 flex items-center">
                          <span>{reviews[currentIndex].location}</span>
                          {reviews[currentIndex].verified && (
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="ml-2 flex items-center text-green-600 dark:text-green-400"
                            >
                              <Shield className="w-4 h-4 mr-1 fill-green-400 " />
                              <span className="text-xs font-medium">
                                Verified
                              </span>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-6 mx-auto">
                    <div className="flex mr-3">
                      {renderStars(reviews[currentIndex].rating)}
                    </div>
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {reviews[currentIndex].rating}.0
                    </span>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-10  flex-grow flex items-center mx-auto">
                    <span className="text-blue-500 text-6xl mr-4 leading-none">
                      <Quote className="w-5 h-5" />
                    </span>
                    <span className="text-[15px] lg:text-[22px]">
                      {reviews[currentIndex].quote}
                    </span>
                    <span className="text-blue-500 text-6xl ml-4 leading-none">
                      <Quote className="w-5 h-5" />
                    </span>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevReview}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextReview}
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-3">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 w-8"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Thumbnail Preview */}
          <div className="mt-8 flex justify-center space-x-4 overflow-x-auto pb-4">
            {reviews.map((review, index) => (
              <motion.button
                key={review.id}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goToReview(index)}
                className={`flex-shrink-0 p-4 rounded-2xl transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 shadow-lg"
                    : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center space-x-3 ">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {review.name.split(" ")[0]}
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Auto-play Control */}
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-2 py-2 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 cursor-pointer"
          >
            {isAutoPlaying ? (
              <Pause className="w-5 h-5 " />
            ) : (
              <Play className="w-5 h-5 " />
            )}
          </motion.button>
        </div>
      </div>
    </section>
  );
};
