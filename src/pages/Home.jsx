/* eslint-disable react/no-unknown-property */
import Hero from '../components/Hero'
import Ivory from '../components/Ivory';
import Info from '../components/Info';

const Home = () => {
    return (
        <main className="relative w-full overflow-x-hidden bg-transparent text-white">
            <Ivory />

            <section className="relative z-10 min-h-screen">
                <Hero />
            </section>

            <section id="info" className="relative z-10 flex min-h-screen w-full items-center justify-center md:px-10">
                <Info />
            </section>
        </main>
    );
};

export default Home;
