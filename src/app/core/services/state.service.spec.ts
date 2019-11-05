import { StateService } from "./state.service";

describe('StateService', () => {
  let service: StateService

  const expectedStateOptions = [
      { name: 'ToDo', value: 1 }, 
      { name: 'Started', value: 2 },
      { name: 'Completed', value: 4 },
      { name: 'Cancelled', value: 8 },
      { name: 'Deleted', value: 16 },
    ]; 

  beforeEach(() => {
    service = new StateService();
  })

  it('should return all of the state options', () => {  
    const states = service.getStateOptions();

    expect(states).toEqual(expectedStateOptions);
  });

  it('should return the bit value of all possible states', () => {  
    const bitValue = service.getAllStatesBit();

    expect(bitValue).toEqual(31);
  });
})
