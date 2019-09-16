# What Test Driven Develop IS NOT

There are a number of common misconceptions about Test Driven Development.

- [TDD is a big time consumer](#TDD-is-a-big-time-consumer)
- [TDD means writing all of my tests before I write any code](#TDD-means-writing-all-of-my-tests-before-I-write-any-code)
- [I can't use TDD if I'm unfamiliar with the tools I'm using](#I-can't-use-TDD-if-I'm-unfamiliar-with-the-tools-I'm-using)
- [TDD is a way to get 100% Test Coverage](#TDD-is-a-way-to-get-100-Test-Coverage)

## TDD is a big time consumer

-- FALSE--

Companies like Pivotal Labs advocate vehemently for TDD as  way to make development move faster. Matthew Parker of Pivotal Labs notes that you do get an initial speed boost by writing code fast and loose, but that speed slows to a crawl after an initial fast period of development. Test Driven projects, by comparison, might take a little longer at first but have a tendency to pick up speed as they go, eventually leveling off at a moderate pace.

> ![](https://miro.medium.com/max/16000/1*L7bd2tPHsB0sXdbEI78i_Q.png)
> [Why TDD](https://builttoadapt.io/why-tdd-489fdcdda05e), Matthew Parker

This is possible because TDD allows developers to constantly improve small pieces of through regular refactoring as new information becomes available on a project. Developers iterate quickly on code maintainability, which possibly because a strong test base allows for the reoganization of the codes implementation without modifying it's external behavior. This discipline leads to cleaner, more readable, more maintainable code that doesn't take as much time to change.

Consider as well that TIME == Money. Test Driven Development has been shown to significantly reduce the number defects shipped to production and allow for faster troubleshooting when problems are found. [[4]](citations.md)

> IBM found that the cost to fix an error found after product release was 4 to 5 times higher than if it’s uncovered during the design phase, and up to 100 more expensive than if it’s identified in the maintenance phase. [[3]](citations.md)

What's more, TDD helps developers adhere to the [YAGNI principle](yagni.md), because by writing a test first, it's easier to see the point at which the code satisfies the minimum requirement for a story, and discourages the temptation to go down rabit holes when you might get an idea to build some extra tooling that you or another developer might use someday. This means that writing tests first actually has a tendency to drive developers toward writing less code overall.

## TDD means writing all of my tests before I write any code

-- FALSE --

When developers are new to Test Driven Development, and especially when they are new to automated testing, there's a tendency to think testing first means writing ALL of the tests for a given feature up front. This leads to a dizzying sense of disorientation.

## I can't use TDD if I'm unfamiliar with the tools I'm using

-- FALSE --

## TDD is a way to get 100% Test Coverage