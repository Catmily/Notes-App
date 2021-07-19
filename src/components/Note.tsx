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
        <Button className={"colorAdd"} onClick={() => changeColor(Color.YELLOW)}>Yellow</Button>
        <Button className={"colorAdd"} onClick={() => changeColor(Color.BLUE)}>Blue</Button>
        <Button className={"colorAdd"} onClick={() => changeColor(Color.ORANGE)}>Orange</Button>
        <Button className={"colorAdd"} onClick={() => changeColor(Color.PURPLE)}>Purple</Button>
        <Button className={"colorAdd"} onClick={() => changeColor(Color.PINK)}>Pink</Button>

    </div>
}