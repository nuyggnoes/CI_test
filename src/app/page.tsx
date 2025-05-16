import { Button } from "@/components/Button/Button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container flex mx-auto px-4 py-4 justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            CI/CD Test
          </Link>
          <nav className="flex gap-2">
            <ThemeToggle />
            <Link href="/login">
              <Button label="LOGIN" />
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">CI/CD Test</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The reason I created this website is for CI/CD testing.
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
