import React from 'react'
import Layout from '../component/admin/Layout';
import Produk from '../component/admin/AllProduk';

export default function produk() {
  return (
    <div>
        <Layout>
            <div className='container'>
                <Produk/>
            </div>
        </Layout>
    </div>
  )
}
