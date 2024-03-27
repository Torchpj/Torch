import React, {useEffect} from "react";
import { Torch , Light} from "../../assets";
import "./Splash_screen.css"
import { useHistory } from "react-router-dom"

export default function Splash_screen() {

    const history = useHistory();

    useEffect(() => {
        // 5초 후 todo_screen page 이동
        const timer = setTimeout(() => {
            history.push('/todo');
        }, 5000);
    
        // 컴포넌트 unmount: 타이머 해제
        return () => {
          clearTimeout(timer);
        };
      }, [history]); 

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