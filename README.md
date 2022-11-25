# Skills Assessment Task Salvatore De Rosa

Drive IQ Technology Pty Limited
&
LoanOptions.ai

# Task 2 & 3 - API - NODE.JS - SQL

`Description TASK 3 SQL`

Given two tables ‘customer’ and ‘broker’. (Look for tables in the `./src/configs/query.sql` file)

Write an SQL query to generate a summary of
how many customers are under a particular broker. The results should be sorted from
high to low number of customers. If brokers have the same number of customers, then
sort alphabetically. The result should list the broker name followed by the customer
count. The column names are not tested, so use whatever is appropriate.


`Description TASK 2 NODE.JS`

Create a ﬁle which when executed from the command line, prints the values based on the arguments passed.

`API Endpoint:`
https://api.publicapis.org/entries

The response is a JSON object with two ﬁelds:

    ● count

    ● entries

Each record in ‘entries’ has following schema

    ● API

    ● Description

    ● Auth

    ● HTTPS

    ● Cors
    
    ● Link
    
    ● Category

Instructions:

    ● Write code inside the ﬁle which fetches data from the API and prints the values
        of ‘API’ decreasing alphabetically

    ● The ﬁle accepts two arguments ‘category’ and ‘limit’

    ● Print the results matching the ‘category’ and ‘limit’ is the number of results to
        print eg: php ﬁle.php Weather 5

    ● If no records matches the category, print ‘No results’
    
Possible values of ‘category’ passed as an argument
    ● Animals

    ● Anime
    
    ● Blockchain
    
    ● Books
    
    ● Business
    
    ● Calendar
    
    ● Weather
    
    ● Transportation
    
    ● Health
    
    ● Jobs
    
    ● Music

## Instruction to run the app through CLI

After you have cloned this repo, run `npm install` after that `npm run build` .

`dist` folder will be created.

You have 2 options:

    ● run `node ./dist/index.js [category] [limit]`
    data will be fetched depending on arguments passed

    ● run `npm start`
    questions will be prompted to retrieve [category] and [limit]
    data will be fetched

## Available Scripts

In the project directory, you can run:

### `npm run build`

Compile the Typescript code into Javascript into the `dist` folder.


### `npm start`

Runs the app in the production mode running `node ./dist/index.js` .\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.


### `npm run dev`

Runs the app in the development mode using Typescript with the script `nodemon ./src/index.ts` .\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.
