import { useContext } from "react";
import { ToggleContext } from "../App";

function Input({ handleChange, value, title, name, color, border }) {
  const { isOpen, toggleSidebar } = useContext(ToggleContext);
  return (
    <label className="relative side-label pl-8 mb-2 sm:mb-3 cursor-pointer">
      <input
        onChange={(e) => {
          handleChange && handleChange(e);
          if (isOpen) {
            toggleSidebar();
          }
        }}
        value={value}
        type="radio"
        name={name}
        className="cursor-pointer absolute opacity-0"
      />
      <span
        className={`checkmark absolute top-0 left-0 h-5 w-5 bg-[#eee] rounded-[50%]`}
        style={{ background: color, border }}
      ></span>
      {title}
    </label>
  );
}

export default Input;
