import React from "react";
import PropTypes from "prop-types";

import CircleIcon from "components/CircleIcon";

const Web = ({ userName }) => (
  <CircleIcon href={`${userName}`} iconName="LanguageIcon" />
);

Web.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default Web;
