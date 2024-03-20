import { useNavigate } from "react-router-dom";
import { Torch , Light} from "../../assets";
import "./Splash_screen.css"

export default function TorchAni() {

    const navigate=useNavigate();


    return (
        <>
        <div className="torposition"> 
            <Torch/>
        </div> 
        <div className="lig">
            <Light/> 
        </div>          
        <div className="tortext">  Torch </div>
        </>
    );
}