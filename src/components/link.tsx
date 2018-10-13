import React from 'react'

export interface LinkProps {
  active: boolean
  children: any[]
  onClick(): void
}

const Link = ({ active, children, onClick }: LinkProps) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link
