import { graphql, useStaticQuery } from 'gatsby';

type ReturnValue = {
    site: {
        siteMetadata: {
            title: string;
            description: string;
            image: string;
            siteUrl: string;
            lang: string;
            keywords: string;
        };
    };
};

export const useSiteMetadata = () => {
    const data = useStaticQuery<ReturnValue>(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    image
                    siteUrl
                    lang
                    keywords
                }
            }
        }
    `);

    return data.site.siteMetadata;
};
