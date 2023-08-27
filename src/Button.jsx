export default function Button({ active = true, onClick, children }) {


	return (
		<button
			className={`${active ? "bg-cyan-100 hover:bg-cyan-200 active:bg-cyan-50 " : "bg-slate-100 "} transition-all  p-2 outline-none`}
			onClick={(e) => { if (active) onClick(e); }}
		>
			{children}
		</button>
	)
}