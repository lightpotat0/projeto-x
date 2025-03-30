import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import multer from 'multer';

const upload = multer();

export const config = {
  api: {
    bodyParser: false,
  },
};

const runMiddleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function,
) =>
  new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  await runMiddleware(req, res, upload.single('avatar'));

  try {
    const { title, quantity, price, description, master } = JSON.parse(req.body.body);
    const image = (req as any).file?.buffer;
    if (!title || !quantity || !price || !description || !master) {
      return res
        .status(400)
        .json({ error: 'Todos os campos são obrigatórios.' });
    }

    const product = await prisma.product.create({
      data: {
        title,
        quantity: parseInt(quantity),
        value: parseFloat(price),
        description,
        image: image || null,
        master: master,
      },
    });

    res.status(201).json({ message: 'Produto criado com sucesso!', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o produto.' });
  }
}
