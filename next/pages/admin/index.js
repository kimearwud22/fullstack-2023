import React from 'react'
import FullLayout from '../../src/layouts/FullLayout'
import SalesChart from '../../src/components/dashboard/SalesChart'
import TopCards from '../../src/components/dashboard/TopCards'
import DataAdmin from '../../component/admin/AllAdmin';
import CreateAdmin from '../../component/admin/CreateAdmin';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Index() {
  // const router = useRouter();
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem('isLoggedIn');
  //   if(!isLoggedIn){
  //     router.push('/admin/login')
  //   }
  // }, [])
  return (
    <div>
    <FullLayout>
      <SalesChart/>
      <TopCards/>
      <CreateAdmin/>
      <DataAdmin/>
    </FullLayout>
    </div>
  )
}


