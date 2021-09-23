import React from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TeamMember from "components/TeamMember";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import "./Team.scss";

const Team = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    anchor,
    header: rootHeader,
    subheader: rootSubHeader,
    content: rootContent,
    teamMember,
  } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <hr className="divider mb-5 mt-4" />
      <Row>
        {teamMember.map(({ header, ...tmProps }) => (
          <Col sm={6} key={header}>
            <TeamMember header={header} {...tmProps} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <p className="large text-muted">{rootContent}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={10}>
          <p className="text">Who are we?</p>
          <p className="text-muted">
            Jo:
          </p>
          <p className="text-muted">
            I finished my Informatics Technology study at Institut Teknologi Bandung in 2014 and
            have worked in various tech companies from Indonesia to Singapore as a software engineer.
            I like to build new things (tech-related) and often compete in tech competitions.
            Feel free to check out my website using the link above to find more about it.
            Outside of the tech world, I really like to play video games, futsal, and chess.
            If you think you are good at any of them, challenge me for a match! 😁
          </p>
          <p className="text-muted">
            Stella:
          </p>
          <p className="text-muted">
            I studied Information System and Technology major at Institut Teknologi Bandung
            from 2011 to 2015. I started my career in a tech company as a product manager,
            and I&apos;m currently working at Shopee Indonesia.
            I love to sing and reading novels. Aside from that, I really love chocolate and avocado.
            So, after this pandemic ends, let&apos;s do karaoke and culinary! :)
          </p>

          <p className="text">Where are we going for our honeymoon?</p>
          <p className="text-muted">
            We will stay in Bali for about a month to enjoy the sea vibe and refresh our minds
            during this pandemic. We hope the pandemic ends soon so we can travel all around
            Indonesia!
          </p>

          <p className="text">What is the plan after the marriage?</p>
          <p className="text-muted">
            Both of us have a similar goal in mind and are very good at planning things.
            So, we have carefully planned multiple scenarios. But for sure, first, we are going to
            travel around Indonesia while working remotely. If you want to know more,
            feel free to drop us a message.
          </p>

          <p className="text">Want to know more about us?</p>
          <p className="text-muted">
            Check out our website or social media in the link above, and feel free to message us
            directly!
          </p>
        </Col>
      </Row>
    </PageSection>
  );
};

Team.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Team.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Team;
