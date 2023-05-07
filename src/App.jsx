
import { useState } from 'react';
import { toast } from 'react-hot-toast';
function App() {

  const [show, setShow] = useState(false)
  const handlerAddUsers = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('users added successfully')
          form.reset();
        }
      })
  }

  return (
    <div className='my_container'>
      <h1 className='text-center text-3xl font-semibold pb-5'>Simple Crud</h1>

      <div className='text-center'>
        <form onSubmit={handlerAddUsers}>
          <label htmlFor="name" className=' mr-2'>Name:</label>
          <input type="text" name='name' required placeholder='your name' className='input_filed'/>
          <br /> <br />
          <label htmlFor="email" className='mr-2'> Email:</label>
          <input type="email" name="email" id="" required placeholder='your email' className='input_filed'/> 
          <br /> <br />
          <label htmlFor="password" className='mr-2'> Password:</label>
          <input 
          type= { show ? "text" : "password"} 
          name="password" 
          id="" 
          required 
          placeholder='your email' 
          className='input_filed'/> 
          <br /> <br />
          <p onClick={()=> setShow (!show)} className='mt-0 pb-3'>
            {
              show ? <span className='text-green-500'>Hide Password</span>
              : <span className='text-red-500'>Show Password</span>
            }
          </p>
          <input type="submit" value="Add Users" className='input_btn'/>
        </form>
      </div>
    </div>
  )
}

export default App
