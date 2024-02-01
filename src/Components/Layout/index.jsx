import React from 'react'

function Layout({children}) {
  return (
    <div className='flex flex-col mt-20 items-center'>
        {children}
    </div>
  )
}

export default Layout