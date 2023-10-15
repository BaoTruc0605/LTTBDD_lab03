import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import Screen02 from './Screen02';
import { NavigationContainer, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home({navigation,route}) {
    var curentColor = route.params?.curentColor || "blue";
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assets/vs_'+curentColor+'.png')} style={{ width: null, height: '100%', }} resizeMode='contain' />
            </View>
            <View style={styles.body}>
                <Text style={styles.text0}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={styles.row} >

                    <TouchableOpacity>
                        <Image style={styles.star} source={require('../assets/star.jpg')}  ></Image></TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.star} source={require('../assets/star.jpg')} ></Image></TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.star} source={require('../assets/star.jpg')} ></Image></TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.star} source={require('../assets/star.jpg')} ></Image></TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.star} source={require('../assets/star.jpg')} ></Image></TouchableOpacity>

                    <Text style={styles.text1}>(Xem 828 đánh giá)</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text2}>1.790.000 đ</Text>
                    <Text style={styles.text3}>1.790.000 đ</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text4}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                </View>
                <View style={styles.row}>
                    <Pressable style={styles.button1}
                    onPress={
                        ()=>{navigation.navigate("ChooseColor")}} 
                    >
                        4 MÀU - CHỌN MÀU
                    </Pressable>
                </View>
            </View>
            <View style={styles.footer}>
                <Pressable style={styles.button2} >
                    CHỌN MUA
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff'
    },
    header: {
        width: '100%',
        height: '45%',
    },
    body: {
        width: '100%',
        height: '35%',
    },
    footer: {
        width: '100%',
        height: '20%',
    },
    text0: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '2%',
        marginLeft: '10%'
    },
    row: {
        marginTop: '2%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    star: {
        width: 32,
        height: 32,
    },
    text2: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text3: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'line-through',
        marginLeft: '15%',
        color: '#bbb'
    },
    text4: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },
    button1: {
        width: '90%',
        height: 30,
        marginLeft: '5%',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderRadius: 10
    },
    button2: {
        width: '90%',
        height: 30,
        marginLeft: '5%',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'red',
        borderRadius: 10
    },




});