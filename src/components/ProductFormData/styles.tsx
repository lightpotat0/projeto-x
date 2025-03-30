import styled from 'styled-components';

export const Container = styled.div`
  .product-form-container {
    max-width: 800px;
    margin: 1rem auto;
    padding: 20px;
    background-color: #ddd;
    border: 2px solid #d1d5db;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .product-form-container h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 24px;
  }

  .form-row {
    display: grid;
    width: 400px;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 16px;
  }

  .form-group {
    margin-bottom: 16px;
  }

  label {
    display: block;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 8px;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1.2rem;
    color: #333;
    background-color: #fff;
    transition: border-color 0.3s ease;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
    border-color: #f4511e;
  }

  textarea {
    min-height: 100px;
    resize: vertical;
  }

  .price-input {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .price-input span {
    color: #666;
    font-size: 1rem;
  }

  .price-input input {
    flex: 1;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 40px;
  }

  .form-buttons {
    display: flex;
    gap: 16px;
    margin-top: 24px;
  }

  button {
    flex: 1;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cancel-button {
    background-color: #fff;
    border: 1px solid #f4511e;
    color: #f4511e;
  }

  .submit-button {
    background-color: #f4511e;
    color: #fff;
  }

  .cancel-button:hover {
    background-color: #fff5f2;
  }

  .submit-button:hover {
    background-color: #e23e0e;
  }

  /* Responsividade */
  @media (max-width: 640px) {
    .form-row {
      grid-template-columns: 1fr;
    }

    .product-form-container {
      padding: 16px;
    }

    .form-buttons {
      flex-direction: column;
    }

    button {
      width: 100%;
    }
  }
`;
