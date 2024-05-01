import { useState, useEffect } from 'react';

export const useGroups = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [groups, setGroups] = useState([]);

    const loadGroups = async () => {
        console.log("loading groups")
        const response = await fetch('/groups');
        console.log("loading groups " + response)
        const groups = await response.json();
        setGroups(groups);
        setIsLoading(false);
    }

    useEffect(() => {
        loadGroups();
    }, []);

    return { isLoading, groups };
}