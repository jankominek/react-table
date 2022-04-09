import { Rating } from '@mui/material';
import React, { useRef } from 'react'
import { AddButton, ButtonsWrapper, EmptyField, IconBackground, IconWrapper, IdField, Image, InputCheckBox, LabelSort, RatingWrapper, RemoveButton, RowElement, RowWrapper, SearchInput, SelectInput, SortableListWrapper, TitleRow, TitleRowElement } from './SortableList.styled'

const columns = ["name", "description", "image", "rating"];

export const Table = (props) => {

    const elementColRef = useRef();

    const onChangeRaring = (event, value) => {
        console.log(event.target.name, value)
        const index = event.target.name;
        const dataRef = props.data.filter( (e) => e.id == index);
        const dataWithoutElement = props.data.filter( (e) => e.id != index);
        dataRef[0].rating = value;
        dataWithoutElement.splice(index - 1, 0, dataRef[0]);
        props.setData(dataWithoutElement);
    }

    const onSelectRow = (e) => {
        const indexRow = e.target.id;
        console.log(indexRow)
        props.setSelectedRow(indexRow);
    }

    const columnMap = columns.map( (col, index) => (
        <TitleRowElement ref={elementColRef}>
            {col}
        </TitleRowElement>
    ))

    const rowMap = elementColRef?.current?.offsetWidth && props.data.map( (row, index) => (
        <RowWrapper>
            {Object.entries(row).map((rowElement)=>(
                <>
                {rowElement[0] === 'id' && <IdField>{rowElement[1]}</IdField>}
                {rowElement[0] === 'image' && <RowElement widthEl={elementColRef.current?.offsetWidth}><Image src={rowElement[1]}/></RowElement>} 
                {(rowElement[0] === 'name' || rowElement[0] === 'description' )&& <RowElement widthEl={elementColRef.current?.offsetWidth}>{rowElement[1]}</RowElement>}
                {rowElement[0] === 'rating' && <RatingWrapper widthEl={elementColRef.current?.offsetWidth}>
                <Rating
                    name={index + 1}
                    value={rowElement[1]}
                    onChange={(event, newValue) => {
                        onChangeRaring(event, newValue);
                    }}
                />
            </RatingWrapper>}
                </>
            ))}
            <InputCheckBox name="asd" id={index+1} onChange={onSelectRow} checked={props.selectedRow == (index + 1)}/>
        </RowWrapper>
    ))


  return (
    <>
        <SortableListWrapper>
            <TitleRow><IdField></IdField>{columnMap}<EmptyField/></TitleRow>
            {rowMap}
        </SortableListWrapper>
    </>
  )
}
