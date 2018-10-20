import { LamyFormModule } from './lamy-form.module';

describe('LamyFormModule', () => {
  let lamyFormModule: LamyFormModule;

  beforeEach(() => {
    lamyFormModule = new LamyFormModule();
  });

  it('should create an instance', () => {
    expect(lamyFormModule).toBeTruthy();
  });
});
