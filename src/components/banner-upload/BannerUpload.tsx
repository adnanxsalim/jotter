import { appFoldersType, appWorkspacesType } from '@/lib/providers/state-providers'
import { Folder, Workspace } from '@/lib/supabase/supabase.types'
import React from 'react'
import CustomDialogTrigger from '../global/CustomDialogTrigger'
import BannerUploadForm from './BannerUploadForm'

interface BannerUploadProps {
    children: React.ReactNode
    className?: string
    dirType: 'workspace' | 'folder' | 'file'
    id: string
}

const BannerUpload: React.FC<BannerUploadProps> = ({ children, className, dirType, id }) => {
  return (
    <CustomDialogTrigger header="Upload Banner" className={className}
        content={<BannerUploadForm dirType={dirType} id={id} />}
    >{children}</CustomDialogTrigger>
  )
}

export default BannerUpload