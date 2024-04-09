import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Projects() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className="text-center mt-20" id="projects">
            <h1 className="font-bold text-xl">MEUS PROJETOS</h1>
            <div className="w-auto m-[4%]">
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className="h-[450px] border-solid bg-white border-2 border-black rounded-xl">
                            <div className="flex flex-col justify-center items-center gap-24 text-center p-10">
                                <p className="font-bold text-lg">{d.title.toLocaleUpperCase()}</p>
                                <p>{d.description}!</p>
                                <button className="bg-black text-white px-12 py-4 rounded-2xl font-bold  hover:bg-black/80">VER MAIS</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

const data = [
    {
        title: 'Site para Escola',
        description: 'Página desenvolvida em HTML, CSS e JS'
    },
    {
        title: 'Escolhendo Filme',
        description: 'Sistema básico de escolha utilizando JS'
    },
    {
        title: 'Projeto Carros',
        description: 'Projeto de catálogo utilizando Bootstrap'
    }
]