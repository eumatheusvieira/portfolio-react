import { Header } from "./components/header";
import { Home } from "./components/home";
import { Projects } from "./components/projects";

export function App() {
  return (
    <div className=" font-poppins overflow-hidden">
          <Header />
          <Home />
          <Projects />
    </div>
  )
}
