import React from 'react'
import Layout from '../component/admin/Layout'
import Produk from '../component/admin/Produk'

export default function ProdukPage() {
  return (
    <div>
        <Layout>
        <div id="content-wrapper" class="d-flex flex-column">
           <Produk/>
           </div>
        </Layout>
    </div>
  )
}
