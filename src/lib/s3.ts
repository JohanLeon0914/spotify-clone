import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import type { PutObjectCommandInput } from '@aws-sdk/client-s3'; 

const s3Client = new S3Client({
  region: "us-west-2",
  credentials: {
    accessKeyId: 'AKIA45PTHCAXJ7S36X36',
    secretAccessKey: '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',
  },
});

// Definir tipos para los parámetros de la función
interface UploadMP3Params {
  file: File; // Asegúrate de que `File` sea el tipo correcto que estás usando
  playlist: string;
}

export const uploadMP3 = async ({ file, playlist }: UploadMP3Params): Promise<string> => {
  // Reemplazar espacios en el nombre de la playlist por signos de +
  const formattedPlaylist = playlist.replace(/ /g, '+');

  const params: PutObjectCommandInput = {
    Bucket: 'cdk-hnb659fds-assets-887957688366-us-west-2',
    Key: `${formattedPlaylist}/${file.name}`, // Asegúrate de usar `formattedPlaylist`
    Body: file,
    ContentType: file.type,
    ACL: 'public-read',
  };

  try {
    const command = new PutObjectCommand(params);
    const data = await s3Client.send(command);
    console.log('Archivo subido correctamente:', data);
    return `https://cdk-hnb659fds-assets-887957688366-us-west-2.s3.us-west-2.amazonaws.com/${formattedPlaylist}/${file.name}`;
  } catch (error) {
    console.error('Error al subir el archivo a S3:', error);
    throw new Error('Error al subir el archivo a S3');
  }
};
