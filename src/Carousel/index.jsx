import React, { useRef, useState } from "react";
import Slider from "react-slick";
import CustomArrows from "../CustomArrows";
import "../styles/index.css";

export default function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0)

    var settings = {
        className: "center",
        centerMode: true,
        slidesToShow: 5,
        dots:false,
        arrows:false,
        centerPadding:'50px',
        afterChange: function(index) {
            setCurrentIndex(index)
        }
    };

    let sliderRef= useRef()

    function next() {
        sliderRef.current.slickNext();
      }
    function previous() {
        sliderRef.current.slickPrev();
      }

    

      const items = [
            {
                id:0,
                src:"https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
            },
            {
                id:1,
                src:"https://images.unsplash.com/photo-1538991383142-36c4edeaffde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
            },
            {
                id:2,
                src:"https://plus.unsplash.com/premium_photo-1669839774560-f4524492b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            },
            {
                id:3,
                src:"https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            },
            {
                id:4,
                src:"https://images.unsplash.com/photo-1532983330958-4b32bbe9bb0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            },
            {
                id:5,
                src:"https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
            },
            {
                id:6,
                src:"https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
            },
            {
                id:7,
                src:"https://images.unsplash.com/photo-1551815943-385d5246c8a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            }
        ]
    return (
      <div className="container">
        <div className="text-container">
            <text style={{fontSize: '65px'}}>Featured Products</text>
            <text>Explore and Discover the variety of products</text>
        </div>
        
        <Slider {...settings} ref={sliderRef}>
          {
                items.map((item) => {
                    return(
                        <div className="carousel-item">
                            <img src={item.src}/>
                        </div>
                    )
                })
            }
        </Slider>
        <CustomArrows items={items} currentIndex={currentIndex} next={next} previous={previous}/>
      </div>
    );
  }

