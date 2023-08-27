import { useEffect, useState } from "react"
import { getLocalData, setLocalData } from "./utils/localData";

export default function Input({ label, placeholder, value, onChange, slim }) {
	return (
		<label>
			<select
				multiple={true}
				value={selectedVegs}
				onChange={e => {
					const options = [...e.target.selectedOptions];
					const values = options.map(option => option.value);
					setSelectedVegs(values);
				}}
			>
				<option value="cucumber">Cucumber</option>
				<option value="corn">Corn</option>
				<option value="tomato">Tomato</option>
			</select>
		</label>
	);
}