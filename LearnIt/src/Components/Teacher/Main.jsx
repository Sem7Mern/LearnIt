import React from 'react'
import { Link } from 'react-router-dom'


// import './Main.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";




export default function Main() {
  return (
    <div>
      {/* File created successfully */}
      
      {/*<---------------------------- Class Allotted section-----------------------> */}


<Link to='/Class_alloted'>
            <div className='btn btn-primary' >Class Allotted</div>   </Link>
            <Link to='/Classes'>
            <div className='btn btn-primary' >Class Allotted</div>   </Link>

            <Link to='/Performance'>
            <div className='btn btn-primary' >Performance</div>   </Link>

            <Link to='/Subject_Selection'>
            <div className='btn btn-primary' >Subject_Selection</div>   </Link>

            <Link to='/Student_List'>
            <div className='btn btn-primary' >Student_List</div>   </Link>
   
    


      
      
    </div>
  )
}


