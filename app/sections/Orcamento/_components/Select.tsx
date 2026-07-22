import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectWrapper() {
  return (
    <Select>
      <SelectTrigger className="w-5/12 border-[#dee9fe] p-6.5">
        <SelectValue placeholder="Selecione um serviço" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="backdrop-blur-lg bg-[#0554f210">
          <SelectItem className="text-black" value="web">Desenvolvimento Web</SelectItem>
          <SelectItem className="text-black" value="app">Desenvolvimento de Apps</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
