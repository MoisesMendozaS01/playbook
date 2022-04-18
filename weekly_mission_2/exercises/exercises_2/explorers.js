const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]
console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(Element =>console.log(Element.name))

console.log("Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(Element => console.log(Element.stack))

console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const Explorers_staks = explorers.map(Element => Element.stack)
console.log(Explorers_staks)

console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
const Js_users = explorers.filter(Element => Element.stack.includes("js"))
console.log(Js_users)

console.log("Busca el primer explorer que sea de la CDMX, usa FIND")
const user_of_cdmx = explorers.find(Element => Element.city =="CDMX")
console.log(user_of_cdmx)

console.log("Obtén la suma de todos los exercises_completed, usa REDUCE")
console.log(explorers.reduce((suma,Element)=>suma + Element.exercises_completed,0))

console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const validacion_frontend = explorers.some(Element => Element.missions.frontend.exercisesFinished === true)
console.log("Validacion de los ejercicios frontend: " + validacion_frontend) 

console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const validacion_onboarding= explorers.every(Element => Element.missions.onboarding.isFinished ===true)
console.log("validacion onboarding "+validacion_onboarding)