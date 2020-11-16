import React, { useEffect, useState, useRef } from 'react'

/**
 * Custom Components
 */
import ListPokemons from './components/ListPokemons'
import RBSheet from 'react-native-raw-bottom-sheet'
import { Button } from '../../../components'

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
import { apiClient } from '../../../service/Api'
import { colors, images } from '../../../theme'
import { showAlert } from '../../../utils/'
import { storeData } from '../../../utils/storage'
import routes from '../../../navigation/routes'
import constants from '../../../utils/constants';

/**
 * Custom styles for modal sheet
 */
const styleModalSheet = {
    wrapper: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    draggableIcon: { backgroundColor: "#CCC" },
    container: { borderTopLeftRadius: 10, borderTopRightRadius: 10 }
}

export default function CadStep2({ route, navigation }) {

    useEffect(() => {
        getPokemonsType()
    }, [])

    const { name } = route.params

    const refRBSheet = useRef()
    const [isPermit, setIsPermit] = useState(false)
    const [pokeType, setPokeType] = useState(null)
    const [listRadio, setListRadio] = useState(null)

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

    const ButtonBack = () => (
        <BtIcon onPress={() => navigation.goBack()}>
            <Img source={images.icon_arrow_left} />
        </BtIcon>
    )

    const cadTrainer = () => {

        const trainerData = { nameTrainer: name, pokemonType: pokeType }

        storeData({
            key: '@trainerData',
            value: JSON.stringify(trainerData)
        })

    }

    const onCheck = pokeType => {
        setPokeType(pokeType)
        setIsPermit(true)
        cadTrainer()
    }

    const openMdl = () => refRBSheet.current.open()
    const closeMdl = () => refRBSheet.current.close()

    return (
        <Container source={images.image_bg}>
            <Wrapper>
                <WrapperTop>
                    <ButtonBack />
                    <Title>Hello, trainer {name}!</Title>
                </WrapperTop>
                <WrapperMiddle>
                    <BoxSelectPokemon onPress={openMdl}>
                        <Img source={images.icon_arrow_down} />
                    </BoxSelectPokemon>
                </WrapperMiddle>
                <WrapperBottom>
                    <ButtonIcon onPress={goHome} />
                </WrapperBottom>
            </Wrapper>

            <RBSheet
                ref={refRBSheet}
                height={450}
                animationType={"slide"}
                closeOnDragDown={true}
                closeOnPressMask={false}
                closeOnSwipeDown={true}
                customStyles={styleModalSheet}>
                <WrapperModal>
                    <WrapperTop>
                        <Header>
                            <Title
                                size={18}
                                color={colors.global.black}>
                                {'Select your favorite pokémon\ntype'}
                            </Title>
                            <ButtonClose onPress={closeMdl}>
                                <Img source={images.icon_close} />
                            </ButtonClose>
                        </Header>
                    </WrapperTop>
                    <WrapperMiddle>
                        <ListPokemons
                            key={'radioGroup'}
                            selectedValue={pokeType}
                            onChecked={onCheck}
                            itens={listRadio}
                        />
                    </WrapperMiddle>
                    <WrapperBottom>
                        <Button
                            onPress={closeMdl}
                            description={"Confirm"}
                            disabled={pokeType === null}
                        />
                    </WrapperBottom>
                </WrapperModal>
            </RBSheet>
        </Container>
    )
}