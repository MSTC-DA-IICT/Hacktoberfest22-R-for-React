import React, { useState } from 'react'
export default function ProductCard(props) {
  let reviews = props.data.reviews
  let total = 0
  let stars = 0
  reviews.forEach((r, i) => {
    total += r
    stars += r * (i + 1)
  })
  stars /= total

  const [isHover, setIsHover] = useState(false)
  let ratingColor

  if (stars >= 3.95) ratingColor = '#22992A'
  else if (stars >= 1.95) ratingColor = '#D9BE29'
  else ratingColor = '#EB3629'

  const handleMouseEnter = () => {
    setIsHover(true)
  };
  const handleMouseLeave = () => {
    setIsHover(false)
  }
  return (
    <a href={props.data.url} className='m-4 p-1 flex-col flex w-fit h-fit items-center shadow-black'
      onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}
      style={{ boxShadow: isHover ? '3px 3px 10px rgba(0,0,0,0.4)' : '5px 5px 10px rgba(0,0,0,0.6)' }}>
      <img src={props.data.img} alt={props.data.title} className='mx-10' style={{ width: '180px', height: '320px', objectFit: 'cover', objectPosition: "0 0" }} />
      <span className='text-base max-w-fit font-bold px-5'>{props.data.title}</span>
      <span className='text-xs max-w-fit h-8 px-5'>{props.data.description}</span>
      <span className='w-full px-5 text-2xl items-end flex my-2'>
        <span>
          <span><sup className='text-sm'>&#8377;</sup>{props.data.new_cost}</span>
          <s className='text-sm pl-2'>&#8377;{props.data.old_cost}</s>
          <span className='text-sm ml-2 font-semibold text-green-600' style={{ fontFamily: 'arial' }}>{Math.ceil((props.data.old_cost - props.data.new_cost) / props.data.old_cost * 100)}% off</span>
        </span>
        <span>
          <span className='ml-8 text-base py-0.5 px-2 rounded-xl flex-auto font-medium text-white' style={{ background: ratingColor, fontFamily: 'arial' }}>{stars.toFixed(1)}<p className='inline-block'>&#9733;</p></span>
          <span className='ml-1 text-sm text-gray-500'>({total})</span>
        </span>
      </span>



    </a>

  );
}
