import { Test, TestingModule } from '@nestjs/testing';
import { Receiver2Service } from './receiver2.service';

describe('Receiver2Service', () => {
  let service: Receiver2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Receiver2Service],
    }).compile();

    service = module.get<Receiver2Service>(Receiver2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
