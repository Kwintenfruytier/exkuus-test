/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import CustomImage from './image';

interface Props {
    filename?: string;
    alt?: string;
    [rest: string]: any;
}
const Image = ({ alt, filename, ...rest }: Props) => (
    <StaticQuery
        query={graphql`
            query {
                images: allFile {
                    edges {
                        node {
                            relativePath
                            name
                            childImageSharp {
                                fluid(maxWidth: 1920) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.images.edges.find((n: any) => {
                return n.node.relativePath.includes(filename);
            });
            if (!image) {
                return null;
            }
            return <CustomImage {...rest} alt={alt} fluid={image.node.childImageSharp.fluid} />;
        }}
    />
);
export default Image;
