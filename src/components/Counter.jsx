import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const incrementCount = () => {
		setCount(count + 1);
	};
	const decrementCount = () => {
		setCount(count - 1);
	};
	return (
		<div className="flex justify-center items-center">
			<div className="w-[1200px] h-[580px] bg-pink-100 rounded-[25px] flex justify-center items-center">
				<div className="flex flex-col justify-center items-center bg-red-500 gap-10 w-[600px] h-[480px] rounded-[15px]">
					<h1 className="text-white text-[55px] font-semibold">
						Basic Counter
					</h1>
					<div className="text-[75px] flex justify-center items-center text-white">
						{count}
					</div>
					<div className="flex gap-10">
						<button
							className="text-3xl border-2 border-red-500 flex justify-center items-center"
							onClick={incrementCount}
						>
							Increment
						</button>
						<button
							className="text-3xl border-2 border-red-500 flex justify-center items-center"
							onClick={decrementCount}
						>
							Decrement
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
