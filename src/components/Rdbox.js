import React from 'react'
import './components css/rdbox.css'
import builder from './components css/builder.JPG'
export default function Rdbox() {
    return (
        <div>

            <div className='component2'>
                <img className='img2' src={builder} alt="Builder" />
                <div className='tagsbox'>
                    <div className='tags'>20% off</div>
                    <div className='tags'>Limited Time</div>
                </div>
                <div className='title1'>Web builder1</div>
                <p>Computer Modern Classic with  wix support</p>
                <div className='pbar'>39.99$ <div className='discount'>$49.99 <div className='red'>  (20% off)</div></div></div>
                <button className='button2'>View Deal</button>
            </div>

        </div>)
}
