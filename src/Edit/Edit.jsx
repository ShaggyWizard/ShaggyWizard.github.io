import { useContext, useEffect, useState } from "react"
import { getLocalData, setLocalData } from "../utils/localData"
import LocalInput from "../Input"
import Button from "../Button"
import { ToolContext } from "../App"
import PreTest from "./PreTest/PreTest"
import Test from "./Test/Test"

export default function Edit({ testName }) {
	const [test, setTest] = useState(getLocalData(testName))
	useEffect(() => {
		setLocalData(testName, test);
	}, [test])

	const context = useContext(ToolContext);

	return (

		<ToolContext.Provider value={{ ...context, test, setTest }}>
			<div className="flex flex-col gap-8 py-20">
				<h1 className="text-3xl font-bold">{testName}</h1>

				<span className="bg-slate-600 h-px" />

				<PreTest />

				<span className="bg-slate-600 h-px" />
				<Test />
			</div>
		</ToolContext.Provider>
	)
}