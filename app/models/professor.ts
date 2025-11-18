import { BaseModel, column} from '@adonisjs/lucid/orm'

export default class Professor extends BaseModel {
  // Define explicitamente o nome da tabela
  public static table = 'professores'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column.dateTime({ autoCreate: true })
  public createdAt: Date

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: Date
}
