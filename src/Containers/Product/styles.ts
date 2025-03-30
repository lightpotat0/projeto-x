import { styled } from 'styled-components';

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  padding-top: 2vh;
  height: fit-content;
  width: 100%;
  background-color: #fff;
`;

export const ImageSection = styled.div`
  flex: 1;
  max-width: 50%;
`;
export const MainImageSection = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  img {
    border: 1px solid;
    border-radius: 10px;
    height: 100%;
    width: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Thumbnails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  gap: 10px;
`;

export const Thumbnail = styled.img`
  width: 25%;
  cursor: pointer;
`;

export const ProductSection = styled.div`
  margin: 40px;
`;

export const InfoSection = styled.div`
  flex: 1;
  max-width: 35%;
  text-align: left;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const Rating = styled.div`
  font-size: 16px;
  margin: 10px 0;
`;

export const Price = styled.div`
  font-size: 35px;
  color: #333;
  margin: 2px 0;
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #ff6600;
  color: #fff;
  padding: 15px 30px; /* Increased size */
  margin: 0 10px; /* Added margin for spacing */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  height: 50px;

  &:hover {
    background-color: #ff5500;
  }
`;

export const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 1rem;
  margin-left: 1rem;
  gap: 2.5em;
  .info {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 0;
    margin: 0;
    .description {
      width: 100%;
    }
  }
  .master {
    padding-top: 1rem;
    display: flex;
    gap: 10px;
    img {
      width: 100px;
      height: 70px;
      border: 1px solid;
      border-radius: 100px;
    }
  }
`;

export const ProductButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
