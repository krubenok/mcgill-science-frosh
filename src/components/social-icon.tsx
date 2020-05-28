/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../util/fontawesome"
import {
    IconLookup,
    IconDefinition,
    findIconDefinition,
    IconName,
} from "@fortawesome/fontawesome-svg-core"

type SocialIconProps = {
    link: string
    icon: IconName
}

export default function SocialIcon(props: SocialIconProps) {
    const { link, icon } = props

    const lookup: IconLookup = { prefix: "fab", iconName: icon }
    const definition: IconDefinition = findIconDefinition(lookup)

    return (
        <a href={link} target="_blank" rel="noreferrer noopener">
            <div
                sx={{
                    margin: `0px 25px 0px 0px`,
                }}
            >
                <FontAwesomeIcon icon={definition} size="3x" color="black"/>
            </div>
        </a>
    )
}
