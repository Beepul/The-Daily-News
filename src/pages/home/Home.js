import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import '../../sass/home.scss'

import Body from './Body'
import { useSelector } from 'react-redux'

function Home() {
  const [isLoading, setIsLoading] = useState(false);
    
  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
    {isLoading ? 
     <div className='custom-container'>
     <div className="custom-loader"></div>
   </div>
   :
   <>
        <Banner />
        <Body />
        </>
  }
    </>
  )
}

export default Home