import { useState } from "react"
import { FaAlignJustify } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";

export function Header(this: any) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <header className="">
            <nav className=" flex justify-between items-center w-[100%]">
                <div>
                    <a className="font-bold text-xl" href="#">MATHEUS ROCHA</a>
                </div>
                <div className={click === true ? 'lg:static bg-white drop-shadow-lg lg:drop-shadow-none absolute lg:min-h-fit min-h-[40vh] left-0 top-[12%] lg:w-auto w-full px-5' : 'lg:static bg-white drop-shadow-lg lg:drop-shadow-none absolute lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex lg:items-center px-5'}>
                    <ul className="flex lg:flex-row flex-col items-center lg:gap-[2vw] gap-8">
                        <li>
                            <a className="font-semibold hover:text-gray-500" href="#">INÍCIO</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-gray-500" href="#">PROJETOS</a>
                        </li>
                        <li>
                            <a className="font-semibold hover:text-gray-500" href="#">SOBRE MIM</a>
                        </li>
                        <button className="bg-black text-white p-4 rounded-2xl font-bold  hover:bg-black/80">CONTATO</button>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button name="menu" onClick={handleClick}>
                        {click ? <FaX/> : <FaAlignJustify />}
                    </button>

                </div>
            </nav>
        </header>
    )
}

