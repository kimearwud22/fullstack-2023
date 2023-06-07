import React from 'react'
import Layout from '../component/admin/Layout';
import Testi from '../component/admin/AllTesti';

export default function testimoni() {
  return (
    <div>
        <Layout>
            <div className='container'>
                <Testi/>
            </div>
        </Layout>
    </div>
  )
}
