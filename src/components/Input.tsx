import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

import {useState} from "react";
import * as React from "react";

export type EventHandlerProps = {
    onClick: (e: React.MouseEvent) => void;
}

export type NormalProps = {
    actionButton: (person: string) => void;

}

export const Input = ({actionButton}: NormalProps) => {
    const [input, setInput] = useState<string>("");

    return (
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Note:</InputGroup.Text>
            <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event: { target: { value: React.SetStateAction<string>; }; }) => setInput(event.target.value)}
            />
            <Button className={"addButton"} onClick={() => actionButton(input)}>Add Note</Button>
        </InputGroup>
    )
}