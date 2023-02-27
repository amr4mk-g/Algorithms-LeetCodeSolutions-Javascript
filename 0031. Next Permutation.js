function nextPermutation (nums) {
    let n = nums.length;
    let i = n-2;
    while (nums[i] >= nums[i+1]) i--;
    if (i >= 0) {
        let j = n-1;
        while (nums[i] >= nums[j]) j--;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    let l = i+1, r = n-1;
    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]];
        l++;  r--;
    }
}
