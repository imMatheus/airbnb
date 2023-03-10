import React from 'react'

export const Heart: React.FC<React.CSSProperties> = ({ ...styles }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            role='img'
            aria-hidden='false'
            aria-label='Navigera till Twitter'
            focusable='false'
            style={{
                height: '18px',
                width: '18px',
                display: 'block',
                ...styles,
            }}
        >
            <path d='m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z' />
        </svg>
    )
}
