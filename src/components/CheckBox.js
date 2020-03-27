import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Fontisto";

export default function CheckBoxAN ({onCheck,color, colorActive, size}) {
    const [isCheck, setIsCheck] = React.useState(false);

    const onPress = () => {
        if(isCheck){
            setIsCheck(false);
            if(onCheck) onCheck(false)
        }else{
            setIsCheck(true);
            if(onCheck) onCheck(true)
        }
       
    }

        return (
            <TouchableOpacity onPress={onPress} style={{ justifyContent: 'center', alignItems: 'center', marginRight:10 }}>
                {isCheck ?
                    <Icon name="checkbox-active" color={colorActive} size={size} /> :
                    <Icon name="checkbox-passive" color={color} size={size} />}
            </TouchableOpacity>
        )
}
