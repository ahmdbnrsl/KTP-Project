import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import Container from './container';
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const manrope = Manrope({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: 'Pertanian Pondok',
    description: 'Presensi Santri Kuliah Tani Pondok',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${manrope.className} antialiased`}>
                <Container> {children}</Container>
            </body>
        </html>
    );
}
