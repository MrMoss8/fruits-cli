import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { HelloModule } from '../hello/hello.module'; 
import { HelloService } from '../hello/hello.service'; 
import { CirculosModule } from '../circulos/circulos.module';
import { CirculosService } from '../circulos/circulos.service';

@Module({
  imports: [HelloModule, CirculosModule], 
  providers: [MenuService], 
  exports: [MenuService],   
})
export class MenuModule {
  constructor(
    private readonly menuService: MenuService, 
    private readonly helloService: HelloService,
    private readonly circulosService: CirculosService
  ) {
    menuService.registerProgram('SaludaMe', async () => {
      await this.helloService.run();
    });

    menuService.registerProgram('Circulos', async () => {
      await this.circulosService.run(); 
    })
  }
}
