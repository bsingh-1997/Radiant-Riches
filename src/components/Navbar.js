import React from 'react'
import './components css/navbar.css';
export default function navbar() {
  return (
    <div className='navbar'>
      <div className='searchbar'>

        <span class="material-symbols-outlined yh">
          search
        </span>
        <input type="text" className='sbar'></input>
      </div>
      <div>Categories</div>
      <div>Website Builders</div>
      <div>Today's deals</div>
    </div>
  )
}
