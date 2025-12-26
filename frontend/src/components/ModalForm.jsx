import { useState } from 'react'
import '../styles/ModalForm.css'

export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [role, setRole] = useState('');

    const handleRoleChange = (e) => {
        setRole(e.target.value === 'User');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onClose();
    }

    return(
        <dialog className="modal" open={isOpen}>
            <div className="modal-box">
                <div className='modal-header'>
                    <h3>{mode === 'edit' ? "Edit User" : "User Details"}</h3>
                </div>

                <div className='modal-body'>
                    <form method="dialog" onSubmit={handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label>Age</label>
                            <input type='text' placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)}/>
                        </div>
                        <div>
                            <label>Role</label>
                            <select value={role ? 'User' : 'Admin'} onChange={handleRoleChange}>
                                <option>User</option>
                                <option>Admin</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div className='modal-footer'>
                    <button onClick={onClose}>Close</button>
                    <button>{mode === 'edit' ? "Save Changes" : "Add Client" }</button>
                </div>
            </div>
        </dialog>
    )
}