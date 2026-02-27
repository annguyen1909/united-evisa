import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";

export default function RecentBlogPosts() {
  const posts = getAllPosts().slice(0, 6);
  const [featured, ...rest] = posts;

  if (posts.length === 0) return null;

  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50/40 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Travel insights
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">
              Latest travel & visa insights
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl">
              Practical guides, eligibility tips, and destination‑specific updates.
            </p>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all articles
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group rounded-3xl border border-blue-100 bg-white shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-80 bg-slate-100">
                <Image
                  src={featured.image || "/images/hero/hero.webp"}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs uppercase tracking-wide text-blue-500">
                  {featured.category || "Guide"}
                </p>
                <h3 className="text-xl font-semibold text-slate-900 mt-2 line-clamp-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2 flex-1">
                  {featured.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  Read article →
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-4">
            {rest.slice(0, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={post.image || "/images/hero/hero.webp"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-blue-500">
                    {post.category || "Guide"}
                  </p>
                  <h4 className="text-base font-semibold text-slate-900 mt-1 line-clamp-2">
                    {post.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
