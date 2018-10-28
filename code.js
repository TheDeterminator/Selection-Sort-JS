function selectionSort(arr)
{
  var tmp, swapIndex
  var shouldSwap = false

  for (let l = 0; l < arr.length; l++)
  {
    let lowest = arr[l]
    for (let j = l+1; j < arr.length; j++)
    {
      if (arr[j] < lowest)
      {
        shouldSwap = true
        lowest = arr[j]
        swapIndex = j
      }
    }

    if (shouldSwap)
    {
      tmp = arr[l]
      arr[l] = lowest
      arr[swapIndex] = tmp
      shouldSwap = false
    }
  }
  return arr
}
