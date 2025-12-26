import NavBar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'
import { useState } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
    setModalMode(mode);
  }

  const handleSubmit = () => {
    if (modalMode === 'add'){
      console.log("Modal Mode: Add");
    }
    else{
      console.log("Modal Mode: Edit");
    }
  }

  return (
    <>
      <NavBar onOpen={() => handleOpen('add')}/>
      <TableList handleOpen={handleOpen} />
      <ModalForm mode={modalMode} onSubmit={handleSubmit} isOpen={isOpen} onClose={() => setIsOpen(false) } />
    </>
  )
}

export default App
