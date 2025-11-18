import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'presencas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('aluno_id')
        .unsigned()
        .references('alunos.id')
        .onDelete('CASCADE')
      table
        .integer('aula_id')
        .unsigned()
        .references('aulas.id')
        .onDelete('CASCADE')
      table.boolean('presente').defaultTo(false)
      table.timestamps(true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
