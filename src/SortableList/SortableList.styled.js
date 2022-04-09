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
export const SelectInput = styled.select`
    padding: .5rem 1rem;
    margin: 0 1rem;
    border-radius: 10px;
    &:focus{
        outline: none;
    }
`
export const LabelSort = styled.div`
    padding: 1rem 1rem;
`

export const InputCheckBox = styled.input.attrs({type: 'radio'})`
    width: 3rem;
`

export const EmptyField = styled.div`
    width: 3rem;
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
    display: flex; 
    align-items: center; 
    &:nth-child(even){
        background: lightGray;
    }
`

export const RowElement = styled.div`
    height: 100%;
    width: ${props => { return props.widthEl+"px";}};
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    align-items: center;  
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
    width: ${props => { return props.widthEl+"px";}};   
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

export const ModalWrapper = styled.div`
    width: 30rem;
    position: absolute;
    background: white;
    height: 20rem;
    border: 2px solid lightGray;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
`
export const ModalInput = styled.input`
    padding: .3rem 0.5em;

    &:focus{
        outline: none;
    }
`
export const Image = styled.img`
    width: 3rem;
    height: 3rem;
    display: block;
`
export const ModalImageInput = styled.input.attrs({
    type: 'file'
})`
padding: .3rem 0.5em;

&:focus{
    outline: none;
}
`

export const ModalButton = styled.div`
    cursor: pointer;
    padding: .5rem 1rem;
    border: 1px solid lightGray;
    border-radius: 5px;
    box-sizing: border-box;
    margin: 0 1rem;
`
export const Flex = styled.div`
    display: flex;
`