import Head from 'next/head';
import Image from "next/image";
import keijoy2 from "../public/Keijoy2.png";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kei's CV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className=" h-screen flex-column justify-center items-center mt-8">
            <div className=" flex items-center">
                <div>
                  <Image src={keijoy2} alt="profile image" width={300} height={300} className="rounded-full"/>
                </div>
                <div>
                  <h1 className=" font-Gaegu text-2xl text-[#2EC4B6]">Hi, I'm Kei</h1>
                  <p className=" py-2">Pastry Chef for now</p>
                  <p className=" py-2 mb-3">Leveling up to evolve into a front-end developer and UI/UX designer</p>
                  <a className="text-[#ff9f1c]" href="https://github.com/Fuwa-Kei">GitHub</a>
                </div>  
            </div>
            <div>
              <hr class="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6]">Skills | Tech Stack</h2>
                <p>HTML5 | CSS3 | Javascript | JQuery</p>
                <p>React.js | Next.js | Tailwind</p>
                <p>NodeJS | ExpressJS</p>
            </div>
            <div>
              <hr class="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6]">Education | Career</h2>
                <p>Head Pastry chef at a Michelin star restaurant</p>
                <p>A-Level: AAB</p>
            </div>
            <div className="text-center">
              <hr class="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6]">Contact Me</h2>
                <p><a className="text-[#ff9f1c]" href="mailto:keichan10010@gmail.com">keichan10010@gmail.com</a> | 07538267533</p>
            </div>
        </section>
      </main>
    </>
  )
}
