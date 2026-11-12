# PTElove 

A PTE study app that I am building manually, one feature at a time. 

## Current stage
Local Vocab Learning implementation with one RS/WFD wordbook. 

## First learning flow 

Study a small vocab book for PTE RS and WFD preparation. See a word and its pronunciation guide (UK), listen to the word, and move to the next entry. 

## First feature 

- One PTE vocab book. 
- Word and pronunciation display. 
- Listen control. 
- Previous and Next controls. 
- Current item position. 

## Planned extension 

Vocab Typing Practice will reuse the same wordbook for listening and answer checking. 

## Project organization 

Keep practice screens, wordbook loading, audio and study data separate. Add new modules step by step. 

## Running the app 

Requires Node.js compatible with the installed Vite version, and npm

From the project root, install the locked dependencies on a fresh checkout:


```sh
npm ci 
```

Start the development server:
```sh 
npm run dev 
```

Open the Local URL printed in the terminal. Stop the server with Control-C

Build and inspect the saved application locally:

```sh 
npm run build 
npm run preview 
```

Preview serves the existing build. Rebuild after source changes.

The starter book is `public/data/rs-wfd.json`
Listen uses browser speech and requests UK English.

Available voices depend on the browser and operating system. 

## Design 

[View the Vocab Learning design](docs/design/vocab-learning.md)