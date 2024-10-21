"use client"
import { useAppState } from '@/lib/providers/state-providers'
import { Folder } from '@/lib/supabase/supabase.types';
import React, { useEffect, useState } from 'react'

interface FoldersDropdownListProps {
    workspaceFolders: Folder[];
    workspaceId: string;
}

const FoldersDropdownList: React.FC<FoldersDropdownListProps> = ({ workspaceFolders, workspaceId }) => {
    const { state, dispatch } = useAppState()
    const[folders, setFolders] = useState(workspaceFolders)

    useEffect(() => {
        if(workspaceFolders.length > 0) {
            dispatch({ type: "SET_FOLDERS", payload: {
                workspaceId,
                folders: workspaceFolders.map((folder) => ({
                    ...folder,
                    files: state.workspaces
                        .find(workspace => workspace.id === workspaceId)
                        ?.folders.find(f => f.id === folder.id)?.files || [],
                }))
            }})
        }
    }, [workspaceFolders, workspaceId])

    useEffect(() => {
        setFolders(state.workspaces.find(
            (workspace) => workspace.id === workspaceId)?.folders || [])
    }, [state])

    return (
        <>
            <div className="flex sticky z-20 top-0 bg-background w-full h-10 group/title justify-between items-center pr-4 text-Neutrals/neutrals-8">
                <span className="text-Neutrals/neutrals-8 font-bold text-start">
                    FOLDERS
                </span>
            </div>
        </>
    )
}

export default FoldersDropdownList