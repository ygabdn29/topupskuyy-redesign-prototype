import { Link } from "react-router-dom";

interface Content {
  title?: string;
  publisher?: string;
  img?: string;
}

function ProductCard({ content }: { content: Content }) {
  const { title, publisher, img } = content;
  return (
    <Link to="order" className="flex">
      <div className="text-[#ECECEC] bg-[#3c4255] rounded-lg shadow-lg transition-all duration-300 hover:scale-95 hover:opacity-70">
        <img
          src={`${img}`}
          alt=""
          className="transition-all duration-300 w-full rounded-t-lg shadow-md"
        />

        <div className="md:p-4 p-2">
          <p className="mb-2">{title}</p>
          <p>{publisher}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
