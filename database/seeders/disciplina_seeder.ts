import Disciplina from '#models/disciplina'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Disciplina.createMany([
      { nome: 'Geografia', professorId: 1}
    ])
  }
}