import {Splide, SplideSlide} from '@splidejs/react-splide';

import '@splidejs/react-splide/css/core';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import {ScenarioReport} from "./model";

export interface ScreenshotsCarouselProps {
    scenarioReport: ScenarioReport,
    screenshotsLocationPrefix: string
}

const ScreenshotsCarousel = ({
                                 scenarioReport,
                                 screenshotsLocationPrefix
                             }: ScreenshotsCarouselProps) => {

    let slides = scenarioReport.screenshots
        .map(s => {
                let index = "screenshot: " + s.index + " of " + scenarioReport.screenshots.length
                return (<SplideSlide key={s.index}>
                    <div className="d-flex flex-column m-0">
                        <img className="p-1 screenshot-img"
                             src={screenshotsLocationPrefix + s.originalLocation}/>
                        <p className="p-1  m-0">{s.pageUrl}</p>
                        <p className="p-1  m-0">{index}</p>
                    </div>
                </SplideSlide>)
            }
        )
    if (slides.length > 0)
        return (
            <div className="scenario-screenshots">
                <Splide aria-label="My Favorite Images" options={{
                    perPage: 4,
                    rewind: false,
                }}>
                    {slides}
                </Splide>
            </div>
        )
    else
        return <></>
}

export default ScreenshotsCarousel;