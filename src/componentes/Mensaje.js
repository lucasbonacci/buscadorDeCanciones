import React from 'react'

const Mensaje = (msj, bgColor) => {

    let styles ={
        padding: '1rem',
        marginBottom:'1rem',
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: bgColor
    }
    return (
        <div style={styles}>
            <p>{msj}</p>
        </div>
    )
}

export default Mensaje
