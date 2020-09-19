import React from 'react';

function ProductsList({children}) {
    return (
        <table className="table table-striped mb-10">
            <thead>
            <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên</th>
                <th scope="col">Giá</th>
                <th scope="col">Trang thái</th>
                <th scope="col">Hàng động</th>
            </tr>
            </thead>
            <tbody>
            {children}
            </tbody>
        </table>
    );
}

export default ProductsList;
