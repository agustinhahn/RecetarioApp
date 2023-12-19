import { View, Text, FlatList } from 'react-native'
import React from 'react'
import allCategories from '../Data/Json/categorias.json'
import CategoryItem from './CategoryItem'

const Categories = ({navigation, route}) => {
    return (
        <FlatList 
            data={allCategories}
            keyExtractor={item => item}
            renderItem={({item})=> <CategoryItem category={item} navigation={navigation} route={route}/>}
        />
    )
}

export default Categories