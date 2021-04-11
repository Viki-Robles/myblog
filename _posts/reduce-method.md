---
title: Reduce method with an input of a string or an object
author: Vicky Vasilopoulou
hero_image: ./reduce.jpg
---

The first example is just demonstrating how actually reduce method
works behind the scenes and the next two examples how it could be used in a string or an object situation.

### Example 1.

Calculate the total

- In this example we are having an array of numbers and we want to return the total which is 6 in that case.

```javascript
function Sum(numbers) {
  return numbers.reduce((acc, number) => {
    return acc + number;
  }, 0);
}
```

So what actually happens here.

```
iteration: 1 2 3
acc: 0 1 3
number: 1 2 3
return: 1 3 6
```

So on the first iteration the accumulator is 0 as we set it up to 0.
The number on the first iteration is 1.
So the total of acc + number is 0 + 1 return: 1.
Now on the second iteration the accumulator is replacing 0 with 1.
The number is 2 since we are on the second iteration and the return is 3.
On the third iteration the accumulator is 3 so our total in the end is 6.

---

### Example 2.

Find the shortest word.

Let's say we have a function findShortestWord() which is getting as an input the following string as you see below on console.log. We want to return basically the shortest word which in that case is 'be'

console.log(findShortestWord("You can't always be correct."))

There are many ways to solve this but my approach with reduce method would be:

```javascript
function findShortestWord(string) {
  return string.split(' ').reduce((short, total) => (short.length > total.length ? total : short));
}
```

---

### Example 3.

Swapping key - value pair of an object
Let's say we have an object and we want to swap the key-values so it should return

```
{Vicky: 'name', Vasilopoulou: 'lastName'}

console.log(swap({ name: 'Vicky', lastName: 'Vasilopoulou' }))
```

My approach with reduce would look like this:

```javascript
function swap(obj) {
  return Object.keys(obj).reduce((newObj, key) => {
    let value = obj[key];
    newObj[value] = key;
    return newObj;
  }, {});
}
```
