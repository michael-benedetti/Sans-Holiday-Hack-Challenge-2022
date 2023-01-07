# Sans Holiday Hack Challenge 2022 Writeup Source

This repository houses the source used to generate my [2022 Sans Holiday Hack Challenge](https://www.sans.org/mlp/holiday-hack-challenge/) [Writeup](https://michael-benedetti.github.io/Sans-Holiday-Hack-Challenge-2022-Writeup).
It was built using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) with yarn and Typescript.

## Build for Development
Remove the `homepage` property from [package.json](package.json), and run `yarn start`.

## Build for Production
Ensure the `homepage` property points to the deployment URI, and run `yarn build`

## Add Encryption and Password
Before the challenge closeout date, the production index page was encrypted and passowrd protected with [pagecrypt](https://github.com/Greenheart/pagecrypt):

```
$ pagecrypt index.html encrypted-index.html <password> && mv encrypted-index.html index.html
```

