import style from 'styled-components/native'

const ButtonClean = style.TouchableOpacity`
    background-color: #ecf0f1;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 10px;
    width: 310px;
`;
const ButtonLogin = style.TouchableOpacity`
    background-color: #79589f;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 10px;
    width: 310px;
`;

const CleanText = style.Text`
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
const DarkText = style.Text`
    color: #79589f;
    font-weight: bold;
    text-align: center;
`;
export{
    ButtonClean,
    ButtonLogin,
    CleanText,
    DarkText
}