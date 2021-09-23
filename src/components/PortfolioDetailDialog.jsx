import React from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";
import Image from "components/Image";

const PortfolioDetailDialog = ({
  onHide,
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  extraInfo,
  ...restProps
}) => {
  return (
    <Modal
      {...restProps}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <Image
          className="img-fluid d-block"
          fileName={imageFileName}
          alt={imageAlt || header || subheader}
        />
      </Modal.Body>
    </Modal>
  );
};

PortfolioDetailDialog.propTypes = {
  onHide: PropTypes.func,
  imageFileName: PropTypes.string,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioDetailDialog.defaultProps = {
  onHide: null,
  imageFileName: "",
  imageAlt: null,
  header: "",
  subheader: "",
  content: "",
  extraInfo: null,
};

export default PortfolioDetailDialog;
