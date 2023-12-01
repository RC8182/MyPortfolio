import { Divider } from "@/components/divider";
import { Projects } from "@/components/project-components/projects";
import '../app/globals.css'
import Link from "next/link";

export default function Home() {
  const title = 'Explore my Software Development Portfolio. Crafting Innovative Solutions';
  const title2 = " with a Focus on User Experience.";

  const about = 'About Me';
  const projectsTitle = 'Featured Cases';
  const email = 'javiervisconti@hotmail.com';
  const slogan = "Let's Create!";

  return (
    <main className="flex flex-col mx-5 items-center justify-between  text-white sm:p-4 md:p-12 lg:p-24 xl:p-32">
      <div className="main-container flex flex-col">
        <header>
          <div className="flex flex-col md:flex-row justify-between items-center my-4 md:my-5">

          </div>
        </header>

        <section className="title py-8 md:py-16">
          <div>
            <p>
              <span className="text-white sm:mx-3 sm:p-5 md:p-4 text-2xl md:text-6xl lg:text-8xl xl:text-9xl">{title}</span>
              <span className="text-blue-500 sm:p-5 md:p-4 text-2xl md:text-6xl lg:text-8xl xl:text-9xl">{title2}</span>
            </p>
          </div>
          <Divider b={'border-t-2'} my={'my-4 md:my-6'} color={'text-white'} />
        </section>

        <section className="about-me flex-col">
          <div className="about-title mx-5 py-2 md:py-4 lg:py-6 xl:py-8">
            <h2 className="sm:text-1xl md:text-4xl lg:text-6xl xl:text-8xl">{about}</h2>
            <Divider b={'border-t-2'} my={'my-4 md:my-6'} color={'text-white'} />
            <div className="max-w-6xl mx-auto bg-white p-6 rounded shadow-md text-black text-2xl" >
            <div className="flex text-center ">
              <strong>
                <h1>Junior Software Developer</h1>
              </strong>
            </div>

            <div>
            <p>
                Passionate about the world of IT and programming. I have more than 5 years of experience working as a technical support agent in multinational companies such as IBM or Lenovo.
              </p>

              <p>
                In recent years, I have focused my career in the programming sector. Currently, I have finished my training as a Front-End developer and I continue my training with the goal of becoming a Full-Stack developer.
              </p>
            </div>

            </div>
          </div>
          <div className="project-componer">

          </div>
        </section>

        <section className="projects-section flex-col">
          <div className="projects-title mx-5 sm:text-1xl md:text-4xl lg:text-6xl xl:text-8xl py-2 md:py-4 lg:py-6 xl:py-8">
            <h2>{projectsTitle}</h2>
          </div>
          <div className="project-componer">
            <Projects />
          </div>
        </section>

        <Divider b='border-t-4 md:border-t-8' my='my-4 md:my-6' color="border-blue-500" />

        <footer className="flex flex-col md:flex-row justify-between items-center">
          <div className="slogan text-2xl md:text-4xl lg:text-6xl xl:text-8xl py-2 md:py-4 lg:py-6 xl:py-8">
            <h3>{slogan}</h3>
          </div>
          <div className="contact text-sm md:text-lg lg:text-xl xl:text-2xl py-2 md:py-4 lg:py-6 xl:py-8">
            <h3 className="text-blue-500">Contact</h3>
            <h3>{email}</h3>
          </div>
          <div className="social-media text-sm md:text-lg lg:text-xl xl:text-2xl py-2 md:py-4 lg:py-6 xl:py-8">
            <h3 className="text-blue-500">Social</h3>
            <Link href={'https://www.linkedin.com/in/javier-visconti-1a5b73178/'} target="_blank" rel="noopener noreferrer">
            <h3>LinkedIn</h3>
            </Link>
            <Link href={'https://github.com/RC8182'} target="_blank" rel="noopener noreferrer" >
            <h3>Git Hub</h3>
            </Link>


          </div>
        </footer>
      </div>
    </main>
  );
}
