export default function CustomBtn(props){
    return <button onClick={props.CustomClick} className="bg-green-700 text-white p-2 rounded-xl shadow-xl shadow-green-500/30">
            <h1>{props.label}</h1>
    </button>
}