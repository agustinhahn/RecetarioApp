import { View, Text, StyleSheet, Pressable} from 'react-native'
import { useState, useEffect } from 'react'
import allItems from '../Json/recetas.json'
import { colors } from "../Global/colors"
import Acordeon from '../../Components/Acordeon'

const ItemDetail = ({ route}) => {
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
                    source={{ uri: product.images }}
                    resizeMode='cover'
                /> */}
                <View style={styles.containerText}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <Acordeon ingredientes = {product.ingredientes}/>
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
        backgroundColor: colors.principal
    },
    content: {
        width: "100%",
        justifyContent:"center",
        alignItems:"center"
    },
    // image: {
    //     width: "100%",
    //     height: 300
    // },
    goBack: {
        width: "100%",
        backgroundColor: "green",
        padding: 10,
        paddingStart: 40
    },
    containerText: {
        gap: 25,
        paddingHorizontal: 5,
        paddingVertical: 25
    },
    containerPrice: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: colors.tituloCard,
        textAlign:"center"
    },
    description:{
        fontSize: 15,
        color: colors.textCardItem,
        textAlign:"center",
        paddingLeft: 50,
        paddingRight:50
    },
    price: {
        fontSize: 30
    }
})