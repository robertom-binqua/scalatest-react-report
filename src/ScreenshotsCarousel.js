import {Splide, SplideSlide} from '@splidejs/react-splide';

const ScreenshotsCarousel = () => {
    return (
        <Splide aria-label="My Favorite Images" options={{
            perPage: 3,
            rewind: false,
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
                <div>
                    <img src="/screenshots/resized_SS1_onEnter.png" />
                </div>
                <div>screenshot 1</div>
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