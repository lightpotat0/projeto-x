import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import multer from 'multer';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'sua_chave_secreta';

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

  const { name, email, phone, password, subtitle, description } = req.body;
  const avatar = (req as any).file;
  console.log(avatar);
  if (!name || !email || !phone || !password || !subtitle || !description) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { password: _password, ...user } = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        subtitle,
        description,
        password: hashedPassword,
        avatar: avatar?.buffer || null,
      },
    });
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY);
    res
      .status(201)
      .json({ message: 'Usuário criado com sucesso!', token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o usuário.' });
  }
}
