import { DefaultLayout } from 'layouts/DefaultLayout';
import Home from 'components/home';

const HomePage: Page = () => (
    <main>
        <Home />
    </main>
);

HomePage.Layout = DefaultLayout;

export default HomePage;

{
    /* SEO SECTION*/
}
import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus HOME | Financiële vrijheid door te adverteren voor ondernemers"
        keywords="Exkuus, Kjell, Kjell Exkuus, Kjell Anderzom, Anderzom, Financiële vrijheid"
        description="10000 EURO meer verdienen per maand? Dat kan! Door te adverteren voor ondernemers, zal ook jij financiële vrijeheid ervaren!"
    />
);
