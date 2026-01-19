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
    <section className="w-full bg-slate-50 py-12 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
              Latest requirements updates
            </h2>
            <p className="text-slate-600 mt-2">
              Quick links to recently updated country requirements.
            </p>
          </div>
          <Link
            href="/requirements-posts"
            className="text-sm font-semibold text-emerald-700 hover:text-emerald-800"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/requirements-posts/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-t-2xl bg-slate-100">
                <Image
                  src={post.image || "/images/hero/hero.jpg"}
                  alt={`${post.country} requirements`}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Requirements
                </p>
                <h3 className="text-lg font-semibold text-slate-900 mt-1">
                  {post.country}
                </h3>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-500">
          <Link
            href="/requirements-posts/rss.xml"
            className="font-semibold text-emerald-700 hover:text-emerald-800"
          >
            Subscribe via RSS
          </Link>
        </div>
      </div>
    </section>
  );
}
