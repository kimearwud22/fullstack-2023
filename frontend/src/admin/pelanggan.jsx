import React from 'react'
import Layout from '../component/admin/Layout'
import Produk from '../component/admin/AllPelanggan'

export default function pelanggan() {
  return (
    <div>
        <Layout>
           <div className="container">
           <Produk/>
           </div> 
        </Layout>
    </div>
  )
}
