import React, { useEffect, useState , useRef} from 'react';

export default function CharacterCard(props) {
    const [active, setActive] = useState(false);
    const attemptRef = useRef(props.attempt)

    const activate = () => {
        if(!active){
            setActive(true) 
            props.activateionHandler(props.value)
        }
    }

    useEffect(() => {
        if(attemptRef.current != props.attempt){
            setActive(false);
            attemptRef.current = props.attempt
        }
    })

    const className = `card ${active ? 'activeCard': ''}`

    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )

}
