# Naming Things — abbreviated notes

Personal condensation of the reading site for _Naming Things: The Hardest Problem in Software Engineering_, second edition, Tom Benner, 2023. These are study notes, not the book and not an official edition. Each decision links back to the chapter section it came from.

The agent-facing form of the same decisions is in `.cursor/rules/`. The opposite-word list is [common-antonyms.md](common-antonyms.md).

## What a name is for

Identifier naming is choosing the word a codebase will use for a concept: a class, variable, function, or similar. The book’s aim is code that is faster and more pleasant to work in because those words are better. [Purpose](https://pythonidaer.github.io/naming-things/chapters/1-purpose-of-this-book/)

Code is a knowledge base of how the system should behave. A name is how a person picks up that knowledge. Better names make maintenance faster. They also shape how a team talks, which shows up later as ramp-up pain, morale, and the chance to do higher-leverage work. Naming well forces real domain understanding, and that understanding is a leadership skill. [Why naming matters](https://pythonidaer.github.io/naming-things/chapters/2-why-is-naming-important/)

## Why it stays hard

A name talks about a concept that is still changing, to an audience that is also changing. New concepts start poorly defined. Industry-wide standards and tooling are thin, so teams invent local habits. The cost of a careful name is paid now. The value shows up later, so the quick name usually wins the moment of choice. Making naming easier means lowering that immediate cost and making the later value visible. [Why naming is hard](https://pythonidaer.github.io/naming-things/chapters/3-why-is-naming-hard/)

Scope here is identifier names inside software. Project names, package branding, and prose style are adjacent and mostly left alone. [Scope](https://pythonidaer.github.io/naming-things/chapters/4-scope-of-this-book/)

## Four principles

Judge a name with these four. [Overview](https://pythonidaer.github.io/naming-things/chapters/5-overview/)

| Principle          | Demand                                                                  |
| ------------------ | ----------------------------------------------------------------------- |
| Understandability  | The name describes the concept. Readers get it quickly and remember it. |
| Conciseness        | The name uses only the words that communication needs.                  |
| Consistency        | Names and formats are uniform. One concept, one name.                   |
| Distinguishability | The name is hard to confuse with another, on the page or aloud.         |

When they conflict, consistency comes first. A split vocabulary damages the other three at once, and a consistent weak name can still be renamed. After that, a name people can tell apart beats a shorter name that could mean two things. [Tradeoffs](https://pythonidaer.github.io/naming-things/chapters/11-tradeoffs/)

These were considered and rejected as principles of their own, because each is a consequence or a synonym of the four: length, searchability, pronounceability, meaningfulness, austerity, accuracy, precision, concision. [Rejected principles](https://pythonidaer.github.io/naming-things/chapters/20-rejected-principles/)

## Understandability

A name helps the reader understand the concept efficiently: fast comprehension, easy recall. Both require an accurate description. [Chapter 6](https://pythonidaer.github.io/naming-things/chapters/6-understandability/)

1. **Describe the concept.** `bicycle` for a bicycle. Irrelevant, vague, and inaccurate words fail. [§6.2.1](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-1)
2. **Use dictionary words.** Readers already know them. Invented words cost comprehension and recall. [§6.2.2](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-2)
3. **Use problem-domain terms.** The problem (requirements, goals) is more stable than today’s solution (design, implementation). Name the problem concept, not the current mechanism. [§6.2.3](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-3)
4. **Use the standard term for domain-agnostic concepts.** Time, distance, networking, databases, and operating systems already have shared words. Use those. [§6.2.4](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-4)
5. **Pluralize correctly.** One entity is singular. A collection is plural. [§6.2.5](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-5)
6. **Use the right part of speech.**

   | Identifier | Part of speech                                  | Examples                             |
   | ---------- | ----------------------------------------------- | ------------------------------------ |
   | Class      | Noun or noun phrase                             | `User`, `PaymentMethod`              |
   | Variable   | Noun, noun phrase, or linking verb + complement | `name`, `birth_date`, `is_valid`     |
   | Method     | Verb, verb phrase, or linking verb + complement | `validate`, `delete_all`, `is_valid` |
   | Interface  | Noun, noun phrase, or adjective                 | `Parser`, `DataInput`, `Runnable`    |

   `user.validate()`, not `user.validation()`. A boolean query is `user.is_valid()` or `user.valid?()`, not `user.validate()`. [§6.2.6](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-6)

7. **Include the unit** on a measurement. A bare duration or distance is ambiguous, and the cost of guessing is higher than the cost of a longer name. [§6.2.7](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-7)
8. **Single letters only by strong convention.** `i` and `j` as indices, and a language’s equally settled letters, are fine. Otherwise use words (`user`, not `u`). Studies favor full words for comprehension and recall. Also avoid `l` and `o`, which look like `1` and `0`. [§6.2.8](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-8)
9. **Avoid abbreviations**, both truncations (`org`) and insider acronyms (`ap` for accounts payable). Widely known forms (`url`, `dns`, `id`) are fine. A very long name used constantly can justify a short form, but only after weighing understandability and consistency. If both forms exist, consistency is already broken. [§6.2.9](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-9)
10. **Avoid uncommon symbolic names.** `+`, `-`, and `==` are shared. A decorative operator name is not. [§6.2.10](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-10)
11. **Avoid cleverness.** A joke in a method that strips bullets, or a reference that only the author enjoys, ages immediately. [§6.2.11](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-11)
12. **Avoid temporary or irrelevant concepts.** Naming a process-killer after an album title ties the method to something that is not the concept. [§6.2.12](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-12)
13. **Know the audience.** In a music app, `valence` is the industry word and `positivity` is the plain one. Use the industry word when the readers know it and it carries extra meaning. Use the plain word when every new reader would have to be taught. Teaching can be worth it. Choose it on purpose. [§6.2.13](https://pythonidaer.github.io/naming-things/chapters/6-understandability/#section-6-2-13)

## Conciseness

Long names cost space on the screen, space in memory, and time in speech. Recall drops as the number of words grows. [Chapter 7](https://pythonidaer.github.io/naming-things/chapters/7-conciseness/)

1. **Use the level of abstraction the audience needs.** Too specific: `validated_total_sales_per_day_and_account_dataset`. Too generic: `data`. The right rung depends on who is reading. A cow’s owner says “Bessie.” The company says “livestock.” Do not include facts this reader does not need, and do not hide the facts they do. [§7.2.1](https://pythonidaer.github.io/naming-things/chapters/7-conciseness/#section-7-2-1)
2. **Use words that carry a lot of meaning per letter.** `Album` beats `SongCollection` when that is the domain concept. `Subtask` beats `ChildTask`. Replace an overused `get` with `find`, `fetch`, `generate`, `calculate`, or `load`, and keep each verb’s meaning stable. For a method that normalizes a phone number by stripping whitespace, `format` states the intent. `strip` and `trim_whitespace` state the mechanism. `process` states nothing. [§7.2.2](https://pythonidaer.github.io/naming-things/chapters/7-conciseness/#section-7-2-2)
3. **Omit metadata** the surrounding code already shows: `first_name`, not `first_name_string`. `people`, not `people_array`. An interface does not need an `Interface` suffix, just as a class does not need `Class`. Exception: in a dynamically typed spot, a type word can separate two neighbors, such as `location_text` beside a geocoded `Location`. [§7.2.3](https://pythonidaer.github.io/naming-things/chapters/7-conciseness/#section-7-2-3)
4. **Omit implementation details.** Name the result for the caller. Parallel CSV processing is `process_rows`, with parallelism as an argument, not a family of methods whose names grow every time an option appears. [§7.2.4](https://pythonidaer.github.io/naming-things/chapters/7-conciseness/#section-7-2-4)
5. **Omit unnecessary words.** `delete`, not `delete_now`, unless a non-immediate delete exists and readers need the contrast. [§7.2.5](https://pythonidaer.github.io/naming-things/chapters/7-conciseness/#section-7-2-5)

## Consistency

Uniform, predictable names. Three parts: one name per concept, similar names for similar concepts, similar formats for similar names. [Chapter 8](https://pythonidaer.github.io/naming-things/chapters/8-consistency/)

1. **Obey the popular convention** of the language and framework. Readers and tools already expect it. [§8.2.1](https://pythonidaer.github.io/naming-things/chapters/8-consistency/#section-8-2-1)
2. **Avoid synonyms.** `user` and `end_user` may not name the same concept. A fact that appears in several places keeps one name, such as `first_name` everywhere. [§8.2.2](https://pythonidaer.github.io/naming-things/chapters/8-consistency/#section-8-2-2)
3. **Avoid abbreviations** here too. The understandability rule and this one fail together when `org` and `organization` both appear. [§8.2.3](https://pythonidaer.github.io/naming-things/chapters/8-consistency/#section-8-2-3)
4. **Use similar names for similar concepts.** Model classes share a pattern. Resource readers share a pattern. If one is `OrderFetcher`, the next is `InvoiceFetcher`. Under camel case, acronyms go all one way: `XmlParser` with `HtmlParser`, or `XMLParser` with `HTMLParser`. [§8.2.4](https://pythonidaer.github.io/naming-things/chapters/8-consistency/#section-8-2-4)
5. **Use consistent antonyms.** Generic opposites should be the common pair, and a shared root is better when meanings match (`connect` / `disconnect`). The working list is [common-antonyms.md](common-antonyms.md). [§8.2.5](https://pythonidaer.github.io/naming-things/chapters/8-consistency/#section-8-2-5)

## Distinguishability

High comprehension and recall require a name that does not have several meanings and is not easy to mix up with another name. Confusion while reading and confusion while speaking are the same failure. [Chapter 9](https://pythonidaer.github.io/naming-things/chapters/9-distinguishability/)

1. **Avoid homographs and near-homographs.** Same spelling, different meanings, or spellings close enough to misread. `check` can mean inspect or a bank draft. Lookalike characters (`0`/`O`, `1`/`l`/`I`) are listed in [Visually similar characters](https://pythonidaer.github.io/naming-things/chapters/19-visually-similar-characters/). [§9.2.1](https://pythonidaer.github.io/naming-things/chapters/9-distinguishability/#section-9-2-1)
2. **Avoid homophones and near-homophones.** Different spelling, same or similar sound (`whole` / `hole`). They collide in conversation. [§9.2.2](https://pythonidaer.github.io/naming-things/chapters/9-distinguishability/#section-9-2-2)
3. **Avoid polysemes.** One word, several related senses. `book` can be the work, the edition, or the copy. Pick a term for the sense you mean. [§9.2.3](https://pythonidaer.github.io/naming-things/chapters/9-distinguishability/#section-9-2-3)
4. **Avoid words with a separate technical and everyday meaning** when both are live in the domain. `class` is a type, a course, and a cohort. Where the technical word is unavoidable in code, do not also use it for the everyday concept. [§9.2.4](https://pythonidaer.github.io/naming-things/chapters/9-distinguishability/#section-9-2-4)

## How to break a tie

[Chapter 11](https://pythonidaer.github.io/naming-things/chapters/11-tradeoffs/)

- **Consistency vs. the rest.** Inconsistency removes the one-to-one map (understandability), guarantees that one of the names is not the shortest accurate one (conciseness), and produces either one word for two concepts or two similar words for one (distinguishability). If the vocabulary is consistent, a remaining flaw can be fixed with a rename. [§11.2](https://pythonidaer.github.io/naming-things/chapters/11-tradeoffs/#section-11-2)
- **Understandability vs. conciseness.** `email` vs. `email_address`, `name` vs. `full_name`, `users_deactivated_in_last_10_days` vs. `users_deactivated_recently`. Distinguishability is the tiebreak: if `email` also means the message, `email_address` wins. A name used on a huge number of lines can justify the shorter unambiguous form. A one-off next to other windows (10 days and 30 days) should stay specific. [§11.3](https://pythonidaer.github.io/naming-things/chapters/11-tradeoffs/#section-11-3)
- **Understandability vs. distinguishability.** The most common domain word can still be the wrong identifier when its senses collide. Popularity does not rescue a polyseme. [§11.4](https://pythonidaer.github.io/naming-things/chapters/11-tradeoffs/#section-11-4)
- **Conciseness vs. distinguishability.** `book` looks shorter than `literary_work` and fails to say which book-sense it is, so it is not actually concise. Do not shorten a name into ambiguity. [§11.5](https://pythonidaer.github.io/naming-things/chapters/11-tradeoffs/#section-11-5)

## Identifier types

Conventions differ by language. What travels is the part of speech and applying one pattern consistently. [Chapter 12](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/)

- **Classes** are singular nouns. A verb name claims the instance is an action. Calling methods on `ValidateUser` also stacks two verbs while only one action happens. Prefer `UserValidator`. Acronym casing stays consistent across classes. [§12.2](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-2)
- **Variables** are nouns, with the boolean exception below. [§12.3](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-3)
- **Booleans** say true or false in the name: `is_complete`, `has_admin_access`, or `complete?`. `error` sounds like an exception object. `status` sounds like a string or enum. [§12.3.1](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-3-1)
- **Collections** are plural and do not say `list` or `array`. [§12.3.2](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-3-2)
- **Maps** name key then value: `user_id_to_user` or `user_ids_users`. `users_by_id` is acceptable and slightly worse because the words are not in key-value order. This matters most where types are not visible. [§12.3.3](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-3-3)
- **Methods** are verbs, except boolean queries. The name is the behavior. Several behaviors in one method are a single-responsibility question first. Side effects belong in the name: `find_user` does not also update the user. Methods change often, so the conciseness/understandability balance is sharpest here. [§12.4](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-4)
- **Arguments** tell the caller what to pass. Single-letter parameters fail that. Unused but required arguments follow the language’s blank-name convention. [§12.5](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-5)
- **Interfaces** are nouns or adjectives. Use one of `-able` (`Writable`) or `Can` (`CanWrite`). Abstraction level and consistency matter more than the local fashion. [§12.6](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-6)
- **Constants** follow the language, often `MAX_FILE_SIZE_IN_BYTES`. Do not double the underscores unless that community does. [§12.7](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-7)
- **Packages, modules, and namespaces** vary too widely, from literal (`configparsing`) to figurative (`zeus`), and sit outside this scope. [§12.8](https://pythonidaer.github.io/naming-things/chapters/12-identifier-types/#section-12-8)

## Using the principles on a team

- A **style guide** plus a linter is the best mechanical consistency tool. Adopt a popular guide for the language and run it locally, in review, and in CI. Linters only cover the rules that can be checked. The rest of this list is still a human review. [Style guides](https://pythonidaer.github.io/naming-things/chapters/13-style-guides/)
- A **controlled vocabulary** is the agreed word for each domain concept, in code and in speech. Domain-driven design calls the same idea ubiquitous language. [Controlled vocabularies](https://pythonidaer.github.io/naming-things/chapters/14-controlled-vocabularies/)
- To find a **domain name**: look at how companies and standards bodies in that field already speak, ask a domain expert (product, marketing, and content people often know the public word), then ask a teammate who will have to read it. A few minutes of asking catches names that are clear only to the author. [Domain-specific names](https://pythonidaer.github.io/naming-things/chapters/16-domain-specific-names/)
- **Renames** are normal. Concepts get named before they are understood, then the word spreads. A bad name is debt. Interest is the ongoing tax: slower reading, weaker recall, awkward conversation. Principal is the cost to pay it down: choose the new name, align stakeholders, edit the uses. Rename everywhere you can. A partial rename gives up the consistency benefit, and that loss is worse when the old and new areas are read together. For a non-trivial rename, write scope, stakeholders, the new name, interest, and principal, and approve it the way the team approves other design changes. A list of costs already paid makes the case concrete. [Renaming](https://pythonidaer.github.io/naming-things/chapters/15-renaming/)
- **Skill** starts on the next small name you introduce, and on useful feedback in review. Keep learning the domain’s own vocabulary. Raise naming disagreements early. Teams get better when the problem is shared. [Developing naming skills](https://pythonidaer.github.io/naming-things/chapters/17-developing-naming-skills/)

## Where the rules live

| Rule file                                     | Covers                                |
| --------------------------------------------- | ------------------------------------- |
| `.cursor/rules/naming-principles.mdc`         | The four principles and their order   |
| `.cursor/rules/naming-understandability.mdc`  | Chapter 6                             |
| `.cursor/rules/naming-conciseness.mdc`        | Chapter 7                             |
| `.cursor/rules/naming-consistency.mdc`        | Chapter 8, including the antonym list |
| `.cursor/rules/naming-distinguishability.mdc` | Chapter 9                             |
| `.cursor/rules/naming-identifiers.mdc`        | Chapter 12                            |
| `.cursor/rules/naming-tradeoffs.mdc`          | Chapter 11                            |
| `.cursor/rules/naming-practice.mdc`           | Chapters 13–17                        |
