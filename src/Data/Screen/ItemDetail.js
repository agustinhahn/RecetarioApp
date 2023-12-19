import { View, Text, StyleSheet, Pressable} from 'react-native'
import { useState, useEffect } from 'react'
import allItems from '../Json/recetas.json'

const ItemDetail = ({ route }) => {

    console.log(route)
    const { id } = route.params
    const [product, setProduct] = useState({})

    useEffect(() => {

        const productFinded = allItems.find(product => product.id === id)
        setProduct(productFinded)

    }, [id])


    return (
        <View style={styles.container}>
            <View style={styles.content} >
                {/* <Image
                    style={styles.image}
                    source={{ uri: product.thumbnail }}
                    resizeMode='cover'
                /> */}
                <View style={styles.containerText}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text>{product.description}</Text>
                </View>
                <View style={styles.containerPrice}>
                    <Text style={styles.price}>$ {product.category}</Text>
                    <Pressable style={styles.buyNow}>
                        <Text style={styles.buyNowText}>INGREDIENTES</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
    },
    content: {
        width: "100%"
    },
    contentLandscape: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginVertical: 15
    },
    // image: {
    //     width: "100%",
    //     height: 300
    // },
    // imageLandscape: {
    //     width: 200,
    //     height: 200
    // },
    goBack: {
        width: "100%",
        backgroundColor: "green",
        padding: 10,
        paddingStart: 40
    },
    containerTextLandscape: {
        width: "30%",
        flexDirection: "column"
    },
    containerText: {
        gap: 25,
        paddingHorizontal: 5,
        paddingVertical: 25
    },
    containerPriceLandscape: {
        width: "30%",
        flexDirection: "column"
    },
    containerPrice: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    price: {
        fontSize: 30
    },
    buyNow: {
        backgroundColor: "green",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    buyNowText: {
        color: "white"
    }
})