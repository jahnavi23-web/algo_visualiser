import MainContainer from "../../../components/mainContainer";

const InsertionSort = () => {
  const symbol = "e";
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
    for (var i = 1; i < arraySize && !stopRef.current; i++) {
      var key = array[i];
      var j = i - 1;
      var a = Array(arraySize).fill(0);
      a[i] = 1;
      setArrayColor(a);
      await delay(1000-speed)
      while (j >= 0 && array[j] > key) {
        await delay(1000-speed)
        step += 1;
        array[j + 1] = array[j];
        await delay(1000-speed)
        j--;
        setSteps(step);
      }
      var a = Array(arraySize).fill(0);
      a[i] = 1;
      a[j+1] = 1;
      setArrayColor(a);
      await delay(1000-speed)
      array[j + 1] = key;
      await delay(1000-speed)
    }
    var a = Array(arraySize).fill(0);
    setArrayColor(a);
  };
  return (
    <MainContainer title={"Insertion Sort"} symbol={symbol} algo={start} />
  );
};

export default InsertionSort;
