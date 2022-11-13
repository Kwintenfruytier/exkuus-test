import { DefaultLayout } from 'layouts/DefaultLayout';
import Nieuwsbrief from 'components/nieuwsbrief';

const NewsPage: Page = () => (
    <main>
        <Nieuwsbrief />
    </main>
);

NewsPage.Layout = DefaultLayout;

export default NewsPage;

import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus NIEUWSBRIEF | 3 Waardevolle emails per week, zo maar!"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, nieuwsbrief, waardevolle emails, Kjell YouTube, Kjell TikTok, Kjell Instagram, Kjell Insta"
        description="Schrijf je nu in op onze nieuwsbrief en ontvang gratis en voor niks 100% waarde, 100% gratis! Wij geloven in kwaliteit boven kwantiteit. Door je aan te melden ontvang je iedere week 1 nieuwe YouTube video, 1 ervaring en 1 succesverhaal."
    />
);
