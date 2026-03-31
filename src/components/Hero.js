import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Build Modern Websites <br />
                        <span className="text-blue-600">With Next.js</span>
                    </h1>

                    <p className="mt-6 text-gray-600">
                        We create fast, scalable, and SEO-friendly web applications
                        using the latest technologies.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                            Get Started
                        </button>

                        <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <Image
                        src="/bird.jpeg" 
                        alt="Hero Image"
                        width={500}
                        height={400}
                        className="rounded-xl"
                    />
                </div>

            </div>
        </section>
    );
}