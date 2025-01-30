import { Database } from 'bun:sqlite'

const db = new Database(process.env.DB_PATH ?? ':memory:')

export { db }
