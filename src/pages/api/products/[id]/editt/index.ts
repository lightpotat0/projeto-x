import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;
  const idNumber = Number(id);

  // Verifica se o ID é válido
  if (!id || isNaN(idNumber)) {
    return res.status(400).json({ error: 'ID inválido.' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { title, quantity, value, description, master } = req.body;
    console.log({ title, quantity, value, description });
    // Verifica se os campos obrigatórios estão presentes
    if (!title || !quantity || !value || !description || !master) {
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
        master: master,
      },
    });

    return res.status(200).json({
      message: 'Produto atualizado com sucesso!',
      product: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o produto.' });
  }
}
