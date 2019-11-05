import { StateStringPipe } from "./state-string.pipe";

describe('StateStringPipe', () => {
  it('Should display ToDo if state is 1', () => {
    let pipe = new StateStringPipe();

    expect(pipe.transform('1')).toEqual('ToDo');
  });

  it('Should display Started if sate is 2', () => {
    let pipe = new StateStringPipe();

    expect(pipe.transform('2')).toEqual('Started');
  });

  it('Should display Completed if sate is 4', () => {
    let pipe = new StateStringPipe();

    expect(pipe.transform('4')).toEqual('Completed');
  });

  it('Should display Cancelled if sate is 8', () => {
    let pipe = new StateStringPipe();

    expect(pipe.transform('8')).toEqual('Cancelled');
  });

  it('Should display Deleted if sate is 16', () => {
    let pipe = new StateStringPipe();

    expect(pipe.transform('16')).toEqual('Deleted');
  });
})