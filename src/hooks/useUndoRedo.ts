import React from "react";

interface State {
    index: number;
    text: string[];
}

enum ActionType {
    PUSH,
    UNDO,
    REDO
}

type Action = {
    type: ActionType.PUSH,
    payload: string
} | {
    type: ActionType.UNDO
} | {
    type: ActionType.REDO
}

const initState: State = {
    index: -1,
    text: []
}

const reducer = ({index, text}: State, action: Action): State => {
    switch (action.type) {
        case ActionType.PUSH:
            return {
                index: index + 1,
                text: [...text.slice(0, index + 1), action.payload]
            };
        case ActionType.UNDO:
            return {
                index: Math.max(index - 1, -1),
                text
            };
        case ActionType.REDO:
            return {
                index: Math.min(index + 1, text.length - 1),
                text
            };
        default:
            return {index, text}
    }
}

export function useUndoRedo(): [string, (payload: string) => void, () => void, () => void] {
    const [{index, text}, dispatch] = React.useReducer(reducer, initState);
    return [
        text[index] || "",
        React.useCallback((payload: string) => dispatch({type: ActionType.PUSH, payload}), []),
        React.useCallback(() => dispatch({type: ActionType.UNDO}), []),
        React.useCallback(() => dispatch({type: ActionType.REDO}), [])
    ];
}