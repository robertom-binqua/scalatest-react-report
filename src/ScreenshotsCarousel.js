import {Splide, SplideSlide} from '@splidejs/react-splide';

const ScreenshotsCarousel = () => {
    return (
        <Splide aria-label="My Favorite Images" options={{
            perPage: 4,
            rewind: true,
        }}>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png"/>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png"/>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png"/>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className="border">
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
            </SplideSlide>
        </Splide>
    );
};

export default ScreenshotsCarousel;