import React, { lazy, Suspense } from 'react';
import { FieldIcon, Logo, Paragraph } from './Iconfiled';
const MaterialIcon = lazy(() => import('material-icons-react'));

const IconField = ({ icon, paragraph, marginleft, color }: any) => {
    return (
        <Suspense fallback={<div />}>
            <FieldIcon>
                <Logo>
                    {typeof window !== 'undefined' ? (
                        <MaterialIcon icon={icon} color={color} size={36} />
                    ) : null}
                </Logo>
                <Paragraph marginleft={marginleft}>{paragraph}</Paragraph>
            </FieldIcon>
        </Suspense>
    );
};

export default IconField;
