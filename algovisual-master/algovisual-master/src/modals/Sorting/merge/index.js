import MainContainer from "../../../components/mainContainer";

const MergeSort = () => {
  const symbol = "f";
  const start = async (
    arraySize,
    array,
    setArrayColor,
    setSteps,
    setSearchTerm,
    speed,
    colors,
    delay,
    stopRef
  ) => {
    var a = Array(arraySize).fill(0);
    setArrayColor(a);
    setSteps(0);
    var step = 0;
    setSearchTerm(-1);
    for (var i = 0; i < arraySize; i++) {
      var x = document.getElementById(symbol + i);
      x.style.backgroundColor = colors.secondary;
    }
    const mergeSort = async (t, start) => {
      if (t.length <= 1) {
        return t;
      }
      if(!stopRef.current){
      var a = Array(arraySize).fill(0);
      setArrayColor(a);
      step += 1;
      setSteps(step)
      const middle = Math.floor(t.length / 2);
      const leftHalf = t.slice(0, middle);
      const rightHalf = t.slice(middle);
      
      var sortedLeft = await mergeSort(leftHalf, start);
      var sortedRight = await mergeSort(rightHalf, start + middle);

      var p = main(sortedLeft, sortedRight);
      var a = Array(arraySize).fill(0);
      for (var k = 0; k < p.length; k++) {
        array[k + start] = p[k];
        a[k + start] = 1;
      }
      setArrayColor(a);
      await delay(1000 - speed);
      return p;
    }
    else{
      return []
    }
    };

    var temp = [...array];
    var p = await mergeSort(temp, 0);
    await delay(1000 - speed);
    var a = Array(arraySize).fill(0);
    setArrayColor(a);
  };

  const main = (left, right) => {
    const merged = [];
    var leftIndex = 0;
    var rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
    return merged;
  };

  return <MainContainer title={"Merge Sort"} symbol={symbol} algo={start} />;
};

export default MergeSort;
