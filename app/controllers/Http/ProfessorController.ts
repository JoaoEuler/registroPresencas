import Professor from '#models/professor'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfessoresController {
  async index() {
    return await Professor.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['nome', 'email'])
    return await Professor.create(data)
  }

  async show({ params }: HttpContext) {
    return await Professor.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const professor = await Professor.findOrFail(params.id)
    professor.merge(request.only(['nome', 'email', 'matricula']))
    await professor.save()
    return professor
  }

  async destroy({ params }: HttpContext) {
    const professor = await Professor.findOrFail(params.id)
    await professor.delete()
  }
}
