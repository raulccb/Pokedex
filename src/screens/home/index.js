import React, { useEffect, useState, useRef } from 'react'

/**
 * Custom Components
 */
import { SearchBar, Button } from '../../components'

/**
 * Styled Components
 */
import {
    Img,
    Title,
    Header,
    Wrapper,
    WrapperTop,
    WrapperModal,
    WrapperMiddle,
    WrapperBottom,
    BoxSelectPokemon,
    ButtonClose,
    Container,
    BtIcon
} from './styles'

/**
 * Helper utils
 */
import { apiClient } from '../../service/Api'
import { colors, images } from '../../theme'
import { showAlert } from '../../utils/'
import { storeData } from '../../utils/storage'
import routes from '../../navigation/routes'
import constants from '../../utils/constants';

/**
 * Custom styles for modal sheet
 */
const styleModalSheet = {
    wrapper: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    draggableIcon: { backgroundColor: "#CCC" },
    container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
}

export default function Home({ navigation }) {

    useEffect(() => {
        //getPokemonsType()
    }, [])

    const refRBSheet = useRef()
    const [isPermit, setIsPermit] = useState(false)
    const [pokeType, setPokeType] = useState(null)
    const [listRadio, setListRadio] = useState(null)
    const [namePokemon, setNamePokemon] = useState('')

    const getPokemonsType = async () => {

        const result = await apiClient.get(constants.urls.json.pokemonTypes)

        if (result.data)
            setListRadio(result.data.results)

    }

    const goHome = () => {

        if (isPermit)
            navigation.navigate(routes.HOME)
        else
            showAlert('Escolha uma categoria de Pokemon!')
    }

    const ButtonIcon = ({ onPress }) => (
        <BtIcon onPress={onPress}>
            <Img source={images.icon_next} />
        </BtIcon>
    )

    const cadTrainer = () => {

        const trainerData = { nameTrainer: name, pokemonType: '' }

        storeData({
            key: '@trainerData',
            value: JSON.stringify(trainerData)
        })

        showAlert('Nome adicionado com sucesso!')
        navigation.navigate(routes.CADASTRO_2)
    }

    const onCheck = pokeType => {
        setPokeType(pokeType)
        setIsPermit(true)
    }

    const searchPokemon = () => {

    }

    const openMdl = () => refRBSheet.current.open()
    const closeMdl = () => refRBSheet.current.close()
    const handleSearchTerm = (term) => setNamePokemon(term)

    return (
        <Container source={images.image_bg}>
            <Wrapper>
                <WrapperTop>
                    <Title>Home</Title>
                </WrapperTop>
                <WrapperMiddle>
                    <SearchBar
                        onPress={searchPokemon}
                        onChangeText={(text) => handleSearchTerm(text)}
                        value={namePokemon}
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        keyboardType="default"
                    />
                </WrapperMiddle>
                <WrapperBottom>
                    <ButtonIcon onPress={goHome} />
                </WrapperBottom>
            </Wrapper>
        </Container>
    )
}