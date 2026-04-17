import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

type InputProps = {
    title: string,
    placeholder: string,
    type?: string | "text"
}

export function InputField({title, placeholder, type}:InputProps) {
    return (
        <Field>
            <FieldLabel htmlFor="input-demo-api-key">{title}</FieldLabel>
            <Input id="input-demo-api-key" type={type} placeholder={`${placeholder}`} />
        </Field>
    )
}
