import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id as string, 10) },
    });

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o produto.' });
  }
}
