
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../Data/Screen/Home"
import ItemDetail from '../Data/Screen/ItemDetail';
import ItemListCategories from "../Data/Screen/ItemListCategories"
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();


const Navigator = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'
                    screenOptions={
                        ({ route, navigation }) => {
                            return {
                                header: () => <Header title={
                                    route.name === "HomeNav" ? "CATEGORIAS" :
                                        route.name === "ItemListCategoriesNav" ? "OPCIONES" :
                                            "RECETA ELEGIDA"
                                }
                                    goBack={() => navigation.goBack()}
                                />
                            }
                        }
                    }
                >
                    <Stack.Screen name="HomeNav" component={Home} />
                    <Stack.Screen name="ItemListCategoriesNav" component={ItemListCategories} />
                    <Stack.Screen name="ItemDetailNav" component={ItemDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigator