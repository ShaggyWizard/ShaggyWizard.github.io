import { useEffect, useState } from "react"
import { getLocalData, setLocalData } from "./utils/localData";

export default function Input({ label, labelClass, placeholder, value, onChange, className, inputClass, type="text" }) {
	return (
		<div className={className}>
			<h3 className={labelClass}>{label}</h3>
			<input
				className={`${inputClass} transition-all hover:border-slate-200 active:border-green-200 border-2 border-slate-100 p-2 outline-none`}
				type={type}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
}