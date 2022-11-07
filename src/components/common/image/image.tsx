import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { mq } from 'styles/media-query';

const CustomImage = styled(Img)<{
    width?: string;
    tab_width?: string;
    mobile_width?: string;
}>`
    ${props => props.width && `width: ${props.width}`};
    object-position: top;

    ${(props: any) => ({ ...props })};
    ${mq['lg']} {
        ${props => props.tab_width && `width: ${props.tab_width}`};
    }
    ${mq['sm']} {
        ${props => props.mobile_width && `width: ${props.mobile_width}`};
    }
`;

export default CustomImage;
