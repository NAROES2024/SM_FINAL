import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import galleryData from "../data/GalleryData";

export default function Slider() {

  return (
    <>
      <div class="container-xxl py-5" id="review">
        <div class="container py-5 px-lg-5">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 class="text-primary-gradient fw-medium">Samudramanthan'24</h5>
            <h1 class="mb-5">Glimpses</h1>
          </div>
          <ReactImageGallery
            items={galleryData}
            autoPlay={true}
            showPlayButton={true}
            slideDuration={700}
            showNav={false}
          />
        </div>
      </div>
    </>
  );
}
