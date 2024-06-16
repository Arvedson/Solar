
//tarea pendiente:
// FileUpload pasa los archivos al componente padre Installsystempage a través de onFilesAccepted, Componente padre almacena los archivos en su estado
// Componente padre maneja la lógica de envío a la API (por ejemplo, al hacer clic en un botón de "Enviar").

import React, { useCallback } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';

interface FileUploadProps {}

const FileUpload: React.FC<FileUploadProps> = () => {
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    // Aquí puedes manejar los archivos recibidos.
    
    console.log('Accepted Files:', acceptedFiles);
    console.log('File Rejections:', fileRejections);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles, fileRejections } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': []
    }
  });

  return (
    <div className="container mx-auto p-4 mt-2">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-4 transition ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}`}
      >
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p className="text-blue-700">Suelta los archivos aquí...</p> :
            <p className="text-gray-700">Envianos una foto o un PFD con tu recibo de la luz en caso de que no sepas como sacar tu consumo anual.</p>
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
