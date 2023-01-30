import Head from 'next/head';
import Image from "next/image";
import keijoy2 from "../public/Keijoy2.png";


export default function Home() {
  return (
    <>
      <Head>
        <title>Kei&apos;s CV</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className=" h-screen max-w-[600px] m-auto flex-column justify-center items-center mt-8 px-8 md:px-0">
            <div className=" flex items-center">
                <div>
                  <Image src={keijoy2} alt="profile image" width={300} height={300} className="rounded-full"/>
                </div>
                <div>
                  <h1 className=" font-Gaegu text-4xl text-[#2EC4B6] font-bold">Hi, I&apos;m Kei</h1>
                  <p className=" py-2">Pastry Chef for now</p>
                  <p className=" py-2 mb-3">Leveling up to evolve into a front-end developer and UI/UX designer</p>
                  <a className="text-[#ff9f1c]" href="https://github.com/Fuwa-Kei">GitHub</a> | <a className="text-[#ff9f1c]" href="https://portfolio-fuwa-kei.vercel.app/">Portfolio</a>
                </div>  
            </div>
            <div>
              <hr className="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6] font-bold uppercase">Skills | Tech Stack</h2>
                <p>HTML5 | CSS3 | Javascript | JQuery</p>
                <p>React.js | Next.js | Tailwind</p>
                <p>Ruby | NodeJS | ExpressJS</p>
                <p>Figma</p>
            </div>
            <div>
              <hr className="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6] font-bold uppercase">Projects</h2>
                <p>Was in charge of the UI/UX design and front-end of the following hackathon projects</p>
                <br/>
                <p>	Winner of the <br/> <span className=" text-[#2EC4B6]">Lloyds Banking Group x ShowCode Virtual Hackathon - Journey to Net Zero</span></p>
                <ul>
                  <li>Project Name: CarbonAltDelete</li>
                </ul>
                <br/> <br />
                <p>	Overall second in  <br/> <span className=" text-[#2EC4B6]">MLH Eduhacks</span></p>
                <ul>
                  <li>Project Name: StudyPerks</li>
                </ul>
            </div>
            <div>
              <hr className="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6] font-bold uppercase">Education | Career</h2>
                <p>Head Pastry chef at Kai Mayfair</p>
                <p>Computer Science at Kings College London &#40;Completed 2.5 years&#41;</p>
                <p>A-Level: AAB</p>
            </div>
            <div className="text-center">
              <hr className="mx-auto my-8 w-96 h-px bg-gray-200 border-0" /> 
                <h2 className="text-xl text-[#2EC4B6]">Contact Me</h2>
                <p className=" mb-20"><a className="text-[#ff9f1c]" href="mailto:keichan10010@gmail.com">keichan10010@gmail.com</a> | 07538267533</p>
            </div>
            <div className=" mb-10 text-center">
              <p>&#169; Kei Chan 2023</p>
            </div>

        </section>
      </main>
    </>
  )
}
