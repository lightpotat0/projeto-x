import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import { Oswald } from 'next/font/google';
import axios from 'axios';
import { InputImageContainer } from '@/Containers/ProductCreate/styles';
import ImageUpload from '../ImageInput';
import { useRouter } from 'next/router';
import { mastersDefault } from '@/utils/masters';
import { toast } from 'react-toastify';

interface ProductFormData {
  title: string;
  price: string;
  description: string;
  quantity: string;
  master: string;
}
const oswald = Oswald({
  subsets: ['latin'],
});

const ProductForm: React.FC<{ id?: number }> = ({ id }) => {
  const [avatar, setAvatar] = useState<File>();
  const [imageSrc, setImageSrc] = useState('');
  const router = useRouter();
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    price: '0,00',
    description: '',
    master: '',
    quantity: '2',
  });
  const fetch = async () => {
    await axios.get(`/api/products/${id}`).then((response) => {
      setFormData({
        ...response.data,
        price: response.data.value,
      });
    });
    await axios
      .get(`/api/products/${id}/avatar`, {
        responseType: 'blob',
      })
      .then(async (response) => {
        const url = URL.createObjectURL(response.data);
        setImageSrc(url);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'price') {
      formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d)(\d{2})$/, '$1,$2')
        .replace(/(?=(\d{3})+(\D))\B/g, '.');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.post('/api/products/' + id + '/editt', {
          title: formData.title,
          value: formData.price.replace('.', '').replace(',', '.'),
          description: formData.description,
          quantity: formData.quantity,
          master: formData.master,
        });
      } else {
        const payload = new FormData();
        payload.append(
          'body',
          JSON.stringify({
            ...formData,
            price: formData.price.replace('.', '').replace(',', '.'),
          }),
        );
        if (avatar) {
          payload.append('avatar', avatar);
        }
        await axios.post('/api/products/create', payload);
      }
      router.push('/user/');
    } catch (error) {
      // @ts-ignore
      toast.error(error.response.data.error);
    }
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      price: '0,00',
      description: '',
      quantity: '1',
      master: '',
    });
    router.push('/user');
  };
  useEffect(() => {
    if (id) {
      fetch();
    }
  }, [id]);

  return (
    <>
      <InputImageContainer>
        <ImageUpload
          disabled={id ? true : false}
          onImageSelect={(file) => setAvatar(file)}
          initialValue={imageSrc}
        />
      </InputImageContainer>
      <Container>
        <div className="product-form-container">
          <form onSubmit={handleSubmit} className={oswald.className}>
            <div className="form-group">
              <label htmlFor="title">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Nome do produto"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="quantity">Quantidade disponível</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price">Valor</label>
                <div className="price-input">
                  <span>R$</span>
                  <input
                    type="text"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="master">Feito por</label>
              <select
                name="master"
                id="master"
                value={formData.master}
                onChange={handleChange}
              >
                <option value="">Selecione...</option>
                {mastersDefault.map((master) => (
                  <option key={master.id} value={master.name}>
                    {master.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <textarea
                id="description"
                name="description"
                placeholder="Escreva detalhes sobre o produto, tamanho, características"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="form-buttons">
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancelar
              </button>
              <button type="submit" className="submit-button">
                Salvar e publicar
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default ProductForm;
