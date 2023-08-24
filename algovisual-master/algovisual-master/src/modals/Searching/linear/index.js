import MainContainer from "../../../components/mainContainer";

const LinearSearch = () => {
  const symbol = "a";
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
    const searchTerm = array[Math.floor(Math.random() * arraySize)];
    setSearchTerm(searchTerm);
    for (var i = 0; i < arraySize; i++) {
      var x = document.getElementById(symbol + i);
      x.style.backgroundColor = colors.secondary;
    }
    for (var i = 0; i < arraySize && !stopRef.current; i++) {
      var x = document.getElementById(symbol + i);
      x.style.backgroundColor = colors.primary;
      step += 1;
      await delay(1000 - speed);
      if (array[i] !== searchTerm) {
        x.style.backgroundColor = colors.secondary;
      } else {
        setSteps(step);
        var b = Array(arraySize).fill(0);
        b[i] = 1;
        setArrayColor(b);
        break;
      }
    }
  };
  return <MainContainer title={"Linear Search"} symbol={symbol} algo={start} />;
};

export default LinearSearch;
