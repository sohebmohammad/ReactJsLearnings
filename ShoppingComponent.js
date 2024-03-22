import React, { Component } from "react";

export default class ShoppingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            cartItems: [],
            itemsCount: 0,
            Amount: 0
        };
        this.LoadCatogories = this.LoadCatogories.bind(this);
        this.LoadProducts = this.LoadProducts.bind(this);
        this.selectCatagory=this.selectCatagory.bind(this);
    }

    LoadCatogories(url) {
        fetch('http://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('all');
                this.setState({
                    categories: data
                });
            });
    }

    LoadProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data
                });
            });
    }
    selectCatagory(e) {
        alert(e.target.value)

       this.LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`)
    }

    componentDidMount() {
        this.LoadCatogories();
        this.LoadProducts('http://fakestoreapi.com/products');
    }

    render() {
        return (
            <>
                <div className="container-fluid">
                    <h1 className="text-center bg-danger p-4">Shoju Shopping</h1>
                </div>
                <div className="row">
                    <div className="col-3 m-3">
                        <h2>Select a Category</h2>
                        <select onChange={this.selectCatagory}className="form-select">
                            {this.state.categories.map(category => (
                                <option key={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-6 d-flex flex-wrap justify-content-start overflow-auto" style={{ height: '600px' }}>
                        {this.state.products.map(product => (
                            <div key={product.id} className="card" style={{ width: '200px', margin: '10px' }}>
                                <img src={product.image} alt={product.title} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">${product.price}</p>
                                    {/* Add other product information as needed */}
                                </div>
                                <button className="btn btn-danger">AddToCart</button>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}
