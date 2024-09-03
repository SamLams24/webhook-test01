import { Test, TestingModule } from '@nestjs/testing';
import { Receiver2Controller } from './receiver2.controller';

describe('Receiver2Controller', () => {
  let controller: Receiver2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Receiver2Controller],
    }).compile();

    controller = module.get<Receiver2Controller>(Receiver2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
