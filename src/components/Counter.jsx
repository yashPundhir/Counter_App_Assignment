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
		<div>
			<h1 className="mb-20">Basic Counter</h1>
			<div className="flex justify-center gap-20">
				<button
					className="text-3xl border-2 border-red-500 flex justify-center items-center"
					onClick={incrementCount}
				>
					+
				</button>
				<div className="text-3xl border-2 border-green-500 w-20 flex justify-center items-center rounded-lg">
					{count}
				</div>
				<button
					className="text-3xl border-2 border-red-500 flex justify-center items-center"
					onClick={decrementCount}
				>
					-
				</button>
			</div>
		</div>
	);
};

export default Counter;
