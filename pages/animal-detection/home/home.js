import React from 'react'
import styles from '../../../components/animal-detection/classic.module.css'
import Link from 'next/link'
import Heading from '../../../components/animal-detection/heading'
import {moveNext,movePrev} from '../../../components/animal-detection/function'
export default function Home() {
  return (
    <div>
        <Heading/>
        <div className='cointainer' style={{margin:'0',paddingTop:'10px'}}>
            <div className='row' style={{margin:'0'}}>
                <div className='col-lg-6'>
                    <p style={{textAlign:'justify',fontSize:'20px'}}>
                        Welcome to our wildlife haven! Here, you'll discover a diverse array of inhabitants, including birds, dogs, cats, cows, sheeps, bears, elephants, horses, zebras, giraffes and humans, all coexisting in harmony. Explore the wonders of our jungle and embrace the beauty of its varied species.
                    </p>
                    <p style={{textAlign:'justify',fontSize:'20px'}}>
                        Are you feeling overwhelmed trying to identify animals? No need to worry! You're in the right place. Let AI be your guide as we explore the wonders of our jungle together.
                    </p>
                    <div style={{display:'flex',justifyContent:'space-around',margin:'20px'}}>
                        <Link href="/animal-detection/detect" style={{textDecoration:'none'}}>
                            <button type="button" style={{background:'linear-gradient(to right, #5170FF,#FF66C4)',textAlign:'center',color:'white',fontWeight:"bold",borderRadius:'10px',padding:'5px'}}>Detect Now</button>
                        </Link>
                        <Link href="/animal-detection/explore" style={{textDecoration:'none'}}>
                            <button type="button" style={{background:'linear-gradient(to right, #5170FF,#FF66C4)',textAlign:'center',color:'white',fontWeight:"bold",borderRadius:'10px',padding:'5px'}}>Explore Now</button>
                        </Link>
                    </div>
                </div>
                <div className='col-lg-6 text-center' >
                    <img src="/imgs/family.png" alt="family-as-wildlife" width={400} height={350}  />
                </div>
            </div>
        </div>
        <h2 style={{color:'red',marginLeft:'10px'}}>Visit To</h2>
        <div>
            <div style={{display:'flex'}}>
                <div style={{width:'5%',marginTop:'80px',textAlign:'center'}}>
                    <button className={styles.arrow} id="prev" onClick={movePrev}>
                        <img src="/imgs/left-arrow.png" alt="left-arrow"  width={20}/>
                    </button>
                </div>
                <div style={{width:'90%'}}>
                    <div className={styles.container} id='c1'>
                        <Link href="/animal-detection/birds" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-1 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo1.png" alt="logo1"  width={200} height={140}/>
                                <h3 style={{color:'#E20612'}}>BIRD</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/dogs" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-2 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo2.png" alt="logo2"  width={200} height={140}/>
                                <h3 style={{color:'#0C0C0E'}}>DOG</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/cats" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-3 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo3.png" alt="logo3"  width={200} height={140}/>
                                <h3 style={{color:'#DA251C'}}>CAT</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/cows" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-4 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo4.png" alt="logo4"  width={200} height={140}/>
                                <h3 style={{color:'#B57F2F'}}>COW</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/sheeps" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-5 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo5.png" alt="logo5"  width={200} height={140}/>
                                <h3 style={{color:'#232929'}}>SHEEP</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/bears" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-6 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo6.png" alt="logo6"  width={200} height={140}/>
                                <h3 style={{color:'#99FE00'}}>BEAR</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/elephants" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-7 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo7.png" alt="logo7"  width={200} height={140}/>
                                <h3 style={{textAlign:'right',color:'#00052B'}}>ELEPHANT</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/horses" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-8 text-center'}style={{margin:'10px'}}>
                                <img src="/imgs/logo8.png" alt="logo8"  width={200} height={140}/>
                                <h3 style={{color:'#005DA4'}}>HORSE</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/zebras" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-9 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo9.png" alt="logo9"  width={200} height={140}/>
                                <h3 style={{color:'#000000'}}>ZEBRA</h3>                
                            </div>
                        </Link>
                        <Link href="/animal-detection/giraffes" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-10 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo10.png" alt="logo10"  width={200} height={140}/>
                                <h3 style={{color:'#AB5613'}}>GIRAFFE</h3>
                            </div>
                        </Link>
                        <Link href="/animal-detection/persons" style={{textDecoration:'none'}}>
                            <div className={styles.item+' item-11 text-center'} style={{margin:'10px'}}>
                                <img src="/imgs/logo11.png" alt="logo11"  width={200} height={140}/>
                                <h3 style={{color:'#6F973E'}}>HUMAN</h3>
                            </div>
                        </Link>
                    </div>
                </div>
                <div style={{width:'5%',marginTop:'80px',textAlign:'center'}}>
                    <button className={styles.arrow} id="next" onClick={moveNext}>
                        <img src="/imgs/right-arrow.png" alt="right-arrow" width={20}  />
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
