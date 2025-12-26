import '../styles/NavBar.css'

export default function NavBar({ onOpen }){
    return(
        <nav className="navbar">
            <h2>CRUD</h2>

            <ul className='navlinks'>
                <button onClick={onOpen}>Add User</button>

                <li>Home</li>
                <li>Crud</li>
            </ul>
        </nav>
    )
}