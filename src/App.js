import logo from './logo.svg';
import './App.css';
import SortableList from './SortableList/SortableList';
import { AppWrapper } from './App.styled';
import {createStore} from 'redux';
import { mainStore } from './reducers/mainStoreReducer';
import { useDispatch } from 'react-redux';
import { addToStore } from './actions/mainStoreAction';

function App() {

  const dispatch = useDispatch();
  return (
      <AppWrapper>
        <SortableList />
      </AppWrapper>
  );
}

export default App;
