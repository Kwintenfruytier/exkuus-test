import Image from '@/common/image';
import { ReactComponent as Diensten_hero } from '../../../../Images/svg/diensten_hero.svg';
import React from 'react';

import {
    Heading,
    Hero_,
    Hero_Image,
    Hide,
    Left_Section,
    Mobile_Heading,
    Mobile_Sub_Heading,
    Mobile_Sub_HeadingColor,
    Sub_Heading,
    Sub_HeadingColor,
} from './hero';
import { Header } from 'styles/typography';
const Hero = () => {
    return (
        <>
            <br />
            <Mobile_Heading>Leer meer over onze diensten</Mobile_Heading>
            <Hero_>
                <Hide>
                    <Left_Section>
                        <Heading width="100%">Leer meer over onze diensten</Heading>
                        <Sub_Heading>
                            Wij maken van ondermen kinderspel. Dus wat is jouw <br />
                            <Sub_HeadingColor>Exkuus?</Sub_HeadingColor>
                        </Sub_Heading>
                    </Left_Section>
                </Hide>
                <Hero_Image>
                    <Diensten_hero />
                </Hero_Image>
            </Hero_>
            <Mobile_Sub_Heading>
                Wij maken van ondermen kinderspel. Dus wat is jouw
                <Mobile_Sub_HeadingColor>Exkuus?</Mobile_Sub_HeadingColor>
            </Mobile_Sub_Heading>
        </>
    );
};

export default Hero;
