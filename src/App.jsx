import logo from './logo.svg';
import './App.scss';
import Container from "react-bootstrap/Container";
import {Notes} from "./components/Notes.tsx";
import {NoteCategory} from "./components/NoteCategory";


function App() {
  return (
      <Container>
        <NoteCategory />
      </Container>
  );
}

export default App;