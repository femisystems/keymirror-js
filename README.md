# keymirror-js
Create mirror objects from objects, arrays or comma-separated strings with zero dependencies.

## Install
`npm install keymirror-js`

## Usage
```
const keyMirror = require('keymirror-js');
const myArr = [a, b, c]; 
const mirrored = keyMirror(myArr); // { a: 'a', b: 'b', c: 'c' }
```
### Test cases
##### Array

```
const actions = [
  'USER_LOGIN',
  'USER_LOGOUT',
  'CREATE_DOCUMENT',
  'EDIT_DOCUMENT',
  'DELETE_DOCUMENT',
  'SHARE_DOCUMENT'
];

Output
{
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGOUT: 'USER_LOGOUT',
  CREATE_DOCUMENT: 'CREATE_DOCUMENT',
  EDIT_DOCUMENT: 'EDIT_DOCUMENT',
  DELETE_DOCUMENT: 'DELETE_DOCUMENT',
  SHARE_DOCUMENT: 'SHARE_DOCUMENT'
}
```
##### Object

```
const roles = {
  ADMIN: 'admin',
  REGULAR: 'regular',
};

Output
{
  ADMIN: 'ADMIN',
  REGULAR: 'REGULAR'
}
```
##### String

```
const subscriptions = 'basic, standard, premium';

Output
{
  BASIC: 'BASIC',
  STANDARD: 'STANDARD',
  PREMIUM: 'PREMIUM'
}
```