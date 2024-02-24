import React from 'react'
import './components css/home.css'
import BuilderComp from './BuilderComp'
import Rdbox from './Rdbox'
export default function home() {





    return (
        <div className='home'>
            <div className='heading'>Best Website builders in the US</div>
            <hr style={{ color: "black", width: "100%" }} />

            <div className='bar1'>
                <div className='details'>



                    <div className='fjs'> <span class="material-symbols-outlined">check_circle</span>Last Updated</div>
                    <div>Ferburary 22, 2020</div>
                    <div className='fjs'><span class="material-symbols-outlined">
                        info
                    </span> Advertising Disclosure </div>
                </div>

                <div className='fjs'>Top Relevant <span class="material-symbols-outlined">
                    keyboard_arrow_down
                </span></div>
            </div>
            <hr style={{ color: "black", width: "100%" }} />
            <div className='bar2'>
                <div className='bar2buttons'>Tools</div>
                <div className='bar2buttons'>AWS Builder</div>
                <div className='bar2buttons'>Start Build</div>
                <div className='bar2buttons'>Build Supplies</div>
                <div className='bar2buttons'>Tooling</div>
                <div className='bar2buttons'>BlueHosting</div>
            </div>

            <div className='navigation'>
                <div className='fjs'>Home<span class="material-symbols-outlined">
                    keyboard_arrow_right
                </span></div>
                <div className='fjs'>Hosting for all<span class="material-symbols-outlined">
                    keyboard_arrow_right
                </span></div>
                <div className='fjs'>Hosting<span class="material-symbols-outlined">
                    keyboard_arrow_right
                </span></div>
                <div className='fjs'>Hosting 6<span class="material-symbols-outlined">
                    keyboard_arrow_right
                </span></div>
                <div className='fjs'>Hosting 5</div>
            </div>

            <div className='compbox'>

                <BuilderComp stars='5' ratingtag='Best Choice' symbol="emoji_events" index='1' heading='Wixpro 72-inch Responsive Website Builder' hd='Comprehensive Digital Platform Creation Tool , Streamlined Design Interface for Professional Websites and Online Stores (black/blue)' mh='Main Highlights' mhd='[What you get]: Recive the Wixpro website builder suite, access to the premium design templates,an extensive library of widgets and detailed step-by-step guides.' rating='9.8' ratingremarks='Exceptional'  />

                <BuilderComp stars='4' ratingtag='Best Value' symbol="diamond" index='2' heading='Sitecraft 68-inch Ultimate web design studio -' hd='Advanced site creation toolkit, intutive drag-and-drop editor for dynamic websites and ecommerce platforms (Green/White)' mh='Main Highlights' mhd='[What you get]: Recive the Wixpro website builder suite, access to the premium design templates,an extensive library of widgets and detailed step-by-step guides.' rating='9.5' ratingremarks='Excellent' />

                <BuilderComp stars='5' symbol="emoji_events" index='3' heading='Wixpro 72-inch Responsive Website Builder' hd='Comprehensive Digital Platform Creation Tool , Streamlined Design Interface for Professional Websites and Online Stores (black/blue)' mh='Main Highlights' mhd='[What you get]: Recive the Wixpro website builder suite, access to the premium design templates,an extensive library of widgets and detailed step-by-step guides.' rating='9.8' ratingremarks='Exceptional' />

                <BuilderComp stars='4' symbol="emoji_events" index='4' heading='Wixpro 72-inch Responsive Website Builder' hd='Comprehensive Digital Platform Creation Tool , Streamlined Design Interface for Professional Websites and Online Stores (black/blue)' mh='Main Highlights' rating='9.1' ratingremarks='Very good' discount='26% off' mhb='true' wwli='true' />

            </div>


            <div className='rdbox'>
                <div className='relateddeals'>Related deals you might like for</div>
                <div className='rdcont'>
                    <Rdbox />
                    <Rdbox />
                    <Rdbox />
                </div>
            </div>

            <div className='signupbox'>
                <div className='stext'>Sign up and get exclusive special deals</div>
                <div className='formm'>
                    <input type="text" className='emailinp' /><br />
                    <button className='sbutton'>Sign up</button>
                </div>
            </div>

        </div>
    )
}
