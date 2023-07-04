//Задача № 1
function cachingDecoratorNew(func) {
    const cache = [];

    return function wrapper(...args) {
      const hash = md5(args);
  
      const cachedValue = cache.find(item => item.hash === hash);
      if (cachedValue) {
        console.log("Из кэша: " + cachedValue.value);
        return "Из кэша: " + cachedValue.value;
      }
  
      const result = func.apply(this, args);
      console.log("Вычисляем: " + result);
      cache.push({ hash, value: result });
  
      if (cache.length > 5) {
        cache.shift();
      }
  
      return "Вычисляем: " + result;
    };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timerld = null;
  function resultFunction(...args){
    if(!timerld) {
        func(...args);
        resultFunction.count++;
    }

    resultFunction.allCount++;

    clearTimeout(timerld);
    timerld = setTimeout(() => {
        func(...args);
        resultFunction.count++;
    }, delay)
}
resultFunction.count = 0;
resultFunction.allCount = 0;
return resultFunction;
}
