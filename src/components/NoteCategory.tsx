import {useState} from "react";
import {Notes} from "./Notes";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {Input} from "./Input";
import {Note} from "./Note";

export const NoteCategory = () => {
    const [noteCategories, setNoteCategories] = useState<string[]>([]);


    const addNoteCategory = (notes: string) =>
    {
        if (!noteCategories.includes(notes) && notes != "")
        setNoteCategories([...noteCategories, notes]);
    }

    const removeNoteCategory = (notes: string) =>
    {
        for (let i=0; i<notes.length; i++)
        {
            if (noteCategories[i] == notes)
            {
                noteCategories.splice(i, 1);
                break;
            }
        }
        setNoteCategories([...noteCategories]);    }

    return (<div>
        <Container>
            <Row>
                <Input actionButton={addNoteCategory} inputText={"Category"}/>

            </Row>
            <Row>
                {
                    noteCategories.map(kitty => (<Notes actionButton={removeNoteCategory} cat={kitty}/>))
                }
            </Row>
        </Container>
    </div>);
}
