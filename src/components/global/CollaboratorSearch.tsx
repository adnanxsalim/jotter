"use client"
import { useSupabaseUser } from '@/lib/providers/supabase-user-provider';
import { User } from '@/lib/supabase/supabase.types';
import React, { useEffect, useRef, useState } from 'react'

interface CollaboratorSearchProps {
    existingCollaborators: User[] | [];
    getCollaborator: (collaborator: User) => void;
    children: React.ReactNode;
}

const CollaboratorSearch: React.FC<CollaboratorSearchProps> = ({ children, existingCollaborators, getCollaborator }) => {
    const { user } = useSupabaseUser()
    
    const [searchResults, setSearchResults] = useState<User[] | []>([])

    const timerRef = useRef<ReturnType<typeof setTimeout>>()

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        }
    }, [])

    const onChangeHandler = () => {}
    
    const addCollaborator = () => {}
    
    return (
      <div>CollaboratorSearch</div>
    )
}

export default CollaboratorSearch