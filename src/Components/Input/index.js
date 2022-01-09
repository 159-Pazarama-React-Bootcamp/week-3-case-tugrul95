import React, { useState } from "react";
import PropTypes from "prop-types";
import EyeIcon from "../svg/EyeIcon";
import "./index.css";

const Input = (props) => {
  const { label, type, placeholder, ...args } = props;
  const [inputType, setInputType] = useState(type);

  const passwordIconClick = () => {
    if (inputType === "text") {
      setInputType("password");
    } else {
      setInputType("text");
    }
  };
  
  return (
    <div className='container'>
      <input
        type={inputType}
        placeholder={placeholder}
        className={"input"}
        {...args}
      />
      {type === "password" && (
        <i className='icon' onClick={passwordIconClick}>
          <EyeIcon />
        </i>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "password"]),
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  placeholder: "Placeholder",
};

export default Input;