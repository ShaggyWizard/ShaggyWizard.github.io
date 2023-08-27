import { useContext, useEffect, useState } from "react"
import { getLocalData, setLocalData } from "../utils/localData"
import { ToolContext } from "../App"
import PreTest from "./PreTest/PreTest"
import Test from "./Test/Test"
import Results from "./Results/Results"
import Weights from "./Weights/Weights"

export default function Edit({ testName }) {
	const [test, setTest] = useState(getLocalData(testName))
	useEffect(() => {
		setLocalData(testName, test);
	}, [test]);

	const context = useContext(ToolContext);

	return (

		<ToolContext.Provider value={{ ...context, test, setTest }}>
			<div className="flex flex-col gap-8 py-20">
				<h1 className="text-3xl font-bold">{testName}</h1>
				<Weights />

				<span className="bg-slate-600 h-px" />
				<PreTest />

				<span className="bg-slate-600 h-px" />
				<Test />

				<span className="bg-slate-600 h-px" />
				<Results />
			</div>
		</ToolContext.Provider>
	)
}