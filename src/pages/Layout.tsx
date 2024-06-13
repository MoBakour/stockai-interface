import { Outlet } from "react-router-dom";

import Blob from "../components/Blob";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Blob1 from "../images/blob-1.svg";
import Blob2 from "../images/blob-2.svg";

const Layout = () => {
    return (
        <div className="relative z-0">
            {/* blobs */}
            <Blob blob={Blob1} className="top-1 -left-16" />
            <Blob blob={Blob2} className="top-[600px] -right-32" />

            {/* content */}
            <Header />
            <div className="py-32">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
