import Image from "next/image";
import './style.css';

export default function Menu() {
    const items = [
        { name: "Início", href: "#" },
        { name: "Serviços", href: "#" },
        { name: "Orçamento", href: "#" },
        { name: "Sobre", href: "#" },
        { name: "Contato", href: "#" }
    ]
    return (
        <header className="w-full h-30 flex items-center bg-white">
            <nav className="w-6/12 h-full pl-48 flex items-center gap-24">
                <Image src="/logo.png" alt="logo da zapt" width={64} height={64} />
                <ul className="w-full p-6 flex justify-start gap-24">
                    {items.map((i, index) => <li key={index} className="menu-item h-fit text-xl cursor-pointer text-black relative">{i.name}</li>)}
                </ul>
            </nav>
        </header>
    )
}