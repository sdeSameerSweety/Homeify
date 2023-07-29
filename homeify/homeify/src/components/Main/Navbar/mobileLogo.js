import React from 'react'
import {ReactComponent as ReactLogo} from './mobile-logo.svg';
const mobileLogo = () => {
  return (
    <div className='mr-[4px]'>
      <ReactLogo className="h-[45px] w-[45px]"/>
    </div>
  )
}

export default mobileLogo
