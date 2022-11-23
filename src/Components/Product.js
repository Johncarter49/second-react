import { Fragment } from "react";

const Product = () => {
    const age = 30;

    return ( 
        <Fragment>
        <div className="App">
          <h1 className="header-1">Header</h1>
          <p>Ali is {age}</p>
        </div>
      </Fragment>
     );
}
 
export default Product;