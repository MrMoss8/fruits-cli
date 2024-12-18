import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MenuService } from './menu/menu.service'; // Importa el nombre correcto

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const menuService = app.get(MenuService); // Usa el nombre correcto del servicio
  await menuService.showMenu();

  await app.close();
}

bootstrap();
