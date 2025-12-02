import Professor from '#models/professor'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Professor.createMany([
      //{ nome: 'Marina Silva', email: 'marinasilva@professor.com', matricula: '2025prof1' },
    ])
  }
}