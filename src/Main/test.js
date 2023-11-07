const nums = [1,2,3,2,4,1]
var containsDuplicate = function(nums) {
    const map = {}
    for(const num of nums) {
        // If we have seen this num before return true
        console.log('num :>> ', num);
        // console.log('map[num] :>> ', map[num]);
        if(map[num]) return false
        map[num] = true
        console.log('num below if condition:>> ', num);
    }
    return true
  
};
// containsDuplicate(nums)

console.log('result :>> ', containsDuplicate(nums));