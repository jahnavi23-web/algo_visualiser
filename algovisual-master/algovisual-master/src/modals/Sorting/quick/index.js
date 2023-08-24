import MainContainer from "../../../components/mainContainer";

const QuickSort = () => {
  const symbol = "g";
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
    const Quick = async (arr, start, n) => {
      if (arr.length <= 1) {
        return arr;
      }
      if (!stopRef.current) {
        step += 1;
        setSteps(step);
        var pviot = arr[arr.length - 1];
        var left = [];
        var right = [];

        for (var i = 0; i < arr.length - 1; i++) {
          if (arr[i] < pviot) {
            left.push(arr[i]);
          } else {
            right.push(arr[i]);
          }
        }

        var a = Array(arraySize).fill(0);
        setArrayColor(a);

        await delay(1000 - speed);

        var t = [...left, pviot, ...right];
        var f = Array(arraySize).fill(0);

        var qtemp = [...array];
        for (var k = 0; k < t.length; k++) {
          qtemp[k + start] = t[k];
          f[k + start] = 1;
        }
        setArrayColor(f);
        await delay(1000 - speed);

        for (var j = 0; j < qtemp.length; j++) {
          var initial = array.indexOf(qtemp[j]);
          if (initial != j) {
            array[j] = qtemp[j];
          }
        }

        await delay(1000 - speed);
        var z = [
          ...(await Quick(left, start, left.length - 1)),
          pviot,
          ...(await Quick(right, start + left.length + 1, n)),
        ];

        var d = Array(arraySize).fill(0);

        var qtemp = [...array];
        for (var k = 0; k < z.length; k++) {
          qtemp[k + start] = z[k];
          d[k + start] = 1;
        }

        setArrayColor(d);
        for (var j = 0; j < qtemp.length; j++) {
          var initial = array.indexOf(qtemp[j]);
          if (initial != j) {
            array[j] = qtemp[j];
          }
        }
        setArrayColor(d);
        await delay(1000 - speed);
        return z;
      } else {
        return [];
      }
    };
    var temp = [...array];
    var b = await Quick(temp, 0, temp.length - 1);
  };

  return <MainContainer title={"Quick Sort"} symbol={symbol} algo={start} />;
};

export default QuickSort;
