import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../Data/Global/colors'

const ProductItem = ({ item, navigation, route }) => {


    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("ItemDetailNav", { id: item.id })}>
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 100,
        backgroundColor:  `${colors.fondoCard}20`,
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 30
    },
    text: {
        width: "60%",
        textAlign: "center",
        fontSize: 20,
        color: colors.cardText
    }})