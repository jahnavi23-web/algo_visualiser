import MainContainer from "../../../components/mainContainer";

const SelectionSort = () => {
  const symbol = "d";
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
    for (var i = 0; i < arraySize - 1&& !stopRef.current; i++) {
      var minValue = i;
      var a = Array(arraySize).fill(0);
      a[minValue] = 1;
      setArrayColor(a);
      await delay(1000-speed)
      for (var j = i + 1; j < arraySize&& !stopRef.current; j++) {
        step += 1;
        await delay(1000-speed)
        if (array[minValue] > array[j]) {
          minValue = j;
          var a = Array(arraySize).fill(0);
          a[minValue] = 1;
          a[i] = 1;
          setArrayColor(a);
        // await delay(1000-speed)
        }
        await delay(1000-speed)
        setSteps(step);
      }
      if (minValue !== i) {
        var temp = array[minValue];
        array[minValue] = array[i];
        array[i] = temp;
        await delay(1000-speed)
      }
      await delay(1000-speed)
      var a = Array(arraySize).fill(0);
      setArrayColor(a);
    }
  };
  return (
    <MainContainer title={"Selection Sort"} symbol={symbol} algo={start} />
  );
};

export default SelectionSort;
