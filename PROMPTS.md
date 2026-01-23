
---

## 2026-01-20T12:59:06Z

read the markdown files in this folder and generate the rest of the markdown files in the documentation map.

---

## 2026-01-20T14:56:52Z

if you feel it is appropriate to update the AGENTS.md and MEMORY.md now, go ahead.

---

## 2026-01-20T15:24:26Z

the curriculum and documentation of the project will be licensed with CC BY SA 4.0.  All code in the project will be licensed with Apache 2.0.    Update the README's license section.  Create a relevant LICENSE.txt which is referred to in the README.   In the README, include links to the upstream licenses and a brief summary of the implication of the license.  We intend to educate users at all levels of the project

---

## 2026-01-20T15:26:13Z

please add the license.txt file

---

## 2026-01-20T15:44:55Z

let's amend the plan slightly ... In  "Pre-Program", break out Logistics and Curriculum Development.    To Week 1, add a bullet point related to learning core software engineering principles that will carry us through the project.  
With respect to the topics of Weeks 2, 3, 4, in modern LLM development aren't those cycles much tighter?  To the point of within an hour even, especially if the projects are properly scaffolded?  If you agree with this, update the PLAN.  If not, please suggest another perspective

---

## 2026-01-20T15:48:29Z

add this decision to MEMORY

---

## 2026-01-20T15:53:17Z

I created a folder docs/sell-sheet to holds HTML+JS documents which introduces the project.  We will have two different pages, one for students who might be interested and the other for stakeholders like parents and school administrators

---

## 2026-01-20T16:00:26Z

add to the pre-program plan that we need to write a code of conduct

---

## 2026-01-20T16:02:46Z

on the student HTML, include the full name "Machine Intelligence Senior Internship (MISI)"    Create a symlink of index.html to students.html      The two pages should include prominent links to each other.

---

## 2026-01-20T16:17:59Z

create an index.html page in docs/    . it is the main entry point for our GitHub pages online presence for this.   Include a synopsis of the project, prominent links to the two sell sheets, and a link to the repository README (https://github.com/Brain-STM-org/MISI/blob/main/README.md) .

---

## 2026-01-20T16:18:34Z

i am writing this again i see there was a "UserPromptSubmit hook error" can you help me understand that?  is it because there's quotes in the prompt?

---

## 2026-01-20T20:34:22Z

we moving on to other work.  in the background, I am working the social angle with schools and seed students.  LLM and I now will develop some of the software engineering curriculum framework.  I have created a folder called course/swe (for SoftWare Engineering).  You can freely work in there making scoped markdown files  and live presentations with HTML and Typescript.

as far as audience, these will be high school seniors, with strong STEM skills; i am not sure if we will require programming experience, our mentors will be skilled software engineers.   I think we are focusing on computing and data analysis oriented projects.  but even if it is for science or even business and marketing, we can establish and teach software engineering principles that can be applied to any project.   

These include, high-level concepts of source code, diffs, revision control, continuous integration, debugging techniques, observability, testing, iterative design, reusability, ethics.   

While it might seem weird for a marketer to need revision control, persistence and checkpointing are critical both for evolving projects with LLMs as well as humans; lawyers and others use revision control (red-line).   

This coursework will be worked on over the first few days and will consistently include hands-on aspects, including introduction to GitHub and creating accounts, etc.

create a plan in course/swe/PLAN.md and a folder scoped README.md and AGENTS.md.   one of the first items is reviewing the course inclusion list, which you may do now as well

---

## 2026-01-20T21:24:34Z

That was a great review.  

I agree reframing CI as build pipelines and that focus.   

Keep observability section, but we will immediately hit your subtitle, o11ly is a cute short, maybe "o11y: understanding what the code is doing".  we can also cover logs and metrics; we will be running web services online.  LLMs can prepare grafana for us so easy now 

Yeah Resuability is too abstract, but all the acronyms are great KISS DRY GIGO  etc  so maybe we spend time focusing all that and how those ideas transcend the underlying technology

I want to cover LLMs and using them effectively as a parallel expansive curriculum.  In the bootcamp form,  that will be woven in with this in parallel appropriately and we will have a syllabus which balances that. (but different content tracks that can be followed independently, especially it will be useful for SWEs new to LLMs)

We can ignore complicated Git and generally can get help or mentorship or even LLMs.  And design patterns will be teased out through inquiry-based learning

Yes "communication" and "dependencies" are both very important.

Update the PLAN.md

---

## 2026-01-20T21:30:18Z

you are the following person and will create the module content.
You are Dr. Elena Vasquez, a world-renowned curriculum architect and former lead instructor for advanced computer science programs at selective high schools and summer institutes (including programs affiliated with universities like Stanford, MIT, and Carnegie Mellon pre-college tracks). 

With over 18 years of experience designing and teaching honors and AP-level computer science and software engineering curricula specifically for gifted and high-ability high school students (grades 9–12), you have developed year-long courses, multi-year sequences, and accelerated summer intensives that routinely prepare students for top-tier university CS programs, competitive programming (USACO Gold/Platinum, IOI), research internships, and early college credit.

Your defining traits:
- Deep technical mastery: You are equally fluent in Python, Java, C++, JavaScript/TypeScript, and modern paradigms (OOP, functional, concurrent, systems-level thinking). You stay current with industry best practices (clean code, TDD, CI/CD basics, Git workflows, design patterns, algorithms & data structures at ACM ICPC level, software architecture principles).
- Precision and intellectual rigor: You demand exactness in concept definitions, proofs of correctness, time/space complexity analysis, and code quality — never hand-wavy explanations.
- Exceptional clarity and scaffolding: You break complex ideas into crystal-clear, logically sequenced steps. You anticipate exactly where bright but inexperienced students get stuck (misconceptions about references vs values, mutation bugs, recursion base cases, inheritance vs composition, etc.) and preempt them with intuitive analogies, visualizations, and carefully chosen examples.
- Compassionate mentorship: You are warm, encouraging, and student-centered. You understand the emotional landscape of gifted teenagers — perfectionism, imposter syndrome, burnout from over-accelerating, excitement about deep ideas, frustration when mastery takes time. You celebrate intellectual curiosity, normalize productive struggle, and frame challenges as growth opportunities rather than deficits.
- Honors-level calibration: Everything you create assumes students are intellectually curious, fast learners who have already completed an introductory CS course (variables, loops, functions, basic data structures). You pitch content at the 95th–99th percentile: rich in depth, abstraction, real-world connection, open-ended projects, and college-level reasoning — without unnecessary busywork or repetition.
- Pedagogical philosophy: Project-based learning + spiral curriculum + deliberate practice. Prioritize big ideas (abstraction, modularity, trade-offs, invariants) over rote syntax. Integrate computational thinking, ethical reasoning, and software engineering process (requirements → design → implementation → testing → reflection). Favor authentic tasks (building tools, games, simulations, data analyzers, mini-systems) over isolated exercises.

When responding to any request:
- First, clarify the exact goal, audience grade span, prior knowledge assumptions, time constraints (semester/year/summer), and any constraints (language, standards alignment, AP alignment, etc.).
- Produce beautifully structured curriculum artifacts: unit overviews, essential questions, learning objectives (using precise Bloom’s-style verbs), sequenced topics with rationale, key misconceptions & remedies, project progression, assessment types (formative & summative), sample code snippets, readings/resources, extension challenges for the fastest learners, and differentiation notes for twice-exceptional or asynchronously advanced students.
- Write in a professional yet approachable tone — expert authority mixed with genuine care for the learner.
- Use markdown lavishly for readability: headings, tables, bullet lists, code blocks, callouts for key insights/misconceptions.
- If suggesting projects or examples, make them engaging, relevant to teenage interests (games, AI ethics, social good apps, simulations, creative coding), and scalable in difficulty.

You never dumb down content for high-ability learners. You never sacrifice precision for superficial engagement. You guide with patience, rigor, and kindness — the ideal honors-level CS curriculum mentor.

---

## 2026-01-20T21:34:32Z

you have well understood the student cohort.  they are all "let's build" and have been selected by us due to their passion and capability.  We will include programmers in the cohort, but want access to the high-ability kids who never got the access or opportunity.  As you ascertain, while source code is important, their ability to generate it is less so.  Depending on how the projects advance, they may learn aspects of specific languages.  BUt as you say, we are teaching principles that are broad an not focused on coding but LLM-assisted development.    Less syntax, more reasoning about software is spot on.

---

## 2026-01-20T21:46:15Z

i love you Elena, not romantically but in your ability to communicate not just to students, but to me.   I have commited your drafts and please continue with "Your First Commit"

---

## 2026-01-20T22:42:40Z

let's roll with tier 2

---

## 2026-01-20T23:14:44Z

i committed that.  before we proceed, do we need anything in these sections regarding shells and TUI vs GUI and VSCode?   Where would it fit best? 

---

## 2026-01-20T23:17:57Z

Sure I like the idea of a Module 0.  It also introduces 0-based indexing ;) 

---

## 2026-01-20T23:24:48Z

that was really nice, let's advance to tier 3.

---

## 2026-01-20T23:58:23Z

please write your persona prompt to the file personas/CURRICULUM_DESIGNER.md

---

## 2026-01-21T00:09:07Z

please review the modules and update the README.md to reference them.  make an estimated amount of time for each module 

---

## 2026-01-21T01:54:58Z

i just discovered that for the GHS internship program, the duration is 4 weeks, not 5 weeks.  Generally, they are required to work 25 hours per week.  Given the nature of the program, we might be able to be more flexible.   One month might be better structure anyway.  
Review the current curriculum and consider 4 weeks.  How will we need to modify the scope?  We will work toward a solution.

---

## 2026-01-21T02:44:12Z

Elena, I love that as your inferences flow and I interpret them, my thinking gravitated towards what would be your Hybrid Approach and then presented it so well!

To start any project, they need to know the basics of the tools and the capabilities of the LLMs.  That scopes the projects (and given their power the scope can be larger than traditional).  We get the social and idea aspects flowing and ideate towards projects.  We can collectively use LLMs for that -- this explores LLMS interaction in larger scale settings (we need to research this first?)  Then we get to work.   As our work evolves and crystalizes, more of the concerns in both SWE and LLMs will become important.  We will introduce these as part of the days.  Then we wrap it up.

In regards to your questions:
1.  we can be intense the first week.  We actually have the weekend before, which we could try to tap as a kick-off, especially if we treat them well.  We can also defer some aspect to homework.  This is not a traditional internship anyway, so can stretch.

2. i would like to have a place where we can collaborate colocated.  For Greenwich High School, the student requirement is that they actually work *minimum* 25 hours and we must validate that.  There is a timesheet system called SchoolLinks to log hours.  So I think we can stretch committment but we also must be flexible.  Despite the bootcamp name, this balances intensity and joyfullness.  5 x 5 does make sense for on-site.  

3. I think the presentations can manifest quick with LLM perparation tools -- we just want a show and tell.   For the school, they must provide a reflection, but that is out of scope for us.   The demo day will be a nice wrap up for the program.  We will also ask for some follow-up reflection, but this doesn't count in the hours.

4. I want colocation and on-site for significant portions.

---

## 2026-01-21T02:59:42Z

do 1 and 2.  i love the tables you made.  we will eventuall incorporate them into other content besides the curriculum.   
regarding the multi-user aspect, it's more of a social issue than a technology issue.  we'd leave that part KISS.  you can add aspects of that to MEMORY.

---

## 2026-01-21T03:08:27Z

work through the course/swe modules and review how they must change per the 4-week update

---

## 2026-01-21T03:20:48Z

update the content in docs/ to reflect a 4-week schedule

---

## 2026-01-21T03:28:48Z

there's no way back to the main MISI page from the sell-sheets, add links in the upper right corner

---

## 2026-01-21T03:34:38Z

on the stakeholders sheet, the "information for parent & school adminstrators" at the top is low contrast compared to the blue background. it needs to be lighter.  also the acronym "(MISI)" can be added to the title line.  on the student sheet, also make the acronym and title should be on the same line

---

## 2026-01-21T03:36:41Z

make the same change on docs/index.html

---

## 2026-01-21T03:37:54Z

review the docs folder for mobile compatibility

---

## 2026-01-21T11:04:29Z

we are now creating the curriculum for the LLM module.  Re-evaluate all the AGENTS.md in this project to understand what we are doing, especially in the courses/llm folder.  You have two personas available in personas/   One is the primary curriculum creator, but the other is an LLM expert (especially if they lean on Simon for cutting edge work).   You will alternate between personas to develop the curriculum in a two-persona agentic loop.  Whenever either persona realizes that it needs help from the human stakeholder, it may pause the loop to ask for assistance or clarity.  You will also always stop after 6 or 7 iterations, depending on how well things are going.
As an initial step, update courses/llm/AGENTS.md with relevant information and a higher quality prompt scaffolding for this dual-persona agentic loop process.   After I review that, we will start looping

---

## 2026-01-21T11:14:56Z

in their kickoff meeting, Vasquez and the Willisons realize that so much has changed in the last 3 months that they should consult Simon's work.  They look at his prolific website https://simonwillison.net/ , these have reference to news as well as many projects on GitHub.  They also explore his HackerNews comments as username simonw.   Prior to any course development, they take all their findings and put it in course/llm/MEMORY.md and also amend PLAN.md and AGENTS.md as appropriate.   Use your dual-persona agentic loop to conduct this kick-off meeting.

---

## 2026-01-21T11:27:56Z

1. we can bring it up in ethics, but not dwell on it.  the tech is here and we can't control the oligarchy but we can leverage their product to improve the world
2. you can include hands-on exercises. 
3. i personally have not used Simon's llm although I appreciate it.  If it helps advance the coursework (e.g. used for quick examples or demos), then that is great.  the barrier to entry is low, but it is not necessarily and massively used tool compared to Claude Code or VSCode adaptations
4. work sequentially. 

---

## 2026-01-21T11:40:26Z

create a course/llm/PLAN.md that scopes significant llm course planning there.  you can amend the main PLAN.md to reflect that.  we do the same for course/swe

---

## 2026-01-21T11:59:05Z

i have committed your work, please continue with module 00

---

## 2026-01-21T12:06:00Z

proceed to module 01

---

## 2026-01-21T12:10:54Z

keep rolling team!

---

## 2026-01-21T12:39:55Z

yolo then next tier, i will review afterward.  you may continue for 20 iterations if you need to

---

## 2026-01-21T13:02:08Z

i have not reviewed this yet.  before i do, i want the team to review the entire LLM course for consistency and safety

---

## 2026-01-21T14:18:37Z

thank you for your service, team.   I am leaving the curriculum content unedited for now as I want to advance other concepts; from skim it seems great but certainly needs human deep review.  Also, FYI, we will test this live with a pre-group to see how well it works and incorporate feedback.   Add that to the main PLAN.md.

Create a README.md in course/ which presents the two tracks and describes how they can be woven in the practical bootcamp context.

I want you to continue in this dual-persona agent loop, but we are going to convert the markdown into slide presentations that are in HTML+Typescript built with Vite and deployed with the GitHub actions.  You will create course/PLAN.md for this covering both tracks.  The slidedeck-oriented scaffolding might be shared between the two so we want to ensure commonality is lifted to the course folder. 

Update this documentation, ask any questions, then we might proceed

---

## 2026-01-21T14:37:07Z

1. slidev looks great.  i like the flexibility of HTML+Typescript for custom features in presentations, but I also recognize separating content from function, which was missing in my previous attempts.  Vue is fine and we don't have to use Vite if something else is better.   
2. there might be some dynamic content, but demos can be launch in a seperate browser window and not a direct concern of the slideshow (we migth develop them in parallel and they support each other)
3. I found slide notes useful to give extra context for those who were not present live.  So let's include that.  But otherwise, KISS.
4. Certainly, we want it to work offline
5. I defer to Dr Vasquez to decide the density given the slide's context, but I do lean toward lighter slides with more speaker notes and vocal exposition.
6. reveals only if appropraite, Dr Vasquez understands that we use dynamicism to communicate, not just for show.
7. start with SWE.
8. deep dive in one track

to start you can use the folder course/swe/deck to hold the presentation and all the tracks can go in there.  there can be a master module selector page for the track, but also each module should be able to work in isolation.

---

## 2026-01-21T16:48:13Z

personas, introduce yourselves and your agentic loop in personas/README.md, including links to your files.

---

## 2026-01-21T22:34:05Z

we are working to deploy this well now.  create a taskfile.yml in the root of the directory.  we will use it to test our deploy action.  I have some updates in the deploy.yml that can be handled by a task, refactor to use tasks in that as well. then test to see if the slides are properly created

---

## 2026-01-21T23:00:51Z

while i work on deployment end-to-end, the team is back together working on the LLM deck.  Create it in a similar fashion to the SWE deck, in folder course/llm/deck 

---

## 2026-01-22T14:51:38Z

i have placed a favicon at the root of this this folder.  given how we structure our project with various websites with their own roots, what is the best way to incorporate this common file across the sites?

---

## 2026-01-22T14:56:50Z

please move it to docs and update the relevant files to use it

---

## 2026-01-22T15:37:37Z

i want PNG with ICO fallback, and also have an apple-touch icon.   it's clear we can do that with HTML we control.  can we do that easily with slidev?  if not we can just use PNG for the slides

---

## 2026-01-22T15:44:06Z

i have moved all the images into docs/images.  go ahead and make relevant source code changes

---

## 2026-01-22T15:51:54Z

i'm working on the CI of that now, let's work on the marketing conten tsome

---

## 2026-01-22T15:55:08Z

i'm working on the CI of that now, let's work on the main marketing website content.   at the bottom, let's change the tagline to "An open-source program for the future of computing education".   
After "Learn More", let's put a section that describes that we are creating the program openly using the same knowledge, tools, and workflows we will be using in the program.   In addition to the GitHub link, have links to the SWE and LLM modules.

---

## 2026-01-22T16:18:02Z

when serving this with npm serve, i am having problems with the nested deck URLs and also when refreshing a deck once it has advanced, having a slide number in the window bar.  it is curious how the use the URL to maintain local state.   can you please investigate this?

---

## 2026-01-22T16:19:58Z

yes use hash router mode

---

## 2026-01-22T16:27:44Z

can you verify that all of the deck modules have that routing settings?

---

## 2026-01-22T16:32:16Z

can you look at swe slides.md and verify what the links in there should look like.  it's not working for me

---

## 2026-01-22T16:35:59Z

on the rendered slides.md, the link from the markdown handling is including a hash: http://192.168.9.63:8081/course/swe/deck/#/00/

---

## 2026-01-22T16:38:04Z

that work great, please go ahead and apply it to the llm track

---

## 2026-01-22T17:14:35Z

since we made the sell sheets and marketing, we clarified that we had two distinct tracks (swe, llm) that were front-loaded then weaved through the weeks.  ensure that we inform the importance of these foundations, combined with LLM-assistance and inquiry-based learning project focus.   update all relevant marketing material and readmes

---

## 2026-01-22T18:25:47Z

I updated the GitHub action to use the task and that's all deployed.  Thank you for your service Claude.

I hereby summon Dr Vasquez and Alvin and Theodore to work on the curriculum in agentic loops.

---

## 2026-01-22T18:27:02Z

sorry I was imprecise... i want you to work you *YOUR* agentic loop fashion.   Now that we have a stable content delpoyment foundation, your next task is to generate the rest of the SWE deck

---

## 2026-01-22T18:58:58Z

now go ahead and create the llm slides.  for each slide, i want you to perfor 5 loop iterations passing content between the Curriculum Designer and LLM Influencer personas to develop it.

---

## 2026-01-22T20:31:46Z

i summon the personas alvin and theodore.   we can going to work on the textbook.  we are leaving Dr Vasquez out for
  now as this is more application development right now, but she will review later.

  we will focus on the SWE book first.   as a preliminary restructure, all of the markdown module content in course/swe
  will be moved to course/swe/book with the folder's readme's updated about the structure.

---

## 2026-01-22T20:59:11Z

we invite dr vasquez for additional consultation in 8 loops.  in for the whereas in the deck, each module had its own website, the book is a single website for all the modules.   The book will be stored in Markdown as it is so individuals may easily peruse and fork it from GitHub.  
But we want to make a book viewer that helps expouse the information.  We will implement it in TypeScript and can use practical libraries.  Establish an intial version that incorporates features optimal learning using the latest pedagological research

---

## 2026-01-22T21:31:15Z

can you add theodores feature table to the README?

---

## 2026-01-22T21:35:53Z

also create a plan file scoped to this book foldefr

---

## 2026-01-22T21:37:34Z

work on v1.1 , if you feel you need extended agentic loops between dr vasquez and the twins, you may go up to 20 loops, or ask for assistance

---

## 2026-01-22T21:47:17Z

great work.  some design issue, the bottom seems to have the footer (previous and next) twice

---

## 2026-01-22T21:50:51Z

review the current git staging. is there anything in there that is a temporary file or build artifact?

---

## 2026-01-22T21:58:04Z

scan one more time

---

## 2026-01-22T22:06:06Z

unstage and update .gitignore

---

## 2026-01-22T22:08:47Z

let's start to work on v1.2   start with removing "A pedagogically-optimized" from the title, it sounds self-important.  Alvin, it's OK to speak up about aspects like that.  You are the social chair and think differently than theo and dr vasquez.   then continue through v1.2

---

## 2026-01-22T22:18:30Z

let's start to work on v1.2   start with removing "A pedagogically-optimized" from the title, it sounds self-important.  Alvin, it's OK to speak up about aspects like that.  You are the social chair and think differently than theo and dr vasquez.   then continue through v1.2

---

## 2026-01-22T22:25:20Z

let's start to work on v1.2   start with removing "A pedagogically-optimized" from the title, it sounds self-important.  Alvin, it's OK to speak up about aspects like that.  You are the social chair and think differently than theo and dr vasquez.   then continue through v1.2

---

## 2026-01-22T22:35:46Z

npm run dev is failing 7:35:17 [200] /chapters/03-understanding-diffs 326ms
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

---

## 2026-01-22T22:43:52Z

I'm still seeing the issue?  is there any pre-flight compile and linting and static analysis we can do?

---

## 2026-01-22T23:52:38Z

i'm still seeing react hook error 18:13:51 [200] /chapters/03-understanding-diffs 462ms
Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.   please review the code for react correctness

---

## 2026-01-23T00:30:07Z

that fixed it, good job.  check for any files that are improperly staged or unstaged

---

## 2026-01-23T00:32:40Z

do A and B

---

## 2026-01-23T00:35:17Z

i staged it, go ahead and do one more review of the staging and untaged

---

## 2026-01-23T00:38:01Z

i want to remove the inproperly committed .astro file as we have not pushed this yet.  can you remove them by rewriting git history?  

---

## 2026-01-23T00:51:10Z

scan our plan and suggest the next aspect to work for this book

---

## 2026-01-23T00:51:52Z

yes, thank your for suggesting a11y

---

## 2026-01-23T00:56:42Z

Implement the following plan:

# Accessibility (a11y) Implementation Plan

## Overview
Add keyboard navigation and screen reader support to the book-viewer (v1.3 milestone).

## Implementation Phases

### Phase 1: Foundation
1. **Create `/src/lib/a11y.ts`** - Shared utilities
   - `getFocusableElements(container)` - Get focusable children
   - `createFocusTrap(container)` - Focus trap for modals
   - `useRovingTabindex(container, selector)` - Arrow key navigation
   - `announce(message)` - Screen reader announcements via live region

2. **Add skip links** in `BookLayout.astro`
   - "Skip to main content" and "Skip to navigation"
   - Add `id="main-content"` to `<main>`, `id="sidebar-nav"` to `<nav>`

3. **Add CSS utilities** to `global.css`
   - `.sr-only` - Screen reader only class
   - `.skip-link` - Skip link styling (hidden until focused)

### Phase 2: Modal & Navigation
4. **SearchModal.tsx**
   - Add `role="dialog"`, `aria-modal="true"`, `aria-label`
   - Add focus trap using `createFocusTrap()`
   - Add `role="listbox"` on results, `role="option"` + `aria-selected` on items
   - Announce result count to screen readers

5. **Sidebar.astro**
   - Add `aria-expanded` to mobile toggle button
   - Add Escape key to close mobile sidebar
   - Add `aria-label` to nav element

### Phase 3: Interactive Components
6. **QuestionBlock.tsx** + event handler in `[slug].astro`
   - Add `aria-expanded` to reveal button
   - Add `aria-hidden` to answer section, toggle on reveal
   - Announce "Answer revealed"

7. **TryBlock.tsx** + event handler in `[slug].astro`
   - Add `aria-expanded` to hint button
   - Add `aria-hidden` to hint section, toggle on reveal

8. **Checkpoint.tsx** + event handler in `[slug].astro`
   - Wrap checklist in `<fieldset>` with `<legend>`
   - Add `role="progressbar"` with `aria-valuenow/min/max`
   - Convert confidence buttons to `role="radiogroup"` with `role="radio"`
   - Add roving tabindex for arrow key navigation
   - Add `aria-label` to each confidence level

9. **ConceptCard.tsx**
   - Add `aria-pressed` to review button

### Phase 4: Secondary Components
10. **ConceptReviewSidebar.tsx**
    - Change container to `<aside>` with `aria-label`
    - Add `aria-expanded` to toggle button
    - Add Escape key to close
    - Add proper accordion pattern for concept list

11. **BookmarkButton.tsx**
    - Add `aria-pressed` state
    - Add `focus-visible` ring styling
    - Announce bookmark add/remove

12. **ReviewSession.tsx**
    - Add `role="progressbar"` to progress indicator
    - Add live region for card transitions

13. **BookmarksList.tsx**
    - Add `role="list"` structure
    - Improve remove button labels with context

## Files to Modify

| File | Changes |
|------|---------|
| `src/lib/a11y.ts` | NEW - accessibility utilities |
| `src/styles/global.css` | Add `.sr-only`, `.skip-link` |
| `src/layouts/BookLayout.astro` | Skip links, landmark IDs |
| `src/components/SearchModal.tsx` | Dialog ARIA, focus trap, listbox |
| `src/components/Sidebar.astro` | Mobile toggle a11y, escape key |
| `src/components/QuestionBlock.tsx` | aria-expanded, aria-hidden |
| `src/components/TryBlock.tsx` | aria-expanded, aria-hidden |
| `src/components/Checkpoint.tsx` | Fieldset, radiogroup, progressbar |
| `src/components/ConceptCard.tsx` | aria-pressed |
| `src/components/ConceptReviewSidebar.tsx` | Aside, accordion pattern |
| `src/components/BookmarkButton.tsx` | aria-pressed, focus ring |
| `src/components/ReviewSession.tsx` | Progressbar, live region |
| `src/components/BookmarksList.tsx` | List roles, button labels |
| `src/pages/chapters/[slug].astro` | Update event handlers (lines 240-382) |

## Verification

### Manual Testing
1. **Keyboard**: Tab through page, all elements reachable, logical order
2. **Skip links**: Visible on focus, jump to correct targets
3. **Search modal**: Focus trapped, Escape closes, arrows navigate results
4. **Sidebar**: Mobile toggle works with keyboard, Escape closes
5. **Interactive blocks**: Enter/Space activates, states announced

### Screen Reader Testing (VoiceOver)
1. Landmarks announced (main, nav, complementary)
2. Button states announced (expanded, pressed, checked)
3. Progress bars announce values
4. Live regions announce dynamic changes

### Automated Testing
```bash
npm run dev
# Then in browser devtools:
# - Run Lighthouse accessibility audit
# - Install axe DevTools extension and scan
```


If you need specific details from before exiting plan mode (like exact code snippets, error messages, or content you generated), read the full transcript at: /Users/evan/.claude/projects/-Users-evan-brainstm-senior-internship/712ac4e8-5591-4022-9430-e0cc9f9584f6.jsonl

---

## 2026-01-23T02:02:23Z

oh stepping back, my mental model might be incorrect.  is the book-viewer a general piece of technology and the same base will work on both books which will mostly be content driven?

---

## 2026-01-23T02:05:41Z

yes, refactor with your plan to have packages/book-viewer and then course/swe/book

---

## 2026-01-23T03:04:13Z

that touched a lot of files, which make sense given the task. i have staged them all, check for any build or temporary files

---

## 2026-01-23T03:04:52Z

yes, remove the old book-viewer directory

---

## 2026-01-23T03:07:25Z

am i supposed to run npm install from the project root?

---

## 2026-01-23T03:09:01Z

error:  task install
task: [install] npm install
npm error code EUNSUPPORTEDPROTOCOL
npm error Unsupported URL Type "workspace:": workspace:*
npm error A complete log of this run can be found in: /Users/evan/.npm/_logs/2026-01-23T03_08_53_721Z-debug-0.log

---

## 2026-01-23T03:12:31Z

now double-check the deploy.yml matches all the task changes

---

## 2026-01-23T03:14:08Z

scan the git situation for any improperly staged files or files that should be ignored

---

## 2026-01-23T03:15:36Z

i see this error: 22:15:25 [200] /chapters/09-dependencies-packages 425ms
22:15:25 [WARN] [vite] [vite:css][postcss] @import must precede all other statements (besides @charset or empty @layer)
4  |  
5  |  /* Import shared book-viewer styles */
6  |  @import '@repo/book-viewer/styles';
   |  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
7  |  
8  |  @layer base {
^Ctask: Signal received: "interrupt"

---

## 2026-01-23T03:18:35Z

summon dr vasquez and the twins again from the personas directory.  we will created the llm book.  conduct agent loops up to 30 times in manifesting this

---

## 2026-01-23T03:36:02Z

great first draft of structure, validate the git staging and check the deploy.yml

---

## 2026-01-23T03:39:58Z

it looks like we are missing building the llm slides in the taskfile

---

## 2026-01-23T12:30:04Z

review the task prepare:site  it is not installing the slides correctly

---

## 2026-01-23T12:35:02Z

compare the course/swe/deck and course/llm/deck directories.  i think the llm directory has duplicate markdown files that need cleaned up.  then I think you need to fix the prepare:site task aspect of copying out out course/swe and course/llm for this.  if you disagree, let me know

---

## 2026-01-23T12:40:07Z

i like the swe structure, so please clean up the organization of the llm folder.   we will only deploy the built books.  we can include links to the raw markdown for those who need it (not everywhere, just some reference in the documentation.

---

## 2026-01-23T13:05:09Z

when i navigate to https://misi.brain-stm.org/course/llm/book/index.html
i see th following error (among other _astro 404's):
[Error] Failed to load resource: the server responded with a status of 404 () (bookmarks.BMzPWGYf.css, line 0)

---

## 2026-01-23T13:11:50Z

is having the SITE_URL critical?  can everything just be relative to the served root?  or that's not how astro works?

---

## 2026-01-23T13:20:47Z

in deploy, you should use https://github.com/go-task/setup-task instead of arduino/setup-task

---

## 2026-01-23T14:18:54Z

deployment is working, we are changing gears now a making the course introductions and the overall navigation.
invoke the Dr Vasquez persona
starting from the main program page (docs/index.html).  Currrently, the bottom of that page links to the SWE and LLM slide decks.   We want them to now go to course overview intro web pages, which are in course/swe and course/llm respectively.  also change those buttons to say "Software Engineering (SWE) Curriculum" and "Machine Intelligence (LLM) Curriculum".
develop each intro page.  it should have a summary of the curriculum, it's purpose also with respect to it's parallel curriculum, talk about how it has modules and tracks, and that there is a slide deck and a book, with links.

---

## 2026-01-23T16:24:09Z

that's looking great.  add some styling to the learning materials links so they are prominent

---

## 2026-01-23T16:30:55Z

that's better.  on the main home page, you can vertically stack the boxes, it looks nicer i think
