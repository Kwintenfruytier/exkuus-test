import React from 'react';
import Collapse from '@/faq/components/collapse';
import { Heading } from '../components/diensten/components/hero_section/hero';
import { Faq_main, Header, Heading_width } from 'styles/typography';
import Image from '@/common/image';
import Button from '../components/common/commonButton';
import { faq_data } from 'constant/faq';
import { Link } from 'gatsby';
const Faq = () => {
    return (
        <main>
            <Faq_main>
                <Heading_width>
                    <Heading
                        data-sal="fade"
                        data-sal-easing="ease-in"
                        data-sal-duration="3000ms"
                        data-sal-delay="1000ms"
                    >
                        Al jouw meest gestelde vragen op een rijtje
                    </Heading>
                </Heading_width>
                <div>
                    <Image
                        filename="faq1.png"
                        alt="2 mensen praten en zoeken informatie"
                        width="450px"
                        height="100%"
                        tab_width="250px"
                        mobile_width="280px"
                    />
                </div>
            </Faq_main>
            <br />
            {faq_data.map((item, i) => (
                <Collapse
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                    question={item.question}
                    answer={item.answer}
                    key={i}
                />
            ))}

            <div style={{ display: 'grid', justifyContent: 'center', margin: '50px 0' }}>
                <Header
                    text-align="left"
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                >
                    Zit jouw vraag er niet
                    <br /> tussen? Don’t worry! Je kan
                    <br /> ons altijd contacteren!
                </Header>
                <Link
                    to="/contact"
                    style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}
                >
                    <Button
                        text="Contacteer ons"
                        background-color="#1F4668"
                        color="#F8FAF6"
                        border="none"
                        border-radius="10px"
                        font-size="18px"
                        text-align="center"
                        width="80%"
                        margin="50px auto"
                    />
                </Link>
            </div>
        </main>
    );
};

export default Faq;
