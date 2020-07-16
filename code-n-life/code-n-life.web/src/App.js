import React from 'react';
import './App.css';
import Sidebar from './componets/SideBar.js'

const items = [
  { name: 'home', label: 'Home' },
  { name: 'ferramentas', 
    label: 'Ferramentas',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ], },
  { name: 'projetos', label: 'Projetos' },
  { name: 'contatos', label: 'Contatos' },
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  );
}

export default App;