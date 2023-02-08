import { db } from '../firebase';
import { useState } from 'react';
import Navbar from './Navbar';

const Read = () => {
 
    const [info , setInfo] = useState([]);
 
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
 
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("Blogwebsite").get().then((querySnapshot) => {
            
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                 
            });
        })
    }
     
    // Display the result on the page
    return (
        <div>
        <Navbar/>
        <div className='bg-hero-pattern w-auto h-auto'>

            <center>
            <h2 className="py-8 font-primary text-blue-800 text-5xl">Techy-blogo</h2>
            </center>
         
        {
            info.map((data) => (
            <Frame title={data.Title}
                   content={data.Description}
                    author={data.author}
                   />
            ))
        }
        </div>
        </div>
 
    );
}
 
// Define how each display entry will be structured
const Frame = ({title , content ,author}) => {
    console.log(title+ " " + content+" "+author );
    return (
        <div className='grid justify-center p-5'>
            <div className="box-content h-50 border-4 box-decoration-clone rounded-lg max-w-screen-lg backdrop-blur-xl p-5 shadow-2xl 	">
            <h1 className='text-4xl font-bold font-Headlines '>{title}</h1><br/>
            <p className=''>{content}</p>
            <h3 className='text-1xl font-bold text-center'>Author:{author}</h3>
  
            </div>
        </div>
    
    );
}
 
export default Read;
