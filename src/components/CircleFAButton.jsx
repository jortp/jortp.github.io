import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import "./CircleFAButton.scss";

const CircleFAButton = ({ iconName, ...restProps }) => {
  return (
      <a className="circle-fa-button"
        href="https://instagram.com/jostellastories"
        target="_blank"
        rel="noopener noreferrer"
      >
      <Icon iconName={iconName} inverse size="4x" {...restProps} />
      </a>
  );
};

CircleFAButton.propTypes = {
  iconName: PropTypes.string.isRequired,
};

export default CircleFAButton;
