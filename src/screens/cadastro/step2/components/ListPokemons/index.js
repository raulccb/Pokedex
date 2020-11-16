import React, { memo } from 'react'

/**
 * Custom Components
 */
import RadioButton from '../../../../../components/global/RadioButton'

/**
 * Styled Components
 */
import { WrapperRadioGroup } from './styles'

const ListPokemons = ({ itens, onChecked, selectedValue }) => {

    // const [option, setOption] = useState('')

    // const setItem = item => {
    //     setOption(item)
    //     onChecked(item)
    // }

    return (
        <WrapperRadioGroup>
            <RadioButton
                selected={selectedValue}
                options={itens}
                onPress={onChecked}
            />
        </WrapperRadioGroup>
    )
}

export default memo(ListPokemons)