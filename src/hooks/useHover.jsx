import { useState } from "react"

export const useHover = () =>{
    const [isHover, setIsHover] = useState(false)

    const handleMouseHover = () =>{
        setIsHover(true)
    }
    const handleMouseStopHover = () =>{
        setIsHover(false)
    }

    return {isHover, setIsHover, handleMouseHover, handleMouseStopHover}
}