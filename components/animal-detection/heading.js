import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
export default function Heading() {
  return (
    <div>
        <div style={{background:'linear-gradient(to right, #5170FF, #FF66C4)', display:'flex'}}>
          <Image src="/imgs/viz.gif" style={{margin:'10px'}} width={50} height={50} alt="Viz-Logo" />
          <h2 style={{color:'white', marginTop:'20px'}}>Vizuara</h2>
          <Link href="/animal-detection/home" style={{marginLeft: 'auto', color:'white', marginTop:'30px',marginRight:'20px'}}>Homepage</Link>
        </div>
    </div>
  )
}
