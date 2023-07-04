import React,{useEffect} from 'react'
import './App.css'
import Film from './Film'
import { useState } from 'react'
import Pagination from './Pagination';

const Cards = () => {

    
    const data = Film;
    console.log("data",data);

    const [ListOFData,setListOfData]=useState([])
    const [currentPage,setCurrentPage]=useState(1)
    const [postsPerPage,setPostsPerPage]=useState(4)

  const lastPostIndex=currentPage*postsPerPage    //if we have 2nd page then 2*4=8
  const firstPostIndex=lastPostIndex-postsPerPage 
 const currentPosts= data.slice(firstPostIndex,lastPostIndex)
 useEffect(()=>{
    setListOfData(data)
 },[])

 console.log("Data is ",ListOFData);
   
  return (
   <>


{
      currentPosts.map((ele)=>{
        return(
          <div className='main-cont'>
          <div className="main">
        <div className="card" style={{width:'18rem'}}>
        <img src={ele.Images}  className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{ele.Title}</h5>
          <p className="card-text">Type: {ele.Type}</p>
          <p className="card-text">Released : {ele.Released}</p>
         
        </div>
      </div>
      </div>
      </div>
       ) })
    }
 <Pagination totalPosts={ListOFData.length} 
 postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
   

</>
  )
    }

export default Cards