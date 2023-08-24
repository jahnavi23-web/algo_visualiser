import MainContainer from "../../../components/mainContainer";

const BubbleSort = () => {
  const symbol = "c";
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
    for (var i = 0; i < arraySize - 1 && !stopRef.current; i++) {
      for (var j = 0; j < arraySize - 1 - i && !stopRef.current; j++) {
        var a = Array(arraySize).fill(0);
        a[j] = 1;
        a[j + 1] = 1;
        setArrayColor(a);
        await delay(1000 - speed);
        step += 1;
        if (array[j] > array[j + 1]) {
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          var a = Array(arraySize).fill(0);
          a[j] = 1;
          a[j + 1] = 1;
          setArrayColor(a);
          await delay(1000 - speed);
        }
        setSteps(step);
        var a = Array(arraySize).fill(0);
        setArrayColor(a);
      }
    }
    var a = Array(arraySize).fill(0);
    setArrayColor(a);
  };
  return <MainContainer  title={"Bubble Sort"} symbol={symbol} algo={start} />;
};

export default BubbleSort;
