import {Splide, SplideSlide} from '@splidejs/react-splide';

import '@splidejs/react-splide/css/core';
import React, {useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import {ScenarioReport} from "./model";

export interface ScreenshotsCarouselProps {
    scenarioReport: ScenarioReport,
    screenshotsLocationPrefix: string,
    maybeAScreenshotIndex: Number | undefined
}

const ScreenshotsCarousel = ({
                                 scenarioReport,
                                 screenshotsLocationPrefix,
                                 maybeAScreenshotIndex
                             }: ScreenshotsCarouselProps) => {

    const splideRef: React.RefObject<null | Splide> = useRef(null);

    const goToSlide: (index: Number | undefined) => void = (index) => {
        if (splideRef && splideRef.current && splideRef.current.splide && index) {
            console.log(index.valueOf() - 1)
            splideRef.current.splide.go(index.valueOf() - 1);
        }
    }

    goToSlide(maybeAScreenshotIndex);

    let slides = scenarioReport.screenshots
        .map(s => {
                let index = "screenshot: " + s.index + " of " + scenarioReport.screenshots.length
                const selection: string = s.index === maybeAScreenshotIndex ? "border border-primary" : ""
                const className: string = "d-flex flex-column m-0 " + selection
                return (<SplideSlide key={s.index}>
                    <div className={className}>
                        <div className="scroll-container">
                            <img className="p-1 screenshot-img"
                                 src={screenshotsLocationPrefix + s.originalLocation}/>
                        </div>
                        <p className="p-1  m-0">{s.pageUrl}</p>
                        <p className="p-1  m-0">when
                            : {s.screenshotMoment === "ON_ENTER_PAGE" ? "before clicking" : "after clicking"}</p>
                        <p className="p-1  m-0">{index}</p>
                    </div>
                </SplideSlide>)
            }
        )
    if (slides.length > 0)
        return (
            <div className="scenario-screenshots">
                <Splide ref={splideRef} aria-label="My Favorite Images" options={{
                    perPage: 3,
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