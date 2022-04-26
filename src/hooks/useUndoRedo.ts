interface State {
    index: number;
    text: string[];
}

type Action = {
    
}

const initState: State = {
    index: 0,
    text: []
}

const reducer = ({index, state}: State, action: Action): State => {
    switch (action.type) {
        default:
            return state
    }
}

export function useUndoRedo() {
    
}