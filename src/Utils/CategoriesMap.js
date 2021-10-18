
export const sortedArrCashFetch =  (arrStatic, updata) => {
  if(typeof(updata) !== Object ) {
    const categoriesMap = new Map();
    for (let i = 0; i < arrStatic.length; i++) {
      categoriesMap.set(arrStatic[i], i);
    }
    const categories = new Map();
    for (const key of categoriesMap.keys()) {
      categories.set(key, { _id: key, totalByCategory: 0, desc: [{desc: key, total: 0}] });
    }
    const map1 = new Map(categories);
    for (const someObject of updata) {
      map1.set(someObject._id, someObject);
    }
    const array = [];
    for (const value of map1.values()) {
      array.push(value);
    }
    return array.sort((a, b) => {
      const hasA = categoriesMap.has(a._id);
      const hasB = categoriesMap.has(b._id);
      if (hasA && hasB) {
        return categoriesMap.get(a._id) - categoriesMap.get(b._id);
      } else if (hasA) {
        return -1;
      } else if (hasB) {
        return 1;
      } else {
        return 0;
      }
    });

  }
};
