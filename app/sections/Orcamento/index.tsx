
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Form } from './_components/form';

export default function Orcamento() {
    return (
        <section className="w-full h-dvh flex">
            <div className="w-8/12 h-full p-12">
                <h2 className="w-11/12 font-extrabold text-4xl text-pretty">Dê o próximo passo na evolução tecnológica da sua empresa.</h2>
                
                <Form />
            </div>
            <div className="w-5/12 h-full pr-12 flex justify-center items-center">
                <DotLottieReact
                    src="https://lottie.host/824a6332-a1bd-4ceb-9d6f-4e22bb596252/YiIv37POb1.lottie"
                    loop
                    autoplay
                />
            </div>
        </section>
    )
}
