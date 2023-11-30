import React from "react";

const BaseInput = ({length,label = '',id, name,type = '',placeholder = '',onInput = () => {}}) => {
    const handleInput = (value) => {
        onInput({key:name,value})
    }

    return (
        <label htmlFor={id || name}>
            <span>{label}</span>
            <input
                minLength={length}
                onInput={ev => handleInput(ev.target.value)}
                placeholder={placeholder}
                type={type || 'text'} />
        </label>
    )
}
export default BaseInput