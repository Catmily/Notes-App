import logo from './logo.svg';
import './App.scss';
import Container from "react-bootstrap/Container";
import {Notes} from "./components/Notes.tsx";


function App() {
  return (
      <Container>
        <Notes />
      </Container>
  );
}

export default App;