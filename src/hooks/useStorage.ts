import React from "react";

export function useStorage() {
    const [storage, setStorage] = React.useState<string[]>([]);

    return [
        storage
    ]
}