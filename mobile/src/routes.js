import { createStackNavigator } from '@react-navigation/stack';
import {createStackNavigator, NavigationContainer} from '@react-navigation/native';

const AppStack = createStackNavigator();

import Incidents from './Pages/Incidents';
import Detail from './Pages/Detail';

export default function Routes(){
    return (
    <NavigationContainer>
        <AppStack.Navigator>
            <AppStack.Screen component={Incidents} />
            <AppStack.Screen component={Detail} />
        </AppStack.Navigator>
    </NavigationContainer>
    );
}