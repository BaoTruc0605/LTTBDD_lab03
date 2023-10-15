import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function ChooseColor({ navigation }) {
    const [colorPicker, setColorPicker] = useState('blue');
    const [detail, setdetail] = useState('');
    const [color, setColor] = useState('xanh');


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.img}>
                    <Image source={require('../assets/vs_' + colorPicker + '.png')} style={{ width: null, height: '100%' }} resizeMode='contain' />
                </View>
                <View style={styles.title}>
                    <Text style={styles.text0}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    <Text style={styles.text0}>Màu: <Text style={styles.text2}>{color}</Text> </Text>
                    <Text style={styles.text0}>Cung cấp bởi: <Text style={styles.text2}>TiKi Tradding</Text></Text>
                    <Text style={styles.text3}>1.790.000 đ</Text>
                </View>

            </View>
            <View style={styles.body}>
                <Text style={styles.text1}>Chọn một màu bên dưới:</Text>
                <View style={styles.column}>
                    <Pressable style={[styles.color, styles.sliver]} onPress={() => { [setColorPicker("silver") , setColor("Bạc")]}} >
                    </Pressable>
                    <Pressable style={[styles.color, styles.red]} onPress={() => { [setColorPicker("red"), setColor("đỏ")]}}>
                    </Pressable>
                    <Pressable style={[styles.color, styles.black]} onPress={() => { setColorPicker("black"), setColor("đen") }}>
                    </Pressable>
                    <Pressable style={[styles.color, styles.blue]} onPress={() => { setColorPicker("blue") , setColor("xanh")}} >
                    </Pressable>
                </View>

            </View>
            <View style={styles.footer}>
                <Pressable style={styles.submit}
                    onPress={() => {
                        navigation.navigate({
                            name: 'Home', params: { curentColor: colorPicker },
                            merge: true,
                        })
                    }}
                >
                    XONG
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
        height: '25%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    img: {
        width: '40%',
        height: '100%',
    },
    title: {
        width: '60%',
        height: '10%',
        marginTop: '3%'
    },
    text0: {
        fontSize: 17,
        fontWeight: 400,
    },
    text2: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    text3: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    body: {
        width: '100%',
        height: '65%',
        backgroundColor: '#c4c4c4'
    },
    text1: {
        fontSize: 20,
        fontWeight: 500,
    },
    column: {
        width: '100%',
        height: '90%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
    },
    color: {
        height: 70,
        width: 75,

    },
    sliver: {
        backgroundColor: '#C5F1FB',
    },
    red: {
        backgroundColor: '#F30D0D',
    },
    black: {
        backgroundColor: 'black'
    },
    blue: {
        backgroundColor: '#234896'
    },
    footer: {
        width: '100%',
        height: '10%',
        backgroundColor: '#c4c4c4'
    },


    submit: {
        width: '90%',
        height: 40,
        marginLeft: '5%',
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: '#4d6ec1',
        paddingTop: '2%',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',

        borderRadius: 10,

    },




});