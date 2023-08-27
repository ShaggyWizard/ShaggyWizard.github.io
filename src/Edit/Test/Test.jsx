import { useContext, useEffect, useState } from "react";
import Button from "../../Button";
import { ToolContext } from "../../App";
import Question from "./Question";

export default function Test() {
	const { test, setTest, currentLang } = useContext(ToolContext);
	const [questionIndex, setQuestionIndex] = useState(0);
	const createNew = () => {
		setTest({ ...test, test: [...test.test, { question: new Object(), answers: [{}, {}] }], })
	}

	return (
		<div className="flex flex-col gap-2">
			<div className="flex gap-2 justify-between items-start">
				<h2 className="text-2xl font-bold">Тест</h2>
				<div className="grid grid-cols-[repeat(20,1fr)] gap-1">
					{test.test?.map((question, i) =>
						<QuestionButton key={i}
							active={questionIndex === i}
							index={i}
							onClick={() => setQuestionIndex(i)}
							error={hasErrors(question, currentLang)}
						/>
					)}
				</div>
				<Button active={true} onClick={createNew}>Добавить вопрос</Button>
			</div>
			<Question index={Math.max(0, Math.min(questionIndex, test.test.length - 1))} />
		</div>
	);
}

function QuestionButton({ active, error, index, onClick }) {
	return (
		<button className={`${active ? "bg-cyan-400 " : "bg-cyan-100 hover:bg-cyan-200 active:bg-cyan-50 "} transition-all  p-2 outline-none relative`} onClick={onClick}>
			{index + 1}
			{error && <span className="rounded-full absolute -top-1 -right-1 w-2 h-2 bg-red-500" />}
		</button>
	)
}

function hasErrors(question, lang) {
	if (!question.question[lang]?.length) return true;
	for (let i = 0; i < question.answers.length; i++) {
		if (!question.answers[i][lang]?.length) return true;
		let notFound = true;
		for (let j = 0; j < question.answers[i].values?.length; j++) {
			if (question.answers[i].values[j]) {
				notFound = false;
				break;
			}
		}
		if (notFound) return true;
	}
	return false;
}