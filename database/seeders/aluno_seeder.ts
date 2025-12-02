import Aluno from '#models/aluno'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Aluno.createMany([
      //{ nome: 'Maria', matricula: '20253', email: 'maria@aluno.com' },
    ])
  }
}