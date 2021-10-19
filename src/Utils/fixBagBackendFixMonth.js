import { arrFixMonthNumber } from './category';

export const fixBagBackendFixMonth = updata => {
  const currentMonth = new Date().getMonth();
  const currentArrMonth = arrFixMonthNumber[currentMonth - 1];
  const categoriesMap = new Map();
  for (let i = 0; i < currentArrMonth.length; i++) {
    categoriesMap.set(currentArrMonth[i], i);
  }
  const categories = new Map();
  for (const key of categoriesMap.keys()) {
    categories.set(key, {
      _id: {
        month: key,
      },
      Total: 0,
    });
  }
  const map1 = new Map(categories);
  for (const someObject of updata) {
    map1.set(someObject._id.month, someObject);
  }
  const array = [];
  for (const value of map1.values()) {
    array.push(value);
  }
  return array.sort((a, b) => {
    const hasA = categoriesMap.has(a._id.month);
    const hasB = categoriesMap.has(b._id.month);
    if (hasA && hasB) {
      return categoriesMap.get(a._id.month) - categoriesMap.get(b._id.month);
    } else if (hasA) {
      return -1;
    } else if (hasB) {
      return 1;
    } else {
      return 0;
    }
  });
};
