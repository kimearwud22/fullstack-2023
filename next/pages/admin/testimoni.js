import React from 'react';
// import DataPelanggan from '../../component/DataPelanggan'
import TabelTesti from '../../component/admin/AllTesti'
import FullLayout from '../../src/layouts/FullLayout';

function dataTestimoni() {

    return (
        <FullLayout>
            <div>
                <div className="container">
                    <TabelTesti />
                </div>
            </div>
        </FullLayout>
    );
}


export default dataTestimoni;