import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-3 py-3">
        <div>
          <Image width={"100"} height={"60"} src="/images/placeholder.webp" alt="Logo" />
        </div>
        <nav>
          <ul className="flex items-center gap-4 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
            <li>
              <Link href="/">Sale</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4">
          <button>
            <Link href="/">Dashboard</Link>
          </button>
          <button>
            <Link href="/">Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
