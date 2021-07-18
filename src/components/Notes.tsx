import {useState} from "react";

// @ts-ignore
import {Note} from "./Note";
// @ts-ignore
import {Input} from "./Input";

export const Notes = () => {

    const [notes, setNotes] = useState<string[]>([]);

    const addNote = (note: string) => {
        setNotes([...notes, note]);
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

        return (<div>
            {

                notes.map(index => (
                    <Note note={index} actionButton={removeNote}/>)
                )
            }
            {
                <Input actionButton={addNote}/>
            }
        </div>)
    }