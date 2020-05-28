/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../../util/fontawesome"

const icons = {
    triangle: {
        shape: (
            <FontAwesomeIcon icon="flask" />
        ),
        viewBox: `0 0 30 30`,
    },
    circle: {
        shape: (
            <FontAwesomeIcon icon="terminal" />
        ),
        viewBox: `0 0 30 30`,
    },
    arrowUp: {
        shape: (
            <FontAwesomeIcon icon="microscope" />
        ),
        viewBox: `0 0 30 30`,
    },
    upDown: {
        shape: (
            <FontAwesomeIcon icon="atom" />
        ),
        viewBox: `0 0 30 30`,
    },
    box: {
        shape: (
            <FontAwesomeIcon icon="coffee" />
        ),
        viewBox: `0 0 30 30`,
    },
    hexa: {
        shape: (
            <FontAwesomeIcon icon="laptop-code" />
        ),
        viewBox: `0 0 30 30`,
    },
    cross: {
        shape: (
            <FontAwesomeIcon icon="brain" />
        ),
        viewBox: `0 0 100 100`,
    },
}

type IconType =
    | "triangle"
    | "circle"
    | "arrowUp"
    | "upDown"
    | "box"
    | "hexa"
    | "cross"

type SVGProps = {
    stroke?: boolean
    color?: string | number | any
    width: number
    icon: IconType
    left: string
    top: string
    hiddenMobile?: boolean
}

const defaultProps = {
    stroke: false,
    hiddenMobile: false,
}

const SVG = ({
    stroke,
    color,
    width,
    icon,
    left,
    top,
    hiddenMobile,
}: SVGProps) => (
    <svg
        sx={{
            position: `absolute`,
            stroke: stroke ? `currentColor` : `none`,
            fill: stroke ? `none` : `currentColor`,
            display: hiddenMobile ? hidden : `block`,
            color,
            width,
            left,
            top,
        }}
        viewBox={icons[icon].viewBox}
    >
        {icons[icon].shape}
    </svg>
)

export default SVG

SVG.defaultProps = defaultProps
