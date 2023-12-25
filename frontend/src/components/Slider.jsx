import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Slider() {
  const images = [
    {
      original: "img/gallery/1.jpg",
      thumbnail: "img/gallery/1.jpg",
    },
    {
      original: "img/gallery/2.jpg",
      thumbnail: "img/gallery/2.jpg",
    },
    {
      original: "img/gallery/3.jpg",
      thumbnail: "img/gallery/3.jpg",
    },
    {
      original: "img/gallery/4.jpg",
      thumbnail: "img/gallery/4.jpg",
    },
    {
      original: "img/gallery/5.jpg",
      thumbnail: "img/gallery/5.jpg",
    },
    {
      original: "img/gallery/6.jpg",
      thumbnail: "img/gallery/6.jpg",
    },
    {
      original: "img/gallery/7.jpg",
      thumbnail: "img/gallery/7.jpg",
    },
    {
      original: "img/gallery/8.jpg",
      thumbnail: "img/gallery/8.jpg",
    },
    {
      original: "img/gallery/9.jpg",
      thumbnail: "img/gallery/9.jpg",
    },
    {
      original: "img/gallery/10.jpg",
      thumbnail: "img/gallery/10.jpg",
    },
    {
      original: "img/gallery/11.jpg",
      thumbnail: "img/gallery/11.jpg",
    },
    {
      original: "img/gallery/12.jpg",
      thumbnail: "img/gallery/12.jpg",
    },
    {
      original: "img/gallery/13.jpg",
      thumbnail: "img/gallery/13.jpg",
    },
    {
      original: "img/gallery/14.jpg",
      thumbnail: "img/gallery/14.jpg",
    },
    {
      original: "img/gallery/15.jpg",
      thumbnail: "img/gallery/15.jpg",
    },
  ];

  return (
    <>
      <div class="container-xxl py-5" id="review">
        <div class="container py-5 px-lg-5">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="text-primary-gradient fw-medium">Samudramanthan'23</h5>
            <h1 class="mb-5">Glimpse</h1>
          </div>
          <div>
          <ReactImageGallery
            items={images}
            autoPlay={true}
            showPlayButton={false}
            slideDuration={700}
            showNav={true}
          />
          </div>
        </div>
      </div>
    </>
  );
}
