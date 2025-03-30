import React, { ChangeEvent, DragEvent, useEffect, useState } from 'react';
import { ContainerImageInput } from './style';

interface ImageUploadProps {
  onImageSelect?: (file: File) => void;
  maxSize?: number; // em bytes
  acceptedTypes?: string[];
  initialValue?: string;
  disabled?: boolean;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelect,
  maxSize = 40 * 1024 * 1024,
  acceptedTypes = ['image/jpeg', 'image/png', 'image/gif', ''],
  initialValue,
  disabled,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): boolean => {
    setError(null);

    if (!acceptedTypes.includes(file.type)) {
      setError('Formato de arquivo não suportado');
      return false;
    }

    if (file.size > maxSize) {
      setError(`Arquivo muito grande. Máximo de ${maxSize / 1024 / 1024}MB`);
      return false;
    }

    return true;
  };

  const handleImageSelect = (file: File) => {
    if (!validateFile(file)) return;

    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
    onImageSelect?.(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageSelect(file);
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleImageSelect(file);
    }
  };
  useEffect(() => {
    if (initialValue && !selectedImage) {
      setSelectedImage(initialValue);
    }
  }, [initialValue]);

  return (
    <ContainerImageInput>
      <div className="image-upload-container">
        <label
          className={`image-upload-area ${isDragging ? 'dragging' : ''}`}
          onDragEnter={handleDragEnter}
          onDragOver={(e) => e.preventDefault()}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            className="image-upload-input"
            accept={acceptedTypes.join(',')}
            onChange={handleFileChange}
            disabled={disabled}
          />

          {selectedImage ? (
            <img src={selectedImage} alt="Preview" className="image-preview" />
          ) : (
            <div className="upload-content">
              <svg
                className="upload-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p className="upload-text">Selecione a imagem do produto</p>
            </div>
          )}
        </label>
        {error && <p className="error-message">{error}</p>}
      </div>
    </ContainerImageInput>
  );
};

export default ImageUpload;
