import Image from '@/common/image';
import React from 'react';
import { SocialIcons } from './compnents/SocialIcons';
import { ReactComponent as Kmo } from 'Images/svg/kmo.svg';
import { ReactComponent as KmoMobile } from 'Images/svg/kmo-mobile.svg';
import {
    Desktop_hidden,
    FooterBottom,
    Grid,
    Hidden,
    Hidden_socialicons,
    Item,
    Item_hidden,
    Paragraph,
    SeperatorLight,
    SeperatorThin,
    Text,
    FooterContainer,
    Hidden_desktop,
} from './footer';
import { Link } from 'gatsby';
import { ReactComponent as Google } from 'Images/svg/google.svg';
import { ReactComponent as Meta } from 'Images/svg/meta.svg';
import { ReactComponent as GoogleMobile } from 'Images/svg/google-mobile.svg';
import { ReactComponent as MetaMobile } from 'Images/svg/meta-mobile.svg';

const Footer = () => {
    return (
        <FooterContainer>
            <SeperatorThin />
            <Desktop_hidden>
                <br />
                <Image filename="logo.png" alt="logo" width="191px" mobile_width="129px" />
            </Desktop_hidden>
            <Grid>
                <Item_hidden>
                    <Item>
                        <Hidden>
                            <br />
                            <Image
                                filename="logo.png"
                                alt="logo"
                                width="191px"
                                height="41px"
                                mobile_width="129px"
                            />
                        </Hidden>
                        <SocialIcons />
                        <Paragraph white-space="nowrap" font-size="14px" margin-top="-20px">
                            BTW-NR: BE 0752.610.231
                        </Paragraph>
                        <br />
                    </Item>
                </Item_hidden>
                <Item>
                    <Hidden_desktop white-space="nowrap">
                        <Paragraph
                            white-space="nowrap"
                            width="100%"
                            font-size="12px"
                            margin-top="-20px"
                        >
                            BTW-NR: BE 0752.610.231
                        </Paragraph>
                    </Hidden_desktop>
                    <Hidden_socialicons>
                        <SocialIcons />
                    </Hidden_socialicons>
                    <Paragraph text-decoration="underline" width="124px">
                        Belangrijke informatie
                    </Paragraph>
                    <Link to="/privacy">
                        <Text>Algemene voorwaarden</Text>
                    </Link>
                    <Link to="/general-conditions">
                        <Text>disclaimers | sitemap</Text>
                    </Link>
                </Item>
                <Item>
                    <Paragraph text-decoration="underline" width="124px">
                        Contact
                    </Paragraph>
                    <Link to="/contact">
                        <Text>een vraag? Stuur ons een mailtje! </Text>
                    </Link>
                    <Paragraph text-decoration="underline" width="124px">
                        Wie zijn we?
                    </Paragraph>
                    <Link to="/over-ons">
                        <Text>Over ons</Text>
                    </Link>
                    <Link to="/booking">
                        <Paragraph width="124px">Boek nu jouw afspraak</Paragraph>
                    </Link>
                    <Link to="/newsletter">
                        <Text>Ontvang onze nieuwsbrief</Text>
                    </Link>
                </Item>
                <Item>
                    <Item_hidden display="grid">
                        <Paragraph margin-left="-120px" font-weight="700">
                            ONZE TROTSE PARTNERS
                        </Paragraph>
                        <br />
                        <Link to="/kmo">
                            <Kmo />
                        </Link>

                        <Paragraph
                            line-height="15px"
                            letter-spacing="2.25px"
                            font-size="10px"
                            white-space="nowrap"
                            width="100%"
                            text-align="left"
                        >
                            Geregistreerd bij het Vlaams Gewest voor Opleiding <br />
                            <strong>Registratienummer: </strong>
                            DV.O246084
                        </Paragraph>
                        <div
                            style={{
                                display: 'flex',
                                marginTop: 20,
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    marginRight: 39,
                                }}
                            >
                                <Google />
                            </div>
                            <Meta />
                        </div>
                    </Item_hidden>
                </Item>
            </Grid>
            <Hidden_desktop style={{ width: '90%', margin: '0 auto' }}>
                <Paragraph text-align="left" width="100%" font-weight="700">
                    ONZE TROTSE PARTNERS
                </Paragraph>
                <br />
                <Link to="/kmo">
                    <KmoMobile />
                </Link>
                <Paragraph
                    line-height="15px"
                    letter-spacing="2.25px"
                    font-size="9px"
                    white-space="nowrap"
                    width="100%"
                    text-align="left"
                >
                    Geregistreerd bij het Vlaams Gewest voor Opleiding <br />
                    <strong>Registratienummer: </strong>
                    DV.O246084
                </Paragraph>
                <div
                    style={{
                        display: 'flex',
                        marginTop: 20,
                        justifyContent: 'center',
                    }}
                >
                    <div
                        style={{
                            marginRight: 39,
                        }}
                    >
                        <GoogleMobile />
                    </div>
                    <MetaMobile />
                </div>
                <br />
            </Hidden_desktop>
            <SeperatorLight />
            <FooterBottom>
                <Text padding-top="0px" padding-bottom="5px">
                    Copyright 2022 - All rights reserved - Made by klickD with❤️️
                </Text>
            </FooterBottom>
        </FooterContainer>
    );
};

export default Footer;
