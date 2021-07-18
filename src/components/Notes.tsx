import {useState} from "react";

// @ts-ignore
import {Note} from "./Note";
// @ts-ignore
import {Input} from "./Input";
import {Button, Col} from "react-bootstrap";

export type NormalProps = {
    actionButton: (person: string) => void;
    cat: string
}

export const Notes = ({actionButton, cat}: NormalProps) => {

    const [notes, setNotes] = useState<string[]>([]);

    const addNote = (note: string) => {
        if (note != "" && !notes.includes(note))
        {
        setNotes([...notes, note])
        };
    }

    const removeNote = (note: string) => {
        for (let i=0; i<note.length; i++)
        {
            console.log(notes[i]);
            if (notes[i] == note)
            {
                notes.splice(i, 1);
                break;
            }
        }
        setNotes([...notes]);
    }

        return (
            <Col><div>
            <h1>{cat}</h1>
                <Button className={"addButton"} onClick={() => actionButton(cat)}>Remove Category</Button>

                <Input actionButton={addNote} inputText={"Note"}/>

                {

                notes.map(index => (
                    <Note note={index} actionButton={removeNote}/>)
                )
            }
            </div></Col>
        )
    }