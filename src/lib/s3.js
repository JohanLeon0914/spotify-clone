import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

// Crear el cliente S3 usando las variables de entorno de Astro
const s3Client = new S3Client({
  region: import.meta.env.ASTRO_AWS_REGION,
  credentials: {
    accessKeyId: import.meta.env.ASTRO_AWS_ACCESS_KEY_ID,
    secretAccessKey: import.meta.env.ASTRO_AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadMP3 = async (file, playlist) => {
  // Reemplazar espacios en el nombre de la playlist por signos de +
  const formattedPlaylist = playlist.replace(/ /g, '+');

  const params = {
    Bucket: import.meta.env.ASTRO_AWS_BUCKET,
    Key: `${playlist}/${file.name}`,
    Body: file,
    ContentType: file.type,
    ACL: 'public-read',
    ServerSideEncryption: 'AES256',
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3Client.send(command);
    console.log('Archivo subido correctamente:', data);
    return `https://${import.meta.env.ASTRO_AWS_BUCKET}.s3.${import.meta.env.ASTRO_AWS_REGION}.amazonaws.com/${formattedPlaylist}/${file.name}`;
  } catch (error) {
    console.error('Error al subir el archivo a S3:', error);
    throw new Error('Error al subir el archivo a S3');
  }
};
