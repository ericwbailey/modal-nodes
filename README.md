# modal-nodes

modal-nodes is simple, small (42k gzipped!) functional CSS library for use with Cantina projects. It provides:

- Small, single purpose classes to help describe site elements and components
- Better control over the cascade and less unintended styling collisions
- A consistent, human-friendly namespace
- More easily maintainable/extensible CSS
- A small download for better performance
- Less responsibility for the developer to know CSS' peculiarities
- Faster setup for future Cantina projects

If you are not familiar with the advantages/disadvantages of the functional CSS methodology, [here is a good overview of the subject](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).


## Use it

Paste this into the header of your HTML document, *before* linking to other styles:

``` html
<link as="style" rel="stylesheet" href="https://gitcdn.xyz/repo/cantinac/modal-nodes/master/dist/main.css" />
```

If needed, [GitCDN](https://github.com/schme16/gitcdn.xyz#how-to-use) also allows you to link to a specific commit, allowing you to pick a specific version at the expense of not receiving updates.

### List of classes
Until a [living styleguide](#todo) has been built, a list of the available class names is [located here](https://github.com/cantinac/modal-nodes/blob/master/class-names.md).

### Responsive

Classes can be triggered at specific breakpoints by appending one of the following strings to the end of the class name:

- `--wrist-large`
- `--palm-large`
- `--lap-large`

For example, `u-background-color-black--lap-large` will change the background color to black at lap-large's breakpoint. 

modal-nodes encourages [mobile-first](https://www.uxmatters.com/mt/archives/2012/03/mobile-first-what-does-it-mean.php) development by using `min-width` for its media queries.


## Frequently Asked Questions

### Why should I use this?

As internal project work tends to be performed by different people in between client work, Cantina's internal project styles evolved to be an amalgamation of each developer's preferences and comfort level with CSS.

This led to things like 5+ implementations for aligning an image, antipatterns such as too general/entangled selectors and specificity creep. This make future styling work problematic, as well as increasing overall stylesheet file size. 

This isn't a condemnation of the work performed. It's absurd to expect a developer to have 100% perfect working knowledge of a project they're only assigned to make quick edits on.


### What does `u-` mean?

`u-` stands for "Utility", a common namespace for all this repos' classes. This helps keep the distinction between what is and isn't modal node classes clear.


### What does `ms-` mean?

`ms-` stands for "Modular Scale". [Modular scales](https://alistapart.com/article/more-meaningful-typography) are a way to create more meaningful, consistent measurements between site elements. All modular scale values are in `rem`s.


### Why is it so verbose?

Class names are human-readable so new developers can easily understand what classes do, how they affect the cascade, and anticipate which other classes are available—if `u-color-black` exists, it stands to reason that there's a `u-color-white` class.

Compare:

- `class="h3 f5 pv3 lh-copy"` versus
- `u-height-ms-3 u-font-size-ms-5 padding-top-ms-1 u-line-height-slight`

While it makes for longer line lengths, it is far easy for a new developer to understand when reading through the source. Whitespace is cheap and gzip is your friend! Take advantage of them!


### Where is ________?

Not every property in CSS is represented, and this is by design. modal-nodes is built to cover most of the basic styling needs for a site. The last mile of work should still be done in a safely namespaced way.

For example:

#### HTML
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

#### Sass
``` css
.c-card {
  box-shadow: 0 3px 5px 0 $gray-light;
  transition: box-shadow $easing-fast;

	&:hover {
	  box-shadow: 0 3px 7px 0 $gray-dark;
	  transition: box-shadow $easing-fast;
	}

    &__image {
      background-color: #1a6195;
      background-blend-mode: multiply;
    }
}
```

In this card example, the tricky custom CSS that needs an author's opinion is added in the namespaced `c-` component classes in a separate stylesheet.

This delineation helps keeps further stylesheet maintenance efforts more straightforward. Be sure to also leverage Sass logic when the opportunity presents itself.

### Thin, thick, thicker?

As the specific measurements may change, modal-nodes uses an abstracted range of names to choose from. The patterns you'll encounter are:

- Priority 
    1. Primary
    1. Secondary
    1. Tertiary
    1. Quaternary
- Proximity
    - Tightest
    - Tighter
    - Tight
    - Slight
    - Loose
    - Looser
    - Loosest
- Width
    - Thickest
    - Thicker
    - Thick
    - Thin
    - Thinner
    - Thinnest
- Distance
    - Shortest
    - Shorter
    - Short
    - Medium
    - Long
    - Longer
    - Longest


## TODO

- [ ] Living styleguide
- [ ] Full Cantina palette
- [ ] Further abstraction via passing properties as vars


## What's up with the name?

![](https://i.imgur.com/2bTV6oc.jpg)







