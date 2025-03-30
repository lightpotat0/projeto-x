import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Método não permitido.' });
  }

  const { id } = req.query;
  const idNumber = Number(id);

  // Verifica se o ID é válido
  if (!id || isNaN(idNumber)) {
    return res.status(400).json({ error: 'ID inválido.' });
  }

  try {
    // Busca o produto antes de remover
    const product = await prisma.product.findUnique({
      where: { id: idNumber },
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    // Remove o produto
    await prisma.product.delete({
      where: { id: idNumber },
    });

    return res.status(200).json({ message: 'Produto removido com sucesso!' });
  } catch (error) {
    console.error('Erro ao remover produto:', error);
    return res.status(500).json({ error: 'Erro interno no servidor.' });
  }
}
