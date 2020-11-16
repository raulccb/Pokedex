import React from 'react'
import { View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { colors } from '../../../theme'
import styles from './styles'

const UcBox = props => (
    <Animatable.View
        delay={50}
        animation="fadeInUp"
        useNativeDriver={true}
        style={[styles.view, { backgroundColor: props.bgColor }]}>
        <View style={styles.headerRight}>
            <Text style={styles.data}>última atualização {props.data}</Text>
        </View>
        <View style={styles.headerLeft}>
            <Text style={styles.titulo}>{props.titulo}</Text>
        </View>
        <View>{props.children}</View>
    </Animatable.View>
)

UcBox.defaultProps = {
    bgColor: '#006699',
    titulo: 'Dados climáticos',
    data: '01/01/20 às 16:30',
    texto: 'Não faça uso indevido de nossos Serviços.'
}

export default UcBox