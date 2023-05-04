var search = function(nums, target) {
    let l=0, h=nums.length-1;
while(l<=h){
  let m=Math.ceil((l+h)/2);
if(nums[m]==target)
  console.log(m);
else if(nums[m]>=nums[l])
{
    if(target<=nums[m] && target>=nums[l])
        h=m-1;
    else
        l=m+1;
}
else
{
    if(target>=nums[m] && target<=nums[h])
        l=m+1;
    else
        h=m-1;
}
}
console.log(-1);

    
};
let nums = [4,5,6,7,0,1,2], target = 0;
console.log(search(nums, target));