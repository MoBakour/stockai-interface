interface IBlob {
	blob: string;
	className?: string;
	[key: string]: any;
}

const Blob = ({ blob, className, ...props }: IBlob) => {
	return (
		<img
			src={blob}
			alt="Blob image"
			className={`absolute w-2/3 -z-10 blur-3xl opacity-30 ${className}`}
			{...props}
		/>
	);
};

export default Blob;
