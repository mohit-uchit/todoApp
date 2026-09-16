A Todo is simply one task that you want to keep in your database.
A schema defines the structure of your Todo.

Todos
-title -string
-description -string
-status -pending | in progress | completed
-priority -number
-due date -date
-tags -array

timestamps
-createdAt -date
-updatedAt -date



Model
schema => model (provides interface for interacting with the database) => MongoDb collection


todoSchema = {
    title : { type : String, length : 100, required : true },
    description : { type : String, required : true }
}

Todo = mongoose.model('Todo', todoSchema)

Todo.create()
Todo.find()
Todo.findById()
Todo.findByIdAndUpdate()

Javascript => Mongoose Model => Moongoose Query => MongoDb Driver => mongodb server => return result => cursor


ORM(Object Relational Mapping) => ODM(Object Document Mapping)

ODM (Object Document Mapping) is a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

Schema
  ↓
Defines Todo structure
  ↓
Model
  ↓
Provides methods to interact with DB
  ↓
MongoDB Collection
  ↓
Stores Todo documents
  ↓
Mongoose Methods
  ↓
┌──────────────┬────────────┬────────────────────┐
│              │            │                    │
▼              ▼            ▼                    ▼
create()      find()      findById()      findByIdAndUpdate()
  │              │            │                    │
  ▼              ▼            ▼                    ▼
CREATE          READ        READ ONE              UPDATE



                  ┌──────────────────────────┐
                  │       TODO SCHEMA        │
                  │                          │
                  │ title                    │
                  │ description              │
                  │ status                   │
                  │ priority                 │
                  │ dueDate                  │
                  │ tags                     │
                  │ createdAt / updatedAt    │
                  └────────────┬─────────────┘
                               │
                               ▼
                  ┌──────────────────────────┐
                  │       TODO MODEL         │
                  │                          │
                  │ mongoose.model(          │
                  │   "Todo", todoSchema     │
                  │ )                        │
                  └────────────┬─────────────┘
                               │
                               ▼
                  ┌──────────────────────────┐
                  │    MONGODB COLLECTION    │
                  │                          │
                  │          todos           │
                  │                          │
                  │  ┌────────────────────┐  │
                  │  │ Todo Document      │  │
                  │  │ _id                │  │
                  │  │ title              │  │
                  │  │ description        │  │
                  │  │ status             │  │
                  │  │ priority           │  │
                  │  │ dueDate            │  │
                  │  │ tags               │  │
                  │  │ createdAt          │  │
                  │  │ updatedAt          │  │
                  │  └────────────────────┘  │
                  └────────────┬─────────────┘
                               │
                               ▼
                  ┌──────────────────────────┐
                  │     MONGOOSE METHODS     │
                  └────────────┬─────────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       ┌───────────┐      ┌───────────┐    ┌─────────────────┐
       │Todo.create│      │ Todo.find │    │Todo.findById    │
       │           │      │           │    │                 │
       │  CREATE   │      │   READ    │    │   READ ONE      │
       └─────┬─────┘      └─────┬─────┘    └────────┬────────┘
             │                  │                    │
             └──────────────────┼────────────────────┘
                                │
                                ▼
                      ┌─────────────────────┐
                      │ Todo.findByIdAnd     │
                      │ Update()             │
                      │                     │
                      │       UPDATE        │
                      └──────────┬──────────┘
                                 │
                                 ▼
                      ┌─────────────────────┐
                      │   MongoDB saves /   │
                      │   returns the data  │
                      └─────────────────────┘






Get => /api/todos => Todo.find() => returns all todos

1. / todos
2. ?staus=completed
3. ?priority=1
4. ?search=node.js
5. ?sort= -createdAt (descending) or ?sort=createdAt (ascending
6. pagination => ?page=1&limit=10)




