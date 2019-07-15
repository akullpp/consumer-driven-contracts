# Consumer-driven Contracts

Contains the consumer-driven contract tests against the [JSONPlaceholder API](https://jsonplaceholder.typicode.com).

## Usage

Install dependencies:

```bash
npm i
```

Run tests:

```bash
npm test
```

## Development

### Contracts

Create the contracts in `test/helper/contracts` which exports an object with the `request` and `schema` keys.

#### Requests

The value for the request can be provided by [faker](https://github.com/marak/Faker.js/).

#### Responses

The validation of the response can be done with [Joi](https://github.com/hapijs/joi).
