import { useContext, useEffect } from "react";
import Input from "../../Input";
import { ToolContext } from "../../App";

export default function ResultVariant({ index }) {
	const { test, setTest, currentLang } = useContext(ToolContext);

	const handleQuestionChange = (e) => {
		const nextTest = { ...test };
		nextTest.results[index].text[currentLang] = e.target.value;
		setTest(nextTest);
	}
	const handleResultValueChange = (e, i) => {
		const nextTest = { ...test };
		nextTest.results[index].values[i] = +e.target.value;
		setTest(nextTest);
	}
	const removeMe = () => {
		const nextTest = { ...test };
		nextTest.results.splice(index, 1);
		setTest(nextTest);
	}

	return (
		<div className="flex flex-col gap-2 p-2 bg-blue-200/20">
			<div className="flex gap-2 items-center p-2 ">
				<div className="flex-1 flex flex-col gap-2 items-stretch ">
					<Input
						className="flex gap-2 items-center"
						labelClass="text-xl font-bold"
						inputClass="flex-1"
						value={test.results[index].text[currentLang] ?? ""}
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
			<div className="grid gap-2 p-2" style={{ gridTemplateColumns: `repeat(${Math.min(6, test.weights.length)}, 1fr)` }}>
				{test.weights.map((weight, i) =>
					<Input
						key={i}
						className="flex gap-2 items-center"
						labelClass="text-xl font-bold"
						inputClass="flex-1"
						type="number"
						value={test.results[index].values[i] ?? 0}
						onChange={(e) => handleResultValueChange(e, i)}
						label={weight}
					/>
				)}
			</div>
		</div>
	);
}