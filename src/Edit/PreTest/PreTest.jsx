import { useContext } from "react";
import PreQuestion from "./PreQuestion";
import Button from "../../Button";
import { ToolContext } from "../../App";

export default function PreTest() {
	const { test, setTest } = useContext(ToolContext);
	const createNew = () => {
		setTest({ ...test, preTest: [...test.preTest, { question: new Object() , answers: [{}, {}] }], })
	}

	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">Подготовка</h2>
			{test.preTest?.map((_, i) =>
				<PreQuestion key={i} index={i} />
			)}
			<Button active={true} onClick={createNew}>Добавить вопрос</Button>
		</div>
	);
}