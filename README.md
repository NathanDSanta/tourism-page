# Tourism Promotion Web Page project

## WireFrame 
My webpage has a very simple design, with only a window and no scrolling content.
It has images for the activities you can do, some background music that you can pause,
and a big video "window" with some places in Banyoles, my town.

## Multimedia elements

### Video
The main attraction of this webpage is the video. It is a 4:3 video with a custom svg mask
that makes it look slightly more attractive with inverted border radius and notches. It has
an increased saturation so it doesn't seem so 'dead'.

### Photos
For the attractions in my town, there are 4 photos in a static carrousel (the intention was,
if the attractions don't fit, make it a carrousel, but there aren't many things to do in 
Banyoles, so in the end everything fit). Every photo has a link to the location of the place
on the map.

### Audio
There is some background music that you can pause with the button at the bottom left of the page.
It auto plays on opening the webpage, but that feature might not work depending on the browser.

## Development Process
First, was the design. Which is heavily inspired by someone's own idea on Instagram I saw a couple
weeks ago. But it is very adapted to my use case, and most items are different because I had different
information to work with.

After the design, I made a basic structure with empty files to organize my future code and to keep it tidy.
To make easier the importing of css styles, I chose to have them adjacent to the .jsx files. Also, I chose
to have almost every element on its own file, even if, technically, might not have been a component. This
choice was also heavily influenced by the fact that I used a grid to place the items on the webpage, so 
I could have every element in its own div and then place that div wherever on the grid I wanted. This also
makes it more modular.

When it came to code the webpage, first I added the video with the mask, since it is the biggest element and
everything else revolves around it. After that, I added the Discover More button on the top left, which link
to the Banyoles tourism office's webpage. Then, I added the 'carrousel' with the activities you can do. And,
in the end, I added the text, and the music (with the button).

As for the usage of AI, it has only been used to search through css documentation (mainly sintax) since I often
forget small things (like `:hover` or `::hover`, the order of parameters for `box-shadow`, etc).

## Instruction to local run the website

First clone the repo and enter:
```bash
    git clone https://github.com/NathanDSanta/tourism-page
    cd tourism-page
```

Then install the modules needed and run the webpage: 
```bash
    npm install
    npm start
```

Now a Browser window should open with the webpage

## Access the Webpage

In this repository:
[Github](https://github.com/NathanDSanta/tourism-page)

Or at the published version on Github Pages:
[Pages](https://nathandsanta.github.io/tourism-page)
