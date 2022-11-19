/* eslint-disable @typescript-eslint/no-explicit-any */
import { cloneElement } from 'react';
import { LayoutProvider } from 'layouts/LayoutProvider';
import { DefaultLayout } from 'layouts/DefaultLayout';
import type { GatsbyBrowser } from 'gatsby';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return <LayoutProvider>{element}</LayoutProvider>;
};

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => {
    if ((element.type as any).Layout === false) {
        return cloneElement(element, props);
    }
    const Layout = (element.type as any).Layout ?? DefaultLayout;
    return <Layout {...props}>{element}</Layout>;
};
