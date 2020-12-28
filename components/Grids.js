import style from 'styled-components/native'

const Container = style.View`
    margin: 0 auto;
    width: 99%;
`;
const RowLine = style.View`
    display: flex;
    flex-direction: row;
`;
const RowColumn = style.View`
    display: flex;
    flex-direction: column;
`;
const getColumn = (valueGrid) =>{
	if(!valueGrid) return;
	const width = valueGrid / 12 * 100;
	return `width: ${width}%;`;
}

const Col = style.View`
	padding: 10px;
    ${({ Value }) => Value && getColumn(Value)}
`;



export{
    Container,
    Col,
    RowLine,
    RowColumn
}