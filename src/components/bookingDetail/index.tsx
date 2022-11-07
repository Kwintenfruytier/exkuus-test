import {
    BookingDetailWrapper,
    Wrap,
    MR,
    SeperatorThin,
    Grid,
    LeftGrid,
    RightGrid,
    C,
} from './bookingDetail';
import Image from '@/common/image';
import { HeaderTitle, ContentV2, P, TextYellow } from 'styles/typography';
import { AdornmentWrapper, TopAdornment } from 'components/contact/contact';
import {} from 'layouts/components/footer';
import TextFieldComponent from '../common/textField';
import Button from '../common/commonButton';

const BookingDetail = () => {
    return (
        <BookingDetailWrapper>
            <Grid>
                <LeftGrid>
                    <HeaderTitle>TITEL MEETING</HeaderTitle>
                    <ContentV2 color="#00000080" margin-bottom="10px" margin-top="30px">
                        Lengte afspraak
                    </ContentV2>
                    <Wrap>
                        <MR>
                            <Image filename="calender.png" alt="icon" width="15px" height="15px" />
                        </MR>
                        <ContentV2>15:30-16:00, vrijdag, 19 augustus</ContentV2>
                    </Wrap>
                </LeftGrid>
                <RightGrid>
                    <SeperatorThin />
                    <TopAdornment>
                        <C>Details</C>
                    </TopAdornment>
                    <AdornmentWrapper>
                        <TopAdornment>Name *</TopAdornment>
                    </AdornmentWrapper>
                    <TextFieldComponent
                        background-color="none"
                        color="#00000080"
                        border="2px solid #FFDF2B"
                        font-size="22px"
                        font-weight={300}
                        m_width="300px"
                    />
                    <AdornmentWrapper>
                        <TopAdornment>Email *</TopAdornment>
                    </AdornmentWrapper>
                    <TextFieldComponent
                        background-color="none"
                        color="#00000080"
                        border="2px solid #FFDF2B"
                        font-size="22px"
                        font-weight={300}
                        m_width="300px"
                    />
                    <AdornmentWrapper>
                        <TopAdornment>GSM *</TopAdornment>
                    </AdornmentWrapper>
                    <TextFieldComponent
                        background-color="none"
                        color="#00000080"
                        border="2px solid #FFDF2B"
                        font-size="22px"
                        font-weight={300}
                        m_width="300px"
                    />
                    <AdornmentWrapper>
                        <TopAdornment>Vraag 1</TopAdornment>
                    </AdornmentWrapper>
                    <TextFieldComponent
                        background-color="none"
                        color="#00000080"
                        border="2px solid #FFDF2B"
                        font-size="22px"
                        font-weight={300}
                        m_width="300px"
                    />
                    <AdornmentWrapper>
                        <TopAdornment>Vraag 2</TopAdornment>
                    </AdornmentWrapper>
                    <TextFieldComponent
                        background-color="none"
                        color="#00000080"
                        border="2px solid #FFDF2B"
                        font-size="22px"
                        font-weight={300}
                        m_width="300px"
                    />
                    <C>
                        <Button
                            text="Boek nu"
                            background-color="#1F4668"
                            color="#F8FAF6"
                            border="none"
                            border-radius="10px"
                            font-size="16px"
                            text-align="center"
                            margin-top="25px"
                        />
                    </C>
                </RightGrid>
            </Grid>
        </BookingDetailWrapper>
    );
};

export default BookingDetail;
