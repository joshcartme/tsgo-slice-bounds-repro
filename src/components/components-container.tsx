import React from 'react';

import type {
    OuterSpaceProps,
    OuterSpaceConfig
} from '@src/types/store/utility';

type Props = OuterSpaceProps & OuterSpaceConfig;

const SpaceContainer = ({}: Props) => {
    return <p>hello</p>
}

export const OuterSpaceConainterItem = SpaceContainer;
export default SpaceContainer;