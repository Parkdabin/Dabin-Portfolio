import React, { useState } from 'react';
import ImageSlider from '../Components/ImageSlider';
import { SliderData } from '../Components/SliderData';
import Outline from '../Components/Outline';




function Project() {
    const [outline, setOutline] = useState(false);
    function NextPage(){
        setOutline(true);
    }
    return (
        <>
            <div className="Container">
                <div className="Nav">
                    <span>My Project</span>
                </div>
                <div className="Content" style={outline ? { alignItems: 'center' } : {flexDirection:'column', alignItems:'center', justifyContent:'flex-start'}}>
                    {outline ? <ImageSlider slides={SliderData} /> : <Outline />}
                    {outline ? '' : <button onClick={NextPage} className="nextbutton">Next</button>}
                </div>
            </div>
            <div className="copyright">Copyright 2021. Dabin All Rights Resserved</div>
        </>
    );
}

export default Project;