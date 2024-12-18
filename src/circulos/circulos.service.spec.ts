import { Test, TestingModule } from '@nestjs/testing';
import { CirculosService } from './circulos.service';

describe('CirculosService', () => {
  let service: CirculosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CirculosService],
    }).compile();

    service = module.get<CirculosService>(CirculosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
