"use client"
import { useAppState } from '@/lib/providers/state-providers';
import { Workspace } from '@/lib/supabase/supabase.types'
import React, { useEffect, useState } from 'react'

interface WorkspaceDropdownProps {
    privateWorkspaces: Workspace[] | [];
    sharedWorkspaces: Workspace[] | [];
    collaboratingWorkspaces: Workspace[] | [];
    defaultValue: Workspace | undefined;
}

const WorkspaceDropdown: React.FC<WorkspaceDropdownProps> = ({ privateWorkspaces, sharedWorkspaces, collaboratingWorkspaces, defaultValue }) => {
    const { dispatch, state } = useAppState();

    const [selectedOption, setSelectedOption] = useState(defaultValue)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if(!state.workspaces.length) {
            dispatch({ type: 'SET_WORKSPACES', payload: { workspaces: [...privateWorkspaces, ...sharedWorkspaces, ...collaboratingWorkspaces].map((workspace) => ({ ...workspace, folders: [] }))} })
        }
    }, [privateWorkspaces, sharedWorkspaces, collaboratingWorkspaces])

    const handleSelect = (option: Workspace) => {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
      <div className="relative inline-block text-left">
        <div>
            <span onClick={() => setIsOpen(!isOpen)}>
                {selectedOption ? "" : "" }
            </span>
        </div>
      </div>
    )
}

export default WorkspaceDropdown