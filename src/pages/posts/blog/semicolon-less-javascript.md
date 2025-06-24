---
layout: "../../../layouts/BlogArticle.astro"
title: "A Case for Semicolon-less JavaScript (ASI)"
date: "23/06/2025"
---

## Why semicolons

Before making a case for semicolon-less JavaScript, you must first understand why the majority of experienced developers will continue to reject automatic semicolon insertion (ASI). Why these seemingly experienced developers clutter their code and keystrokes.

In short semicolons in JavaScript helps reduce the surface for bugs in poorly maintained code bases, and provides clearer intent to formatters such as [prettier](https://prettier.io/).

## The case for semicolon-less JavaScript

I spent a long time searching for reasons for and against JavaScript semicolons. But almost all of the reasons against semicolons were "linting should catch semicolon-less errors" and "I can type at 100 words per minute, so if I omit a semi colon, I can save 0.6 seconds per line", or the worst "it looks better".

However, I have recently come across a **stronger** argument for semicolon-less JavaScript and ASI.

### Diffs and blames

I believe that one of the quickest ways to determine the quality of a code base is to look at the Git / version control history.

A good commit history is descriptive, has clear ownership, and has a well maintained blame. A well maintained blame and version history is often overlooked by the majority of developers, but correct version control is more descriptive than any number of code comments. Each commit is a snapshot that describes who made a change, why they made the change, and what problem they were trying to fix.

Additionally, a good diff is important for code reviewers who will commonly review using a diff or patch view.

However, semicolons do not play nicely with the [builder pattern](https://en.wikipedia.org/wiki/Builder_pattern) or functional programming paradigms.

While you may not like either the builder pattern of functional programming, your project will inevitably use code someone else has written. And that person may not agree with your reservations.

For a simple demonstration, I have created a simple class that has two methods, `add()` and `sub()`.

```ts
class MyBasicMath {
    #total = 0;

    add(value) {
        this.#total += value;
    }

    sub(value) {
        this.#total -= value;
    }
}

const myValue = new MyBasicMath()
    .add(5)
    .sub(1);
```

In my contrived universe, I have recently found a bug in my code, `myValue` is currently wrong because I forgot to add three. So a simple fix will be to append another `.add(3)` to the end of this function chain.

I have provided two diff's below, the first one is an example adding a `add(3)` call to a code base that uses semicolons, while the second example is semicolon-less.

In the project that uses semicolons you'll see that if I append a `sub()` method call, the line above is also included in the diff because the semicolon was removed.

_Diff with semicolons_
```diff
const myValue = new MyBasicMath()
    .add(5)
-   .sub(1);
+   .sub(1)
+   .add(3);
```

---

_Diff without semicolons_
```diff
const myValue = new MyBasicMath()
    .add(5)
    .sub(1)
+   .add(3)
```

As you can see above, I am being blamed for the `sub` function. When the real change that I made was adding `add(-3)`.

A more common/relatable example would be functional programming paradigms such as the `map`, `filter`, etc... Array [instance methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods).

```ts
const myData = [-2,-1,0,1,2];
const result =
  myData.map((value) => value * 2)
    .filter(() => value > 0);
```

If I was to add an additional `map` function to the end of this method chain, the usefulness of the Git blame would immediately be destroyed because I would be blamed for changing the `filter` line when the semicolon was removed.

```diff
const myData = [-2,-1,0,1,2];
const result =
  myData.map((value) => value * 2)
-    .filter(() => value > 0);
+    .filter(() => value > 0)
+    .map((value) => value + 1);
```
