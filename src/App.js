import logo from './logo.svg';
import './App.css';
import SortableList from './SortableList/SortableList';
import { AppWrapper } from './App.styled';

function App() {
  return (
      <AppWrapper>
        <SortableList />
      </AppWrapper>
  );
}

export default App;
