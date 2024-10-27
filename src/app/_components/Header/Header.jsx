import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="">
      <div className="flex justify-between max-w-7xl mx-auto px-3">
        <div>
          <Image src="/images/placeholder.webp" alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Products</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Sale</Link>
            </li>
          </ul>
        </nav>
        <div>
          <button>
            <Link>Dashboard</Link>
          </button>
          <button>
            <Link>Cart</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
