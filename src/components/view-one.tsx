import SpaceContainer from './components-container';
import { fooBaz } from '@src/constants';

export const ViewOne = () => {
    return <SpaceContainer notifications={fooBaz.notifications} />
}