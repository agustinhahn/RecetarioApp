import { View, Text, Pressable } from 'react-native'
import React from 'react'

const CategoryItem = ({navigation, route,category}) => {
    return (
        <Pressable onPress={()=>navigation.navigate("ItemDetail", {category})}>
            <Text>{category}</Text>
        </Pressable>
    )
}

export default CategoryItem