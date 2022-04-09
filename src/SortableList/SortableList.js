import React, { useState } from 'react'
import { TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";
import { Rating } from '@mui/material';
import { AddButton, ButtonsWrapper, IconBackground, IconWrapper, IdField, RatingWrapper, RemoveButton, RowElement, RowWrapper, SearchInput, SortableListWrapper, TitleRow, TitleRowElement } from './SortableList.styled'
import { Modal } from './Modal';
const data = [
    {name : 1, description: "desc 1", image : "imaage 1", rating: 5},
    {name : 2, description: "desc 2", image : "imaage 2", rating: 3},
    {name : 3, description: "desc 3", image : "imaage 3", rating: 4},

]

const columns = ["name", "description", "image", "rating"];

const onChangeRaring = () => {

}

const SortableList = () => {

    const [value, setValue] = useState(0)
    const [sortBy, setSortBy] = useState("");
    const [isShowing, setIsShowing] = useState(false);

    const columnMap = columns.map( (col, index) => (
        <TitleRowElement>
            {col}
        <IconWrapper >
            
            <IconBackground id={col} onClick={(e) => console.log(e.target.id)}/>  
        </IconWrapper>
        
        </TitleRowElement>
    ))
    
    const rowMap = data.map( (row, index) => (
        <RowWrapper>
            <IdField>{index + 1}</IdField>
            {Object.entries(row).map((rowElement)=>(
                <RowElement>{rowElement}</RowElement>
            ))}
            <RatingWrapper>
                <Rating
                    name={"rating" + index + 1}
                    value={value}
                    onChange={(event, newValue) => {
                        onChangeRaring(newValue);
                    }}
                />
            </RatingWrapper>
        </RowWrapper>
    ))

    const addRow = () => {

    }

    const openModal = () => {
        setIsShowing(true);
    }

  return (
    <>
    <ButtonsWrapper>
        <SearchInput placeholder='search..'/>
        <AddButton onClick={openModal}>Add</AddButton>
        <RemoveButton>Remove</RemoveButton>
    </ButtonsWrapper>
    <SortableListWrapper>
        <TitleRow><IdField></IdField>{columnMap} <RatingWrapper/></TitleRow>
        {rowMap}
    </SortableListWrapper>
    {isShowing && <Modal addRow={addRow}/>}
    </>
  )
}

export default SortableList