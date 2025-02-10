import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

// interface Props {
//   children?: React.ReactNode;
// }

function Index() {
  return (
    <>
      <div className="px-12">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Index;
