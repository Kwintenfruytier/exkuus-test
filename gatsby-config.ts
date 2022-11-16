import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
    trailingSlash: 'always',
    siteMetadata: {
        title: 'Exkuus',
        author: 'Exkuus.com',
        siteUrl: `https://exkuus.com`,
        description:
            'Ook jij kan €10.000 per maand verdienen en financiële vrijheid ondervinden. Hoe? Door gepassioneerde ondernemers te helpen groeien.',
        keywords:
            'exkuus, Kjell, financiële vrijheid, online marketing, Nomi, is Kjell betrouwbaar?, exkuus.com, exkuus.be, excuus',
        image: 'exkuus_logo.png',
        lang: 'nl',
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-image`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                host: 'https://exkuus.com',
                sitemap: 'https://exkuus.com/sitemap/sitemap-index.xml',
                policy: [{ userAgent: '*', allow: '/' }],
            },
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-svgr`,
        {
            resolve: `gatsby-plugin-scroll-reveal`,
            options: {
                threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
                once: true, // Defines if animation needs to be launched once
            },
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    placeholder: `blurred`,
                    quality: 35,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Exkuus`,
                short_name: `Exkuus`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `assets/icons/favicon.png`,
            },
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                mode: 'async',
                preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
                web: [
                    {
                        name: `Text Me One`,
                        file: 'https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap',
                    },
                    {
                        name: `Cairo`,
                        file: 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900;1000&display=swap',
                    },
                ],
                preload: [
                    'https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap',
                    'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900;1000&display=swap',
                ],
            },
        },

        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'nl',
            },
        },
        {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
                siteUrl: `https://exkuus.com`,
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: 'GTM-T23N24V',

                // Include GTM in development.
                //
                // Defaults to false meaning GTM will only be loaded in production.
                includeInDevelopment: false,

                // datalayer to be set before GTM is loaded
                // should be an object or a function that is executed in the browser
                //
                // Defaults to null
                defaultDataLayer: { platform: 'gatsby' },

                // Name of the event that is triggered
                // on every Gatsby route change.
                //
                // Defaults to gatsby-route-change
                routeChangeEventName: 'EXKUUS-TAG-MANAGER',
                // Defaults to false
                enableWebVitalsTracking: true,
                // Defaults to https://www.googletagmanager.com
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.mdx`],
                gatsbyRemarkPlugins: [`gatsby-remark-copy-linked-files`],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: `./src/content/blog/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `./src/Images/`,
            },
        },
    ],
};

export default config;
