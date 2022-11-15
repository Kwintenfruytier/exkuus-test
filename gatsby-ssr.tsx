/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement } from 'react';
import { LayoutProvider } from 'layouts/LayoutProvider';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { GatsbySSR } from 'gatsby';

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
    return <LayoutProvider>{element}</LayoutProvider>;
};

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element, props }) => {
    if ((element.type as any).Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = (element.type as any).Layout ?? DefaultLayout;
    return <Layout {...props}>{element}</Layout>;
};

export async function getServerData() {
    return {
        headers: {
            'Cache-Control': 'public, max-age=10, s-maxage=60, stale-while-revalidate=240',
        },
    };
}
