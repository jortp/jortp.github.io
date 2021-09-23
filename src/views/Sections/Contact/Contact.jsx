import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import PageSection from "components/PageSection";

const Contact = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row className="justify-content-center">
        <Col lg={10}>
          <h2 className="mt-0 text-center">{header}</h2>
          <hr className="divider my-4" />
        </Col>
      </Row>
    </PageSection>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Contact.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Contact;
