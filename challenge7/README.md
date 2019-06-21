# Challenge 7

Create a function that, when given an integer input, returns a function that can be used to test whether a number is even and less than that integer.

## To test:

In a browser, navigate to `/challenge7/SpecRunner.html` from the project root. This will run the Jasmine tests.

From the same page, you can also use the console to call the function with your own values e.g.

```
> isEvenAndLessThan7 = numberIsEvenAndLessThan(7)
<   ...
> isEvenAndLessThan7(6)
<   true
```

or

```
> numberIsEvenAndLessThan(7)(6)
<  true
```
