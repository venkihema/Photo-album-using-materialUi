import "./App.css";
export const Gallery = ({ imagesData }) => {
  console.log(imagesData);
  return (
    <div className="gallery">
      {imagesData.map((image) => (
        <div key={image.id} className="imgContainer">
          <img
            src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
            alt={image.title}
          />
        </div>
      ))}
    </div>
  );
};
