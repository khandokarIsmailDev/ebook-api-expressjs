# Api Intial setup


- node init 
```js
npm init -y
```

- set typescript 
```js
npm i -D typescript ts-node nodemon @types/node
```

- after install ts config file setup
```js
npx tsc --init
```

- add dev script in `package.json`
```js
"dev":"nodemon server.ts"
```

- add eslint config
```js
npm init @eslint/config
```

- add .gitignore
  - er jonno gitignore name extention install korte hobe. `ctrl+shift+p` dile `add gitignore` suggestion click kore `node ..` slelet kore entry dile auto generate hoye jabe

- install eslint in vs code

- `format on save` vs code setting on kore dite hobe tahole `pretties` save korar por auto pretify hoye jabe


- crate a `.prettierrc.json` file in the root of the project 
```js
{"tabwidth":2}
```

- configure server ts file


- Install dependencies 
```js
npm i express 
npm i -D @types/express
```

- install `dotenv` 
```js
npm i dotenv
npm i -D @types/dotenv
```

- create `config.ts` file

- install mongoose 
```js
npm i mongoose
npm i -D @types/mongoose
```


- Setup Error handling 
```js
npm i http-errors
npm i -D @types/http-errors


# HTTP response status codes

- https://developer.mozilla.org/en-US/docs/Web/HTTP/Status


- password hash korar jonno bcrypt package install korte hobe
```js
npm i bcrypt
npm i -D @types/bcrypt
```

- akhon token generate  korbo . er jonno jsonweb token 
```js
npm i jsonwebtoken
npm i -D @types/jsonwebtoken
```

- now user multer for upload image
```ts
npm i multer
npm i -D @types/multer
```


- cloudnary website use korbo image host korar jonno (github account diye active)
```ts
npm i cloudinary
```

