import NavBar from "./NavBar";
import Logo from "../images/logo.svg";
import LandingImage from "../images/landing.svg";

const Header = () => {
    return (
        <header
            style={{ backgroundImage: `url(${LandingImage})` }}
            className="px-20 overflow-x-hidden h-[340px] bg-bottom bg-cover animate-slide-from-top"
        >
            <div className="content pb-0 relative">
                <NavBar />

                <div className="pt-6 animate-slide-from-left">
                    <div className="flex gap-3">
                        <img
                            src={Logo}
                            className="w-[70px] h-[70px]"
                            alt="Logo"
                        />
                        <h1 className="text-white text-[50px] font-bold">
                            StockAI
                        </h1>
                    </div>

                    <p className="text-white">
                        Predict the stock market with Artificial Intelligence
                        technology
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
