# gcc-knockout
Boilerplate for using Google Closure Compiler with KnockoutJS

## Installation

    git clone https://github.com/batilc1/gcc-knockout.git
    cd gcc-knockout
    npm install

## Building for Development

You will need an http-server to be able test and develop. Simplest solution is the http-server package. Http-server is quite useful so you may install it globally

    npm install http-server -g

Then just type
    
    grunt test

And the project files will be symlinked under `gcc-knockout/dist/` folder. Now run a server at that folder and everything should be good to go. 

    cd dist/
    http-server

Then switch to your favourite browser and navigate to `localhost:8080`

## Building for Production

This is where the closure compiler sugar kicks in. Run

    grunt production
    cd dist/
    http-server

Then switch to your favourite browser and navigate to `localhost:8080`

**Note:** You can also turn off `Advanced Optimization` from grunt file and do `Whitespace-only` compression. But this won't optimize your code. Use it only for testing if your code won't work because of uglification/mangling.
