import React from 'react'
import ProductCard from './ProductCard'
function MainContainer(props) {
  return (
    <div>
      <div className='md:flex-wrap'>Main container</div>
      <div className='md:flex md:flex-wrap'>
        {props.data.map((product, i) => (
          <ProductCard key={i} data={product} />
        ))}
      </div>
    </div>
  )
}

export default MainContainer