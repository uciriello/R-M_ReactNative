import Axios from 'axios';
import React, { useState, useRef } from 'react';
import {
    Button,
    Image, StyleSheet,
    Text, View, TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera'



const baseUrl = 'https://rickandmortyapi.com/api/character';
const urlImageLimit = 671;

const Home = () => {


    const getRandomImage = () => {
        const randomInt = Math.floor(Math.random() * urlImageLimit) + 1;
        Axios.get(`${baseUrl}/${randomInt}`)
            .then((data) => {
                console.log(data);
                setRandomImageUrl(data.data.image);
                setRandomCharName(data.data.name);
            })
    };
    const [imgUrl, setImgUrl] = useState('');
    const [randomImgUrl, setRandomImageUrl] = useState('');
    const [randomCharName, setRandomCharName] = useState('');
    const [getPhoto, useGetPhoto] = useState(false);

    const cameraRef = useRef(null);


    const setCameraView = () => {
        useGetPhoto(true);
    };

    const takePicture = async function (camera) {
        getRandomImage();
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        setImgUrl(data.uri);
        useGetPhoto(false);
    };

    return (
        <View style={styles.body}>
            {!getPhoto &&
                <View style={styles.container}>
                    <View>
                        <Text style={styles.text}>Scopri quale personaggio di Rick e Morty ti assomiglia di più</Text>
                    </View>
                    <View>
                        {imgUrl !== '' &&
                            <Image
                                style={[styles.img, { marginBottom: 5 }]}
                                source={{ uri: imgUrl }} />
                        }
                        {imgUrl === '' && <Image
                            style={[styles.img, { marginBottom: 5 }]}
                            source={require('./assets/anziano.jpg')}
                        />
                        }
                        {randomImgUrl !== '' &&
                            <View>
                                <Image
                                    style={styles.img}
                                    source={{ uri: randomImgUrl }}
                                />
                                <Text>{randomCharName}</Text>
                            </View>
                        }
                        {randomImgUrl === '' &&
                            <Image
                                style={styles.img}
                                source={require('./assets/rick.jpeg')}
                            />
                        }
                    </View>
                    <View>
                        <Button style={{ borderRadius: '4%' }} title={randomImgUrl !== '' ? 'Non sei soddisfatto?' : 'Scopri a chi assomigli!'} onPress={() => setCameraView()}></Button>
                    </View>
                </View>}
            {getPhoto &&
                <View style={styles.cameraContainer}>
                    <RNCamera ref={cameraRef} style={{ flex: 1, alignItems: 'center' }}>
                        {({ camera, status }) => {
                            if (status !== 'READY') return <View><Text>Loading...</Text></View>;
                            return (
                                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                                    </TouchableOpacity>
                                </View>
                            );
                        }}
                    </RNCamera>
                </View>
            }
        </View >
    )
}

const styles = StyleSheet.create({

    body: {
        backgroundColor: 'rgb(36, 40, 47)',
        width: '100%',
        height: '100%'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    cameraContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
        position: 'relative'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    container: {
        paddingTop: 30,
        paddingBottom: 80,
        paddingLeft: 2,
        paddingRight: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    img: {
        width: 200,
        height: 200,
    },
    imgContainer: {
        backgroundColor: 'green',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
        display: 'flex',
        flexDirection: 'column'
    }

});

export default Home;