import { DefaultLayout } from 'layouts/DefaultLayout';
import NotFound from 'components/notFound';

const NotFoundPage: Page = () => (
    <main>
        <NotFound />
    </main>
);

NotFoundPage.Layout = DefaultLayout;

export default NotFoundPage;

import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus 404 | Woops! Deze pagina bestaat waarschijnlijk niet"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, nieuwsbrief, waardevolle emails, Kjell YouTube, Kjell TikTok, Kjell Instagram, Kjell Insta, 404"
        description="Je bent terechtgekomen op een pagina die waarschijnlijk niet bestaat. Wil jij Financiële vrijheid? Bezoek dan zeker onze website: www.exkuus.com"
    />
);
