import React from 'react'

function Banner({children, title, subtitle}) {
    return (
        <div className="banner">
           <h1>{title}</h1> 
           <p>{subtitle}</p>
           <div/>
           {children}
        </div>
    )
}

export default Banner
