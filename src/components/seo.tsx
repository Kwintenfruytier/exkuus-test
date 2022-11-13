import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type SEOProps = {
    title?: string;
    description?: string;
    pathname?: string;
    keywords?: string;
};

export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({
    title,
    description,
    pathname,
    keywords,
    children,
}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        keywords: defaultKeywords,
        image,
        siteUrl,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            <link
                id="favicon-icon"
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
            />
            {children}
        </>
    );
};
