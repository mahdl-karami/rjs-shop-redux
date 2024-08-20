import { useState } from "react";

function DetailsImages({ images }) {
  const [image, setImage] = useState(0);
  return (
    <div className="details-images">
      <img src={images[image]} alt="Product image" className="details-main-image" />
      {images?.map((image, index) => (
        <img key={index} src={image} alt="Product image" className="details-small-image" onClick={() => setImage(index)} />
      ))}
    </div>
  );
}

export default DetailsImages;
