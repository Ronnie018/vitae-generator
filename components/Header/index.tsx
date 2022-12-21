import { useState, useEffect } from "react";
import Link from "next/link";

const Header = ({ children }: any) => {
  const [isMenuOpen, changeMenuStatus] = useState(false);

  return (
    <div
      className={`
    bg-slate-400 
    text-black 
      h-14 
      flex 
      justify-between
    `}
    >
      {/* LOGO STYLE */}
      <div
        className={`
        h-full
      `}
      >
        <span
          className={`
          h-full 
          flex 
          items-center 
          content-center 
          pl-4
        `}
        >
          <Link
            href="/"
            className={`
            text-2xl
            font-semibold
          `}
          >
            {children}
          </Link>
        </span>
      </div>
      {/* HAMBURGUER MENU */}
      <div
        className={`
        navigation-controller 
        flex 
        flex-col 
        items-end
      `}
      >
        <div
          className={`
          bg-gray-700
            w-14 
            h-14 
            sm:hidden
            outline-none
            overflow-hidden
          `}
        >
          <button
            onClick={(e) => {
              changeMenuStatus(!isMenuOpen);
            }}
            className={`
              w-14 
              h-14
              z-10
              border-none
              outline-none
              ${isMenuOpen ? `absolute` : `block`}
            `}
          />
        </div>
        <nav
          className={`
            h-full 
          text-white 
            text-xl 
            flex 
            absolute 
            pt-14 
            sm:pt-0
          `}
        >
          <ul
            className={`
              flex 
              flex-col 
              sm:flex-row 
              bg-opacity-50 
            bg-gray-600 
              sm:bg-transparent 
              static 
              sm:h-14 
              items-center
              ${isMenuOpen ? `flex` : `sm:flex hidden `}
            `}
          >
            <li
              className={`
              w-full
              pr-12
              px-6
              py-2
              h-12
              flex
              items-center
              justify-start
              hover:bg-rose-500
              min-w-max
            `}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`
              w-full
              pr-12
              px-6
              py-2
              h-12
              flex
              items-center
              justify-start
              hover:bg-rose-500
              min-w-max
            `}
            >
              <Link href="/create">Create now</Link>
            </li>
            <li
              className={`
              w-full
              pr-12
              px-6
              py-2
              h-12
              flex
              items-center
              justify-start
              hover:bg-rose-500
              min-w-max
            `}
            >
              <Link href="/">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
