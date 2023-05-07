import { useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
    const updateLoader = useLoaderData();
    const [show, setShow] = useState(false)

    const handlerUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        const updateUserInfo = { name, email, password }

        fetch(`http://localhost:5000/users/${updateLoader._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount > 0) {
                    toast.success('Wow update successfully..!')
                }
            })
    }
    return (
        <div className="my_container text-center">
            <h2 className="py-5 text-xl">Update your information <span className="bg-yellow-200 p-1 rounded">{updateLoader.name}</span></h2>
            <form onSubmit={handlerUpdate}>
                <input
                    type="text"
                    name='name'
                    defaultValue={updateLoader?.name}
                    className='input_filed mb-2' />
                <br />
                <input
                    type="email"
                    name='email'
                    defaultValue={updateLoader?.email}
                    className='input_filed mb-3' />
                <br />
                <input
                    type={show ? "text" : "password"}
                    name="password"
                    id=""
                    className='input_filed' />
                <br /> <br />
                <p
                    onClick={() => setShow(!show)}
                    className='mt-0 pb-3'>
                    {
                        show ?
                            <span className='text-green-500'>Hide Password</span>
                            : <span className='text-red-500'>Show Password</span>
                    }
                </p>
                <input
                    type="submit"
                    value="Update"
                    className='input_btn' />
            </form>

        </div>
    );
};

export default Update;