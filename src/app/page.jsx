import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LandingPage from "../components/LandingPage";
import Section from '../components/Section';

export default function Home() {
    return (
        <>
            <Head>
                <link rel="icon" href="/assets/logo.png" className='rounded-lg ' />
            </Head>
            <div className="min-h-screen flex flex-col bg-amber-100 ">
                <Header />
                <LandingPage />

                <main className="flex-grow">
                    <Section type="hero" />
                    <Section type="how-it-works" title="How It Works -" />
                    {/* <Section type="featured-games" title="Featured Games" /> */}
                    {/* <Section type="testimonials" title="What Our Users Say" /> */}
                    {/* <Section type="news" title="Latest News and Articles" /> */}
                    <Section type="faqs" />
                    <Section type="contact" />
                </main>
                <Footer />
            </div>
        </>
    );
}
