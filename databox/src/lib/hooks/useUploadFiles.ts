import { useState } from "react";
import { supabase } from "@/lib/supabase/supabase";
import {
  uploadFile as uploadFileApi,
  downloadFile as downloadFileApi,
} from "@/lib/crud/storage";
import { FileEntity } from "../crud/file-data";

export function useItemFiles(files: FileEntity[] = []) {
  const [error, setError] = useState(null);
  const [uploadedFilesInternal, setUploadedFiles] =
    useState<FileEntity[]>(files);

  const uploadFiles = async (files: File[]) => {
    const rtn = await Promise.all(
      files.map(
        async (file) => await uploadFileApi(supabase, "item-files", file)
      )
    );

    const filteredRtn = rtn.filter((file) => file !== null);
    setUploadedFiles(filteredRtn);
  };
  const deleteFile = async (fileId: string) => {
    setUploadedFiles(uploadedFilesInternal.filter((f) => f.Id !== fileId));
  };
  const downloadFile = async (fileId: string) => {
    const file = uploadedFilesInternal.find((f) => f.Id === fileId);
    if (file) {
      downloadFileApi(supabase, "item-files", file.Path);
    }
  };
  const uploadedFiles = fileMapping(uploadedFilesInternal);

  return {
    uploadFiles,
    error,
    uploadedFiles,
    deleteFile,
    downloadFile,
  };
}

const fileMapping = (files: FileEntity[]) => files;
// files.map((file) => ({
//   Id: file.Id,
//   FileName: file.Name,
//   FilePath: file.Path,
//   Visible: true,
// })) as FileType[];
