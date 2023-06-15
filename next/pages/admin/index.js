import React from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import SalesChart from '../../src/components/dashboard/SalesChart'
import TopCards from '../../src/components/dashboard/TopCards'
import DataAdmin from '../../component/admin/AllAdmin';

export default function Index() {
  return (
    <div>
    <FullLayout>
      <SalesChart/>
      <TopCards/>
      <DataAdmin/>
    </FullLayout>
    </div>
  )
}


