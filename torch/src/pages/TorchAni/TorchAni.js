import { useNavigate } from "react-router-dom";
import { Torch } from "../../assets";
import "./TorchAni.css"

export default function TorchAni() {

    const navigate=useNavigate();


    return (
        <>
        <Torch className="tor"/>
            <span className="tortext">  Torch </span>
        </>
    );
}