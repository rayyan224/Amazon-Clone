import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "video-react/dist/video-react.css"; // import css
import { Player, ControlBar, BigPlayButton } from "video-react";

function Home() {
  const [playVid, setplayVid] = useState(false);
  return (
    <div className="home">
      <div className="home__container">
        <Carousel>
          <Carousel.Item>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_TallHero_NonPrime_v2_en_US_1x._CB403670067_.jpg"
              alt=""
              className="home__image"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/MDUxZTAzODMt/MDUxZTAzODMt-OTgxYTFjNDEt-w1500._CB418673226_.jpg"
              alt=""
              className="home__image"
            />
          </Carousel.Item>

          <Carousel.Item>
            <div
              onMouseEnter={() => {
                playVid.play();
              }}
              onMouseLeave={() => {
                playVid.pause();
              }}
              className="home__vid"
            >
              <Player
                ref={(player) => {
                  setplayVid(player);
                }}
              >
                <source
                  src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2020/Movie/Borat2/Borat2_H1_AnimHero_ONLY_1500x300_002._CB417567560_.mp4"
                  type="video/mp4"
                />
                <BigPlayButton position="center" />

                <ControlBar disableCompletely={true} autoHide={false} />
              </Player>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://images-na.ssl-images-amazon.com/images/G/15/credit/img20/CBCC/ACQ/Holiday/HOL20_CACBCC_Desktop_Hero_Cookies_1x._CB418812422_.jpg"
              alt=""
              className="home__image"
            />
          </Carousel.Item>
        </Carousel>

        <div className="home__row">
          <Product
            id={1}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
            price={12.95}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          ></Product>
          <Product
            id={2}
            title="Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black"
            price={`299.00`}
            image="https://images-na.ssl-images-amazon.com/images/I/71zE-yGwzHL._AC_SL1500_.jpg"
            rating={5}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Apple Watch Series 3 (GPS, 38mm) - Space Gray"
            price={`97.00`}
            image="https://images-na.ssl-images-amazon.com/images/I/61iqvrkk3nL._AC_SL1500_.jpg"
            rating={4}
          ></Product>
          <Product
            id={4}
            title="
            Hiware 200-Piece Parchment Paper Baking Sheets 12 x 16 Inch "
            price={`14.55`}
            image="https://images-na.ssl-images-amazon.com/images/I/71Li6GWCAxL._AC_SL1500_.jpg"
            rating={5}
          ></Product>
          <Product
            id={5}
            title="Good to Great: Why Some Companies Make the Leap and Others Don't"
            price={`14.55`}
            image="https://images-na.ssl-images-amazon.com/images/I/913d0uqSoPL.jpg"
            rating={5}
          ></Product>
        </div>
        <div className="home__row">
          <Product
            id={6}
            title={`Sceptre 24" Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers, VESA Wall Mount Ready Metal Black 2019 (C248W-1920RN)`}
            price={`150.00`}
            image="https://images-na.ssl-images-amazon.com/images/I/81WkYQXLbKL._AC_SL1500_.jpg"
            rating={5}
          ></Product>
        </div>
      </div>
    </div>
  );
}

export default Home;
