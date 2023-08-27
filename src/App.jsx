import { createContext, useEffect, useState } from 'react'
import Menu from './menu/Menu';
import Create from './create/Create';
import Edit from './Edit/Edit';

export const ToolContext = createContext();

function App() {
	const [route, setRoute] = useState("menu");
	const [currentTest, setCurrentTest] = useState("");
	const [currentLang, setCurrentLang] = useState("ru");

	const context = {
		setRoute,
		currentTest, setCurrentTest,
		currentLang, setCurrentLang,
	}
	useEffect(() => {
		
	}, [currentLang])

	return (
		<ToolContext.Provider value={context}>
			<div className='container mx-auto '>
				{route === "menu" && <Menu />}
				{route === "create" && <Create />}
				{route === "edit" && <Edit testName={currentTest} />}
			</div>
			{route !== "menu" &&
				<button
					className='fixed left-0 top-0 p-2 bg-red-300'
					onClick={() => setRoute("menu")}
				>
					В меню
				</button>
			}
			<label className='fixed right-0 top-0 p-2 '>
				<select
					value={currentLang}
					onChange={e => setCurrentLang(e.target.value)}
				>
					<option value="ru">Русский</option>
					<option value="en">Английский</option>
					<option value="tr">Турецкий</option>
				</select>
			</label>
		</ToolContext.Provider>
	)
}

export default App
