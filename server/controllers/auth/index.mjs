import file from "fs"
import jwt from "jsonwebtoken"

const filename = "users.json"

/**
 * Authentifie l'utilisateur et retourne le Token, ou NULL s'il n'éxiste pas
 * @param name Nom de l'utilisateur
 * @param password Mot de passe de l'utilisateur
 */
const auth = (name, password) => {
  const users = ReadFile()
  if (users) {
    let user = users.find(usr => usr.name === name && usr.password === password)
    if (user) {
      return generateAccessToken(user)
    }
  }
  return null
}

/**
 * Generation du token JWT
 * @param data Utilisatauers
 * @returns {*|null} Le token
 */
const generateAccessToken = (data) => {
  if (!data) {
    return null
  }
  delete data.password
  return jwt.sign(data, process.env.TOKEN, { expiresIn: "1800s" })
}

/**
 * Lis le fichier JSON et retourne les données parser
 * @returns {*[]|any} Liste des utilisateurs
 * @constructor
 */
const ReadFile = () => {
  let data = file.readFileSync(filename, "utf8")
  if (data === "") {
    return []
  }
  return JSON.parse(data)
}

export { auth }