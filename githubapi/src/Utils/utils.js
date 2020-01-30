import React from 'react'

export function childrenwithProps(props) {
    return React.Children.map(props.children, child =>{
        return React.cloneElement(child, {...props})
    })
}