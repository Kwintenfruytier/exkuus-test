import { NotFoundWrapper, BtnWrapper, NotfoundImage } from './notFound';
import Image from '@/common/image';
import { Header } from 'styles/typography';
import Button from '../common/commonButton';
import { Link } from 'gatsby';

const NotFoundPage = () => {
    return (
        <NotFoundWrapper>
            <Image filename="error.png" alt="404 error" width="186px" />

            <Header>
                Oh nee! Deze pagina blijkt niet te bestaan <span>:(</span>
            </Header>
            <NotfoundImage>
                <Image
                    filename="404.png"
                    alt="404 afbeelding"
                    width="500px"
                    height="100%"
                    mobile_width="300px"
                />
            </NotfoundImage>

            <Header weight="700">
                Maak je geen zorgen! hier zijn enkele links die je kunnen helpen:
            </Header>
            <BtnWrapper>
                <Link to="/afspraak">
                    <Button
                        text="Maak afspraak"
                        background-color="#FFDF2B"
                        color="#000000"
                        border="1px solid #000000"
                        font-size="15px"
                        text-transform="uppercase"
                        margin-top="35px"
                    />
                </Link>
            </BtnWrapper>
            <BtnWrapper>
                <Link to="/">
                    <Button
                        text="terug naar home"
                        background-color="white"
                        color="#000000"
                        border="1px solid #000000"
                        font-size="15px"
                        text-transform="uppercase"
                        margin-top="30px"
                    />
                </Link>
            </BtnWrapper>
        </NotFoundWrapper>
    );
};

export default NotFoundPage;
