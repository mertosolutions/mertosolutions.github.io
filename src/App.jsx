import Intro from './components/Intro.jsx';
import Divider from './components/Divider.jsx';
import Chrome from './components/Chrome.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import Pipeline from './components/Pipeline.jsx';
import Stack from './components/Stack.jsx';
import Process from './components/Process.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Intro />
      <Chrome />
      <Hero />
      <Divider />
      <Services />
      <Pipeline />
      <Divider />
      <Stack />
      <Process />
      <Divider />
      <Contact />
      <footer>© {new Date().getFullYear()} Merto Solutions · Built with React.</footer>
    </>
  );
}
