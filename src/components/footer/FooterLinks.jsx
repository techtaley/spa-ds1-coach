import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterLinks({data}) {
  return (
    <>
        {data.map(link => 
            <Link className="footer-link" to={link}>{link}</Link>
        )}
    </>
  )
}
