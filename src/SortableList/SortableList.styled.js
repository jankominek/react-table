import styled from 'styled-components'

export const SortableListWrapper = styled.div`
    width: 70rem;
    height: 40rem;
    border: 2px solid gray;
`

export const TitleRow = styled.div`
    width: 100%;
    height: 3rem;
    border-bottom: 2px solid gray;
    display: flex;
`
export const TitleRowElement = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;  
`

export const IdField = styled.div`
    width: 5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`
export const RowWrapper = styled.div`
    width: 100%;
    height: 3rem;
    // background: red;
    display: flex; 
    justify-content: center;
    align-items: center; 
    &:nth-child(even){
        background: lightGray;
    }
`

export const RowElement = styled(TitleRowElement)`

`
export const AddButton = styled.div`
    cursor: pointer;
    padding: .5rem 1rem;
    border: 1px solid green;
    border-radius: 10px;
    margin: 1rem 1rem;
`
export const RemoveButton = styled(AddButton)`
    border: 1px solid red;
`
export const ButtonsWrapper = styled.div`
    width: 70rem;
    display: flex;
    justify-content: flex-end;  
    align-items: center;
`
export const RatingWrapper = styled.div`
    width: 10rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const IconWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    position: relative;
`
export const IconBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .3;
`

export const SearchInput = styled.input`
    width: 10rem;
    height: 2rem;
    padding: 0 1rem;
    margin-right: 1rem;
    border: 1px solid gray;
    border-radius: 8px;
    &:focus{
        outline: none;
    }
`