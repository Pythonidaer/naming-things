# Naming Things chapter reader

Audience: Johnny and other readers studying software naming. Initial priority: preserve the supplied book content on separate chapter pages, then review and distill concise rules.

Source: Naming Things: The Hardest Problem in Software Engineering, second edition, Tom Benner, 2023. Copyright and author attribution are retained. This reading edition is not presented as an official author site.

## GitHub Pages

Website: https://pythonidaer.github.io/naming-things/

GitHub Actions deploys the static files in `dist/` on pushes to `main`. Set Settings → Pages → Source to GitHub Actions.

## Implementation

Buildless static HTML, Arial/Helvetica/sans-serif, monochrome palette for reading, semantic chapter navigation and appendix tables. The toolkit CSS reset loads before project styling. The site uses local JavaScript for navigation and the interactive roadmap.

The static HTML was generated from the supplied PDF. `content-manifest.json` records the original PDF page ranges.

Applied toolkit: visual styling, CSS reset, content design, layout and IA, writing decisions, color theory, publishing guidance, Clean Code overview/workflow/chapters 1–3. The interactive roadmap adapts the Typography Learning component.

## Roadmap

1. Initial chapter reader, contents, code examples and appendices.
2. Review extraction against the PDF; refine paragraph breaks and cross-references.
3. Draft one concise decision per rule with chapter references and qualifications.
4. Reconcile overlaps and test rules against code.
5. Build an interactive learning roadmap from the reviewed rules.

## Goals for November 12, 2026

- Condense the website's chapter content into one central reference document, with links back to the relevant chapters.
- Draft concise naming rules and propose tasks for applying and checking them in one workflow. For each task, describe when to use the rule, what to inspect or change, and what evidence shows the rule was applied.

## Verification

Static internal-link and metadata checks, chapter coverage and browser review. Social platform previews are separate from metadata implementation.
