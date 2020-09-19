import React, {useEffect} from 'react';
import ProductsList from "../../components/ProductsList/ProductsList";
import ProductItem from "../../components/ProductItem/ProductItem";
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import {getAllRequest,deleteProductRequest} from '../../actions/index';


function ProductListPage({getAllProducts,products,onDeleteProduct}) {
    useEffect(() => {
        getAllProducts();
    }, []);

    function onDelete(id) {
        onDeleteProduct(id);
    }


    return (
        <div className="col">
            <Link className="btn btn-primary mb-10" to="/product/add">Thêm sản phẩm</Link>
            <ProductsList>
                {showProduct(products)}
            </ProductsList>
        </div>
    );

    function showProduct(products) {
        let result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={onDelete}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        getAllProducts:()=>{
            dispatch(getAllRequest())
        },
        onDeleteProduct:(id)=>{
            dispatch(deleteProductRequest(id));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
