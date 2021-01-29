import React from 'react';
import "../styles/main-contenet.css"
import Slider from './slider-corusel';
import ItemSlider from './slider';


export default function Maincontent() {
    return (
        <div>
            {/* content-1 */}
            <div className="content-img-1">
                <img width="99%" src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_P1_Flat40_1501.jpg?auto=format"
                    alt="img-1" />
            </div>

            {/* slider -1 */}
            <Slider />

            <div className="straight-line"></div>

            {/* content-2 */}
            <div className="content-img-2">
                <div id="zoom-In">
                    <figure>
                        <img width="100%" height="550px"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_S1_5929_2201.gif" alt="" />
                    </figure>
                </div>
            </div>
            {/* content-3 */}

            <div className="content-img-3">
                <div id="zoom-In">
                    <figure>
                        <img width="100%" height="300px"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_S2_6009_18012021.jpg" alt="" />
                    </figure>
                </div>
                <div id="zoom-In">
                    <figure>
                        <img width="100%" height="300px"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_S3_5431_18012021.jpg" alt="" />
                    </figure>
                </div>
            </div>

            {/* content-4 */}
            <div className="content-img-4">
                <div id="zoom-In">
                    <figure>
                        <img width="100%"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_S4_5609_2201.gif?auto=format"
                            alt="" />
                    </figure>
                </div>
            </div>

            {/* straight-line */}
            <div className="line-text">
                <span><b>BRAND VIDEOS</b></span>
                <div className="lines"></div>
            </div>
            <br />

            {/* slider-2 */}
            <ItemSlider></ItemSlider>

            {/* straight-line */}
            <div className="line-text">
                <span>THE <b>LABEL</b></span>
                <div className="line"></div>
            </div>
            <br />
            {/* flex content */}

            <div className="content-img-5">
                <div className="zoom-In">
                    <div>
                        <img width="250px" height="auto"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_content1.jpg" alt="" />
                    </div>
                    <div className="text">
                        <h3>Formal dressing rules you're probably ignoring</h3><br />
                        <p>A true gentleman is always presentable, (not to mention desirable). Here’s how you can look the
                        part by mastering ...</p><br />
                        <a>READ MORE</a>
                    </div>
                </div>
                <div className="zoom-In">
                    <div>
                        <img width="auto" height="250px" src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_blog2.jpg"
                            alt="" />
                    </div>
                    <div className="text">
                        <h3>Formal dressing rules you're probably ignoring</h3><br />
                        <p>A true gentleman is always presentable, (not to mention desirable). Here’s how you can look the
                        part by mastering ...</p><br />
                        <a>READ MORE</a>
                    </div>
                </div>
            </div>


            <div className="content-img-5">
                <div className="zoom-In">
                    <div className="text">
                        <h3>Formal dressing rules you're probably ignoring</h3><br />
                        <p>A true gentleman is always presentable, (not to mention desirable). Here’s how you can look the
                        part by mastering ...</p><br />
                        <a>READ MORE</a>
                    </div>
                    <div className="figure">
                        <img width="250px" height="auto"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_content3.jpg" alt="" />
                    </div>
                </div>
                <div className="zoom-In">
                    <div className="text">
                        <h3>Formal dressing rules you're probably ignoring</h3><br />
                        <p>A true gentleman is always presentable, (not to mention desirable). Here’s how you can look the
                        part by mastering ...</p><br />
                        <a>READ MORE</a>
                    </div>
                    <div>
                        <img width="auto" height="250px"
                            src="https://louisphilippe.imgix.net/img/app/brands/lp/LP_D_content4.jpg" alt="" />
                    </div>
                </div>



            </div>

            <div className="border"></div>
        </div>



    )
}
