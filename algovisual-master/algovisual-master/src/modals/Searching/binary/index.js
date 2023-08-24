import MainContainer from "../../../components/mainContainer";

const BinarySearch = () => {
  const symbol = "b";
  const start = async (arraySize, array, setArrayColor, setSteps, setSearchTerm, speed, colors, delay, stopRef) => {
    var a = Array(arraySize).fill(0);
    setArrayColor(a);
    setSteps(0);
    var step = 0;
    const searchTerm = array[Math.floor(Math.random() * arraySize)];
    setSearchTerm(searchTerm);
    for (var i = 0; i < arraySize; i++) {
      var x = document.getElementById(symbol + i);
      x.style.backgroundColor = colors.secondary;
      if(Math.floor((arraySize-1)/2) == i){
        x.style.backgroundColor = colors.primary;
      }
    }
    await delay(1000);
    var i = 0;
    var j = arraySize-1;
    while(i<=j && !stopRef.current){
      var mid = Math.floor((i+j)/2);
      console.log(array[mid])
      var x = document.getElementById(symbol + mid);
      x.style.backgroundColor = colors.primary;
      step += 1;
      if(searchTerm === array[mid]){
        console.log("hi")
        setSteps(step);
        var b = Array(arraySize).fill(0);
        b[mid] = 1;
        setArrayColor(b);
        break;
      }
      else if(searchTerm < array[mid]){
        j = mid-1;
        await delay(1000 - speed);
        x.style.backgroundColor = colors.secondary;
      }
      else if(searchTerm > array[mid]){
        i = mid+1;
        await delay(1000 - speed);
        x.style.backgroundColor = colors.secondary;
      }
    }
  }
  return (
   <MainContainer title={"Binary Search"} isSorted={true} symbol={symbol} algo={start}/>
  );
};

export default BinarySearch
