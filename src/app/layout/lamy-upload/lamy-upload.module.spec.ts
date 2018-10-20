import { LamyUploadModule } from './lamy-upload.module';

describe('LamyUploadModule', () => {
  let lamyUploadModule: LamyUploadModule;

  beforeEach(() => {
    lamyUploadModule = new LamyUploadModule();
  });

  it('should create an instance', () => {
    expect(lamyUploadModule).toBeTruthy();
  });
});
