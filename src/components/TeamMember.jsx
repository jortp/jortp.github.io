import React from "react";
import PropTypes from "prop-types";

import Image from "components/Image";
import * as SocialIcons from "components/SocialIcons";

import "./TeamMember.scss";

const TeamMember = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  social: { web, twitter, facebook, linkedin, github, medium, instagram },
}) => {
  const webPart = web ? <SocialIcons.Web userName={web} /> : null;
  const twitterPart = twitter ? <SocialIcons.Twitter userName={twitter} /> : null;
  const facebookPart = facebook ? <SocialIcons.Facebook userName={facebook} /> : null;
  const linkedinPart = linkedin ? <SocialIcons.Linkedin userName={linkedin} /> : null;
  const githubPart = github ? <SocialIcons.Github userName={github} /> : null;
  const mediumPart = medium ? <SocialIcons.Medium userName={medium} /> : null;
  const instagramPart = instagram ? <SocialIcons.Instagram userName={instagram} /> : null;

  return (
    <div className="team-member">
      <Image
        className="mx-auto circle rounded-circle"
        fileName={imageFileName}
        alt={imageAlt || header || subheader}
      />
      <h4>{header}</h4>
      <p className="text-muted font-heading">{subheader}</p>
      <div>
        {webPart}
        {twitterPart}
        {facebookPart}
        {linkedinPart}
        {githubPart}
        {mediumPart}
        {instagramPart}
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  social: PropTypes.shape({
    web: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string,
    medium: PropTypes.string,
    instagram: PropTypes.string,
  }),
};

TeamMember.defaultProps = {
  imageAlt: null,
  header: "",
  subheader: "",
  social: {
    web: null,
    twitter: null,
    facebook: null,
    linkedin: null,
    github: null,
    medium: null,
    instagram: null,
  },
};

export default TeamMember;
