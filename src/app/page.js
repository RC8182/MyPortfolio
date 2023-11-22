import { Divider } from "@/components/divider";
import { Projects } from "@/components/project-components/projects";

export default function Home() {
  const title = 'Welcome to my design portfolio. I specialize in crafting';
  const title2 = "experiences in UI/UX and Graphic Design.";
  const icon = 'RC8182';
  const about = 'About';
  const projectsTitle='Featured Cases';
  const email='javiervisconti@hotmail.com';
  const slogan="Let's Create!" 

  return (
    <main className="flex flex-col items-center justify-between text-white p-24 py-10" >
      <div className="main-container flex flex-col">
        <header>
          <div className="flex justify-between  my-9">
            <div className="icon">{icon}</div>
            <div className="about hover:text-blue-500">{about}</div>
          </div>
        </header>

        <section className="title py-16">
          <div>
            <p>
              <span className="text-white text-9xl">{title}</span>
              <span className="text-blue-500 p-4 text-9xl">{title2}</span>
            </p>
          </div>
            <Divider b={'border-t-2'} my={'my-6'} color={'text-white'}/>
            <div className="email">{email}</div>
        </section>

        <section className="projects-section flex-col">
          <div className="projects-title text-8xl py-6">
            <h2>{projectsTitle}</h2>
          </div>
          <div className="project-componer ">
            <Projects />
          </div>
        </section>

        <Divider b='border-t-8' my='my-6' color="border-blue-500"/>
        <footer className="flex justify-between">
        
          <div className="slogan text-8xl">
            <h3>{slogan}</h3>
          </div>
          <div className="contact flex-col" >
            <h3 className="text-blue-500">Contact</h3>
            <h3>javiervisconti@hotmail.com</h3>
          </div>
          <div className="social-media flex-col">
          <h3 className="text-blue-500">Social</h3>
            <h3>LinkedIn</h3>
            <h3>Git Hub</h3>

          </div>
        </footer>
      </div>
    </main>
  );
}
