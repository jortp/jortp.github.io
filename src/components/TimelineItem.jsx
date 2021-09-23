import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import "./TimelineItem.scss";
import Icon from "./Icon";

const TimelineItem = ({
  invert,
  imageFileName,
  imageContent,
  header,
  subheader,
  content,
}) => {
  const headerPart = header ? <h4>{header}</h4> : null;
  const subheaderPart = subheader ? <h4 className="subheading">{subheader}</h4> : null;

  const liClassName = clsx("timeline-item", { "timeline-inverted": invert });

  return (
    <li className={liClassName}>
      <div className="timeline-image">
        {imageContent || (
          <Icon iconName={imageFileName} inverse size="3x" />
        )}
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          {headerPart}
          {subheaderPart}
        </div>
        <div className="timeline-body">
          <p className="text-muted">{content}</p>
        </div>
      </div>
    </li>
  );
};

TimelineItem.propTypes = {
  invert: PropTypes.bool,
  imageFileName: PropTypes.string,
  imageContent: PropTypes.any,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
};

TimelineItem.defaultProps = {
  invert: false,
  imageFileName: "",
  imageContent: null,
  header: "",
  subheader: "",
  content: "",
};

export default TimelineItem;
