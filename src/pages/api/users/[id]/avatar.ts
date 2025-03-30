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
    const user = await prisma.user.findUnique({
      where: { id: id as string },
    });

    if (!user || !user.avatar) {
      return res.status(404).json({ error: 'Avatar não encontrado.' });
    }

    // Configurar o cabeçalho para servir o conteúdo da imagem
    //res.setHeader('Content-Type', 'image/jpeg');
    res.send(Buffer.from(user.avatar));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao obter o avatar.' });
  }
}
