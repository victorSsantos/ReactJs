import React from 'react'
import ReactDom from 'react-dom';
// import Familia from './components/Family'
// import FamiliaChildren from './components/FamilyChildren'
// import Member from './components/Member';
// import ComponentsWithFunction from './components/ComponentsWithFunction'
// import Father from './components/Father'
import ClassComponent from './components/ClassComponent'
import Counter from './components/Counter'

const elemento = document.getElementById('root');
ReactDom.render(
    <div>
       <Counter numero={100}/>
    </div>
, elemento)