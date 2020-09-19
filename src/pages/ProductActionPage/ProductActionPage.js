import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {addProductRequest, updateProductRequest, editProductRequest} from '../../actions/index';
import {connect} from 'react-redux'

function ProductActionPage({history, match, onAddProduct, productEditing, onUpdateProduct, onEditProduct}) {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [status, setStatus] = useState(false);

    function onSave(e) {
        e.preventDefault();
        let product = {
            id,
            name,
            price,
            status
        };
        if (id) {
            onUpdateProduct(product);
            history.goBack();
        } else {
            onAddProduct(product);
            history.goBack()
        }
    }

    useEffect(() => {
        if (match) {
            let id = match.params.id;
            onEditProduct(id);
        }
    }, []);

    useEffect(() => {
        if (productEditing) {
            setId(productEditing.id);
            setName(productEditing.name);
            setPrice(productEditing.price);
            setStatus(productEditing.status);
        } else {
            setId("");
            setName("");
            setPrice("");
            setStatus("");
        }
    }, [productEditing]);

    return (
        <div className="col-6">
            <form onSubmit={onSave}>
                <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control"
                           value={name}
                           name="name"
                           onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Giá sản phẩm</label>
                    <input type="text" className="form-control" name="price"
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="mr-10">Còn hàng</label>
                    <input type="checkbox" name="status"
                           value={status}
                           onChange={(e) => setStatus(e.target.checked)}
                           checked={status}
                    />
                </div>
                <button type="submit" className="btn btn-primary mr-10">Lưu</button>
                <Link to="/product-list" className="btn btn-danger">Trở lại</Link>
            </form>
        </div>
    );

}

const mapStateToProp = state => {
    return {
        productEditing: state.productEditing
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(addProductRequest(product))
        },
        onUpdateProduct: (product) => {
            dispatch(updateProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(editProductRequest(id))
        }

    }
};

export default connect(mapStateToProp, mapDispatchToProps)(ProductActionPage);
