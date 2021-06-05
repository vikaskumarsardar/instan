import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Nav from './Nav'
function App() {
  const [val,setVal]=useState(0);
  // console.log(val);
  // let count=0;
  const minus=()=>{
    // count++;
    setVal(val-8)
    console.log("minus");
    console.log(val);
  }
  
  const plus=()=>{
    setVal(val+8)
console.log("plus");

  }
  
  return (
    <div className="App">
      <div className="mr">

      <Nav/>
      </div>
      <div className="swa">

      <p>swapan kumar is the chor</p>
      <div className="Plus"><span onClick={plus}>+</span>{val}<span onClick={minus}>-</span></div>
      
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet debitis accusantium, cumque perspiciatis deserunt dolore eaque deleniti veritatis sit rerum quia fugiat, quo molestiae libero a. Tenetur ratione animi fugit!</p>
    </div>
  );
}

export default App;
