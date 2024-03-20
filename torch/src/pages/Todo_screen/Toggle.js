import { useState } from "react";
function Toggle() {
  const [isOn, setisOn] = useState(false);

  const toggleHandler = () => {
    setisOn(!isOn);
  };
  return (
    <div className="ToggleContainer" onClick={toggleHandler}>
      <div className={`toggle-container ${isOn ? "toggle--checked" : null}`} />
      <div className={`toggle-circle ${isOn ? "toggle--checked" : null}`} />
    </div>
  );
}
export default Toggle;
