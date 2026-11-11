'use strict';

const roadmapGroups = [
  {
    id: 'read', title: 'Read the chapters',
    definition: 'Start with the book’s four naming principles and see how they apply to different identifiers.',
    example: 'Understandability, conciseness, consistency, and distinguishability.',
    exercise: 'Pick an identifier from your own code and consider it against each principle.',
    url: '/naming-things/chapters/5-overview/', linkLabel: 'Read the principles overview',
    terms: [
      {id: 'principles', title: 'Naming principles', definition: 'Use the four principles to describe what makes a name effective.', example: 'A team can consistently use “meeting” for the same domain concept.', exercise: 'Find two different words your code uses for the same concept.', url: '/naming-things/chapters/8-consistency/', linkLabel: 'Read Consistency'},
      {id: 'identifiers', title: 'Identifier types', definition: 'Consider whether a name describes a value, an entity, or an action.', example: 'Compare a class name with the method that changes one of its values.', exercise: 'Review one class, one collection, and one method name.', url: '/naming-things/chapters/12-identifier-types/', linkLabel: 'Read Identifier types'}
    ]
  },
  {
    id: 'review', title: 'Review the content',
    definition: 'Compare the extracted chapters with the PDF before using them as a source for rules.',
    example: 'Check that an antonym pair stays in the same table row.',
    exercise: 'Review one section for paragraph breaks, examples, and cross-references.',
    url: '/naming-things/chapters/18-common-antonyms/', linkLabel: 'Review Common antonyms',
    terms: [
      {id: 'examples', title: 'Code examples', definition: 'Check that each example keeps its code formatting and intended comparison.', example: 'Preserve the distinction between singular and plural identifiers.', exercise: 'Compare one pair of code examples with the PDF.', url: '/naming-things/chapters/6-understandability/', linkLabel: 'Review Understandability'},
      {id: 'appendix', title: 'Appendix tables', definition: 'Review the tables row by row so related entries stay together.', example: 'The entry for “construct” pairs with “destruct.”', exercise: 'Check a few rows at each original PDF page break.', url: '/naming-things/chapters/18-common-antonyms/', linkLabel: 'Review the antonym table'}
    ]
  },
  {
    id: 'draft', title: 'Draft concise rules',
    definition: 'Write one naming decision per rule. Keep its scope and source nearby.',
    example: 'Include a unit when a measurement would otherwise be ambiguous.',
    exercise: 'Draft one rule and add a short example that shows when it applies.',
    url: '/naming-things/chapters/6-understandability/#section-6-2-7', linkLabel: 'Read Include units in measurements',
    terms: [
      {id: 'scope', title: 'Scope and exceptions', definition: 'Say when a rule applies and identify cases that call for judgment.', example: 'The right level of detail depends on the context where readers see a name.', exercise: 'Add a condition to one of your draft rules.', url: '/naming-things/chapters/7-conciseness/', linkLabel: 'Read Conciseness'},
      {id: 'sources', title: 'Chapter references', definition: 'Link each rule to the chapter or section that informed it.', example: 'A rule about similar-looking names can cite Distinguishability.', exercise: 'Link a draft rule to a specific chapter section.', url: '/naming-things/chapters/9-distinguishability/', linkLabel: 'Read Distinguishability'}
    ]
  },
  {
    id: 'test', title: 'Reconcile and test',
    definition: 'Combine overlapping rules and try them against real naming decisions.',
    example: 'A shorter name may work when surrounding code supplies the missing context.',
    exercise: 'Compare two names for the same identifier and explain the tradeoff.',
    url: '/naming-things/chapters/11-tradeoffs/', linkLabel: 'Read Tradeoffs',
    terms: [
      {id: 'overlap', title: 'Overlapping rules', definition: 'Combine rules that describe the same decision and keep differences in scope.', example: 'Two rules about consistent vocabulary may belong under one shared instruction.', exercise: 'Find two drafts that recommend the same change.', url: '/naming-things/chapters/8-consistency/', linkLabel: 'Read Consistency'},
      {id: 'renames', title: 'Practice a rename', definition: 'Use an actual rename to see if a rule leads to a clearer identifier.', example: 'Check callers before changing a shared name.', exercise: 'Pick one local identifier and explain why the proposed replacement helps.', url: '/naming-things/chapters/15-renaming/', linkLabel: 'Read Renaming'}
    ]
  },
  {
    id: 'guide', title: 'Build a learning guide',
    definition: 'Connect the reviewed rules with the chapters, examples, and practice that explain them.',
    example: 'A guide about collection names can link to pluralization and identifier types.',
    exercise: 'Choose one reviewed rule and link it to a short practice task.',
    url: '/naming-things/chapters/17-developing-naming-skills/', linkLabel: 'Read Developing naming skills',
    terms: [
      {id: 'style', title: 'Style guide', definition: 'Document the conventions the project has agreed to apply.', example: 'Capture a project’s preferred naming pattern for boolean values.', exercise: 'Write down a convention that would help reviewers make consistent decisions.', url: '/naming-things/chapters/13-style-guides/', linkLabel: 'Read Style guides'},
      {id: 'vocabulary', title: 'Shared vocabulary', definition: 'Record the terms that should carry the same meaning throughout the project.', example: 'Use one domain term for the same kind of appointment across the codebase.', exercise: 'Choose one domain concept and list the terms your project currently uses.', url: '/naming-things/chapters/14-controlled-vocabularies/', linkLabel: 'Read Controlled vocabularies'}
    ]
  }
];
