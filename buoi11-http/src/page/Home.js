import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>Home
        <Link to= {'/nhac-tre'} > Nhac tre</Link>
    </div>
  )
}

export default Home