import { Button } from "react-bootstrap";


export type NormalProps = {
    actionButton: (person: string) => void;
    note: string
}

export const Note = (props : NormalProps) => {
    return <div className="Note"><p>{props.note}</p>
        <Button className={"addButton"} onClick={() => props.actionButton(props.note)}>Remove Note</Button>
    </div>
}