import React from "react";
import "./App.css";
import {useUndoRedo} from "./hooks/useUndoRedo";
import {useStorage} from "./hooks/useStorage";

export const App: React.FC = React.memo(() => {
    const [text, toPush, toUndo, toRedo] = useUndoRedo();
    const [items, toAddNewItem] = useStorage();
    return (
        <div className="App">
            <div className="header">
                <button onClick={toUndo}>undo</button>
                <button onClick={toRedo}>redo</button>
                <button onClick={React.useCallback(() => toPush(""), [toPush])}>clear</button>
            </div>
            <div className="input-block">
                <input value={text}
                       onChange={React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => toPush(e.target.value), [toPush])}
                    type="text"
                />
                <button onClick={React.useCallback(() => toAddNewItem(text), [toAddNewItem, text])}>save</button>
            </div>
            <ul className="result">
                {React.useMemo(() => items.map((item, index) => (
                    <li key={index} onClick={() => toPush(item)}>{item}</li>
                )), [items, toPush])}
            </ul>
        </div>
    );
})
