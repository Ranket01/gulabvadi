import React, { useRef, useEffect,useState  } from 'react';
import './PhotoGallery.css';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const galleryRef = useRef(null);

  useEffect(() => {

    const storage = getStorage();
    const storageRef = ref(storage, 'gs://gulabvadi-4169a.appspot.com');


    const gallery = galleryRef.current;
    let animationFrameId;
    let scrollLeft = 0;
    let isScrollingRight = true;


    const fetchImages = async () => {
      const imageList = await listAll(storageRef);
      const urls = await Promise.all(imageList.items.map(async (imageRef) => {
        const url = await getDownloadURL(imageRef);
        return url;
      }));
      setImages(urls);
    };
    fetchImages();


    const scroll = () => {
      if (isScrollingRight) {
        scrollLeft++;
        if (scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
          isScrollingRight = false;
        }
      } else {
        scrollLeft--;
        if (scrollLeft <= 0) {
          isScrollingRight = true;
        }
      }

      gallery.scrollLeft = scrollLeft;
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (<>
    <div className="photogalleryheading"> <h1> Photo Gallery </h1> </div>
    <div className="photo-gallery-container">
      <div ref={galleryRef} className="photo-gallery">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="photo-gallery-image"
          />
        ))}
      </div>
    </div>
    </>);
};

export default PhotoGallery;


// import React, { useRef, useEffect, useState } from 'react';
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// import './PhotoGallery.css';

// const PhotoGallery = () => {
//   const [images, setImages] = useState([]);
//   const galleryRef = useRef(null);

//   useEffect(() => {
//     const storage = getStorage();
//     const storageRef = ref(storage, 'images/');
//     let animationFrameId;
//     let scrollLeft = 0;
//     let isScrollingRight = true;

//     const fetchImages = async () => {
//       const imageList = await listAll(storageRef);
//       const urls = await Promise.all(imageList.items.map(async (imageRef) => {
//         const url = await getDownloadURL(imageRef);
//         return url;
//       }));
      
//       setImages(urls);
//       console.log(urls)
//     };
//     fetchImages();

//     const scroll = () => {
//       if (isScrollingRight) {
//         scrollLeft++;
//         if (scrollLeft >= galleryRef.current.scrollWidth - galleryRef.current.clientWidth) {
//           isScrollingRight = false;
//         }
//       } else {
//         scrollLeft--;
//         if (scrollLeft <= 0) {
//           isScrollingRight = true;
//         }
//       }

//       galleryRef.current.scrollLeft = scrollLeft;
//       animationFrameId = requestAnimationFrame(scroll);
//     };

//     scroll();

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <>
//       <div className="photogalleryheading"> <h1> Photo Gallery </h1> </div>
//       <div className="photo-gallery-container">
//         <div ref={galleryRef} className="photo-gallery">
//           {images.map((imageUrl, index) => (
//             <img
//               key={index}
//               src={imageUrl}
//               alt={`Image ${index + 1}`}
//               className="photo-gallery-image"
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default PhotoGallery;
