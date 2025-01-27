import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";

export default function Box(){

const nav = useNavigate()


function NamepageHandler(){
  nav("/name")

}

function ContactpageHandler() {
    nav("/contact");

}
function AboutpageHandler() {
    nav("/about");

}


    return (
      <div className="bg-white bg-opacity-20 rounded-xl w-full h-full flex flex-col space-y-2 items-center p-4 backdrop-blur-xl ">
        <CustomButton onClick={NamepageHandler} label={"Name"} />
        <CustomButton onClick={AboutpageHandler} label={"About"} />
        <CustomButton onClick={ContactpageHandler} label={"Contact"} />

        <div className="bg-red-700 bg-opacity-90 backdrop-blur-xl text-white w-6 h-6 text-center flex items-center hover:-translate-y-2 transition-all ease-in-out duration-200  justify-center rounded-full absolute z-1 -top-4 p-1 -right-2 shadow-xl shadow-red-700/50 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    );
}


