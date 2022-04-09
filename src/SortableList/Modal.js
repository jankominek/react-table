import React from 'react'
import { Flex, ModalButton, ModalInput, ModalWrapper } from './SortableList.styled'

export const Modal = (props) => {

    const save = () => {

    }

  return (
    <ModalWrapper>
        <ModalInput />
        <ModalInput />
        <ModalInput />
        <Flex>
        <ModalButton onClick={save}>Add</ModalButton>
        <ModalButton onClick={props.onModalClose}>Close</ModalButton>
        </Flex>
        
    </ModalWrapper>
  )
}
