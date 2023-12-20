import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from "../Global/colors"
import { AntDesign } from '@expo/vector-icons';

const Header = ({ title = "Producto", goBack }) => {
    return (
        <View style={styles.container}>
            {title != "CATEGORIAS" &&<TouchableOpacity style={styles.btn} onPress={goBack}>
                <AntDesign name="left" size={24} color="white" />
            </TouchableOpacity>}
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundHeader,
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        color: colors.tituloCard
    },
    btn: {
        position: 'absolute',
        left: 20,
    }
})