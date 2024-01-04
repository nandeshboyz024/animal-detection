import Link from 'next/link'
import React from 'react'
export default function Heading() {
  return (
    <div>
        {/* <div style={{background:'linear-gradient(to right, #5170FF, #FF66C4)',display:'flex'}}>
            <img src="/imgs/Vizlogo.gif" style={{margin:'10px'}} width={50} height={50} alt="VizLogo" srcset="" />
            <h2 style={{color:'white',marginTop:'20px'}} >Vizuara</h2>
            <Link href="" style={{textAlign:'right',color:'white',textDecoration:'none',marginTop:'30px'}}>Home</Link>
        </div> */}
        <div style={{background:'linear-gradient(to right, #5170FF, #FF66C4)', display:'flex'}}>
          <img src="/imgs/Vizlogo.gif" style={{margin:'10px'}} width={50} height={50} alt="VizLogo" srcset="" />
          <h2 style={{color:'white', marginTop:'20px'}}>Vizuara</h2>
          <Link href="/animal-detection/home" style={{marginLeft: 'auto', color:'white', marginTop:'30px',marginRight:'20px'}}>Homepage</Link>
        </div>
    </div>
  )
}
