import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import EditProduk from '../../component/admin/EditProduk'
import FullLayout from '../../src/layouts/FullLayout';

function editproduk({ produks }) {

    return (
        <FullLayout>
            <div>
                <div className="container">
                    <EditProduk />
                </div>
            </div>
        </FullLayout>
    );
}


export default editproduk;