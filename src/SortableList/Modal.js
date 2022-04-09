import React, { useState } from 'react'
import { Flex, ModalButton, ModalImageInput, ModalInput, ModalWrapper } from './SortableList.styled'

export const Modal = (props) => {

    const [state, setState] = useState({
      name : '',
      description: '',
    })
    const [image, setImage] = useState();

    const save = () => {
        state && props.addRow({...state, image: image});
    }

    const onChange = (e) => {
        setState({
          ...state,
          [e.target.name] : e.target.value
        })
    }

    const onChangeImage = (e) => {
      const img = e.target?.files[0];
      setImage(URL.createObjectURL(img));
    }

  return (
    <ModalWrapper>
        <ModalInput placeholder='name' name='name' onChange={onChange}/>
        <ModalInput placeholder='description' name='description' onChange={onChange}/>
        <ModalImageInput placeholder='image' name='image' onChange={onChangeImage}/>
        <Flex>
        <ModalButton onClick={save}>Add</ModalButton>
        <ModalButton onClick={props.onModalClose}>Close</ModalButton>
        </Flex>
        
    </ModalWrapper>
  )
}
