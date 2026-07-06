# namecard_OCR

Pulling data out of Namecard Images utilising opensource tools.

Using tools such as Surya as OCR with context building and Opensource AI agents to help build a free namecard extractor that is accurate and easy to use. Container support will be added in the near future.

Utilised Tools: 

<h1>Surya</h1>
Main OCR + spacial recoginition tool. Making Educated guesses on the different regions of namecards and the fileds they could be.

<h1>React</h1>
Front end handling, serialising images and handing them over to the headless backend.

<h1>Pydantic</h1>
Backend validator, safety tool and serialiser for the handover of json structs back to the frontend. General housekeeping.

<h1>FastAPI</h1>
Utilising FastAPI to setup a headless backend with the fucntionality of automatic async functions. Quick and efficient.