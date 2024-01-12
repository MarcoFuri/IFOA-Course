import { useState } from 'react'
import {useEffect} from "react"

const Button = (props) => {

    const [count, setCount] = useState(props.count)

    const sendTitle = () => {
        props.changePageTitle("Title Changed!")
    }

    useEffect(() => {
        sendTitle()
      }, []);

    const styleComp = {
        marginTop: "50px"
    }

    return (
        <button style = {styleComp} onClick = {() => setCount((count) => count + 1)}>
            Count is {count}
        </button>
    )
}

export default Button 