import { useContext, useEffect } from "react";
import Input from "../../Input";
import { ToolContext } from "../../App";

export default function WeightVariant({ index }) {
	const { test, setTest, currentLang } = useContext(ToolContext);

	const handleQuestionChange = (e) => {
		const nextTest = { ...test };
		nextTest.weights[index] = e.target.value;
		setTest(nextTest);
	}
	const removeMe = () => {
		const nextTest = { ...test };
		nextTest.weights.splice(index, 1);
		setTest(nextTest);
	}

	return (
		<div className="flex gap-2 items-center p-2 bg-blue-200/20">
			<div className="flex-1 flex flex-col gap-2 items-stretch ">
				<Input
					className="flex gap-2 items-center"
					labelClass="text-xl font-bold"
					inputClass="flex-1"
					value={test.weights[index] ?? ""}
					onChange={handleQuestionChange}
					label={(index + 1)}
				/>
			</div>
			<button
				className="aspect-square bg-red-500 w-auto h-8 rounded-full text-white font-bold"
				onClick={removeMe}
			>
				X
			</button>
		</div>
	);
}