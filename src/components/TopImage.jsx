import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const TopImage = ({ fileName, alt, ...restProps }) => (
  <StaticQuery
    query={graphql`
      query TopImageQuery {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, quality: 90)
              }
            }
          }
        }
      }
    `}
    render={({ images }) => {
      const image = images.edges.find((n) => n.node.relativePath.includes(fileName));

      if (!image) {
        return null;
      }

      const imageData = image.node.childImageSharp.gatsbyImageData;
      return <GatsbyImage alt={alt} image={imageData} {...restProps} />;
    }}
  />
);

TopImage.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

TopImage.defaultProps = {
  alt: null,
};

export default TopImage;
