import React from 'react';
import FullLayout from '../../src/layouts/FullLayout';
import EditAdmin from './../../component/admin/EditAdmin';

function edit() {

    return (
        <FullLayout>
            <div>
                <div className="container">
                    <EditAdmin/>
                </div>
            </div>
        </FullLayout>
    );
}


export default edit;