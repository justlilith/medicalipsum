const regex = new RegExp(/\w+/g)

const loremBeginning = "Lorem ipsum dolor sit amet"

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const medicalTerms = "arm palate dorsal ventricular phalanges humerus tibia fibula HIPAA insurance ERA x12 carpal metacarpal tarsal metatarsal benign malignant cleft hydro nervous CNS impulse dental fricative voluminous cannula intravenous IV solar clavicular areolae pancreatic"

const medicalPhrases = "can be intubated, should reflect, compared to, data outlines, presenting to the emergency room with, defined on the scan, signed by, dependent upon, correlated to, indicated by, contraindicated by, allergic to, signalled by, developed with, ontologically speaking, pathologically speaking of"

const loremBOW = [...lorem.matchAll(regex)].map(item => item[0])
const medicalBOW = [...medicalTerms.matchAll(regex)].map(item => item[0])
const medicalPhraseBOW = [...medicalPhrases.split(", ")]

export {
  loremBeginning
  , loremBOW
  , medicalBOW
  , medicalPhraseBOW
}