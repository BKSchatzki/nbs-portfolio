# Nick B. Schatzki

A placeholder card site for a voice artist. Plans to embed SoundCloud files, and implement a simple dashboard allowing the artist to modify their picture, bio, and SoundCloud links.

**Link to project:** http://nbs-portfolio.netlify.app

![Nick B. Schatzki](https://res.cloudinary.com/djqsm7sz5/image/upload/v1691468692/bks-portfolio/nick-b-schatzki_i9v5yx.jpg)

## How It's Made:

**Tech used:** Vite, React, Tailwind, DaisyUI

This was an exercise in trying to build something as quickly as possible. The thing I spent the most time on was tweaking media queries. I wanted the main card to fill up a 1080p screen, but not extend past it, and I got pretty darn close, all with Tailwind. The long-term goal of this site is to be able to build out card-style sites with personalization quickly.

## Optimizations

I added some transition effects when switching between the tabs. Generally, they are quite performant compared to the transition animations in my portfolio. There are two issues that need fixing: the background gradient on the body doesn't extend past the tops and the bottom of the page, and I don't like how the footer bounces around based on the size of the element. These are simple CSS fixes that will be implemented when I create the version with the dashboard.

## Lessons Learned:

One specific standout lesson from building this out was that single-page info-and-contact sites can be rolled up very quickly. The process of building this site out was informative for workflow optimizations. However, I also figured that the overhead of React is not 100% necessary for something this simple, and it also comes with the additional SEO issues of presenting a blank DOM to indexers and web crawlers. It might be more pertinent to use something like Astro, or for something more extensive, a backend framework for React like Next.

## Examples:

Take a look at some more examples in my portfolio:

**BK Chat:** https://github.com/BKSchatzki/bk-chat

**C Flat Run:** https://github.com/BKSchatzki/cflatrun-landingpage

**Songstruct:** https://github.com/BKSchatzki/songstruct

**SongStrudel:** https://github.com/BKSchatzki/songstrudel
