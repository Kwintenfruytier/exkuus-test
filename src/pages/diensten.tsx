import IconField from '../components/diensten/common/Iconfield';
import { ReactComponent as Anderzom } from '../Images/svg/anderzom.svg';
import Button from '../components/common/commonButton';
import {
    BackgroundShadow,
    Banner_img,
    Banner_img_wrapper,
    Button_wrapper,
    Diensten_description1,
    Diensten_description2,
    Diensten_descriptionColor,
    Diensten_Hero_title,
    Diensten_paragraph,
    Diensten_section,
    Diensten_statement,
    Diensten_statement_wrapper,
    Diensten_title,
    Dienten_Button,
    IconFiled_wrapper,
    TextBlue,
} from 'styles/typography';
import Hero from '../components/diensten/components/hero_section';
import { Link } from 'gatsby';
import { diensten_data } from 'constant/diensten';
import { Paragraph } from '@/diensten/common/Iconfield/Iconfiled';

const diensten = () => {
    return (
        <Diensten_section>
            <Hero />
            <Banner_img_wrapper>
                <Banner_img>
                    <Anderzom />
                </Banner_img>
            </Banner_img_wrapper>

            <Diensten_statement>
                <BackgroundShadow />
                <Diensten_title>herken jij je in 1 van deze uitspraken?</Diensten_title>

                <Diensten_description1>
                    “Ik ben ambitieus en wil meer uit het leven dan mijn 9-5.”
                </Diensten_description1>
                <Diensten_description2>
                    “Al mijn dagen zijn hetzelfde. Ik ben dat echt beu!”
                </Diensten_description2>
                <Diensten_description1>
                    “Ik wil meer tijd voor mijzelf en de personen om wie ik geef.”
                </Diensten_description1>
                <Diensten_description2>“Ik ben bereid hard te werken.”</Diensten_description2>
                <Diensten_description1>“Niets komt vanzelf, toch?”</Diensten_description1>
            </Diensten_statement>

            <Diensten_paragraph>
                <TextBlue mobileFontSize="22px" fontSize="31px">
                    Ja, het kan anders.
                </TextBlue>{' '}
                Wat kan je verwachten van ons ‘anderzom’ coaching programma?
            </Diensten_paragraph>
            <Diensten_statement_wrapper>
                <IconField
                    icon="support_agent"
                    color="#1F4668"
                    paragraph="24/7 ondersteuning & begeleiding"
                />
                <IconField
                    icon="devices"
                    color="#1F4668"
                    paragraph="geen technische kennis vereist"
                />
                <IconField
                    icon="apartment"
                    color="#1F4668"
                    paragraph="jouw eigen advertentie bedrijf"
                />
                <IconField
                    icon="rocket_launch"
                    color="#1F4668"
                    paragraph="succes binnen 90 dagen"
                />

                <IconField
                    icon="diversity_3"
                    color="#1F4668"
                    paragraph="jouw dagelijkse accountability partner"
                />
                <IconField
                    icon="volunteer_activism"
                    color="#1F4668"
                    paragraph="omgringd door likeminded mensen"
                />
                <IconField
                    icon="gpp_maybe"
                    color="#1F4668"
                    paragraph="uniek & exclusief (kleine groep)"
                />
                <IconField
                    icon="school"
                    color="#1F4668"
                    paragraph="1x per jaar virtuele mastermind"
                />
            </Diensten_statement_wrapper>
            <Diensten_descriptionColor>
                Ben jij klaar om de stap te zetten?
            </Diensten_descriptionColor>
            <Link to="/booking">
                <Dienten_Button>IK BEN KLAAR OM MIJN LEVEN TE VERANDEREN</Dienten_Button>{' '}
            </Link>
            <br />
            <br />
            <Diensten_paragraph fontsize="22px">
                ben jij klaar voor een grotere uitdaging? Verdien je meer dan
                <TextBlue mobileFontSize="22px" fontSize="26px">
                    {' '}
                    5000 euro
                </TextBlue>{' '}
                per maand? Dan ben jij waarschijnlijk klaar om naar de{' '}
                <TextBlue mobileFontSize="22px" fontSize="26px">
                    Next level
                </TextBlue>{' '}
                te gaan!
            </Diensten_paragraph>
            <Diensten_Hero_title>NEXT LEVEL MASTERMIND</Diensten_Hero_title>
            <Diensten_paragraph fontsize="22px" text_align="start" font_weight="400">
                Ben je klaar om jouw bedrijf op te schalen en naar een{' '}
                <TextBlue mobileFontSize="22px" fontSize="26px">
                    nieuw niveau te tillen?{' '}
                </TextBlue>
                Dan kan je je inschrijven in ons ‘Next Level Mastermind’ programma. Wat betekent
                dat?
            </Diensten_paragraph>
            <Diensten_paragraph
                fontsize="22px"
                text_align="start"
                mobile_width="282px"
                margintop="10px"
                marginbottom="24px"
                font_weight="400"
            >
                Naast
                <TextBlue mobileFontSize="22px" fontSize="26px">
                    {' '}
                    gratis toegang
                </TextBlue>{' '}
                tot het Anderzom Coaching Programma:
                <br />
                <br />
                <IconFiled_wrapper>
                    {diensten_data.map((items, index) => (
                        <ul key={index}>
                            <li>
                                <Paragraph>{items.paragraph}</Paragraph>
                            </li>
                        </ul>
                    ))}
                </IconFiled_wrapper>
            </Diensten_paragraph>

            <Button_wrapper>
                <Link to="/booking">
                    <Button
                        text="IK WIL MIJN BEDRIJF OPSCHALEN"
                        background-color="#1F4668"
                        color="#F8FAF6"
                        border="none"
                        border-radius="10px"
                        font-size="16px"
                        text-align="center"
                    />
                </Link>
            </Button_wrapper>
        </Diensten_section>
    );
};

export default diensten;
