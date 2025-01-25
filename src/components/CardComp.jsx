export default function Card(props) {
  return (
    <div className="bg-red-700 text-white rounded-xl shadow-xl shadow-red-500/30 p-2">
      <h1>{props.name}</h1>
    </div>
  );
}
