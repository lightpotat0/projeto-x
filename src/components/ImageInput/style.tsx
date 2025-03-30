import styled from 'styled-components';

export const ContainerImageInput = styled.div`
  /* Container principal */
  .upload-container {
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  /* Área de upload */
  .upload-area {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 16rem; /* equivalente a h-64 */
    border: 2px solid #d1d5db;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #ddd;
  }

  .upload-area:hover {
    background-color: #f3f4f6;
  }

  .upload-area.dragging {
    border-color: #f97316;
    background-color: #ddd;
  }

  .upload-input {
    display: none;
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Estilo do ícone */
  .upload-icon {
    width: 3rem; /* w-12 */
    height: 3rem; /* h-12 */
    color: #f97316; /* text-orange-500 */
    margin-bottom: 0.5rem;
  }

  /* Texto de instrução */
  .upload-text {
    font-size: 0.875rem; /* text-sm */
    color: #6b7280; /* text-gray-500 */
  }

  /* Estilo da imagem preview */
  .preview-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  /* Animações */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
  .image-upload-container {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    padding: 1rem;
  }

  .image-upload-area {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 16rem;
    border: 2px solid #d1d5db;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #ddd;
    color: #818181;
  }

  .image-upload-area:hover {
    background-color: #f3f4f6;
  }

  .image-upload-area.dragging {
    border-color: #f97316;
    background-color: #fff7ed;
  }

  .image-upload-input {
    display: none;
  }

  .upload-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .upload-icon {
    width: 3rem;
    height: 3rem;
    color: #f97316;
  }

  .upload-text {
    font-size: 2rem;
    color: #818181;
    text-align: center;
    margin: 0;
  }

  .image-preview {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
    padding: 0.5rem;
    animation: fadeIn 0.3s ease-in-out;
  }

  .error-message {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    text-align: center;
  }

  /* Responsividade */
  @media (max-width: 640px) {
    .image-upload-container {
      padding: 0.5rem;
    }

    .image-upload-area {
      height: 12rem;
    }
  }

  .preview-image {
    animation: fadeIn 0.3s ease-in-out;
  }
`;
