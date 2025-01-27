import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function Contact() {
  const nav = useNavigate()
  return <div className="min-h-screen">this is Contact page
  
    <CustomButton onClick={()=>nav("/")} label={"home"} />
  </div>;
}
