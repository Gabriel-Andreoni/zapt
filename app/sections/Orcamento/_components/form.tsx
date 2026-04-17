import { FieldGroup } from "@/components/ui/field";
import { InputField } from "./Input";

export function Form() {
    return (
        <form className="w-full h-auto my-6 p-6 bg-[#ffffff20]">
            <FieldGroup>
                <InputField
                    title={"Nome"}
                    placeholder={"Gabriel"}
                />
                <InputField
                    title={"Email"}
                    placeholder={"email@gmail.com"}
                    type="email"
                />
            </FieldGroup>
        </form>
    )
}