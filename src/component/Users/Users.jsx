import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const Users = () => {
    const loaderUsers = useLoaderData();
    // console.log(loaderUsers);
    const [users, setUsers] = useState(loaderUsers)

    const handlerDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('your id delete success')
                    const remaining = users.filter(user => user._id !== _id)
                    setUsers(remaining)
                }
            })
    }
    return (
        <div className="my_container text-center">
            <h2 className="text-2xl font-semibold">Users Length: {loaderUsers.length}</h2>
            {
                loaderUsers.map(user =>
                    <p key={user._id}>
                        {user.name}:{user.email}
                        <span className="pl-2">{user._id}</span>
                        <Link to={`/update/${user._id}`} >
                        <button 
                        // onClick={handlerUpdate}
                        className="input_btn"
                        >Update</button>
                        </Link>

                        <button onClick={() => handlerDelete(user._id)}
                            className="delete_btn">X</button>
                    </p>)
}
        </div >
    );
};

export default Users;