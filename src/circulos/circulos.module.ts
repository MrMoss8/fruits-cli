import { Module } from '@nestjs/common';
import { CirculosService } from './circulos.service';

@Module({
  providers: [CirculosService],
  exports: [CirculosService],
})
export class CirculosModule {}
