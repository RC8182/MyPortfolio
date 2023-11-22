import { Divider } from "@/components/divider";
import { Projects } from "@/components/project-components/projects";

export default function Home() {
  const title = 'Explore my Software Development Portfolio. Crafting Innovative Solutions';
  const title2 = "with a Focus on User Experience.";
  const icon = 'RC8182';
  const about = 'About';
  const projectsTitle = 'Featured Cases';
  const email = 'javiervisconti@hotmail.com';
  const slogan = "Let's Create!";

  return (
    <main className="flex flex-col items-center justify-between text-white sm:p-4 md:p-12 lg:p-24 xl:p-32">
      <div className="main-container flex flex-col">
        <header>
          <div className="flex flex-col md:flex-row justify-between items-center my-4 md:my-9">
            <div className="icon sm:text-2xl md:text-4xl lg:text-6xl ">{icon}</div>
            <div className="about hover:text-blue-500 text-lg md:text-xl lg:text-2xl xl:text-3xl">{about}</div>
          </div>
        </header>

        <section className="title py-8 md:py-16">
          <div>
            <p>
              <span className="text-white sm:p-5 md:p-4 text-2xl md:text-6xl lg:text-8xl xl:text-9xl">{title}</span>
              <span className="text-blue-500 sm:p-5 md:p-4 text-2xl md:text-6xl lg:text-8xl xl:text-9xl">{title2}</span>
            </p>
          </div>
          <Divider b={'border-t-2'} my={'my-4 md:my-6'} color={'text-white'} />
        </section>

        <section className="projects-section flex-col">
          <div className="projects-title text-2xl md:text-4xl lg:text-6xl xl:text-8xl py-2 md:py-4 lg:py-6 xl:py-8">
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
            <h3>LinkedIn</h3>
            <h3>Git Hub</h3>
          </div>
        </footer>
      </div>
    </main>
  );
}
