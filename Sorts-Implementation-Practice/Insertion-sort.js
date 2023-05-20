const insertion = (arr) =>{
    const copy = arr.slice();
        const sorted = [];
        while (copy.length) {
          console.log(sorted.join(','));
          const value = copy.pop();
          sorted.push(null);
          let i;
          for (i = sorted.length - 1; i > 0; i--) {
            if (sorted[i - 1] < value) break
            sorted[i] = sorted[i - 1];
          }
          sorted.splice(i, 1, value);
        }
        return sorted;
      }
console.log(insertion([8, 4, 5, 7, 6, 0]));
console.log(insertion([5, 4, 3, 2, 1, 0]));
console.log(insertion([-3, 4, 10, 0, 9, 7]));
