import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LandingComponent from './LandingComponent';
import ShoppingListDemo from './ShoppingListDemo';
import MailingList from './MailingList';

function WelcomeScreen() {
    return (
        <div>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}>
                <Slider className="w-[100%] h-[620px]">
                    <Slide index={0}>
                        <LandingComponent/>
                    </Slide>
                    <Slide index={1}>
                        <ShoppingListDemo/>
                    </Slide>
                    <Slide index={2}>
                        <MailingList/>
                    </Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
            
        </div>
    );
}

export default WelcomeScreen;
