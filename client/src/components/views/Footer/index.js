import React from 'react'

export default function Footer() {
    return (
       <div style={{
            display: 'flex', width:'100%', height:'5vh',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'12px', padding: '20px 0px 10px 0px'
        }}>
           <p> Copyright &#169; 2020 PNDHD. Tout droits reservés.</p>
        </div>
    )
}
