import fs from 'fs'
import faker from 'faker'
import _ from 'underscore'
import { Factory } from 'rosie'

type TODO = {
  id: number;
  title: string;
  completed: boolean;
}

interface DB {
  todos: TODO[]
}

let db: DB = {
  todos: [{ id: 0, title: "", completed: true }]
}

Factory.define('todo')
  .sequence('id')
  .attr('title', () => { return faker.lorem.sentence() })
  .attr('completed', () => { return _.random(1) ? true : false })

function seed() {
  _(20).times(() => {
    const todo: TODO = Factory.build('todo')
    console.log("todo: ", todo)
    db.todos.push(todo)
  })
  fs.writeFileSync('db.json', JSON.stringify(db, null, 2))
}

seed();