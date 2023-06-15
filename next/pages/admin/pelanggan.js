import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TablePelanggan from '../../component/admin/AllPelanggan'
import FullLayout from '../../src/layouts/FullLayout';

function dataproduk({ produks }) {

    return (
        <FullLayout>
            <div>
                <div className="container">
                    <TablePelanggan />
                </div>
            </div>
        </FullLayout>
    );
}


export default dataproduk;