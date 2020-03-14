import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }
  handleAdd = () => {
    const { item } = this.state;
    item.count++;
    this.setState({ item });
  };
  handleDecrease = () => {
    const { item } = this.state;
    item.count--;
    this.setState({ item });
  };

  render() {
    const { item } = this.state;
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
                onClick={this.handleDecrease}
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
                onClick={this.handleAdd}
              >
                ADD
              </button>
            )}
            {item.count ? (
              <button
                style={{ height: "30px", margin: "20px 0px 0px 10px" }}
                onClick={this.handleAdd}
              >
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
