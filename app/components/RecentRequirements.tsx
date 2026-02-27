import Link from "next/link";
import Image from "next/image";
import { getAllRequirementsPosts } from "@/lib/requirements-posts";

export default function RecentRequirements() {
  const posts = getAllRequirementsPosts()
    .filter((post) => post.slug)
    .sort((a, b) => {
      const aDate = a.updatedAt ? new Date(a.updatedAt).getTime() : 0;
      const bDate = b.updatedAt ? new Date(b.updatedAt).getTime() : 0;
      return bDate - aDate;
    })
    .slice(0, 6);

  if (posts.length === 0) return null;

  return (
    <section className="w-full bg-gradient-to-b from-blue-50/40 via-white to-white py-16 border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Requirements updates
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-900">
              Recent country requirement updates
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl">
              Quick updates for destinations with changing entry rules.
            </p>
          </div>
          <Link
            href="/requirements-posts"
            className="text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all updates
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/requirements-posts/${post.slug}`}
              className="group rounded-3xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex gap-4"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={post.image || "/images/hero/hero.webp"}
                  alt={`${post.country} requirements`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-blue-500">
                  Requirements
                </p>
                <h3 className="text-base font-semibold text-slate-900 mt-1">
                  {post.country}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-500">
          <Link
            href="/requirements-posts/rss.xml"
            className="font-semibold text-blue-700 hover:text-blue-800"
          >
            Subscribe via RSS
          </Link>
        </div>
      </div>
    </section>
  );
}
