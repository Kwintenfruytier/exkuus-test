/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement, React } from 'react';
import { LayoutProvider } from 'layouts/LayoutProvider';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { GatsbySSR } from 'gatsby';
import { Script, ScriptStrategy } from 'gatsby';
import '@fontsource/cairo';
import '@fontsource/text-me-one';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
    return <LayoutProvider>{element}</LayoutProvider>;
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
    if ((element.type as any).Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = (element.type as any).Layout ?? DefaultLayout;
    return (
        <Layout {...props}>
            {element}
            <Script src="https://fonts.googleapis.com/css2?family=Text+Me+One&display=swap" />
            <Script src="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900;1000&display=swap" />
        </Layout>
    );
};
