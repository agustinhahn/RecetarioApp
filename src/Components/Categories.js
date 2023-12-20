import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import allCategories from '../Data/Json/categorias.json'
import CategoryItem from './CategoryItem'
import { colors } from '../Data/Global/colors'

const Categories = ({navigation, route}) => {
    return (
        <FlatList 
            style={styles.container}
            data={allCategories}
            keyExtractor={item => item}
            renderItem={({item})=> <CategoryItem category={item} navigation={navigation} route={route}/>}
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        width:"100%",
        backgroundColor: colors.principal,
    }
})