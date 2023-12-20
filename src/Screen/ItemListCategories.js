<<<<<<< HEAD:src/Data/Screen/ItemListCategories.js
import { FlatList, StyleSheet} from 'react-native'
import { useState, useEffect } from 'react'
import allRecetas from '../Json/recetas.json'
import ProductItem from '../../Components/ProductItem'
import {colors} from '../Global/colors'

const ItemListCategories = ({ navigation, route }) => {
    const { category } = route.params
    const [products, setProducts] = useState(allRecetas)

    useEffect(() => {

        if (category) {
            const productsCategory = allRecetas.filter(product => product.category === category)
            setProducts(productsCategory)
        }
    }, [category])

    return (
        <FlatList
            style={styles.container}
            data={products}
            keyExtractor={item => item}
            renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route} />}
        />
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: colors.principal
    },
})
=======
import { View, Text, FlatList, StyleSheet} from 'react-native'
import { useState, useEffect } from 'react'
import allRecetas from '../Data/Json/recetas.json'
import ProductItem from '../Components/ProductItem'
import {colors} from '../Global/colors'

const ItemListCategories = ({ navigation, route }) => {
    const { category } = route.params
    const [products, setProducts] = useState(allRecetas)

    useEffect(() => {

        if (category) {
            const productsCategory = allRecetas.filter(product => product.category === category)
            setProducts(productsCategory)
        }
    }, [category])

    return (
        <FlatList
            style={styles.container}
            data={products}
            keyExtractor={item => item}
            renderItem={({ item }) => <ProductItem item={item} navigation={navigation} route={route} />}
        />
    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: colors.principal
    },
})
>>>>>>> e0509873eee6dc9d5f2fa4d9b03c130ed8ff92b0:src/Screen/ItemListCategories.js
