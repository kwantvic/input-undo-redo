import React from "react";
import "./App.css";

export const App: React.FC = React.memo(() => {
    return (
        <div className="App">
            <div className="header">
                <button>undo</button>
                <button>redo</button>
                <button>clear</button>
            </div>
            <div className="input-block">
                <input type="text"/>
                <button>save</button>
            </div>
            <ul className="result">
                <li>test result</li>
            </ul>
        </div>
    );
})
