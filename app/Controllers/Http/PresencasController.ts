import Presenca from '#models/presenca'
import type { HttpContext } from '@adonisjs/core/http'

export default class PresencasController {
  async index() {
    return await Presenca.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['alunoId', 'aulaId', 'status'])
    return await Presenca.create(data)
  }

  async show({ params }: HttpContext) {
    return await Presenca.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const presenca = await Presenca.findOrFail(params.id)
    presenca.merge(request.only(['alunoId', 'aulaId', 'status']))
    await presenca.save()
    return presenca
  }

  async destroy({ params }: HttpContext) {
    const presenca = await Presenca.findOrFail(params.id)
    await presenca.delete()
  }
}
