[![Build Status](https://travis-ci.org/ruslan-polutsygan/roman-to-arabic-app.svg?branch=master)](https://travis-ci.org/ruslan-polutsygan/roman-to-arabic-app)

### Installation

1. Clone repo `git clone git@github.com:ruslan-polutsygan/roman-to-arabic-app.git`
2. Go into directory `cd roman-to-arabic-app`
3. Install dependencies `yarn install`

### Start
- `yarn start` - starts web application on `localhost:3000` via `nodemon`. 
- `PORT=2000 yarn start` - stars app on different port 

### Other
- `yarn test` - run all tests via `jest`
- `yarn lint` - run `eslint` checks and fix everything it can fix automatically

### How to use
#### Request:
```bash
curl localhost:3000/api/conversion/roman-to-arabic -X PUT -H "Content-Type: application/json" -d '{"roman":"d"}'
```
#### Response:
```json
{"arabic":500}
```

#### Negative case request:
```bash
curl localhost:3000/api/conversion/roman-to-arabic -X PUT -H "Content-Type: application/json" -d '{"roman":"blabla"}'
```
#### Response:
```json
{"code":"ERROR_BAD_INPUT"}
```

#### Bad structure request:
```bash
curl localhost:3000/api/conversion/roman-to-arabic -X PUT -H "Content-Type: application/json" -d '{"anything":"d"}'
```
#### Response:
```json
{"code":"ERROR_ROMAN_PROPERTY_MISSING"}
```
