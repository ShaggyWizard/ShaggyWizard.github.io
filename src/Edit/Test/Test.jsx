import { useContext } from "react";
import Button from "../../Button";
import { ToolContext } from "../../App";
import Question from "./Question";

export default function Test() {
	const { test, setTest } = useContext(ToolContext);
	const createNew = () => {
		setTest({ ...test, test: [...test.test, { question: new Object() , answers: [{}, {}] }], })
	}

	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">Тест</h2>
			{test.test?.map((_, i) =>
				<Question key={i} index={i} />
			)}
			<Button active={true} onClick={createNew}>Добавить вопрос</Button>
		</div>
	);
}