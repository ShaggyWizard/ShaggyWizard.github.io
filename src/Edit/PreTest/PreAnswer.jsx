import { useContext, useEffect, useState } from "react";
import { ToolContext } from "../../App";
import Input from "../../Input";

export default function PreAnswer({ questionIndex, index }) {
	const { test, setTest, currentLang } = useContext(ToolContext);

	const handleAnswerChange = (e) => {
		const nextTest = { ...test };
		nextTest.preTest[questionIndex].answers[index][currentLang] = e.target.value;
		setTest(nextTest);
	}
	const removeMe = () => {
		const nextTest = { ...test };
		nextTest.preTest[questionIndex].answers.splice(index, 1); 
		setTest(nextTest);
	}
	const handleAnswerValueChange = (e) => {
		const nextTest = { ...test };
		nextTest.preTest[questionIndex].answers[index].value = e.target.value;
		setTest(nextTest);
	}

	return (
		<div className="flex gap-2 items-center p-2 bg-blue-200/20">
			<div className="flex-1 flex flex-col gap-2 items-stretch ">
				<Input
					className="flex gap-2 items-center"
					inputClass="flex-1"
					value={test.preTest[questionIndex].answers?.[index]?.[currentLang] ?? ""}
					onChange={handleAnswerChange}
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