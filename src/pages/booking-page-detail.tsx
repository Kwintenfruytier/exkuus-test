import { DefaultLayout } from 'layouts/DefaultLayout';
import BookingDetail from 'components/bookingDetail';

const BookingDetailPage: Page = () => (
    <main>
        <BookingDetail />
    </main>
);

BookingDetailPage.Layout = DefaultLayout;

export default BookingDetailPage;
