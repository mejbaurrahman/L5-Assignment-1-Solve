# L5-Assignment-1-Solve

## Question: What is the use of the keyof keyword in TypeScript? Provide an example

Answer: The keyof keyword in TypeScript is used to create a union of all property names as keys of a given type.

Example:

interface Person {
name: string;
age: number;
isStudent: boolean;
}

type PersonKeys = keyof Person;

as like

type PersonKeys= "name" | "age" | "isStudent";

## Question: Provide an example of using union and intersection types in TypeScript.

Answer:
A union type allows a variable to hold one of several types.

type Status = "success" | "error" | "loading";

Here the type of Status can be any type named 'success', 'error', 'loading';

An intersection type combines multiple types into one, requiring all properties.

type Name = { name: string };
type Age = { age: number };

type Person = Name & Age;

const person: Person = {
name: "XYZ",
age: 30
};

Here type of Person includes all properties of Name and Age types.
