import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Slider() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
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
          <ReactImageGallery
            items={images}
            autoPlay={true}
            showPlayButton={false}
            slideDuration={700}
            showNav={false}
          />
        </div>
      </div>
    </>
  );
}
