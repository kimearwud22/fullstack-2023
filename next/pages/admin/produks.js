import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TableProduk from '../../component/admin/Produk'
import AllProduk from '../../component/admin/AllProduk'
import FullLayout from '../../src/layouts/FullLayout';

function dataproduk({ produks }) {

    return (
        <FullLayout>
            <div>
                <div className="container">
                    <TableProduk />
                    <AllProduk/>
                </div>
            </div>
        </FullLayout>
    );
}


export default dataproduk;