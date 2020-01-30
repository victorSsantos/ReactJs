import React from 'react'
import Child from './Child'

export default props => {
    const notificateExit = lugar => alert(`Liberado para ${lugar}`)

    return (
        <div>
            <Child notificateExit={notificateExit}/>
        </div>
    )
}