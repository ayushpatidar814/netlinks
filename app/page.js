import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen">
      <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center px-4 py-8 md:px-10">
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center md:text-left">
            The best URL shortener in the Market
          </p>
          <p className="text-center md:text-left px-2 sm:px-6 md:px-0">
            We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
          <div className='flex gap-6 justify-center md:justify-start mt-2'>
          <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-purple-600 transition'>Try Now</button></Link>
          <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold text-white hover:bg-purple-600 transition'>GitHub</button></Link>
        </div>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-auto flex justify-center items-center">
          <Image className="mix-blend-darken object-contain" alt="an Image of a vector" src={"/vector.jpg"} width={600} height={400} priority />
        </div>

      </section>
    </main>
  );
}