import {
    OverOnsWrapper,
    Main,
    MainComp,
    VerticalTags,
    Tag,
    Connector,
    Line,
    Clip,
    Rotate,
    Teams,
    Members,
    Member_Img,
    MemberIntro,
    Arrow,
    Connector2,
} from './overOns';
import Image from '@/common/image';
import { Header, TextBlue, P } from 'styles/typography';
import Button from '../common/commonButton';
import { Link } from 'gatsby';
import { ReactComponent as Over_One } from 'Images/svg/overone.svg';

const OverOne = () => {
    return (
        <OverOnsWrapper>
            <Header width="100%">
                waar staan we
                <br /> voor?
            </Header>
            <Main>
                <MainComp position="absolute" top="100px" m_top="200px" align="end">
                    <Over_One />
                </MainComp>
                <MainComp>
                    <P width_mb="100%">
                        <TextBlue fontWeight="700">MISSIE</TextBlue>
                    </P>
                    <P size="18px" width_mb="100%">
                        Om eender welke Vlaming met eender welke achtergrond te begeleiden,
                        ondersteunen en coachen naar een betere gedachtengang (mindset) om
                        uiteindelik de touwfjes zelf in handen te nemen (te leiden in plats van
                        geleid te worden) en een eigen bedriff op te zetten (om het leven te leiden
                        waarvan zij ECHT gelukkig worden). <br />{' '}
                        <TextBlue mobileFontSize="20px" fontSize="22px">
                            Beginnend met 1 miljoen.
                        </TextBlue>
                    </P>
                </MainComp>
                <MainComp>
                    <P width_mb="100%">
                        <TextBlue fontWeight="700">VISIE</TextBlue>
                    </P>
                    <P size="18px" width_mb="100%">
                        Het denkpatroon en de conditioneringen van de mens veranderen zodat ze
                        kunnen losbreken van het traditioneel system en de beste en gelukkigste
                        versie van zichzelf worden.
                    </P>
                </MainComp>
                <MainComp>
                    <P width_mb="100%">
                        <TextBlue fontWeight="700">ONZE WAARDEN</TextBlue>
                    </P>
                    <P size="18px" width_mb="100%">
                        <ul>
                            <li>
                                Focus op <strong>klantresultaten</strong> en de rest volgt vanzelf{' '}
                            </li>
                            <li>
                                Practice what you preach -<strong> Lead by example</strong>
                            </li>
                            <li>Doe niet bij een ander wat je zelf niet wilt</li>
                            <li>
                                <strong>Loyaliteit </strong> en <strong>eerlijkheid </strong>zijn
                                cruciaal Educatie zo interactief en
                                <strong> fun</strong> mogelijk maken
                            </li>
                        </ul>
                    </P>
                </MainComp>
            </Main>
            <Header width="100%" mb="50px">
                ons verhaal tot nu...
            </Header>

            <VerticalTags>
                <Tag bg="#FFDF2B">
                    <P
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        mobileSize="12px"
                    >
                        Kjell digitaal marketeer
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#FFDF2B">
                    <Rotate top="50%">2018</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        textAlign_mob="center"
                    >
                        Opleidingstraject marketing
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">maart 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#FFDF2B">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                    >
                        Oprichting EXKUUS samen met Nomi
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#FFDF2B">
                    <Rotate>augustus 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                    >
                        Elysium Coaching
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">december 2020</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#FFDF2B">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                    >
                        Tesla
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#FFDF2B">
                    <Rotate>februari 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                    >
                        Succescoach Ilias
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">juni 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#1270B0">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        color="white"
                    >
                        Two Comma Club Award
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1270B0">
                    <Rotate color="white">september 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        width_mb="120px"
                        textAlign_mob="center"
                    >
                        Tattoo EXKUUS vereeuwigd op ons lichaam
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">oktober 2021 </Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#1270B0">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        color="white"
                    >
                        Marathon voor het goede doel
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1270B0">
                    <Rotate color="white">november 2021</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                    >
                        LIVE evenement Elysium Coaching
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">januari 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#1270B0">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        color="white"
                    >
                        YouTube kanaal
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1270B0">
                    <Rotate color="white">februari 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                    >
                        TikTok kanaal
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">maart 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#1270B0">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        color="white"
                    >
                        Mastermind
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1270B0">
                    <Rotate color="white">juni 2022 </Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags direction="row-reverse" justify="end" mb_margin="70px">
                <Tag bg="#1F4668" color="white">
                    <P
                        tabletSize="12px"
                        mobileSize="12px"
                        textAlign="center"
                        color="white"
                        width_mb="100%"
                        textAlign_mob="center"
                    >
                        Anderzom
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#1F4668" margin="-2px">
                    <Rotate color="white">augustus 2022</Rotate>
                </Line>
            </VerticalTags>
            <Connector2 />

            <VerticalTags>
                <Tag bg="#16a1fa">
                    <P
                        mobileSize="12px"
                        textAlign="center"
                        width_mb="100%"
                        textAlign_mob="center"
                        tabletSize="12px"
                        color="white"
                    >
                        KMO-Portefeuille
                    </P>
                </Tag>
                <Connector>
                    <Clip></Clip>
                </Connector>
                <Line bg="#16a1fa">
                    <Rotate color="white">oktober 2022 </Rotate>
                </Line>
            </VerticalTags>

            <Arrow />

            <Header width="100%">ons team</Header>
            <Teams>
                <Members>
                    <Member_Img>
                        <Image
                            filename="kjell.jpeg"
                            alt="logo"
                            width="100%"
                            height="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        />
                    </Member_Img>
                    <MemberIntro bg="#1F4668">
                        <P
                            size="19px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        >
                            KJELL
                        </P>
                        <P
                            size="16px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        >
                            De drijvende kracht achter EXKUUS. Als “Content Creator” en “Face of”
                            representeer ik mijn bedrijf met hart en ziel, dit is mijn kind.
                            Motiveren, inspireren en creativiteit schenken aan ieder ambitieus
                            individu, dat is waar mijn roeping en mijn passie liggen, elke dag
                            opnieuw.
                        </P>
                    </MemberIntro>
                </Members>
                <Members>
                    <Member_Img>
                        <Image
                            filename="nomi-2.jpg"
                            alt="logo"
                            width="100%"
                            height="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        />
                    </Member_Img>
                    <MemberIntro bg="#1270B0">
                        <P
                            size="19px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        >
                            NOMI
                        </P>
                        <P
                            size="16px"
                            color="white"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        >
                            De ‘yang’ naast de ‘yin’, het tweede zadel van de tandem, maar vooral de
                            rust zich zelve achter de schermen bij EXKUUS. Als “Head of Operations”
                            gaat mijn focus naar het reilen en zeilen van alle operatieve taken
                            binnen ons bedrijf. Nauw en persoonlijk contact met onze klanten zorgt
                            voor een betere beleving en resultaten, deze vormen op hun beurt mijn
                            allergrootste drive.
                        </P>
                    </MemberIntro>
                </Members>
                <Members>
                    <Member_Img>
                        <Image
                            filename="ilias-2.jpg"
                            alt="logo"
                            width="100%"
                            height="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        />
                    </Member_Img>
                    <MemberIntro bg="#FFDF2B">
                        <P
                            size="19px"
                            color="black"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        >
                            ILIAS
                        </P>
                        <P
                            size="16px"
                            color="black"
                            width_mb="100%"
                            textAlign="center"
                            textAlign_mob="center"
                        >
                            De rechterhand van Kjell die instaat voor alles dat te maken heeft met
                            het ondersteunen, motiveren, inspireren en accountable houden van
                            klanten. Hij staat vol enthousiasme 24/7 paraat voor iedere cursist.
                            Anderen helpen is zijn grootste drijfveer.
                        </P>
                    </MemberIntro>
                </Members>
            </Teams>
            <Link to="/booking">
                <Button
                    text="Ik maak een afspraak"
                    background-color="#FFDF2B"
                    color="#000000"
                    border="1px solid #000000"
                    font-size="15px"
                    text-transform="uppercase"
                    margin-top="100px"
                    margin-bottom="100px"
                />
            </Link>
        </OverOnsWrapper>
    );
};

export default OverOne;
