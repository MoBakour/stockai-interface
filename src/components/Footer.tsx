import Logo from "../images/logo.svg";

const Footer = () => {
	return (
		<footer className="p-10 flex justify-evenly items-center bg-theme-main rounded-tr-[80px] animate-slide-from-bottom">
			<div className="flex gap-2">
				<img src={Logo} className="w-[50px] h-[50px]" alt="Logo" />
				<h1 className="text-white text-[40px] font-bold">StockAI</h1>
			</div>

			<p className="text-white w-[300px] text-sm">
				StockAI is an Artificial Intelligence project built by a group
				of Software Engineering students in Istinye University for
				Principles of Artificial Intelligence course @ 2024
			</p>
		</footer>
	);
};

export default Footer;
