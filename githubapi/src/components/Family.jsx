import React from 'react'
import Member from './Member';

export default props => 
    <div>
        <Member nome="Victor " sobrenome={props.sobrenome}/>
        <Member nome="Bruno " sobrenome={props.sobrenome}/>
    </div>

