import { FieldGroup } from "@/components/ui/field";
import { InputField } from "./Input";
import { SelectWrapper } from './Select';
import { Textarea } from "@/components/ui/textarea";

export function Form() {
    return (
        <form className="w-full h-auto my-6 p-6">
            <FieldGroup className="flex flex-wrap">
                <InputField
                    placeholder={"Nome*"}
                />
                <InputField
                    placeholder={"E-mail*"}
                    type="email"
                />

                <InputField
                    placeholder={"Telefone*"}
                />

                <SelectWrapper />
                <Textarea className="h-40 border-[#dee9fe] placeholder:text-black focus:border-[#0554f2] transition-all" placeholder="Mensagem" />
            </FieldGroup>

            <button className="w-full my-6 p-4 bg-[#0554f2] rounded text-white font-bold cursor-pointer">Entrar em contato</button>
        </form>
    )
}