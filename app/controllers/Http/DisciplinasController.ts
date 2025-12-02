import Disciplina from '#models/disciplina'
import type { HttpContext } from '@adonisjs/core/http'

export default class DisciplinasController {
  async index() {
    return await Disciplina.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'professorId'])
    return await Disciplina.create(data)
  }

  async show({ params }: HttpContext) {
    return await Disciplina.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const disciplina = await Disciplina.findOrFail(params.id)
    disciplina.merge(request.only(['nome', 'professorId']))
    await disciplina.save()
    return disciplina
  }

  async destroy({ params }: HttpContext) {
    const disciplina = await Disciplina.findOrFail(params.id)
    await disciplina.delete()
  }
}
