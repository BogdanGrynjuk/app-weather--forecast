import React from 'react'
import { BgLoader, LoadInner, LoadLoader } from './Loader.styled'

const Loader: React.FC = () => {  
  return (
    <BgLoader>
      <LoadLoader>
        <LoadInner className='load-one' />
        <LoadInner className='load-two' />
        <LoadInner className='load-three' />
      </LoadLoader>
    </BgLoader>
  );
}

export default Loader;
