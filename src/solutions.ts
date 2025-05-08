function formatString(input: string, toUpper?: boolean): string {
  if (toUpper !== undefined) {
    if (toUpper == true) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  } else {
    return input.toUpperCase();
  }
}

// const result1 = formatString("Hello", false);
// console.log(result1);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const arr: { title: string; rating: number }[] = [];
  items.forEach((element) => {
    if (element.rating >= 4) {
      arr.push(element);
    }
  });
  return arr;
}
// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// const result2 = filterByRating(books);
// console.log(result2);

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let arr: T[] = [];
  arrays.forEach((element) => {
    arr = [...arr, ...element];
  });
  return arr;
}

// const res3 = concatenateArrays([1, 2], [3, 4], [5]);
// console.log(res3);
