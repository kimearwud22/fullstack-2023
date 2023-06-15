import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TableProduk from '../../component/admin/AllProduk'
import FullLayout from '../../src/layouts/FullLayout';

function dataproduk({ produks }) {

    return (
        <FullLayout>
            <div>
                <div className="container">
                    <TableProduk />
                </div>
            </div>
        </FullLayout>
    );
}


export default dataproduk;