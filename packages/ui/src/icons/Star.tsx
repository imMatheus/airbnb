import React from 'react'

export const Star: React.FC<{ style?: React.CSSProperties }> = ({ style }) => {
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
                fill: 'currentcolor',
                ...style,
            }}
        >
            <path
                d='M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z'
                fillRule='evenodd'
            />
        </svg>
    )
}
