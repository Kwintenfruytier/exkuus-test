import Image from '@/common/image';
import { Icon, SocialIcon } from '../footer';
import React from 'react';
export const SocialIcons = () => (
    <>
        <SocialIcon>
            <a target="_blank" href="https://www.tiktok.com/@kjellfruytier" rel="noreferrer">
                <Icon>
                    <Image
                        filename="tiktok.png"
                        alt="tiktok_logo"
                        width="30px"
                        mobile_width="25px"
                    />
                </Icon>
            </a>
            <a target="_blank" href="https://www.facebook.com/kjellfruytier/" rel="noreferrer">
                <Icon>
                    <Image
                        filename="facebook.png"
                        alt="facebook_logo"
                        width="30px"
                        mobile_width="25px"
                    />
                </Icon>
            </a>
            <a target="_blank" href="https://www.instagram.com/kjellfruytier/" rel="noreferrer">
                <Icon>
                    <Image
                        filename="insta_net_log.png"
                        alt="instagram_logo"
                        width="35px"
                        mobile_width="30px"
                    />
                </Icon>
            </a>
            <a target="_blank" href="https://www.youtube.com/c/kjellfruytier" rel="noreferrer">
                <Icon>
                    <Image
                        filename="youtube.png"
                        alt="youTube_logo"
                        width="30px"
                        mobile_width="25px"
                    />
                </Icon>
            </a>
        </SocialIcon>
    </>
);
