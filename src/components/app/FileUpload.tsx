import React, { useCallback } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';

interface FileUploadProps {
  onFilesAccepted: (acceptedFiles: { name: string, content: string }[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesAccepted }) => {
  const onDrop = useCallback(async (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    const filesWithContent = await Promise.all(acceptedFiles.map(async (file) => {
      const content = await fileToBase64(file);
      return { name: file.name, content };
    }));
    onFilesAccepted(filesWithContent);
    console.log('Accepted Files:', filesWithContent);
    console.log('File Rejections:', fileRejections);
  }, [onFilesAccepted]);

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': []
    }
  });

  return (
    <div className=" w-full justify-center">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-4 transition ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}`}
      >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p className="text-blue-700">Suelta los archivos aquí...</p> :
            <p className="text-gray-700 text-center">Selecciona tu recibo de la luz.</p>
        }
      </div>
      <div className="mt-2">
        <ul>
          {acceptedFiles.map((file: File) => (
            <li key={file.name}>{file.name} - {file.size} bytes</li>
          ))}
        </ul>
      </div>
      <div className="mt-2">
        <ul>
          {fileRejections.map(({ file, errors }) => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
              <ul>
                {errors.map(e => <li key={e.code} className="text-red-600">{e.message}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FileUpload;
