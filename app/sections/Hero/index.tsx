
import { PageTitle } from "@/app/components/PageTitle";
import Menu from "../Menu";
import './style.css';

export default function Hero() {
    return (
        <>
            <Menu />

            <section className="hero-wrapper w-full h-[calc(100dvh-(138px))] relative overflow-hidden">
                <div className="w-6/12 h-full pl-54 flex flex-col justify-center gap-4">
                    <PageTitle title="Olá, nós somos a Zapt." color="white" />
                    <h1 className="text-6xl font-bold text-white">Transformamos ideias em experiência digitais</h1>
                    <h2 className="py-4 text-lg text-white">Desenvolvemos sistemas web, aplicativos e soluções personalizadas com as tecnologias mais modernas do mercado para destacar sua empresa.</h2>
                    <button className="w-3/12 p-3 text-lg bg-[#0095DA] rounded text-white cursor-pointer">Saiba mais</button>
                </div>
            </section>
        </>
    )
}