// Instructions
// Create a function named sums that accepts a number and returns its partitions.

// A partition is a group of numbers, where the sum of the partition is equal to the number argument. Duplicate partitions are not allowed. [1, 2] and [2, 1] are considered duplicates. The array of partitions must be sorted.

// Example:

// sums(4) // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]


function createPartitions(target, maxValue, suffix, partitions) {
    if (target == 0) {
      partitions.push(suffix);
    } else {
      if (maxValue > 1)
        createPartitions(target, maxValue-1, suffix, partitions);
      if (maxValue <= target)
        createPartitions(target-maxValue, maxValue, [maxValue, ...suffix], partitions);
    }
  }

  function sums(n) {
    let partitions = [];
    createPartitions(n, n, [], partitions);
    partitions = partitions.filter(item => item.length != 0 )
    partitions = partitions.filter(item => item.length != 1 )
    // console.log(partitions)
    return partitions
  }
  
  
 
//   First, generalize the problem. You can define a function

// printPartitions(int target, int maxValue, string suffix)
// with the specification:

// Print all integer partitions of target, followed by suffix, such that each value in the partition is at most maxValue

// Note that there is always at least 1 solution (provided both target and maxValue are positive), which is all 1s.

// You can use this method recursively. So lets first think about the base case:

// printPartitions(0, maxValue, suffix)
// should simply print suffix.

// If target is not 0, you have to options: either use maxValue or not (if maxValue > target there is only one option: don't use it). If you don't use it, you should lower maxValue by 1.

// That is:

// if (maxValue <= target)
//     printPartitions(target-maxValue, maxValue, maxValue + suffix);
// if (maxValue > 1)
//     printPartitions(target, maxValue-1, suffix);
// Combining this all leads to a relatively simple method (coded in Java here and I reordered the statements a little to obtain the very same order as you described):

// void printPartitions(int target, int maxValue, String suffix) {
//     if (target == 0)
//         System.out.println(suffix);
//     else {
//         if (maxValue > 1)
//             printPartitions(target, maxValue-1, suffix);
//         if (maxValue <= target)
//             printPartitions(target-maxValue, maxValue, maxValue + " " + suffix);
//     }
// }
// You can simply call this as

// printPartitions(4, 4, "");
// which outputs

// 1 1 1 1 
// 1 1 2 
// 2 2 
// 1 3 
// 4 

