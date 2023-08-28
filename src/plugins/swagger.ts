import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Nest')
  .setDescription('The Nest API description')
  .setVersion('1.0')
  // .addBearerAuth(undefined, 'JWT-auth')
  .build();

export const options = {
  swaggerOptions: {
    authAction: {
      'JWT-auth': {
        name: 'JWT-auth',
        schema: {
          description: 'Default',
          type: 'http',
          in: 'header',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
        value: '',
      },
    },
  },
};
