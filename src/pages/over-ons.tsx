import { DefaultLayout } from 'layouts/DefaultLayout';
import OverOns from 'components/overOns';

const OverOnsPage: Page = () => (
    <main>
        <OverOns />
    </main>
);

OverOnsPage.Layout = DefaultLayout;

export default OverOnsPage;

import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus OVER ONS | De personen achter het bedrijf"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, Kjell, Kjell Fruytier, Nomo, Ilias, Kjell betrouwbaar, Exkuus"
        description="Wie zijn de mensen achter Exkuus? Leer meer over Kjell, Nomi & Ilias. "
    />
);
