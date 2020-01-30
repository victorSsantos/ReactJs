import React from 'react'

const lsApproved = ['Paula', 'Roberta', 'Gustavo', 'Julia']

export default props => {
    const generateItems = items => {
        return items.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {generateItems(lsApproved)}
        </ul>
    )
}