import {
    Bold,
    BorderBlue,
    KmoHeading,
    KmoPortefeuilleWrapper,
    KmoSubheading,
    Listing,
    P,
} from 'styles/typography';
import { HeadFC, Link } from 'gatsby';

const KmoPortefeuille = () => {
    return (
        <KmoPortefeuilleWrapper>
            <KmoHeading>KMO-Portefeuille</KmoHeading>
            <br />
            <KmoSubheading>
                Wij zijn officieel dienstverlener voor de KMO- portefeuille.
            </KmoSubheading>
            <P width_mb="100%">
                Dit betekent dat Vlaamse ondernemers tot 30% korting kunnen ontvangen bij het volgen
                van programma’s die worden afgeleverd door EXKUUS BV.
            </P>
            <KmoSubheading>WAT IS DE KMO-PORTEFEUILLE?</KmoSubheading>
            <P width_mb="100%">
                Dit is een steunmaatregel waardoor je, als Vlaamse ondernemer, financiële steun
                krijgt van onze Belgische overheid bij de aankoop van diensten die de kwaliteit van
                jouw (toekomstige) onderneming verbeteren. Dit geldt ook voor alle programma’s die
                EXKUUS BV vandaag aanbiedt op de markt!
            </P>
            <KmoSubheading>HEB JE RECHT OP 20% OF 30% KORTING?</KmoSubheading>
            <Listing>
                <li>
                    <P width_mb="100%">
                        Bedrijven met minder dan 50 fulltime werknemers hebben recht op{' '}
                        <Bold>30% steun </Bold> tot maximaal € 7.500 per jaar.
                    </P>
                </li>
                <br />
                <li>
                    <P width_mb="100%">
                        De <Bold>subsidie van 20% </Bold> geldt voor middelgrote ondernemingen die
                        tussen de 50 en 250 fulltime werknemers hebben. De maximale vergoeding
                        betreft ook hier € 7.500 per jaar.
                    </P>
                </li>
            </Listing>
            <br />
            <br />
            <br />
            <br />
            <KmoSubheading>HOE VRAAG JE JOUW SUBSIDIE AAN?</KmoSubheading>
            <P width_mb="100%">
                Uiteraard kom je alleen voor steun in aanmerking als kmo of bij het reeds beoefenen
                van een zelfstandig beroep. Ben je nog niet geregistreerd? Doe dit dan via{' '}
                <a
                    href="https://www.vlaio.be/nl/subsidies-financiering/kmo-portefeuille"
                    target="_blank"
                    style={{
                        textDecoration: 'none',
                        textDecorationLine: 'none',
                    }}
                    rel="noreferrer"
                >
                    <BorderBlue>www.kmoportefeuille.be.</BorderBlue>
                </a>
            </P>
            <br />
            <br />
            <P width_mb="100%">
                Voordat je een aanvraag kan indienen bij de KMO-Portefeuille, moet je je eerst
                aanmelden voor deelname aan één van onze online programma’s. Je hebt tot uiterlijk
                14 dagen na de start van het programma om je aanvraag in te dienen.
            </P>
            <br />
            <br />
            <a
                href="https://www.vlaio.be/nl/subsidies-financiering/kmo-portefeuille/subsidies-aanvragen-en-ontvangen"
                target="_blank"
                rel="noreferrer"
            >
                <h3 style={{ color: 'blue' }}>STAPPENPLAN VOOR HET AANVRAGEN VAN KMO-SUBSIDIE</h3>
            </a>
            <P width_mb="100%" padding_top="2rem">
                Het registratienummer van EXKUUS BV is:<Bold> DV.O246084</Bold>. Via je persoonlijke
                omgeving op de KMO-website kun je de status van jouw aanvraag opvolgen.
            </P>
        </KmoPortefeuilleWrapper>
    );
};

export default KmoPortefeuille;

import React from 'react';
import { SEO } from '../components/seo';

export const Head: HeadFC = () => (
    <SEO
        title="Exkuus KMO | Officiële partner van de Vlaamse Overheid"
        keywords="Anderzom, Financiële vrijheid, Exkuus, Kjell Exkuus, Kjell Anderzom, nieuwsbrief, waardevolle emails, Kjell YouTube, Kjell TikTok, Kjell Instagram, Kjell Insta, KMO, Kjell KMO, Vlaamse Overheid"
        description="30% korting voor toekomstige ondernemers. Dan kan dankzij onze partnership met de Vlaamse Overheid: de KMO-portefeuille."
    />
);
