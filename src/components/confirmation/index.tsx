import { ConfirmationWrapper, Image_m } from './confirmation';
import Image from '@/common/image';
import { Header, P, TextBlue, H4, HeaderTitle, Paragraph } from 'styles/typography';
import TextFieldComponent from '../common/textField';
import { ReactComponent as Confirmation3 } from '../../Images/svg/confirmation3.svg';
import Button from '../common/commonButton';
import ImageButton from '../common/imageButton';
import { ReactComponent as Youtube } from 'Images/svg/youtube.svg';
import { ReactComponent as Format_quote } from 'Images/svg/format_quote.svg';

const Home = () => {
    return (
        <ConfirmationWrapper>
            <HeaderTitle>Dankjewel</HeaderTitle>
            <Image_m>
                <Image
                    filename="confirmation-banner.png"
                    alt="confirmation"
                    width="600px"
                    height="100%"
                    mobile_width="300px"
                />
            </Image_m>
            <P width_mb="100%" textAlign="center">
                Je hebt zonet de{' '}
                <TextBlue mobileFontSize="20px" fontSize="22px">
                    beste keuze
                </TextBlue>{' '}
                van jouw leven gemaakt! Je ontvangt zo dadelijk een bevestigingsmail.
            </P>
            <Image_m>
                <P width_mb="100%" textAlign="center">
                    Om jou op te warmen en te bedanken,geven we jou eeb eerste{' '}
                    <TextBlue mobileFontSize="20px" fontSize="22px">
                        gratis
                    </TextBlue>{' '}
                    trainingsvideo. Zomaar, omdat het kan.
                </P>
            </Image_m>
            <Image_m>
                <iframe
                    title="interview"
                    src="https://vod-progressive.akamaized.net/exp=1665661769~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1048%2F22%2F555242660%2F2626461625.mp4~hmac=1e50189b7144bfc1c92c3ec9bf1d9bb18563abb5468ffedaf6edb931da1bd265/vimeo-prod-skyfire-std-us/01/1048/22/555242660/2626461625.mp4"
                    width="100%"
                    style={{ marginRight: 10, marginBottom: 10 }}
                    height="455px"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                ></iframe>
                <p>Mijn levenswerk VERWOEST (geen grap)!</p>
            </Image_m>
            <a target="_blank" href="https://www.youtube.com/c/kjellfruytier" rel="noreferrer">
                <ImageButton icon={<Youtube />} text="ons youtube kanaal" />
            </a>
            <br />
            <H4 center="left">
                Liever geen video? No worries! We hebben ook een geschreven versie
            </H4>
            <ul>
                <li>
                    <Paragraph weight="400">Introductie EXKUUS en Kjell Fruytier</Paragraph>
                </li>
                <li>
                    <Paragraph weight="400">Wat we doen</Paragraph>
                </li>
                <li>
                    <Paragraph weight="400">Hoe we het doen</Paragraph>
                </li>
                <li>
                    <Paragraph weight="400">Waarom we het doen</Paragraph>
                </li>
                <li>
                    <Paragraph weight="400">Hoe zij kunnen deelnemen</Paragraph>
                </li>
            </ul>
            <Header text-align="left">wat zeggen anderen over ons?</Header>
            <br />
            <Image_m>
                <Confirmation3 />
            </Image_m>
            <br />
            <br />
            <br />
            <ImageButton
                link="/testimonials"
                icon={<Format_quote />}
                text="Ontdek meer testimonials"
            />
            <br />
            <br />
            <Header text-align="left">
                Wil je regelmatig meer tips horen? Schrijf je dan nu in op onze nieuwsletter
            </Header>
            <br />
            <br />
            <TextFieldComponent
                text="Jouw naam"
                background-color="#d9d9d9"
                color="#00000080"
                border="1px solid #1f4668"
                margin-top="25px"
                font-size="16px"
                font-weight={300}
            />
            <TextFieldComponent
                text="jouw email"
                background-color="#d9d9d9"
                color="#00000080"
                border="1px solid #1f4668"
                margin-top="25px"
                font-size="16px"
                font-weight={300}
            />
            <Button
                text="nu gratis deelnemen"
                background-color="#FFDF2B"
                color="#000000"
                border="1px solid #000000"
                font-size="16px"
                text-align="center"
                font-weight={700}
            />
            <br />
            <br />
            <br />
            <br />
        </ConfirmationWrapper>
    );
};

export default Home;
