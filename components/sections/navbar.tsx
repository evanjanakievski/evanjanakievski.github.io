import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4">
      <div className="flex">
        <Link href="/" className="pl-8">
          <p
            className="text-2xl font-bold text-gray-800"
          >
            Evan Janakievski
          </p>
        </Link>
      </div>
      <div>
        <div className="pr-4">
          <Button variant="link">
            <Link href="#about">
              <p className="text-lg text-gray-800">About</p>
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
