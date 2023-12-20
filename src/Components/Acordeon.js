import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { colors } from '../Global/colors'

const Acordeon = ({ ingredientes }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.buyNow}>
            <TouchableOpacity onPress={toggleCollapse}>
                <Text style={styles.title}>INGREDIENTES</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View>
                    <FlatList
                        data={ingredientes}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={styles.ingredient}>
                                <Text style={styles.lista}>- {item.ingrediente}</Text>
                                <Text>{item.cantidad}</Text>
                            </View>
                        )}
                    />
                </View>
            </Collapsible>
        </View>
    );
};

export default Acordeon;

const styles = StyleSheet.create({
    title: {
        color: colors.tituloCard,
        fontSize: 15,
        fontWeight:"bold",
        textAlign: "center"
    },
    buyNow: {
        backgroundColor: colors.cardIngredientes,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: "80%"
    },
    buyNowText: {
        color: colors.textCardItem
    },
    ingredient: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
    },
    lista:{
        fontWeight:"bold",
    }
})