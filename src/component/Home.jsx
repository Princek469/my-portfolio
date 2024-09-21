import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Icons from "../utility/icons";
import Footer from "./Footer";

function Home() {
    return (
        <div className="min-h-screen dark:bg-gray-950  text-white">
        <Header />
        
        <Outlet />
        <Footer />
        
      </div>
    );
}

export default Home;
