import { DefaultLayout } from 'layouts/DefaultLayout';
import Testimonials from 'components/testimonials';

const TestimonialsPage: Page = () => (
    <main>
        <Testimonials />
    </main>
);

TestimonialsPage.Layout = DefaultLayout;

export default TestimonialsPage;

import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus TESTIMONIALS | Wat zeggen anderen over ons?"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, nieuwsbrief, waardevolle emails, Kjell YouTube, Kjell TikTok, Kjell Instagram, Kjell Insta, Getuigenis, Kjell betrouwbaar, Kjell scam, Exkuus scam"
        description="Lees en luister wat anderen over ons zeggen! Wij hielpen hen alreeds aan financiële vrijheid. Jij binnenkort ook?"
    />
);
