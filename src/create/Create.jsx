import { useContext, useEffect, useState } from "react";
import { getLocalData, setLocalData } from "../utils/localData";
import { ToolContext } from "../App";
import Button from "../Button.jsx";
import Input from "../Input";

export default function Create() {
	const { setRoute, setCurrentTest } = useContext(ToolContext);

	const [value, setValue] = useState("");
	const [active, setActive] = useState(false);

	useEffect(() => {
		const trim = value.replace(/[^A-Za-z0-9]/g, '');
		if (trim !== value) {
			setValue(trim);
			return;
		}

		setActive(
			!!value
				?
				!getLocalData("packs")?.includes(value)
				:
				false
		)

	}, [value])

	const onCreate = () => {
		setLocalData("packs", [value, ...getLocalData("packs")]);
		setLocalData(value, { weights: [""], preTest: [], test: [{ question: {}, answers: [{ values: [] }, { values: [] }] }], results: [] });
		setRoute("edit");
		setCurrentTest(value);
	}

	return <div className="flex flex-col gap-2">
		<Input label="Название(Латиница и цифры без пробелов)" placeholder="Пак" value={value} onChange={(e) => setValue(e.target.value)} />
		<Button active={active} onClick={onCreate}>Создать</Button>
	</div>
}