import Aula from '#models/aula'
import type { HttpContext } from '@adonisjs/core/http'

export default class AulasController {
  async index() {
    return await Aula.all()
  }

  async store({ request }: HttpContext) {
    const data = request.only(['disciplinaId', 'data'])
    return await Aula.create(data)
  }

  async show({ params }: HttpContext) {
    return await Aula.findOrFail(params.id)
  }

  async update({ params, request }: HttpContext) {
    const aula = await Aula.findOrFail(params.id)
    aula.merge(request.only(['disciplinaId', 'data']))
    await aula.save()
    return aula
  }

  async destroy({ params }: HttpContext) {
    const aula = await Aula.findOrFail(params.id)
    await aula.delete()
  }
}
