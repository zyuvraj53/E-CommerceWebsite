import Navbar from './Components/Navbar';


function ProductPage({image, altText, productDetails}) {
  return (
    <div className="Product">
      <header className="Product-header">
      </header>
      <body className="flex justify-between">
        <div>
        <img src={image} alt={altText} className="m-2 p-2"/>
        </div>
        <div className="m-2 p-2">
          <h1>{productDetails} This is the heading </h1>
          <p>{productDetails} This is the product price </p>
          {/* some more info */}
        </div>
      </body>
    </div>
  );
}

export default ProductPage;
