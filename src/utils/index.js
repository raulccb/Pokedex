import { Alert } from 'react-native'

export const showAlert = (
    message,
    title = 'Atenção',
    buttonTitle = 'OK'
) => {
    setTimeout(() => {
        Alert.alert(title, message, [{ text: buttonTitle }])
    }, 200)
}

