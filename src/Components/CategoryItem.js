import { View, Text, Pressable, StyleSheet } from 'react-native'
import { colors } from '../Data/Global/colors'

const CategoryItem = ({ navigation, route, category }) => {
    return (
        <View style={styles.containerPrincipal}>
            <Pressable style={styles.pressable} onPress={() => navigation.navigate("ItemListCategoriesNav", { category })}>
                <View style={styles.container}>
                    <Text style={styles.text}>{category}</Text>
                </View>
            </Pressable>
        </View>

    )
}

export default CategoryItem

const styles = StyleSheet.create({
    pressable: {
        borderRadius: 10,
        overflow: 'hidden',
    },
    container: {
        width: "80%",
        marginHorizontal: "10%",
        backgroundColor: `${colors.fondoCard}20`,
        margin: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    text: {
        color: colors.cardText
    }
})