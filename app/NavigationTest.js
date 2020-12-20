import React from 'react';
import {
    Text, View, StyleSheet
} from 'react-native';

const NavigationTest = () => {

    return (
        <View style={styles.body}>
            <Text style={styles.text}>pagina inutile realizzata per testare la navigazione</Text>
        </View>
    )
}
const styles = StyleSheet.create({

    body: {
        backgroundColor: 'rgb(36, 40, 47)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },

});

export default NavigationTest;