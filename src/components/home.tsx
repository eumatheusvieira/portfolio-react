import logo from '../assets/home-img.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'

export function Home() {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-center gap-24 py-16'>
            <div className='flex flex-col items-center text-center lg:text-left lg:items-start gap-2'>
                <h1 className='font-bold text-3xl'>OLÁ, EU SOU <br /> MATHEUS ROCHA! <br /> FULLSTACK DEVELOPER</h1>
                <button className="bg-black text-white px-12 py-3 rounded-2xl font-bold  hover:bg-black/80">BAIXAR CV</button>
                <div className='flex flex-row w-28 gap-2 mt-2'>
                    <a href="https://github.com/eumatheusvieira" target='_blank'><img src={github}/></a>
                    <a href="https://www.instagram.com/eumatheusvieira/" target='_blank'><img src={instagram}/></a>
                    <a href="https://www.linkedin.com/in/eumatheusvieira/" target='_blank'><img src={linkedin}/></a>
                </div>

            </div>
            <img className="size-1/3 hidden lg:block" src={logo} />
        </div>
    )
}