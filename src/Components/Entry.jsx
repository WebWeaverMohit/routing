import React, { useEffect, useState } from 'react'
import axios from '../Helpers/axios'
import { useNavigate } from 'react-router-dom'

const Entry = () => {
  const [images, setimages] = useState([])
  const [page, setpage] =useState(1)
  const navigate = useNavigate()
  const SubmitHandler = () => {
    navigate('/Library')
  }
  const  getimages = async ()=> {
    try {
      const { data } = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      setimages(data);
    } catch (err) {
      console.log(err);
    }
  }

  let renderimages = "loading...";
  if (images.length > 0) {
    renderimages = images.map((image) => (
      <div key={image.id} className='px-4 py-4 h-fit-content w-72 bg-zinc-700 text-white'>
        <img src={image.download_url} alt="" />
        <h3>{image.author}</h3>
      </div>
    ));
  }

  useEffect(() =>{
    getimages()
  },[page])

  console.log(page)
  return (
    <div>
      <form onSubmit={SubmitHandler} action="">
        <button className="px-3 py-2 bg-blue-500">Go to Library</button>
      </form>
      <div className='flex flex-wrap gap-2'>{renderimages}</div>
      <div className='flex justify-center gap-4 text-xl text-blue-500 mt-4 font-extrabold'>
        <h2 onClick={() => page > 0 && setpage(page -1)}>Prev</h2>
        <h2 onClick={() => setpage(page +1)}>Next</h2>
      </div>
    </div>
  )
}

export default Entry