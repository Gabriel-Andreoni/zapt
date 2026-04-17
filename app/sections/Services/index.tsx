import { PageTitle } from "@/app/components/PageTitle";
import { Box } from "./_components/Box";
import Image from "next/image";
import './style.css';

export default function Services() {
    return (
        <section className="w-full h-auto bg-[#f5faff] relative overflow-hidden">
            <div className="w-full py-24 pl-54">
                <PageTitle title="A ideia que você procura" color="#0554f2" size="32" />
            </div>

            <div className="w-full h-[calc(100dvh-(136px))] pl-54 flex justify-items-center gap-x-1 flex-wrap">
                <Box
                    title={"Desenvolvimento de Aplicações Web"}
                    description={"Dashboards, plataformas de membros, portais de agendamento ou sistemas internos que funcionam via web."}
                />
                <Box
                    title={"Criação de Aplicativos Mobile (iOS e Android)"}
                    description={"Apps de entrega, redes sociais nichadas, ferramentas de produtividade ou extensões mobile de sistemas já existentes."}
                />
                <Box
                    title={"Sistemas de Gestão Personalizados (ERP/CRM)"}
                    description={"Softwares para controle de estoque, gestão financeira, automação de vendas ou sistemas hospitalares/clínicos."}

                />
                <Box
                    title={"Landing Pages e Sites Institucionais de Alta Conversão"}
                    description={"Páginas de venda para lançamentos, sites para empresas que buscam autoridade e catálogos digitais."}
                />
                <Box
                    title={"Consultoria Técnica e Modernização de Sistemas"}
                    description={"Refatoração de código antigo, migração para a nuvem, integração de APIs (como sistemas de pagamento ou WhatsApp) e auditoria de segurança."}
                />
            </div>

            <Image
                src="/icons/technical-support.png"
                alt="imagem de fundo animad"
                width={500}
                height={500}
                className="services-img absolute inset-0 left-8/12 top-5/12"
            />
        </section>
    )
}