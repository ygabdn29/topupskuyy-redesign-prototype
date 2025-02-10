// import { useState } from "react";
import data from "../../../data/data.json";
import ProductCard from "../../components/productCard/ProductCard";

function LandingPage() {
  // const [product, setProduct] = useState("games");

  const games = data.games;

  // function handleProductChange(selectedProduct: string) {
  //   setProduct(() => selectedProduct);
  // }

  return (
    <div>
      <img
        src="src\assets\img\xkvu3zljobch1v2vxocw.webp"
        alt=""
        className="rounded-lg 2xl:max-w-[90rem] lg:max-w-[60rem] md:max-w-[47.5rem] w-full md:mx-auto md:mt-12 mt-8 md:shadow-2xl"
      />

      <div className="flex flex-col 2xl:max-w-[90rem] lg:max-w-[60rem] md:max-w-[47.5rem] w-full md:mx-auto md:mt-12 mt-8">
        <ul className="flex md:flex-row flex-col md:justify-start sm:justify-center content-stretch gap-4 font-medium">
          <li>
            <button
              className="transition-all duration-300 bg-[#8EF9F3] hover:bg-[#84d2de] hover:scale-95 rounded-xl py-4 md:px-12 md:shadow-lg md:w-fit w-full"
              id="games"
              // onClick={(e: React.MouseEvent) =>
              //   handleProductChange(e.currentTarget.id)
              // }
            >
              Game Populer
            </button>
          </li>
          <li>
            <button
              className="transition-all duration-300 bg-[#8EF9F3] hover:bg-[#84d2de] hover:scale-95 rounded-xl py-4 md:px-12 md:shadow-lg md:w-fit w-full"
              id="voucher"
              // onClick={(e: React.MouseEvent) =>
              //   handleProductChange(e.currentTarget.id)
              // }
            >
              Voucher dan E-Wallet
            </button>
          </li>
          <li>
            <button
              className="transition-all duration-300 bg-[#8EF9F3] hover:bg-[#84d2de] hover:scale-95 rounded-xl py-4 md:px-12 md:shadow-lg md:w-fit w-full"
              id="pulsa"
              // onClick={(e: React.MouseEvent) =>
              //   handleProductChange(e.currentTarget.id)
              // }
            >
              Pulsa dan PLN
            </button>
          </li>
        </ul>
        <div className="mt-8">
          <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-8 gap-4">
            {games.map((game, i) => {
              return <ProductCard content={game} key={i}></ProductCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
