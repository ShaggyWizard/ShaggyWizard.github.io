import { useContext } from "react";
import Button from "../../Button";
import { ToolContext } from "../../App";
import ResultVariant from "./ResultVariant";

export default function Results() {
	const { test, setTest } = useContext(ToolContext);
	const createNew = () => {
		setTest({ ...test, results: [...test.results, { values: [], text:{}, }] })
	}

	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">Результаты</h2>
			{test.results?.map((_, i) =>
				<ResultVariant key={i} index={i} />
			)}
			<Button active={true} onClick={createNew}>Добавить результат</Button>
		</div>
	);
}