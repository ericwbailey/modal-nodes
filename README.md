# modal-nodes

modal-nodes is a small, simple functional CSS library for use with Cantina projects. It provides:

- Small, single purpose classes to help describe site elements and components
- Better control over the cascade and less unintended styling collisions
- A consistent, human-friendly namespace
- More easily maintainable/extensible CSS
- A small download for better performance
- Less responsibility for the developer to know CSS' peculiarities 

If you are not familiar with the advantages/disadvantages of the functional CSS methodology, [here is a good overview of the subject](https://marcelosomers.com/writing/rationalizing-functional-css/).


## TODO

- [ ] Responsive modifiers
- [ ] Living styleguide
- [ ] Full Cantina palette


## Frequently Asked Questions

### Why should I use this?

>We had 5+ implementations of X


### Why is it so verbose?

Class names are human-readable so new developers can easily understand what classes do, how they affect the cascade, and potentially guess which other classes are available.

Compare:

- `class="h3 f5 pv3 lh-copy"` versus 
- `u-height-rem-3 u-font-size-5 padding-top-1 u-line-height-slight`

While it makes for longer line lengths, it is far easy for a new developer to understand when reading through the source. Whitespace is cheap and gzip is your friend. 


### What does `u-` mean?

`u-` stands for "Utility", a common namespace for all this repos' classes.


### Where is ______?

>Not every property in CSS is represented. 

>Sass logic

### What's up with the name?

![](https://i.imgur.com/2bTV6oc.jpg)
