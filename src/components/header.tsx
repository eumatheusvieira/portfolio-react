import { useState } from "react"
import { FaAlignJustify } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

export function Header(this: any) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <header className="bg-white px-8 py-4">
            <nav className=" flex justify-between items-center w-[102%]">
                <div>
                    <a className="font-bold text-xl" href="#">MATHEUS ROCHA</a>
                </div>
                <div className={click === true ? 'lg:static bg-white lg:bg-transparent drop-shadow-lg  absolute lg:min-h-fit min-h-[40vh] left-0 top-[6%] lg:w-auto w-full px-5' : 'lg:static bg-white lg:bg-transparent drop-shadow-lg absolute lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex lg:items-center px-5'}>
                    <ul className="mt-8 lg:mt-0 flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-8">
                        <li>
                            <a className="font-semibold hover:text-gray-500" href="#">INÍCIO</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-gray-500" href="#projects">PROJETOS</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-gray-500" href="#">SOBRE MIM</a>
                        </li>
                        <button className="bg-black text-white p-4 rounded-2xl font-bold  hover:bg-black/80">CONTATO</button>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button name="menu" onClick={handleClick}>
                        {click ? <FaX /> : <FaAlignJustify />}
                    </button>

                </div>
            </nav>
        </header>
    )
}

