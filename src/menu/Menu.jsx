import { useContext } from "react";
import { getLocalData, setLocalData } from "../utils/localData";
import { ToolContext } from "../App";
import Button from "../Button";

export default function Menu() {
	const { setRoute, setCurrentTest } = useContext(ToolContext);

	const editPack = (pack) => {
		setCurrentTest(pack);
		setRoute("edit");
	}

	return <div className="flex flex-col gap-2">
		{getLocalData("packs")?.map((pack, i) =>
			<Button key={i} active={true} onClick={() => editPack(pack)}>{pack}</Button>
		)}
		<span className="bg-slate-600 h-px"></span>
		<Button active={true} onClick={() => setRoute("create")}>Создать новый пак</Button>
	</div>
}