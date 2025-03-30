import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { id } = req.query;
  const idNumber = Number(id);

  // Verifica se o ID é válido
  if (!id || isNaN(idNumber)) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  try {
    const { title, quantity, price: value, description } = req.body;

    // Verifica se os campos obrigatórios estão presentes
    if (!title || !quantity || !value || !description) {
      return res
        .status(400)
        .json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Busca o produto no banco
    const product = await prisma.product.findUnique({
      where: { id: idNumber },
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    // Atualiza o produto
    const updatedProduct = await prisma.product.update({
      where: { id: idNumber },
      data: {
        title,
        quantity: Number(quantity),
        value: Number(value),
        description,
      },
    });

    return res.status(200).json({
      message: 'Produto atualizado com sucesso!',
      product: updatedProduct,
    });
  } catch (error) {
    console.error('Erro ao atualizar produto:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}
