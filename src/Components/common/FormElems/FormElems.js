import React from 'react'
import './FormElems.css'

export const TextArea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={hasError ? 'form-add-post' : ''}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}