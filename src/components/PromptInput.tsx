import Search from "../images/search.svg";

const PromptInput = () => {
	return (
		<div className="bg-[#1E1E1E] rounded-full w-[500px] h-[60px] m-auto relative">
			<input
				type="text"
				placeholder="What stock market do you want to predict?"
				className="bg-transparent w-[400px] h-[40px] ml-[20px] my-[10px] outline-none border-none text-white"
			/>
			<img
				src={Search}
				alt="Search icon"
				className="w-[40px] absolute right-[20px] top-[10px]"
			/>
		</div>
	);
};

export default PromptInput;
