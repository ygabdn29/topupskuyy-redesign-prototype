import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#090f22] text-[#ECECEC] mt-20">
      <div className="grid md:grid-cols-3 justify-center  2xl:max-w-[90rem] lg:max-w-[60rem] md:max-w-[47.5rem] w-full md:mx-auto mt-12 mb-4">
        <div className="md:block flex flex-col">
          <Link to="/" className="md:justify-items-start justify-items-center">
            <img
              src="../assets/img/idbgcaz9s8w7smf8lemg.webp"
              alt=""
              className="w-24 h-24 transition-all duration-300 md:hover:scale-125"
            />
          </Link>
          <h2 className="md:text-start text-center text-xl ">Topupskuyy</h2>
          <ul className="md:justify-items-start justify-items-center mt-4">
            <li>
              <a href="" className="">
                <img
                  src="src\assets\img\ig-logo.png"
                  alt=""
                  className="transition-all duration-300 w-8 hover:scale-95 hover:opacity-70"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-left text-center">
          <p className="font-bold text-xl md:mb-5 mb-2 md:mt-0 mt-12">
            Site Map
          </p>

          <ul className="flex flex-col gap-3 font-semibold text-lg">
            <li className="">
              <a href="#" className="">
                Home
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-left text-center">
          <p className="font-bold text-xl md:mb-5 mb-2 md:mt-0 mt-12">
            Contact Us
          </p>

          <ul className="flex flex-col gap-3 font-semibold text-lg">
            <li className="">
              <a href="#" className="">
                +6282335674177
              </a>
            </li>

            <li className="">
              <a href="#" className="">
                topupskuyy.info@gmail.com
              </a>
            </li>

            <li className="">
              <a href="#" className="">
                Kp. Rawa Bebek no.19 RT.001 RW.011 Kelurahan Kota Baru,
                Kecamatan Bekasi Barat, Kode Pos 17133
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-full text-center md:mt-4 mt-8">
          <p>© 2024 . All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
