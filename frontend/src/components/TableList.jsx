import '../styles/TableList.css'

export default function TableList({ handleOpen }){

    const users = [
        { id: 1, name: "Johnrey Pamada", email: "johnrey@gmail.com", age: 22, role: "Admin" },
        { id: 2, name: "Aljon Borja", email: "aljon@gmail.com", age: 22, role: "User" },
        { id: 3, name: "Mark Crusio", email: "mark@gmail.com", age: 21, role: "User" }
    ]

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.role}</td>
                        <td>
                            <div className='actions'>
                                <button onClick={() => handleOpen('edit')} className="update-btn">Update</button>
                                <button className="delete-btn">Delete</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}