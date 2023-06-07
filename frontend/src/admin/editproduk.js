import React from 'react'
import Layout from '../component/admin/Layout';
import EditProduk from '../component/admin/EditProduk';

export default function produk() {
  return (
    <div>
        <Layout>
            <div className='container'>
                <EditProduk/>
            </div>
        </Layout>
    </div>
  )
}
