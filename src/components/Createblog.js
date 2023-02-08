import { db } from '../firebase';
import { useState } from 'react';
import Navbar from './Navbar';
import background  from '../assets/background.jpg'

function Createblog() {
   
  const[title,settitle]=useState("");
  const[content,setcontent]=useState("");
  const[author,setauthor]=useState("");
  

  const submit = (e) => {
    e.preventDefault();
    db.collection("Blogwebsite").add({
      Title:title,
      Description:content,
      author:author
    });
  
    settitle("");
    setcontent("");
    setauthor("");
    window.location.reload()
  };
 
  console.log(title);
  console.log(content);

  console.log(author);


  return (

    <div className="bg-hero-pattern w-auto h-screen">
    <Navbar/>
        <center className="py-4">Write your thoughts</center>
      
        <div className='grid justify-center'>
      
      <div className="box-border h-32 w-max p-4 border-4 backdrop-contrast-100	">
        <input type="text" placeholder="title" value={title} onChange={(e)=>settitle(e.target.value)}/><br/>
        <input className="" type="text" placeholder="content" value={content} onChange={(e)=>setcontent(e.target.value)}/><br/>
        <input type="text" placeholder="author" value={author} onChange={(e)=>setauthor(e.target.value)}/><br/>

        <button onClick={submit}>SUBMIT</button>
        
        </div>
      
    </div>
    </div>
  )
}


    
export default Createblog;