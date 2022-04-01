import jwt from 'jsonwebtoken'

// Les routes ne nécessitant pas d'être connecté
const WHITE_ROUTES = ['/auth']

const auth = (res, req, routes) => {
  // TODO: vérification de l'authentification
}