import React, { useEffect, useState } from 'react';
import axios from '../Helpers/axios';

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get('/users');
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  let renderUsers = "loading...";
  if (users.length > 0) {
    renderUsers = users.map((user) => (
      <li key={user.id} className='px-4 py-4 h-fit-content w-72 bg-zinc-700 text-white'>
        <h1 className='mb-2'>Username: {user.username}</h1>
        <h2 className='mb-2'>name: {user.name}</h2>
        <h2 className='mb-2'>email: {user.email}</h2>
      </li>
    ));
  }

  useEffect(() =>{
    getUsers()
  },[]);

  return (
    <div className='px-10 py-10'>
      <hr />
      <ul className='mt-4 flex flex-wrap gap-4'>{renderUsers}</ul>
    </div>
  );
};

export default Home;
