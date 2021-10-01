import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";

import ServiceItem from "components/ServiceItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";

const Services = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, services } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} />
      </Row>
      <Row className="text-center">
        <Col lg={12} className="section-header">
          <hr className="divider my-4" />
          <h4 className="section-heading text-secondary">Saturday, 2 Oct 2021</h4>
          <h5 className="section-heading text-secondary">10.00 Western Indonesia Time</h5>
          <h5 className="section-heading text-secondary">Bandung - Indonesia</h5>
          <hr className="divider my-4" />
          <br/>
          <h3 className="section-subheading text-muted">The holy matrimony will be live-streamed here:</h3>
          <div className="resp-iframe">
            <iframe width="950" height="534" src="https://www.youtube.com/embed/5N-vKv7775g"
              title="Jo & Stella" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen/>
          </div>
          <h3 className="section-subheading text-muted top-margin">We will also post our updates on our Instagram with the link below:</h3>
        </Col>
        {services.map((service) => (
          <Col md={12} key={service.header}>
            <ServiceItem {...service} />
          </Col>
        ))}
      </Row>
    </PageSection>
  );
};

Services.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Services.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Services;
