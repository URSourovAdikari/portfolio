import Link from "next/link";

export default function Page() {
  return <main className="w-full flex flex-col pt-28 min-h-screen"><div className="max-w-3xl mx-auto px-6 py-32 text-center"><h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">Page not found</h1><p className="text-muted-foreground text-base mb-6">The page you requested does not exist.</p><Link href="/" className="text-primary hover:underline">Return home</Link></div></main>;
}
