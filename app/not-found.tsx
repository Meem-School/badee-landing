import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Robot } from "@/components/Robot";

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-4">
      <div className="text-center max-w-md">
        <div className="mx-auto w-40 mb-6">
          <Robot variant="purple" />
        </div>
        <h1 className="font-display font-black text-5xl md:text-6xl gradient-text">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          الصفحة دي اختفت في الفضاء الرقمي 🚀
        </p>
        <Button asChild className="mt-6">
          <Link href="/">ارجع للصفحة الرئيسية</Link>
        </Button>
      </div>
    </main>
  );
}
