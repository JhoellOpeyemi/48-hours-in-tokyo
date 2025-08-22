import "./imageCard.css";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image.src} alt={image.alt} />
      <div className="overlay" />
    </div>
  );
};

export default ImageCard;
