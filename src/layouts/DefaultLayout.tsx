import { useState } from 'react';
import Footer from './components/footer/';
import Header from './components/header';
import { Container, Layout } from './layout';
import CookieBanner from 'react-cookie-banner';
export const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarOpen, setsidebarOpen] = useState(false);
    return (
        <Layout sidebar={sidebarOpen}>
            <Header setOpenModal={setsidebarOpen} openModal={sidebarOpen} />
            <Container>{children}</Container>
            <Footer />
            <CookieBanner
                styles={{
                    banner: { position: 'absolute', bottom: 0, height: 'auto' },
                }}
                message="Yes, we use cookies. If you don't like it change website, we won't miss you!"
                onAccept={() => {}}
                cookie="user-has-accepted-cookies"
            />
        </Layout>
    );
};
