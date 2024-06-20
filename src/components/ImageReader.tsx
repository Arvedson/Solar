import React, { useState, useCallback } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';

interface AnnualKwhData {
  annualKwh: number;
}

const ImageReader: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [annualKwhData, setAnnualKwhData] = useState<AnnualKwhData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
    setSelectedFile(acceptedFiles[0]);
    console.log('Accepted Files:', acceptedFiles);
    console.log('File Rejections:', fileRejections);
  }, []);

  const handleSubmit = async () => {
    if (!selectedFile) {
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/ocr', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error in API request');
      }

      const result = await response.json();
      const annualKwh = result.annualKwhData.annualKwh;
      setAnnualKwhData(result.annualKwhData);
      console.log(`Consumo anual calculado: ${Math.round(annualKwh * 1.10)} kWh`); // Guardar y mostrar en consola
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
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
    <div className="p-0">
      <div className="container mx-auto p-4 mt-2">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-md p-4 transition ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'}`}
        >
          <input {...getInputProps()} aria-label="Buscar imagen" />
          {isDragActive ? (
            <p className="text-blue-700">Suelta los archivos aquí...</p>
          ) : (
            <p className="text-gray-700">Arrastra una imagen de tu recibo para que podamos decirte en tiempo real cuál es tu consumo anual. ¡Te recomendamos usar una foto de alta resolución!</p>
          )}
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
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-primary text-white rounded mb-4"
      >
        Leer imagen de tu recibo
      </button>
      {loading && <p>Cargando... Esto podría tomar algunos segundos</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {annualKwhData ? (
          <div>
            <p>kWh: {Math.round(annualKwhData.annualKwh * 1.10)}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default ImageReader;
