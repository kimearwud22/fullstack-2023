import React from 'react'
import Layout from '../component/admin/Layout'
import Admin from '../component/admin/AllAdmin'

export default function index() {
  return (
    <div>
        <Layout>
           <div className="container">
           <Admin/>
           </div> 
        </Layout>
    </div>
  )
}
