import './style.css';
import { Form } from './_components/form';


export default function Orcamento() {
    return (
        <section id="contato" className="w-full h-dvh pl-54 py-24 flex justify-start items-center gap-6">
            <div className="message-container w-4/12 h-full rounded relative">
            </div>

            <div className="w-6/12 h-full pt-10 flex flex-col justify-between">
                <h2 className="mt-6 leading-12 text-4xl font-bold text-pretty">Pronto para construir <br/> O futuro do seu negócio?</h2>
                <Form />
            </div>
        </section>
    )
}
