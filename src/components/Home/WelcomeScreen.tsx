import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LandingComponent from './LandingComponent';
import ShoppingListDemo from './ShoppingListDemo';
import MailingList from './MailingList';
import '../../styles/carousel.css'

function WelcomeScreen() {
    return (
        <div className="relative">
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}>

                <Slider className="w-[100%] h-[630px]">
                    <Slide index={0}>
                        <LandingComponent />
                    </Slide>
                    <Slide index={1}>
                        <ShoppingListDemo />
                    </Slide>
                    <Slide index={2}>
                        <MailingList />
                    </Slide>
                </Slider>

                <ButtonBack className="hidden md:flex absolute justify-center items-center left-[10px] top-[50%]  w-[50px] h-[50px] rounded-full bg-dark">
                    <svg width="26" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-white" d="M15.4894 2.56853L13.2179 0.29703L0.51288 13.002L13.2179 25.707L15.4894 23.4355L5.05588 13.002L15.4894 2.56853H15.4894Z"/>
                    </svg>
                </ButtonBack>
                <ButtonNext className="hidden md:flex absolute justify-center items-center top-[50%] right-[10px]  w-[50px] h-[50px] rounded-full bg-dark" >
                    <svg width="26" height="26" viewBox="0 0 11 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="fill-white" d="M0.510651 23.4315L2.78215 25.703L15.4872 12.998L2.78215 0.292969L0.510651 2.56447L10.9442 12.998L0.510651 23.4315H0.510651Z" fill="black" />
                    </svg>
                </ButtonNext>
                <DotGroup 
                    className="flex justify-center gap-6 pb-4 bg-gray-200 md:bg-white [&>*]:w-[15px] [&>*]:h-[15px] [&>*]:bg-dark [&>*]:rounded-full"
                />
            </CarouselProvider>
        </div>
    );
}

export default WelcomeScreen;
