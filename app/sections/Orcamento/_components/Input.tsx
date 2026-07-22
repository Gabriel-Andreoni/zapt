import {
    Field,
} from "@/components/ui/field"

import { Input } from "@/components/ui/input"

type InputProps = {
    placeholder: string,
    type?: string | "text"
}

export function InputField({placeholder, type}:InputProps) {
    return (
        <Field className="w-5/12">
            <Input id="input-demo-api-key" type={type} placeholder={`${placeholder}`} />
        </Field>
    )
}
