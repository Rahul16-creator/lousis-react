import Carousel from "react-elastic-carousel";
import Item from "./Item";
import React from 'react'
import "../styles/slider.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

// const settings =  {
//     autoplay: true
//   };

export default function ItemSlider() {
    return (
        <div className="img">
            <Carousel enableAutoPlay autoPlaySpeed={4000} breakPoints={breakPoints}
            >
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/luxury_wedding.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/crafted_Denims.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/Style_essentials.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/tuxedo.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/uppercrest.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/gentleman.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/uppercrest.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/ath_work.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/tartanChecks.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/bandhgala.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
                <Item> <img className="back" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/tuxedo.jpg" alt="" />
                    <img className="video" src="https://louisphilippe.imgix.net/img/app/brands/lp/brandVideos/playBtn.png" alt="" />
                </Item>
            </Carousel>
            
        </div>
    )
}
