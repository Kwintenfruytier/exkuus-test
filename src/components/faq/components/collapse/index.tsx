import { ReactComponent as ArrowRight } from '../../../../Images/svg/arrow_right.svg';
import { ReactComponent as ArrowDown } from '../../../../Images/svg/expand-m.svg';
import { ReactComponent as Close } from '../../../../Images/svg/c-close.svg';
import React, { useState } from 'react';
import { Collapse_Paragraph, Logo_close } from 'styles/typography';
import {
    Logo,
    Collapse_,
    Faq_div,
    ArrowContainer,
    Answer,
    Faq,
    Answer_wraper,
    Answer_desc,
} from './collapse';

const Collapse = ({ question, answer }: any) => {
    const [toggle, setToggle] = useState(false);

    const toggleIsLoading = () => {
        setToggle(current => !current);
    };

    return (
        <Faq>
            <Faq_div>
                <Answer_wraper data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    <Collapse_ onClick={toggleIsLoading}>
                        <Logo_close>
                            <Close />
                        </Logo_close>
                        <Collapse_Paragraph>{question}</Collapse_Paragraph>
                    </Collapse_>
                    <Answer>{toggle && <Answer_desc>{answer}</Answer_desc>}</Answer>
                </Answer_wraper>
                <ArrowContainer>
                    <Logo>{toggle ? <ArrowDown /> : <ArrowRight />}</Logo>
                </ArrowContainer>
            </Faq_div>
        </Faq>
    );
};

export default Collapse;
