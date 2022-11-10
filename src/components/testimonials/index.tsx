import {
    TestimonialWrapper,
    QuoteWrapper,
    Quote,
    ScrollWrapper,
    VideoWrapper,
    FlexCol,
} from './testimonials';
import { Header, TextBlue } from 'styles/typography';
import Button from '@/common/commonButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper';
import Image from 'components/common/image';
import { screenshots, videos, quotes } from 'constant/testimonial';
import { Link } from 'gatsby';

const Testimonials = () => {
    return (
        <TestimonialWrapper>
            <Header text-align="left" maxWidth="70%">
                Zij hebben alvast financiële vrijheid en persoonlijk succes gevonden:
            </Header>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3}>
                {quotes.map((quote, index) => (
                    <SwiperSlide key={index}>
                        <Quote bg={quote.bg} color={quote.color}>
                            <FlexCol>
                                <span
                                    style={{
                                        paddingBottom: '5px',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    &#10075;&#10075;
                                    <div
                                        style={{
                                            fontSize: '16px',
                                            color: quote.color,
                                            marginTop: '-5px',
                                        }}
                                    >
                                        {quote.name}
                                    </div>
                                    &#10076;&#10076;
                                </span>
                                <span style={{ fontStyle: 'italic' }}>{quote.name2}</span>
                            </FlexCol>
                        </Quote>
                    </SwiperSlide>
                ))}
            </Swiper>

            <ScrollWrapper className="no-scrollbar">
                <QuoteWrapper>
                    {quotes.map((quote, index) => (
                        <Quote key={index} bg={quote.bg} color={quote.color}>
                            <FlexCol>
                                <span>{quote.name}</span>
                                <span>{quote.name2}</span>
                            </FlexCol>
                        </Quote>
                    ))}
                </QuoteWrapper>
            </ScrollWrapper>
            <Header text-align="left">... Ze vertellen je graag iets meer</Header>
            <br />
            <br />
            <VideoWrapper>
                {videos.map((video, index) => (
                    <iframe
                        title={`video${index}`}
                        className="testimonial-video"
                        key={index}
                        src={video.link}
                        style={{ marginRight: 10, marginBottom: 10 }}
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        alt="testimonial video"
                    ></iframe>
                ))}
            </VideoWrapper>
            <Header text-align="left">Er zijn er nog!</Header>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={3}>
                {screenshots.map((screenshot, index) => (
                    <SwiperSlide key={index}>
                        <Quote height="300px" bg={screenshot.bg} color={screenshot.color}>
                            <Image
                                filename={screenshot.name}
                                alt="screenshot testimonial"
                                width="100%"
                            />
                        </Quote>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ScrollWrapper className="no-scrollbar">
                <QuoteWrapper>
                    {screenshots.map((screenshot, index) => (
                        <Quote
                            key={index}
                            height="260px"
                            bg={screenshot.bg}
                            color={screenshot.color}
                        >
                            <Image
                                filename={screenshot.name}
                                alt="screenshot testimonial"
                                width="100%"
                            />
                        </Quote>
                    ))}
                </QuoteWrapper>
            </ScrollWrapper>

            <Header maxWidth="476px" text-align="left">
                Waar wacht jij nog op? Ben je ook klaar om{' '}
                <TextBlue fontSize="1.1em">échte financiële vrijheid</TextBlue> te ervaren?
            </Header>

            <Link to="/afspraak">
                <Button
                    text="IK BEN KLAAR OM MIJN LEVEN TE VERANDEREN"
                    background-color="#FFDF2B"
                    color="#000000"
                    border="1px solid #000000"
                    font-size="17px"
                    text-align="center"
                    margin-top="3rem"
                />
            </Link>
        </TestimonialWrapper>
    );
};

export default Testimonials;
