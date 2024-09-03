import { Test, TestingModule } from '@nestjs/testing';
import { Receiver1Service } from './receiver1.service';

describe('Receiver1Service', () => {
  let service: Receiver1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Receiver1Service],
    }).compile();

    service = module.get<Receiver1Service>(Receiver1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
