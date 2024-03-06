import { Raleway, Lora, Tilt_Neon } from 'next/font/google';
import { AppProps } from 'next/app';
import '../styles/globals.css';

const raleway = Raleway({
    subsets: ['latin'],
    variable: "--font-raleway"
});
const lora = Lora({
    subsets: ['latin'],
    variable: "--font-lora"
});
const tilt_neon = Tilt_Neon({
    subsets: ['latin'],
    variable: "--font-tilt-neon"
});

function MyApp({ Component, pageProps }: AppProps) {
    console.log('myapp is being mounted...')
    return (
        <main className={`${raleway.variable} font-sans`}>
            <Component {...pageProps} />
        </main>
    );
}

export default MyApp;