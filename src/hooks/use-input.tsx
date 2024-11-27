import {useState} from "react";
import {Input} from "@/components/ui/input";

export function useInput({
                           type = "text",
                           className = "",
                           placeholder = "",
                           autoCapitalize = "",
                           autoComplete = "",
                           autoCorrect = "",
                         }) {
  const [value, setValue] = useState("");
  const input =
    <Input value={value}
           placeholder={placeholder}
           autoCapitalize={autoCapitalize}
           autoCorrect={autoCorrect}
           autoComplete={autoComplete}
           onChange={e => setValue(e.target.value)} type={type} className={className}/>
  return [value, input]
}