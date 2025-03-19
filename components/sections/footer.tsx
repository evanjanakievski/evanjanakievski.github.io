import { RiLinkedinLine } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-24">
      <div className="flex justify-between">
        <Button variant="ghost" className="mb-2">
          <Link href="https://www.linkedin.com/in/evan-janakievski/">
            <RiLinkedinLine className="h-12 w-12" />
          </Link>
        </Button>

        <Button variant="ghost" className="mb-2">
          <Link href="mailto:evanjanakievski@gmail.com">
            <RiMailLine className="h-12 w-12" />
          </Link>
        </Button>
      </div>
      <p>© 2025 Evan Janakievski</p>
    </footer>
  );
}
