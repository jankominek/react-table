import React, { useEffect, useRef, useState } from 'react'
import { TiArrowUpThick, TiArrowDownThick } from "react-icons/ti";
import { InputLabel, MenuItem, Rating, Select } from '@mui/material';
import { AddButton, ButtonsWrapper, EmptyField, IconBackground, IconWrapper, IdField, Image, InputCheckBox, LabelSort, RatingWrapper, RemoveButton, RowElement, RowWrapper, SearchInput, SelectInput, SortableListWrapper, TitleRow, TitleRowElement } from './SortableList.styled'
import { Modal } from './Modal';

const columns = ["name", "description", "image", "rating"];

const SortableList = () => {

    const [value, setValue] = useState(0)
    const [sortBy, setSortBy] = useState("name");
    const [isShowing, setIsShowing] = useState(false);
    const [dataTable, setDataTable] = useState([]);
    const [selectedRow, setSelectedRow] = useState();
    const [sortType, setSortType] = useState("asc");
    const [tempData, setTempData] = useState([])

    const elementColRef = useRef();

    useEffect(() =>{
    }, [dataTable, sortBy, sortType])

    const sortData = (data) => {

        const sorted = data.sort( (a, b) => sortComparator(a, b))
        setDataTable([...sorted]);
        console.log("SORTED : ", sorted)
    }

    const sortComparator = (a, b) => {
        if(sortType === 'asc'){
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA:",typeof a[sortBy])
            if(typeof a[sortBy] === 'string'){
               if(a[sortBy] > b[sortBy]){
                   return 1;
               }else if(a[sortBy] < b[sortBy]){
                   return -1;
               }else{ return 0}
            }else{
                return a[sortBy] - b[sortBy];
            }
            
        }
        if(sortType === 'desc'){
            if(typeof a[sortBy] === 'string'){
                if(a[sortBy] < b[sortBy]){
                    return 1;
                }else if(a[sortBy] > b[sortBy]){
                    return -1;
                }else{ return 0}
            }else{
                return b[sortBy] - a[sortBy];
            }
        }
    }

    const onSort = () => {
        sortData(dataTable);
    }

    const onChangeRaring = (event, value) => {
        console.log(event.target.name, value)
        const index = event.target.name;
        const dataRef = dataTable.filter( (e) => e.id == index);
        const dataWithoutElement = dataTable.filter( (e) => e.id != index);
        dataRef[0].rating = value;
        dataWithoutElement.splice(index - 1, 0, dataRef[0]);
        setDataTable(dataWithoutElement);
    }

    const columnMap = columns.map( (col, index) => (
        <TitleRowElement ref={elementColRef}>
            {col}
        </TitleRowElement>
    ))
    const onSelectRow = (e) => {
        const indexRow = e.target.id;
        console.log(indexRow)
        setSelectedRow(indexRow);
    }

    const rowMap = elementColRef?.current?.offsetWidth && dataTable?.map( (row, index) => (
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
            <InputCheckBox name="asd" id={index+1} onChange={onSelectRow} checked={selectedRow == (index + 1)}/>
        </RowWrapper>
    ))

    const addRow = (data) => {
        setDataTable([
            ...dataTable,
            {id: dataTable.length + 1, ...data, rating: 0}
        ])
        modalClose();
    }

    const openModal = () => {
        setIsShowing(true);
    }

    const modalClose = () => {
        setIsShowing(false);
    }

    const removeRow = () => {
        console.log("type : ", typeof selectedRow)
        if(selectedRow){
            const filteredData = dataTable.filter( (e) => e.id !== Number(selectedRow));
            setDataTable(filteredData);
        }

        selectedRow(null)
    }

    const onChangeSelectSortBy = (e) => {
        setSortBy(e.target.value);
    }
    const onChangeSelectTypeSort = (e) => {
        setSortType(e.target.value)
    }
    console.log("SORT : ", sortBy, sortType)
    const searchInTable = (e) => {
        const searchValue = e.target.value;
        setTempData(dataTable);
        if(searchValue){
            const searched = dataTable.filter( (obj) => {
                return obj.name.includes(searchValue);
            });

            console.log("SEARCHED : ", searched)
            setDataTable([...searched])
        }
        if(!searchValue){}
        
    }
  return (
    <>
    <ButtonsWrapper>
        <LabelSort>Sort by :</LabelSort>
        <SelectInput onChange={onChangeSelectSortBy}>
            <option value="name">Name</option>
            <option value="description">Description</option>
            <option value="rating">Rating</option>
        </SelectInput>
        <SelectInput onChange={onChangeSelectTypeSort}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </SelectInput>
        <AddButton onClick={onSort}>Sort</AddButton>
        <SearchInput placeholder='search..' onChange={searchInTable}/>
        <AddButton onClick={openModal}>Add</AddButton>
        <RemoveButton onClick={removeRow}>Remove</RemoveButton>
    </ButtonsWrapper>
    {dataTable && <SortableListWrapper>
        <TitleRow><IdField></IdField>{columnMap}<EmptyField/></TitleRow>
        {rowMap}
    </SortableListWrapper>}
    {isShowing && <Modal addRow={addRow} onModalClose={modalClose}/>}
    </>
  )
}

export default SortableList