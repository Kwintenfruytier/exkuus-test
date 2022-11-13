import { css, Global, Theme } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { mq } from 'styles/media-query';

export const theme: Theme = {
    colors: {
        yellow: '#FFDF2B',
        offWhite: '#F3F0E9',
        black: '#31280C',
        tomatoRed: '#B56959',
        lightGreen: '#87D8A6',
    },
    fontSizes: {
        h2: '16px',
        h3: '36px',
        h4: '22px',
        p: '16px',
        h1: '24px',
        h5: '15px',
    },
};

export const GlobalStyles = () => {
    return (
        <Global
            styles={() => css`
                @import url('https://fonts.googleapis.com/css2?family=Cairo,wght@1,800&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Text+Me+One,wght@1,800&display=swap');
                body {
                    font-family: 'Cairo', sans-serif;
                    font-display: 'swap';
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .testimonial-video {
                    width: 440px;
                    height: 248px;
                }
                @media only screen and (max-width: 600px) {
                    .testimonial-video {
                        width: 100%;
                        height: 180px;
                        margin: 0 auto;
                    }
                }
                .homePoints li::marker {
                    content: '✓';
                    color: green;
                }
                .react-cookie-banner {
                    display: flex;
                    justify-content: center;
                }
                .cookie-message {
                    font-weight: 400;
                    width: 70%;
                    line-height: 20px !important;
                    margin: 10px auto;
                    ${mq['md']} {
                        margin-left: 5px;
                    }
                }
                a {
                    color: inherit;
                    text-decoration: none;
                }
                font-family: 'Text Me One', sans-serif;
                ${emotionNormalize};
            `}
        />
    );
};
