import { useContext } from "react";
import Button from "../../Button";
import { ToolContext } from "../../App";
import WeightVariant from "./WeightVariant";

export default function Weights() {
	const { test, setTest } = useContext(ToolContext);
	const createNew = () => {
		setTest({ ...test, weights: [...test.weights, ""] })
	}

	return (
		<div className="flex flex-col gap-2">
			<h2 className="text-2xl font-bold">Измерения</h2>
			{test.weights?.map((_, i) =>
				<WeightVariant key={i} index={i} />
			)}
			<Button active={true} onClick={createNew}>Добавить измерение</Button>
		</div>
	);
}