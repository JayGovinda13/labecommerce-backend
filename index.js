// Ex: II

// const bananinha = "BANANINHA"

// process.argv[2] = bananinha

// console.log(process.argv[2])

// Ex: III

const parOuImparUser = process.argv[2].toLowerCase()
const numUser = process.argv[3]

const parOuImparComp = parOuImparUser.toLowerCase() === "par" ? "impar" : "par"
const numNPC = Math.floor(Math.random() * 10)

console.log(`Usuário pediu ${parOuImparUser} e lançou ${numUser}.\nComputador ficou com ${parOuImparComp} e lançou ${numNPC}`)

const resultado = (numUser + numNPC) % 2
if (resultado === 0 && parOuImparUser === "par") {
    console.log("Parabéns, você venceu! :)")
} else if (resultado === 1 && parOuImparUser === "impar") {
    console.log("Parabéns, você venceu! :)")
} else {
    console.log("Que pena! O Computador ganhou. :/")
}