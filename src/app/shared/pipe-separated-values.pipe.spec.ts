import { PipeSeparatedValuesPipe } from './pipe-separated-values.pipe';

describe('PipeSeparatedPipe', () => {
  it('create an instance', () => {
    const pipe = new PipeSeparatedValuesPipe();
    expect(pipe).toBeTruthy();
  });
});
