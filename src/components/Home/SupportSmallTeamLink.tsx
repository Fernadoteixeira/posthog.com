import React from 'react'
import SmallTeam from 'components/SmallTeam'

export const SupportSmallTeamLink = ({
    translate = (value: string) => value,
}: {
    translate?: (value: string) => string
}) => (
    <SmallTeam slug="support" noMiniCrest>
        {translate('support folks')}
    </SmallTeam>
)

export default SupportSmallTeamLink
