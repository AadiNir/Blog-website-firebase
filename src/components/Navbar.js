import React from 'react'
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');
  function readpage()
  {
    navigate('/read');
    window.location.reload()

  };
  const updateblog = () => navigate('/updateblog')
  return (
    <div>
        <nav>
            <ul className='py-4 flex bg-blue-700 text-white justify-end px-28 space-x-9'>
                <li className='mx-2 cursor-pointer' onClick={handleClick}>Home</li>
                <li className='mx-2 cursor-pointer' onClick={readpage}>Post a blog</li>
                <li className='mx-2 cursor-pointer' onClick={updateblog}>Update a blog</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar