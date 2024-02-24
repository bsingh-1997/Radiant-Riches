import React, { useState } from 'react'
import './components css/buildercomp.css'
import builder from './components css/builder.JPG'
export default function BuilderComp(props) {

    //   const [numStars, setNumStars] = useState(0);

    //   const handleInputChange = (event) => {
    //     setNumStars(parseInt(event.target.value));
    //   };

    const generateStars = () => {
        const stars = [];
        for (let i = 0; i < props.stars; i++) {
            stars.push(<span key={i} className="material-symbols-outlined">star</span>);
        }
        return stars;
    };

    return (
        <div className='component'>
            <div className='cc1'>
                {props.ratingtag ?
                    <div className='bchoice'><span class="material-symbols-outlined">
                        {props.symbol}
                    </span>{props.ratingtag}</div>
                    : ""}

                <div className='circle'>{props.index}</div>
                <img className='imgimg' src={builder} alt="Builder" />
            </div>
            <div className='cc2'>
                <>
                    <div className='mainheading'>
                        {props.heading}
                    </div>
                    <p>{props.hd}</p>
                </>
                {
                    props.discount ?
                        <div className='disc'>{props.discount}</div> : ""
                }
                <div className='mainheading'>{props.mh}</div>
                {props.mhd ?
                    <p>{props.mhd}</p>
                    : ""}
                {props.mhb ?
                    <div className='box'>
                        <div className='line'><div className='ratingbox'>9.9</div>Building responsive</div>
                        <div className='line'><div className='ratingbox'>8.9</div>Cool</div>
                        <div className='line'><div className='ratingbox'>8.9</div>Docs</div>
                        {/* the proper way of doing this is by passing the props through parent component  and using map function to iterate over them  but its only one component so im doing it this way., same goes for below part as well*/}
                    </div> : ""
                }
                {props.wwli ? <div className='wwli'>
                    <p>Why we love it?</p>
                    <div className='wwlid'><span class="material-symbols-outlined">
                        check_circle
                    </span> Documentation</div>
                    <div className='wwlid'><span class="material-symbols-outlined">
                        check_circle
                    </span> Easy to use</div>
                    <div className='wwlid'><span class="material-symbols-outlined">
                        check_circle
                    </span> Out of Box</div>
                </div> : ''}

                <div className='sm'>Show more</div>
            </div>
            <div className='cc3'>
                <div className='review'>
                    <div><span class="material-symbols-outlined xs">
                        info
                    </span></div>
                    <div className='r1'>{props.rating}</div>
                    <div>{props.ratingremarks}</div>
                    <div className='starscontainer'>

                        <div className='starss'>
                            <span class="material-symbols-outlined str">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                            <span class="material-symbols-outlined">star</span>
                        </div>
                        <div className='starss2'>
                            {generateStars()}
                        </div>
                    </div>
                </div>
                <div className='button'>
                    View
                </div>
            </div>
        </div>)
}
