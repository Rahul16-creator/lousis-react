import React from 'react';
import "../styles/slider-corousel.css"

class Slider extends React.Component {

    constructor() {
        super()
        this.state = { index: 1 };
        this.IncSlide = this.IncSlide.bind(this)
        this.DecSlide = this.DecSlide.bind(this)
        this.current = this.current.bind(this)

    }

    componentDidMount() {
        setInterval(
            this.IncSlide, 4000)
    }

    IncSlide() {
        let val = this.state.index;
        if (val < 5) {
            val += 1;
        }
        else {
            val = 1;
        }
        this.setState({ index: val });
    }

    DecSlide() {
        let val = this.state.index;
        if (val > 1) {
            val -= 1;
        }
        else {
            val = 5;
        }
        this.setState({ index: val });
    }

    current(val) {
        // this.setState({ index: val })
    }
    render() {
        return (
            <div>
                <div className="slideshow-container">
                    <div className={`mySlides ${this.state.index === 1 ? "fade" : ""}`}>
                        <img  width="100%" src="https://louisphilippe.imgix.net/img/app/shopmedia/production/3/3-10-5704.jpg" alt="" />
                    </div>

                    <div className={`mySlides ${this.state.index === 2 ? "fade" : ""}`}>
                        <img  width="100%" src="https://louisphilippe.imgix.net/img/app/shopmedia/production/3/3-10-6047.gif" alt="" />
                    </div>

                    <div className={`mySlides ${this.state.index === 3 ? "fade" : ""}`}>
                        <img  width="100%" src="https://louisphilippe.imgix.net/img/app/shopmedia/production/3/3-10-6104.jpg" alt="" />
                    </div>

                    <div className={`mySlides ${this.state.index === 4 ? "fade" : ""}`}>
                        <img width="100%" src="https://louisphilippe.imgix.net/img/app/shopmedia/production/3/3-10-5931.jpg" alt="" />
                    </div>

                    <div className={`mySlides ${this.state.index === 5 ? "fade" : ""}`}>
                        <img width="100%" src="https://louisphilippe.imgix.net/img/app/shopmedia/production/3/3-10-5829.jpg" alt="" />
                    </div>


                    {/* arrows */}
                    <a className="left_arrow" onClick={this.DecSlide} >
                        &#10094;
                </a>
                    <a className="right_arrow" onClick={this.IncSlide} >
                        &#10095;
                </a>

                
                    <div className="text">
                        <span className={`dot ${this.state.index === 1 ? "active" : ""}`} onClick={this.current()}></span>
                        <span className={`dot ${this.state.index === 2 ? "active" : ""}`} onClick={this.current()}></span>
                        <span className={`dot ${this.state.index === 3 ? "active" : ""}`} onClick={this.current()}></span>
                        <span className={`dot ${this.state.index === 4 ? "active" : ""}`} onClick={this.current()}></span>
                        <span className={`dot ${this.state.index === 5 ? "active" : ""}`} onClick={this.current()}></span>
                    </div>

                </div>
            </div>
        )

    }
}



export default Slider;