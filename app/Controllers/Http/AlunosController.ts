import Aluno from '#models/aluno'
import type { HttpContext } from '@adonisjs/core/http'

export default class AlunosController {
  async index() {
    return await Aluno.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'matricula', 'email'])
    return await Aluno.create(data)
  }

  async show({ params }: HttpContext) {
    return await Aluno.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const aluno = await Aluno.findOrFail(params.id)
    aluno.merge(request.only(['nome', 'email']))
    await aluno.save()
    return aluno
  }

  async destroy({ params }: HttpContext) {
    const aluno = await Aluno.findOrFail(params.id)
    await aluno.delete()
  }
}
