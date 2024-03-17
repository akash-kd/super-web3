# Super Web 3 - Backend Task

Transaction - CRUD Task.
model transaction {
    name: string, must,
    amount: string, must,
    current: string, must,
    from_user_id: `<id>`
    to_user_id: `<id>`
}

## Tech Stack: 
1. Node : Javascript Runtime
2. Express : HTTP / HTTPs Server
3. Postgres : Database
4. Jest : Unit Testing
5. Sequelize : Object Relation Manager (ORM)


## How to run the Project ?

1. Change the `.sample.env` -> `.env`
2. npm i or pnpm i // installed the packages
3. I have customized the VS Code's `launch.json` for this Repo, using that
 we can start the project
4. hit the API with `http://localhost:8080/` -> Response with `Hello World`


## Time Constrains:
1. Couldnt name function properly.
2. Couldnt write more test cases.
3. We could write more functionalities.