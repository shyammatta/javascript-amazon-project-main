export function weekend(date){
    const dayofweek=date.format('dddd');
    return dayofweek ==='Saturday' || dayofweek ==='Sunday';

}
export default weekend;