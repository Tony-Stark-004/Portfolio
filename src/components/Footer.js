import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
    <Layout className='py-8 flex items-center justify-between'>
          <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
          <div className='flex items-center'>
            Build with
            <span className='text-2xl px-1'>&#9825;</span>
            by&nbsp;
            <Link href='https://github.com/Tony-Stark-004' target={'_blank'} className='hover:underline underline-offset-2'>Aditya</Link>
          </div>
          <Link href='https://github.com/Tony-Stark-004' target={'_blank'}>Say hello</Link>
    </Layout>
   </footer>
  )
}

export default Footer