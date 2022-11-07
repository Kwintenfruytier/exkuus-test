import { DefaultLayout } from 'layouts/DefaultLayout';
import Testimonials from 'components/testimonials';

const TestimonialsPage: Page = () => (
    <main>
        <Testimonials />
    </main>
);

TestimonialsPage.Layout = DefaultLayout;

export default TestimonialsPage;
