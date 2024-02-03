import Navbar from "./Components/Navbar";
import profilePic from "./Assets/missing_picture.avif";
import AddButton from "./Components/AddButton";

function ProductPage({ image, altText, productDetails }) {
  return (
    <div className="Product">
      <header className="Product-header"></header>
      <body className="flex justify-around">
        <div>
          <img src={profilePic} alt={altText} className="m-2 p-2" />
        </div>
        <div className="flex flex-col m-2 p-2">
          <h1 className="text-2xl">{productDetails} This is the heading </h1>
          <p className="text-lg">{productDetails} This is the product price </p>
          {/* some more info */}
          <AddButton/>
        </div>
      </body>
    </div>
  );
}

export default ProductPage;
