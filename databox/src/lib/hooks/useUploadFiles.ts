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
      console.log(`downloadFile: ${file.Path}`);
      const data = await downloadFileApi(supabase, "item-files", file.Path);
      if (data) {
        blobToDownload(data, file.Name);
      }
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

const blobToDownload = (data: Blob, fileName: string) => {
  // Create a Blob URL and trigger download
  const blob = new Blob([data], { type: data.type }); // Create a Blob from the data
  const url = URL.createObjectURL(blob); // Create a Blob URL

  // Create an anchor element and trigger download
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName; // Set the filename
  document.body.appendChild(a); // Append to the body
  a.click(); // Programmatically click the anchor
  document.body.removeChild(a); // Remove the anchor from the document
  URL.revokeObjectURL(url); // Clean up the Blob URL

  return data; // Return the original data if needed
};
