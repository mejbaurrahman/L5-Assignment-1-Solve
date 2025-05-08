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

function concatenateArrays<T>(...arrays: T[][]): T[] {
  let arr: T[] = [];
  arrays.forEach((element) => {
    arr = [...arr, ...element];
  });
  return arr;
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value == "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length) {
    return products.reduce((maxPricedProduct, current) =>
      current.price > maxPricedProduct.price ? current : maxPricedProduct
    );
  } else {
    return null;
  }
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n >= 0) {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    } else {
      reject(new Error("Negative number not allowed"));
    }
  });
}
