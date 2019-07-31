 
import timeStamp from './dateToTimeStamp';


test ('timeStamp', () => {
    expect(timeStamp('2019/01/22')).toBe('Tuesday');
    expect(timeStamp('2019/07/30')).toBe('Tuesday');
    expect(timeStamp('2019/07/31')).toBe('Wednesday');

})

 