import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo} from '@adonisjs/lucid/orm'
import Professor from './professor.js'

export default class Disciplina extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare professorId: number

  @belongsTo(() => Professor)
  public professor: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
