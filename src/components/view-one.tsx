import React from 'react'

import SpaceContainer from './components-container';
import { fooBaz } from '@src/constants-panics';
// import { fooBaz } from '@src/constants-no-panics';

export const ViewOne = () => {
    return <SpaceContainer notifications={fooBaz.notifications} />
}