import React, { lazy, Suspense } from 'react';
import { FieldIcon, Logo, Paragraph } from './Iconfiled';
const MaterialIcon = lazy(() => import('material-icons-react'));

const IconField = ({ icon, paragraph, marginleft, color }: any) => {
    return (
        <Suspense fallback={<div />}>
            <FieldIcon>
                <Logo data-sal="fade" data-sal-easing="ease-in" data-sal-duration="3000ms">
                    {typeof window !== 'undefined' ? (
                        <MaterialIcon icon={icon} color={color} size={36} />
                    ) : null}
                </Logo>
                <Paragraph
                    data-sal="fade"
                    data-sal-easing="ease-in"
                    data-sal-duration="3000ms"
                    marginleft={marginleft}
                >
                    {paragraph}
                </Paragraph>
            </FieldIcon>
        </Suspense>
    );
};

export default IconField;
