import React from 'react'

export default function Container({ className, children }) {
    return (
        <div className={`max-w-[1100px] mx-auto ${className}`}>
            {children}
        </div>
    )
}
