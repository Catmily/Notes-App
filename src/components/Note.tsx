import { Button } from "react-bootstrap";
import {useState} from "react";


export type NormalProps = {
    actionButton: (person: string) => void;
    note: string
}

export enum Color {
    BLUE="NoteBlue",
    YELLOW="NoteYellow",
    ORANGE="NoteOrange",
    PURPLE="NotePurple",
    PINK="NotePink"
}

export const Note = (props : NormalProps) => {
    const [color, setColor] = useState<Color>(Color.YELLOW);

    function changeColor(clr : Color)
    {
        setColor(clr);
    }

    return <div className={color}><p>{props.note}</p>
        <Button className={"addButton"} onClick={() => props.actionButton(props.note)}>Remove Note</Button>
        <Button className={"colorAddYellow"} onClick={() => changeColor(Color.YELLOW)}> </Button>
        <Button className={"colorAddBlue"} onClick={() => changeColor(Color.BLUE)}></Button>
        <Button className={"colorAddOrange"} onClick={() => changeColor(Color.ORANGE)}></Button>
        <Button className={"colorAddPurple"} onClick={() => changeColor(Color.PURPLE)}></Button>
        <Button className={"colorAddPink"} onClick={() => changeColor(Color.PINK)}></Button>

    </div>
}