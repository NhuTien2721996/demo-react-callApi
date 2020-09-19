import React from 'react';
import {Link} from 'react-router-dom'
function ProductItem({product, index,onDelete}) {
    let statusName = product.status ? 'Còn hàng' : 'Hết hàng';

    function deleteProduct(id) {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Bạn chắc chắn muốn xóa không?")) {
            onDelete(id)
        }
    }


    return (
        <tr>
            <th scope="row">{index + 1}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{statusName}</td>
            <td>
                <button className="btn btn-danger mr-10" onClick={() => deleteProduct(product.id)}>Xóa</button>
                <Link to={`/product/${product.id}/edit`} className="btn btn-warning">Cập nhập</Link>
            </td>
        </tr>
    );
}

export default ProductItem;
