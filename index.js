/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Home from './Home';
import LogIn from './LogIn';
import MakeProfile from './MakeProfile';
import ItemsToSellOnProfile from './ItemsToSellOnProfile';
import UserPreferences from './UserPreferences';
import IntroductionLanding from './IntroductionLanding';
import Introduction from './Introduction';

AppRegistry.registerComponent(appName, () => Home);
