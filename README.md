# bikelanes.wtf

> Bike lanes are not for cars.

This is a progressive web app that lets users notify the municipal government
(and other people) about cars (and other things) parked in bike lanes.

## client

This front-end is a client-side React app, so this can be deployed anywhere
you'd deploy a static website.

To run the front-end locally:

- `npm install` to install dependencies
- `npm start` to run the app on http://localhost:3000

## server

The backend is a JavaScript function that runs via Node / Serverless.

To run the backend locally:

- `npm install` to install dependencies
- `serverless offline start` to run the backend on http://localhost:4000

### Configuring Environment Variables

To use the Twitter & LocationIQ integration, you'll have to store some keys in AWS SSM.

You'll need to configure the following keys:

- CONSUMER_KEY
- CONSUMER_SECRET
- ACCESS_TOKEN_KEY
- ACCESS_TOKEN_SECRET
- LOCATIONIQ_TOKEN

You can do this using the `aws` CLI:

```
aws ssm put-parameter --name /bikelanes.wtf/<KEY> --type String --value <VALUE>
```

### Local Development

For local development, you'll need to set some environment variables.

I recommend using [`direnv`](https://github.com/direnv/direnv).

To use direnv, create a `.envrc` file in the root which contains the following:

```
export CONSUMER_KEY=<YOUR CONSUMER KEY>
export CONSUMER_SECRET=<YOUR CONSUMER SECRET>
export ACCESS_TOKEN_KEY=<YOUR ACCESS TOKEN KEY>
export ACCESS_TOKEN_SECRET=<YOUR ACCESS TOKEN SECRET>
export LOCATIONIQ_TOKEN=<YOUR LOCATIONIQ TOKEN>
```

Run `direnv allow` to allow direnv to automatically set these environment variables
when you're in this working directory.

# License

The MIT License
