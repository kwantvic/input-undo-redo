import React from "react";
import "./App.css";
import {useUndoRedo} from "./hooks/useUndoRedo";

export const App: React.FC = React.memo(() => {
    const [text, toPush, toUndo, toRedo] = useUndoRedo();
    return (
        <div className="App">
            <div className="header">
                <button onClick={toUndo}>undo</button>
                <button onClick={toRedo}>redo</button>
                <button onClick={() => toPush("")}>clear</button>
            </div>
            <div className="input-block">
                <input value={text}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => toPush(e.target.value)}
                    type="text"
                />
                <button>save</button>
            </div>
            <ul className="result">
                <li>test result</li>
            </ul>
        </div>
    );
})
