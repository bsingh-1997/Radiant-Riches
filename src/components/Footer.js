import React from 'react'
import './components css/footer.css'
export default function Footer() {
  return (
    <div className='footer'>
      <div className='fcomp'>
        <h4>Categories</h4>
        <div className='footercomps'>Web builder</div>
        <div className='footercomps'>Hosting</div>
        <div className='footercomps'>Data Center</div>
        <div className='footercomps'>Robotic Automation</div>
      </div>
      <div className='fcomp'>
        <h4>Contact</h4>
        <div className='footercomps'>Contact</div>
        <div className='footercomps'>Privacy Policy</div>
        <div className='footercomps'>Terms of Service</div>
        <div className='footercomps'>Categories</div>
        <div className='footercomps'>About</div>
      </div>
      <div className='fcomp3'>United States <span class="material-symbols-outlined">
        keyboard_arrow_down
      </span></div>
    </div>
  )
}
