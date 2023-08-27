import { useContext, useEffect } from "react";
import Button from "../../Button";
import Input from "../../Input";
import { ToolContext } from "../../App";
import Answer from "./Answer";

export default function Question({ index }) {
	const { test, setTest, currentLang } = useContext(ToolContext);

	const addAnswer = () => {
		const nextTest = { ...test };
		nextTest.test[index].answers.push({ values: [] });

		setTest(nextTest);
	}
	const handleQuestionChange = (e) => {
		const nextTest = { ...test };
		nextTest.test[index].question[currentLang] = e.target.value;
		setTest(nextTest);
	}
	const removeMe = () => {
		const nextTest = { ...test };
		nextTest.test.splice(index, 1);
		setTest(nextTest);
	}

	return (
		<div className="flex flex-col items-stretch p-4 gap-1 bg-blue-200/20">

			<div className="flex gap-2 items-center p-2 ">
				<div className="flex-1 flex flex-col gap-2 items-stretch ">
					<Input
						className="flex gap-2 items-center"
						labelClass="text-xl font-bold"
						inputClass="flex-1"
						value={test.test[index].question[currentLang] ?? ""}
						onChange={handleQuestionChange}
						label={"Вопрос " + (index + 1)}
					/>
				</div>
				<button
					className="aspect-square bg-red-500 w-auto h-8 rounded-full text-white font-bold"
					onClick={removeMe}
				>
					X
				</button>
			</div>
			<h3 className="text-lg font-bold">Ответы</h3>
			{test?.test[index]?.answers?.map((_, i) =>
				<Answer key={i} index={i} questionIndex={index} />
			)}
			<Button onClick={addAnswer}>Добавить ответ</Button>
		</div>
	);
}