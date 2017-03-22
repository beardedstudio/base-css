# Base CSS Structure
With every new project, we usually start with this CSS as our base. The file structure is consistent across projects and helps us componentize our styles into meaningful chunks. If you'd like to get into the nitty-gritty about our CSS conventions, have a look at [our pattern library](https://bearded-pattern-library.herokuapp.com/documentation/css-conventions/).

## Dependencies
We rely on at-import's [Breakpoint library](https://github.com/at-import/breakpoint) to easily handle media queries and responsiveness. For the purpose of this repository, we've included it as a Bower dependency in case you wanted to get it quickly up and running.

## How to Use

### The Grid
By default, we employ a 12-column, infinitely nest-able grid system. Using 12 columns helps us achieve both asymmetric layouts as well as equal-width 3- and 4-column layouts.

Each row is calculated in the number of columns (out of a possible 12) that make up that width. So an area that you want to be 50% of the possible width (ie. 6 columns wide) should get `@include column(6)`.

The last column in a row should not have a gutter, and thus gets a sepcial mixin to remove that extra width. The mixin corresponds to the overall layout you're trying to create. So if you want to achieve a two-column layout, you'd use `@include last-col2`.

Examples for the grid can be found on our [pattern library](https://bearded-pattern-library.herokuapp.com/general/grid/).

### Media queries
Media queries are attached to their element so it's easier to see how each responds to screen widths individually. We've predefined our default breakpoint widths in the `_mediaqueries.scss` file, so we can reference them easily as variables within our CSS. With the help of the Breakpoint library, our media queries look like this:
```
@include breakpoint($breakpoint-l) {
  // Styles
}
```

## Contributing
Improvements to our code are always welcome! If you see anything you think could be added or removed, feel free to open an issue or submit a pull request! (And don't be afraid to tell us we're wrong either.) Before contributing, make sure you adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) for this project.

## License
This project is licensed under the Unlicense — see [LICENSE](LICENSE) for details.
