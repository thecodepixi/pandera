const WORDS = ["psychotic", "pneumatic", "phonetic", "Pacific", "prosthetic", "pandemic", "pathetic", "pleonastic", "pedantic", "prognostic", "pleuritic", "piratic", "plethoric", "polemic", "phlegmatic", "pancreatic", "presbyopic", "pyknotic", "priapic", "phonemic", "pelagic", "puristic", "pragmatic", "pyretic", "plutonic", "pneumonic", "paretic", "pharisaic", "politic", "pantheistic", "Pharaonic", "Paleozoic", "pyloric", "platonic", "polaric", "plasmic", "prophetic", "prolific", "Potomac", "panoptic", "Puranic", "prodromic", "planktonic", "phyletic", "phenolic", "prostatic", "pilgarlic", "phrenetic", "podagric", "pulmonic"]

function word() {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
