# modal-nodes

modal-nodes is a small, simple functional CSS library for use with Cantina projects. It provides:

- Small, single purpose classes to help describe site elements and components
- Better control over the cascade and less unintended styling collisions
- A consistent, human-friendly namespace
- More easily maintainable/extensible CSS
- A small download for better performance
- Less responsibility for the developer to know CSS' peculiarities
- Faster setup for future Cantina projects

If you are not familiar with the advantages/disadvantages of the functional CSS methodology, [here is a good overview of the subject](https://marcelosomers.com/writing/rationalizing-functional-css/).


## Frequently Asked Questions

### Why should I use this?

>We had 5+ implementations of X


### Why is it so verbose?

Class names are human-readable so new developers can easily understand what classes do, how they affect the cascade, and potentially guess which other classes are available (if `u-color-black` exists, there's probably a `u-color-white` class).

Compare:

- `class="h3 f5 pv3 lh-copy"` versus
- `u-height-ms-3 u-font-size-5 padding-top-1 u-line-height-slight`

While it makes for longer line lengths, it is far easy for a new developer to understand when reading through the source. Whitespace is cheap and gzip is your friend, don't be afraid to use them! 


### What does `u-` mean?

`u-` stands for "Utility", a common namespace for all this repos' classes. This helps keep the distinction between what is and isn't modal node classes clear.


### Where is ______?

Not every property in CSS is represented, and this is by design. modal-nodes is built to cover most of the basic styling needs for a site. The last mile of work should still be done in a safely namespaced way.

For example:

``` html
<div class="c-card u-background-color-white u-padding-ms-2 u-border-bottom-thinner">
  <h2 class="c-card__image u-font-size-ms-2 u-color-red-light u-line-height-tight">
    Card title
  </h2>
  <img class="c-card__image u-margin-top-ms-1" src="…" alt="…" />
  <p class="u-measure-medium">
    Card content lorem ipsum dolor sit amet.
  </p>
  <a class="u-margin-top-ms-2" href="#">
    Card CTA
  </a>
</div>
```

``` css
.c-card {
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.75);
  
    &__image {
      background-color: #1a6195;
      background-blend-mode: multiply;
    }
}
…
```

In this card example, the tricky custom CSS that needs an author's opinion is added in the namespaced `c-` component classes. 

This delineation helps keeps further stylesheet maintenance efforts more straightforward. Be sure to also leverage Sass logic when the opportunity presents itself.


## TODO

- [ ] Responsive modifiers
- [ ] Living styleguide
- [ ] Full Cantina palette


### What's up with the name?

![](https://i.imgur.com/2bTV6oc.jpg)
