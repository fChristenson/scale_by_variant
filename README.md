# Scaling by variant

## What we will cover

* One of the most common scaling issues
* How we can design our base components to avoid it

## Notes

A very common problem when your application grows is that you will have multiple variants
of the same components and as you get more variants you will find that it gets increasingly
harder to keep track of what components you have and what is missing from your component library.

To solve this problem you will create different variants of the same components but this is also
what leads to the duplication and consistency problem.

So we want a solution that allows us to create as many variants of a component as our stakeholders
want but without loosing track of the components we have already created.

Our solution also needs to be simple and easy to remember so that a company with many different teams won't start to create their own non standard components to fit their specific need or simply because some developers don't know about the different types of components.

We want a universal component that stays simple no matter how many variants we add.
