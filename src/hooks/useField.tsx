import React, { useState } from "react"

const useField = (type:  string) => {

    const [value,setValue] = useState('')

const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
}

const clear = () => {
    setValue("")
}

    return{
        type,
        value,
        onChange,
        clear
    }
}

export default useField