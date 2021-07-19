import { useEffect, useState } from "react"

export const useMount = (cb:()=> void) => {
    useEffect(() => {
        cb()
    },[])
}


export const useDebounce  = <T,>(value:T,delay?:number) => {
    const [debounceValue,setDebounceValue] = useState(value)
    useEffect(() => {
        const time = setTimeout(() => setDebounceValue(value),delay)
        return () => clearTimeout(time)
    },[value,delay])
    return debounceValue
}