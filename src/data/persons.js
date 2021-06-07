const persons = JSON.parse(localStorage.getItem("persons"))
export default persons || []

export const setPersonsToStorage= (persons)=>{
    localStorage.setItem("persons", JSON.stringify(persons))
}

export const activePersonId = localStorage.getItem("activePersonId")
export const setActivePersonToStorage = id=> localStorage.setItem("activePersonId", id)