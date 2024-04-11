import logo from '../assets/home-img.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import { ReactTyped } from "react-typed";

export function Home() {
    const titulos = <ReactTyped
        strings={[
            "DESENVOLVEDOR FULL STACK",
            "AMANTE DA PROGRAMAÇÃO",
            "DISPOSTO A APRENDER",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop
    />
    return (
        <div className='flex flex-col items-center justify-center mt-44 px-50'>
            <div className='flex flex-col items-center text-center gap-2'>
                <h1 className='font-bold text-2xl'>OLÁ, EU SOU <br /> MATHEUS ROCHA! <br /> {titulos}</h1>

                <button className="bg-black text-white px-12 py-3 rounded-2xl font-bold  hover:bg-black/80">BAIXAR CV</button>
                <div className='flex flex-row w-32 gap-2 mt-2'>
                    <a href="https://github.com/eumatheusvieira" target='_blank'><img src={github} /></a>
                    <a href="https://www.instagram.com/eumatheusvieira/" target='_blank'><img src={instagram} /></a>
                    <a href="https://www.linkedin.com/in/eumatheusvieira/" target='_blank'><img src={linkedin} /></a>
                </div>

            </div>
        </div>
    )
}