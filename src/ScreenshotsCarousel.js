import {Splide, SplideSlide} from '@splidejs/react-splide';

import '@splidejs/react-splide/css/core';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

const ScreenshotsCarousel = (props) => {

    let carousel

    if (props.scenarioSelected == null)
        carousel = null
    else {
        let slides = props.scenarioSelected
            .screenshots
            .map(s => {
                    let index = "screenshot: " + s.index + " of " + props.scenarioSelected.screenshots.length
                    return (<SplideSlide key={s.index}>
                        <div className="d-flex flex-column m-0">
                            <img className="p-1 screenshot-img"
                                 src={props.screenshotsLocationPrefix + s.originalLocation}/>
                            <p className="p-1  m-0">{s.pageUrl}</p>
                            <p className="p-1  m-0">{index}</p>
                        </div>
                    </SplideSlide>)
                }
            )
        if (slides.length > 0)
            carousel = (
                <div className="scenario-screenshots">
                    <Splide aria-label="My Favorite Images" options={{
                        perPage: 4,
                        rewind: false,
                    }}>
                        {slides}
                    </Splide>
                </div>
            )
    }

    return carousel;
};

export default ScreenshotsCarousel;