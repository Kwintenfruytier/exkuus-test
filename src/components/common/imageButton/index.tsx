import { Button, Flex } from './imageButton';
import { Link } from 'gatsby';
interface Props {
    text?: string;
    icon?: any;
    link?: string;
    [rest: string]: any;
}

const ImageButton = ({ text, icon, width, link, ...rest }: Props) => {
    return (
        <Link to={link || ''}>
            <Flex width={width}>
                {icon}
                <Button {...rest}>{text}</Button>
            </Flex>
        </Link>
    );
};

export default ImageButton;
