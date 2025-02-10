import { useState } from "react";
import { Link } from "react-router-dom";

const navStyleBase =
  "transition-all duration-300 md:static  md:flex md:gap-4 align-middle font-medium md:flex-row flex-col text-center right-[50%] top-[120%] md:translate-x-0  md:bg-none md:w-fit  md:p-0  md:rounded-none  md:shadow-none ";

function Navbar() {
  const [navToggle, setNavToggle] = useState(false);
  const navStyleMobile = `absolute translate-x-[50%] gap-8 bg-[#446DF6] w-full p-4 rounded-lg shadow-2xl ${
    navToggle
      ? "visible pointer-events-auto opacity-100"
      : "invisible md:visible pointer-events-none md:pointer-events-auto opacity-0 md:opacity-100"
  }`;

  return (
    <header className="text-lg text-[#ECECEC] 2xl:max-w-[90rem] lg:max-w-[60rem] md:max-w-[47.5rem] w-full md:mx-auto mt-8 md:shadow-lg">
      <nav className="md:static relative flex lg:flex-row justify-between bg-[#446DF6] md:py-4 md:px-12 md:rounded-lg">
        <Link to="/">
          <img
            src="./assets/img/idbgcaz9s8w7smf8lemg.webp"
            alt=""
            className="w-16 h-16 transition-all duration-300 md:hover:scale-125"
          />
        </Link>

        <ul className={`${navStyleBase} ${navStyleMobile}`}>
          <li className="flex md:mb-0 mb-8">
            <a href="" className="md:mx-0 mx-auto">
              <button className="transition-all duration-300 bg-[#629460] hover:bg-[#314a30] rounded-xl hover:scale-95 py-4 px-8">
                Tracking Order
              </button>
            </a>
          </li>
          <li>
            <button className="transition-all duration-300 bg-[#08A4BD] hover:bg-[#04525f] rounded-xl hover:scale-95  py-4 px-8 md:mb-0 mb-8">
              Login
            </button>
          </li>
          <li>
            <button className="transition-all duration-300 bg-[#067384] hover:bg-[#84d2de] rounded-xl hover:scale-95 py-4 px-8 md:mb-0 mb-8">
              Register
            </button>
          </li>
        </ul>
        <button
          className="z-40 m-4 md:hidden"
          onClick={() => setNavToggle((navToggle) => !navToggle)}
        >
          <img
            src={
              navToggle
                ? "./assets/img/icon-close.svg"
                : "./assets/img/icon-hamburger.svg"
            }
            alt=""
          />
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
