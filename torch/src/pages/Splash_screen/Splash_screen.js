import { useNavigate } from "react-router-dom";
import { Torch } from "../../assets";
import "./Splash_screen.css"

export default function TorchAni() {

    const navigate=useNavigate();


    return (
        <>
        <div className="torposition"> 
            <Torch className="tor"/>
        </div>        
            <span className="tortext">  Torch </span>
        </>
    );
}