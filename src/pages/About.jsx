import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function About() {

  const nav = useNavigate()
  return <div className=" items-center justify-center w-[200px] min-h-screen" >this is about page
  
  <CustomButton onClick={()=>nav("/")} label={"home"} />
  
  </div>;
}
