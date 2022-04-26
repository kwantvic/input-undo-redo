import React from "react";

export function useStorage(): [string[], (newItem: string) => void] {
    const [storage, setStorage] = React.useState<string[]>([]);

    return [
        storage,
        React.useCallback((newItem: string) => setStorage((storage) => [...storage, newItem]), [])
]
}