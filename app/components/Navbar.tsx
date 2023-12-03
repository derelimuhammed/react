import React from "react";
import Link from "next/link";
import Image from "next/image";

//Lazy loading örneği yapalım
//styled component de yapalım
//tailwind config detaylı anlayalım
//higher order component göz atalım
//vakit kalırsa vue.js e bakalım
//co-pilot ve chatgpt nasıl kullanılıyor bakabiliriz

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="my-1 text-sm font-semibold ">
      <Link
        className="px-4 py-2 hover:bg-slate-700 hover:text-slate-50"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const Navbar = () => {
  return (
    <nav className="mb-5 shadow bg-slate-800">
      <div className="p-3 md:container md:py-4 md:px-6">
        <div className="flex justify-between">
          <Link className="flex items-center text-slate-50" href="/">
            <Image src="/shop.svg" width={28} height={28} alt="e-shop" />
            <span className="ml-3 text-lg font-bold">E-Shop</span>
          </Link>
          <ul className="flex items-center justify-center gap-4 mt-4 md:mt-0">
            {navItems.map((item, index) => (
              <NavItem key={index} href={item.href}>
                {item.label}
              </NavItem>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
