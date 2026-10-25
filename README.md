# Exercise 1 – Simple CRUD Users List with useState

## Run the project

```bash
npm install
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

## Features

- Fetches users from `https://jsonplaceholder.typicode.com/users` and stores them as a simple array in `useState`
- Add a new user with a simple form (name and email only)
- Delete a user with the "Delete" button next to each user
- Users are managed entirely with `useState` (no edit/search, as stated in the exercise)

## Project structure

```
src/
├── main.jsx
├── App/
│   ├── index.jsx
│   └── app.module.scss
├── components/
│   ├── Message/      (index.jsx, message.module.scss)
│   ├── UserForm/     (index.jsx, userForm.module.scss)
│   ├── UserItem/     (index.jsx, userItem.module.scss)
│   └── UserList/     (index.jsx, userList.module.scss)
├── services/
│   └── usersApi.js
└── styles/
    ├── _variables.scss
    └── global.scss
```
