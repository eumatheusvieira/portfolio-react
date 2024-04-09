import { Header } from "./components/header";
import { Home } from "./components/home";
import { Projects } from "./components/projects";

export function App() {
  return (
    <div className="px-8 py-4 font-poppins ">
          <Header />
          <Home />
          <Projects />
    </div>
  )
}
