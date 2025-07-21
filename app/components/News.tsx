"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, Calendar, User, Sparkles, TrendingUp, Globe, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define BlogPost type to match what we expect from the blog
interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
  featured: boolean;
  countryCode: string;
  tags: string[];
}

export default function News() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, we'll use sample data that matches our blog structure
    // In production, this could fetch from an API endpoint that calls getAllPosts()
    const samplePosts: BlogPost[] = [
      {
        slug: "india-evisa-complete-guide",
        title: "India eVisa Complete Guide: Everything You Need to Know",
        description: "Complete guide to India eVisa application process, requirements, fees, and processing times. Get your India visa online with our expert tips.",
        date: "2024-01-15",
        author: "eVisa United Team",
        category: "India",
        readTime: "8 min read",
        image: "/images/blog/india-evisa-guide.jpg",
        featured: true,
        countryCode: "IN",
        tags: ["India", "eVisa", "Travel", "Tourism", "Business"]
      },
      {
        slug: "turkey-evisa-us-citizens",
        title: "Turkey eVisa: Quick Guide for US Citizens",
        description: "Step-by-step guide for US citizens applying for Turkey eVisa. Learn about requirements, fees, processing times, and application tips.",
        date: "2024-01-10",
        author: "Travel Expert",
        category: "Turkey",
        readTime: "5 min read",
        image: "/images/blog/turkey-evisa-us-citizens.jpg",
        featured: true,
        countryCode: "TR",
        tags: ["Turkey", "eVisa", "US Citizens", "Travel"]
      },
      {
        slug: "vietnam-evisa-requirements-guide",
        title: "Vietnam eVisa Requirements and Application Guide",
        description: "Complete guide to Vietnam eVisa application process, requirements, fees, and processing times for all nationalities.",
        date: "2024-01-08",
        author: "Visa Specialist",
        category: "Vietnam",
        readTime: "6 min read",
        image: "/images/blog/vietnam-evisa-guide.jpg",
        featured: false,
        countryCode: "VN",
        tags: ["Vietnam", "eVisa", "Travel", "Requirements"]
      },
      {
        slug: "sri-lanka-eta-guide-2024",
        title: "Sri Lanka ETA Guide: Complete Application Process",
        description: "Everything you need to know about Sri Lanka Electronic Travel Authorization (ETA). Quick processing, requirements, and expert tips.",
        date: "2024-01-05",
        author: "Travel Specialist",
        category: "Sri Lanka",
        readTime: "4 min read",
        image: "/images/blog/sri-lanka-eta-guide.jpg",
        featured: false,
        countryCode: "LK",
        tags: ["Sri Lanka", "ETA", "Travel", "Tourism"]
      },
      {
        slug: "egypt-evisa-requirements-2024",
        title: "Egypt eVisa: Complete Requirements and Application Guide",
        description: "Apply for your Egypt eVisa with confidence. Learn about requirements, processing times, fees, and get expert application tips.",
        date: "2024-01-03",
        author: "Middle East Expert",
        category: "Egypt",
        readTime: "7 min read",
        image: "/images/blog/egypt-evisa-guide.jpg",
        featured: false,
        countryCode: "EG",
        tags: ["Egypt", "eVisa", "Travel", "Tourism"]
      },
      {
        slug: "australia-eta-visa-guide",
        title: "Australia ETA Visa: Quick Guide for Tourists",
        description: "Get your Australia Electronic Travel Authority (ETA) quickly and easily. Requirements, processing times, and application tips included.",
        date: "2024-01-01",
        author: "Australia Expert",
        category: "Australia", 
        readTime: "5 min read",
        image: "/images/blog/australia-eta-guide.jpg",
        featured: false,
        countryCode: "AU",
        tags: ["Australia", "ETA", "Tourism", "Travel"]
      }
    ];

    setPosts(samplePosts);
    setLoading(false);
  }, []);

  const featuredPosts = posts.filter(post => post.featured).slice(0, 2);
  const regularPosts = posts.filter(post => !post.featured).slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 translate-y-48 -translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-16"></div>
            <Sparkles className="h-6 w-6 text-emerald-600" />
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-16"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 mb-4 font-manrope">
            Latest eVisa 
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent ml-3">
              News & Guides
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest visa requirements, travel tips, and destination guides from our expert team
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <Link href={`/blog/${post.slug}`} className="block group h-full">
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm h-full flex flex-col cursor-pointer">
                      <div className="relative">
                        {/* Featured badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-0 shadow-lg">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={post.image || "/images/blog/default-blog.jpg"}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                          {/* Category badge on image */}
                          <div className="absolute bottom-4 left-4">
                            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30">
                              <Globe className="h-3 w-3 mr-1" />
                              {post.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-8 flex flex-col flex-1 min-h-[260px] justify-between">
                        <div>
                          {/* Meta info */}
                          <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          {/* Title (also clickable) */}
                          <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 font-manrope cursor-pointer">
                            {post.title}
                          </h3>
                          {/* Description - with flex-grow to push button down */}
                          <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                            {post.description}
                          </p>
                        </div>
                        {/* CTA - positioned at bottom, always aligned */}
                        <div>
                          <Button
                            asChild
                            className="group/btn bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg w-full"
                          >
                            <span>
                              Read Full Article
                              <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* Regular Posts Grid */}
          {regularPosts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm h-full flex flex-col cursor-pointer">
                      {/* Compact image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image || "/images/blog/default-blog.jpg"}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        {/* Category badge */}
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        {/* Meta info */}
                        <div className="flex items-center gap-3 mb-3 text-xs text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        {/* Title (also clickable) */}
                        <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300 font-manrope cursor-pointer">
                          {post.title}
                        </h3>
                        {/* Description - with flex-grow to push link down */}
                        <p className="text-slate-600 mb-4 line-clamp-3 text-sm leading-relaxed flex-grow">
                          {post.description}
                        </p>
                        {/* CTA Link - positioned at bottom */}
                        <div className="mt-auto">
                          <span className="text-emerald-600 hover:text-emerald-700 font-semibold text-sm flex items-center gap-1 group/link transition-colors duration-300">
                            Read More
                            <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}

          {/* View All Button */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white shadow-xl px-8 py-3"
            >
              <Link href="/blog">
                <Globe className="h-5 w-5 mr-2" />
                View All Articles
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
