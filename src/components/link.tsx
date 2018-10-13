import React, { ReactNode } from 'react'

export interface LinkProps {
    active: boolean
    children?: ReactNode
    onClick(): void
}

const Link = ({ active, children, onClick }: LinkProps) => (
    <button className="btn btn-link"
        onClick={onClick}
        disabled={active}
    >
        {children}
    </button>
)

export default Link
