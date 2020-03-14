import React from "react";

class Product extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "row", marginLeft: "50px" }}
        >
          <div>
            <p>Name : {item.name}</p>
            <p>Description : {item.description}</p>
          </div>
          <p style={{ marginLeft: "100px" }}>Price : ${item.price}</p>
          <div>
            {item.count ? (
              <button
                style={{
                  height: "30px",
                  margin: "20px 10px 0px 100px"
                }}
              >
                -
              </button>
            ) : null}
            {item.count ? (
              item.count
            ) : (
              <button
                style={{
                  height: "30px",
                  marginTop: "20px",
                  marginLeft: "100px"
                }}
              >
                ADD
              </button>
            )}
            {item.count ? (
              <button style={{ height: "30px", margin: "20px 0px 0px 10px" }}>
                +
              </button>
            ) : null}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
export default Product;
