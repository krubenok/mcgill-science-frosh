/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faBrain, faMicroscope, faAtom, faLaptopCode, faTerminal, faCoffee } from '@fortawesome/free-solid-svg-icons'

const icons = {
    triangle: {
        shape: (
            <FontAwesomeIcon icon={faFlask} />
        ),
        viewBox: `0 0 30 30`,
    },
    circle: {
        shape: (
            <FontAwesomeIcon icon={faTerminal} />
        ),
        viewBox: `0 0 30 30`,
    },
    arrowUp: {
        shape: (
            <FontAwesomeIcon icon={faMicroscope} />
        ),
        viewBox: `0 0 30 30`,
    },
    upDown: {
        shape: (
            <FontAwesomeIcon icon={faAtom} />
        ),
        viewBox: `0 0 30 30`,
    },
    box: {
        shape: (
            <FontAwesomeIcon icon={faCoffee} />
        ),
        viewBox: `0 0 30 30`,
    },
    hexa: {
        shape: (
            <FontAwesomeIcon icon={faLaptopCode} />
        ),
        viewBox: `0 0 30 30`,
    },
    cross: {
        shape: (
            <FontAwesomeIcon icon={faBrain} />
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
