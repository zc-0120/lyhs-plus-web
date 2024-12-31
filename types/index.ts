import React from 'react'
export interface DotProps {
    color?: string
    size?: number
    spacing?: number
    children?: React.ReactNode
    className?: string
    style?: React.CSSProperties
    /**
     * @description Whether to show the gradient or not
     * @type {boolean}
     * @default false
     */
    gradient?: boolean
    /**
     * @description The width of the gradient on either side
     * @type {number | string}
     * @default 100
     */
    gradientWidth?: number | string

    /**
     * @description The height of the gradient on either side
     * @type {number | string}
     * @default 200
     */
    gradientHeight?: number | string
}