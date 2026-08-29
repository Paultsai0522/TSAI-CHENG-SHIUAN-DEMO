import React from 'react'

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            <div className="group absolute bottom-4 left-4 w-[min(36rem,calc(100%-2rem))] p-4">
                <div className="inline-block">
                    <h1 className="cursor-default text-4xl font-bold text-gray-300 font-tomorrow">Orbit of Recursions</h1>
                    <span className="animate-hero-underline mt-4 block h-px w-12 origin-left bg-gray-300 transition-[width] duration-700 ease-out group-hover:w-full group-hover:animate-none group-hover:opacity-100" />
                </div>
                <div className="mt-2 max-h-0 translate-y-4 overflow-hidden opacity-0 transition-[max-height,opacity,transform] duration-10000 ease-out group-hover:max-h-96 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="mt-2 text-m text-gray-300">
                        This digital artwork reinterprets a Carved Openwork Concentric Ivory Balls decoration from the National Palace Museum through computational design. The project translates the artifact&apos;s intricate, nested spheres into a parametric system that generates layered geometries and adjustable openwork patterns. Subdivision methods refine the base mesh, producing textured surfaces and complex lattice structures reminiscent of traditional carving.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero
