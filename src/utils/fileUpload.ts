import { writeFile } from 'fs/promises';
import path from 'path';

export async function saveFile(file: File): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Gera um nome único para o arquivo
  const fileName = `${Date.now()}-${file.name}`;
  const filePath = path.join(process.cwd(), 'public/uploads', fileName);

  // Salva o arquivo
  await writeFile(filePath, buffer);
  return `/uploads/${fileName}`;
}

export function validateImage(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!validTypes.includes(file.type)) {
    throw new Error('Tipo de arquivo não suportado. Use JPEG, PNG ou GIF.');
  }

  if (file.size > maxSize) {
    throw new Error('Arquivo muito grande. Tamanho máximo: 5MB');
  }

  return true;
}
