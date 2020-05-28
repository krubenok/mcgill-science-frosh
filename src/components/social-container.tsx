/** @jsx jsx */
import { jsx } from "theme-ui"

type SocialContainerProps = {
    children: React.ReactNode
}

export default function SocialIcon(props: SocialContainerProps) {
    const { children } = props

    return (
        <div
            sx={{
                display: `flex`,
                flexWrap: `wrap`
            }}
        >
            {children}
        </div>
    )
}
