import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";

export default function Name(){

    const nav = useNavigate()
    return <div className="min-h-screen">this is name page
    
      <CustomButton onClick={()=>nav("/")} label={"home"} />

      </div>;
}