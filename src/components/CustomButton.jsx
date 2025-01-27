export default function CustomButton(props) {
  return (
    <button onClick={props.onClick}  className=" w-full bg-white bg-opacity-50 p-2 rounded-md  transition-all ease-in-out duration-200 hover:bg-opacity-30">
      {props.label}
    </button>
  );
}
