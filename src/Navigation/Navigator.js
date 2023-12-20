
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Data/Screen/Home'
import ItemDetail from '../Data/Screen/ItemDetail'
import ItemListCategories from "../Data/Screen/ItemListCategories"
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();


const Navigator = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'
                    screenOptions={
                        ({ route }) => {
                            return {
                                header: () => <Header title={
                                    route.name === "Home" ? "CATEGORIAS" :
                                        route.name === "ItemListCategories" ? "OPCIONES" :
                                            "RECETA ELEGIDA"
                                } />
                            }
                        }
                    }
                >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
                    <Stack.Screen name="ItemDetail" component={ItemDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator