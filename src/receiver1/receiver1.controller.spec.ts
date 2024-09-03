import { Test, TestingModule } from '@nestjs/testing';
import { Receiver1Controller } from './receiver1.controller';

describe('Receiver1Controller', () => {
  let controller: Receiver1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Receiver1Controller],
    }).compile();

    controller = module.get<Receiver1Controller>(Receiver1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
