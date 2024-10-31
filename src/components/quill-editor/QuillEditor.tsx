import { File, Folder, Workspace } from '@/lib/supabase/supabase.types'
import React from 'react'

interface QuillEditorProps {
    dirDetails: File | Folder | Workspace
    pathId: string
    dirType: "workspace" | "folder" | "file"
}

const QuillEditor: React.FC<QuillEditorProps> = ({ dirDetails, pathId, dirType }) => {
    

    return (
        <div>QuillEditor</div>
    )
}

export default QuillEditor