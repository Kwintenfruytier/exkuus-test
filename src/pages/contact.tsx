import { DefaultLayout } from 'layouts/DefaultLayout';
import Contact from 'components/contact';

const ContactPage: Page = () => (
    <main>
        <Contact />
    </main>
);

ContactPage.Layout = DefaultLayout;

export default ContactPage;

import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus CONTACT | Contacteer ons"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, nieuwsbrief, waardevolle emails, Kjell YouTube, Kjell TikTok, Kjell Instagram, Kjell Insta, Contacteer, Contact"
        description="Een vraag? Twijfel niet om ons te contacteren! We beantwoorden jouw bericht persoonlijk & op maat!"
    />
);
