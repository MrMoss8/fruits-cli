import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { HelloModule } from './hello/hello.module';
import { CirculosModule } from './circulos/circulos.module';

@Module({
  imports: [MenuModule, HelloModule, CirculosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
