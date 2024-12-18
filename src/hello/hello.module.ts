import { Module } from '@nestjs/common';
import { HelloService } from './hello.service';

@Module({
  providers: [HelloService],
  exports: [HelloService], // Exportamos el servicio para que esté disponible en otros módulos
})
export class HelloModule {}
