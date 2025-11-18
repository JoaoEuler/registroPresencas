/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

//import Route from '@adonisjs/core/services/router'
import router from '@adonisjs/core/services/router'


router.get('/', async () => {
  return 'Registro de presenças'
})


const AlunosController = () => import('#controllers/http/AlunosController')
const ProfessoresController = () => import('#controllers/http/ProfessorController')
const DisciplinasController= () => import('#controllers/http/DisciplinasController')
const AulasController = () => import('#controllers/http/AulasController')
const PresencasController = () => import('#controllers/http/PresencasController')

router.resource('/alunos', AlunosController).apiOnly()
router.resource('/professores', ProfessoresController).apiOnly()
router.resource('/disciplinas', DisciplinasController).apiOnly()
router.resource('/aulas', AulasController).apiOnly()
router.resource('/presencas', PresencasController).apiOnly()