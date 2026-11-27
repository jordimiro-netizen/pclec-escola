// Classificació pedagògica provisional; no equival a la classificació oficial PCLEC.
const PCLEC_MODELS = {
  "149389": {
    "name": "Model F1",
    "language": "Català",
    "level": "2P",
    "partial": false,
    "readings": [
      {
        "title": "Lectura F101 · EL PANDA VERMELL",
        "image": "panda-vermell.png",
        "alt": "Lectura original El Panda Vermell, amb text i fotografies de pandes vermells",
        "questions": [
          {
            "key": "q1",
            "title": "1. F101. Els pandes vermells creixen fins mesurar com…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...un tigre."
              },
              {
                "value": "B",
                "text": "B. ...un ratolí."
              },
              {
                "value": "C",
                "text": "C. ...un gat."
              },
              {
                "value": "D",
                "text": "D. ...un gos."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q2",
            "title": "2. F102. Què li agrada fer al panda vermell a la nit?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Dormir."
              },
              {
                "value": "B",
                "text": "B. Buscar menjar."
              },
              {
                "value": "C",
                "text": "C. Amagar-se als arbres."
              },
              {
                "value": "D",
                "text": "D. Sortir a caçar."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q3",
            "title": "3. F103. Assenyala la frase verdadera.",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El panda vermell és un animal fàcil de veure durant el dia."
              },
              {
                "value": "B",
                "text": "B. El panda vermell no baixa mai dels arbres."
              },
              {
                "value": "C",
                "text": "C. La seva cua li és molt útil per a protegir-se del fred."
              },
              {
                "value": "D",
                "text": "D. És un animal que viu sempre en grans ramats."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q4",
            "title": "4. F104. On viu el panda vermell?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Muntanyes i boscos del sud de la Xina.",
            "process": "Informatiu"
          },
          {
            "key": "q5",
            "title": "5. F105. De què s'alimenta el panda vermell?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Principalment de bambú, com el panda gegant."
              },
              {
                "value": "B",
                "text": "B. Exclusivament de peixos petits."
              },
              {
                "value": "C",
                "text": "C. De fruita, fruits secs, arrels, ous, insectes i cucs."
              },
              {
                "value": "D",
                "text": "D. Només de baies i fulles verdes."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q6",
            "title": "6. F106. Per què el panda vermell camina d'una manera peculiar?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè té les potes del darrere més curtes que les del davant."
              },
              {
                "value": "B",
                "text": "B. Perquè té les potes del davant més curtes que les del darrere."
              },
              {
                "value": "C",
                "text": "C. Perquè té totes les potes molt curtes."
              },
              {
                "value": "D",
                "text": "D. Perquè té les orelles extremadament grans."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          }
        ]
      },
      {
        "title": "Lectura F102 · EL VETERINARI DEL ZOO",
        "image": "veterinari-zoo.jpeg",
        "alt": "Lectura original El veterinari del zoo amb il·lustracions",
        "questions": [
          {
            "key": "q7",
            "title": "1. F107. Quin d’aquests animals surt en aquesta història?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Una girafa."
              },
              {
                "value": "B",
                "text": "B. Un lleó."
              },
              {
                "value": "C",
                "text": "C. Un os polar."
              },
              {
                "value": "D",
                "text": "D. Una serp."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q8",
            "title": "2. F108. Assenyala quins d’aquests dies el veterinari del zoo ha atès alguns animals.",
            "type": "checkbox",
            "choices": [
              {
                "value": "A",
                "text": "A. Dilluns"
              },
              {
                "value": "B",
                "text": "B. Dimarts"
              },
              {
                "value": "C",
                "text": "C. Dimecres"
              },
              {
                "value": "D",
                "text": "D. Diumenge"
              }
            ],
            "answer": [
              "A",
              "C"
            ],
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q9",
            "title": "3. F109. Què fa el veterinari del zoo per ajudar la tigressa Tori?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Li dona un medicament."
              },
              {
                "value": "B",
                "text": "B. Li dona una bufanda."
              },
              {
                "value": "C",
                "text": "C. Li embena la pota."
              },
              {
                "value": "D",
                "text": "D. Li mostra una espina."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q10",
            "title": "4. F110. Què li va donar el veterinari a en Cam el camaleó?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Un drap fred al cap i aigua per beure.",
            "process": "Informatiu"
          },
          {
            "key": "q11",
            "title": "5. F111. Què passa dissabte?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El veterinari del zoo fa una festa."
              },
              {
                "value": "B",
                "text": "B. El veterinari del zoo està malalt."
              },
              {
                "value": "C",
                "text": "C. El veterinari del zoo va al cinema."
              },
              {
                "value": "D",
                "text": "D. El veterinari del zoo es troba amb tots els animals."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "q12",
            "title": "6. F112. Qui són els “amics” del veterinari?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Els altres veterinaris que treballen al zoo."
              },
              {
                "value": "B",
                "text": "B. Els seus amics de quan anava a l'escola."
              },
              {
                "value": "C",
                "text": "C. Els animals que atén al llarg de la setmana."
              },
              {
                "value": "D",
                "text": "D. Altres treballadors del zoo."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          }
        ]
      }
    ]
  },
  "33204": {
    "name": "Model F 2n",
    "language": "Català",
    "level": "2P",
    "partial": false,
    "readings": [
      {
        "title": "Festa d'aniversari",
        "image": "F01-Festa-daniversari.jpg",
        "alt": "Festa d'aniversari",
        "questions": [
          {
            "key": "f01",
            "title": "1. F01. Quants anys fa en Pol?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Deu"
              },
              {
                "value": "B",
                "text": "B. Onze"
              },
              {
                "value": "C",
                "text": "C. Dotze"
              },
              {
                "value": "D",
                "text": "D. Tretze"
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f02",
            "title": "2. F02. Quan se celebrarà la festa d’aniversari?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El dissabte 20 de juny."
              },
              {
                "value": "B",
                "text": "B. Onzena festa d'aniversari d'en Pol."
              },
              {
                "value": "C",
                "text": "C. A Castelldefels."
              },
              {
                "value": "D",
                "text": "D. Abans del divendres 19 de juny."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f03",
            "title": "3. F03. A quina hora acabarà la festa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. A les 4 de la tarda."
              },
              {
                "value": "B",
                "text": "B. A mitjanit."
              },
              {
                "value": "C",
                "text": "C. A les 9 del vespre."
              },
              {
                "value": "D",
                "text": "D. No hi ha hora d’acabament."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f04",
            "title": "4. F04. Què s'ha de fer per dir que aniràs a la festa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Esperar que arribi divendres."
              },
              {
                "value": "B",
                "text": "B. Trucar a un número de telèfon."
              },
              {
                "value": "C",
                "text": "C. Tenir preparada la tovallola."
              },
              {
                "value": "D",
                "text": "D. Portar un regal."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f05",
            "title": "5. F05. Què han de fer els nens i nenes per poder banyar-se?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Portar crema de protecció solar."
              },
              {
                "value": "B",
                "text": "B. Portar banyador i tovallola."
              },
              {
                "value": "C",
                "text": "C. Portar xancletes per a la piscina."
              },
              {
                "value": "D",
                "text": "D. Trucar als pares d'en Pol."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f06",
            "title": "6. F06. On viu en Pol?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Castelldefels.",
            "process": "Informatiu"
          }
        ]
      },
      {
        "title": "Correus electrònics amb l'avi",
        "image": "F02-Correus-electronics-amb-lavi.jpg",
        "alt": "Correus electrònics amb l'avi",
        "questions": [
          {
            "key": "f07",
            "title": "1. F07. Per què l’avi és a l’hospital?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè ha anat a veure a la Carla."
              },
              {
                "value": "B",
                "text": "B. Perquè s'ha de fer unes anàlisis."
              },
              {
                "value": "C",
                "text": "C. Perquè s'ha trencat una cama."
              },
              {
                "value": "D",
                "text": "D. Perquè és metge i treballa a l'hospital."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f08",
            "title": "2. F08. Què pensa l’avi del menjar de l’hospital?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Que és més bo que el de l’àvia."
              },
              {
                "value": "B",
                "text": "B. Que el de l’àvia és millor."
              },
              {
                "value": "C",
                "text": "C. Que s’assemblen molt."
              },
              {
                "value": "D",
                "text": "D. Que el seu menjar és millor que el de l’àvia i l’hospital."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f09",
            "title": "3. F09. En quins dies de la setmana s’han escrit els correus?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Dimarts i dimecres"
              },
              {
                "value": "B",
                "text": "B. Dilluns i dimarts"
              },
              {
                "value": "C",
                "text": "C. Dilluns i dimecres"
              },
              {
                "value": "D",
                "text": "D. Dimecres i dijous"
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f10",
            "title": "4. F10. Quin dia del mes serà el diumenge que l’avi torna a casa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. 23 de febrer"
              },
              {
                "value": "B",
                "text": "B. 24 de febrer"
              },
              {
                "value": "C",
                "text": "C. 25 de febrer"
              },
              {
                "value": "D",
                "text": "D. 26 de febrer"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f11",
            "title": "5. F11. Quant temps haurà de passar fins que l’avi estigui completament recuperat?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Un mes"
              },
              {
                "value": "B",
                "text": "B. Una setmana"
              },
              {
                "value": "C",
                "text": "C. Fins el diumenge"
              },
              {
                "value": "D",
                "text": "D. Dos mesos"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f12",
            "title": "6. F12. Per què l’avi diu que els correus de la Carla han estat una molt bona medicina?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Li han fet companyia i l'han animat.",
            "process": "Inferencial"
          }
        ]
      },
      {
        "title": "Olor de peus",
        "image": "F03-Olor-de-peus.png",
        "alt": "Olor de peus",
        "questions": [
          {
            "key": "f13",
            "title": "1. F13. Per què és necessari que ens suïn els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Evita que la pell s'assequi i manté els peus frescos.",
            "process": "Informatiu"
          },
          {
            "key": "f14",
            "title": "2. F14. Com es diu l’obertura de la glàndula sudorípara per on surt la suor?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Pèl"
              },
              {
                "value": "B",
                "text": "B. Pell"
              },
              {
                "value": "C",
                "text": "C. Porus"
              },
              {
                "value": "D",
                "text": "D. Glàndula sudorípara"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f15",
            "title": "3. F15. Tria la paraula correcta per a completar aquesta frase: “L’ampolla del dibuix ens mostra la quantitat de _______ que un peu pot fer en un dia”.",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. sal"
              },
              {
                "value": "B",
                "text": "B. àcid"
              },
              {
                "value": "C",
                "text": "C. residus"
              },
              {
                "value": "D",
                "text": "D. suor"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f16",
            "title": "4. F16. Per què les mans no fan tanta olor com els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "La suor de les mans s'evapora; la dels peus queda atrapada al calçat.",
            "process": "Inferencial"
          },
          {
            "key": "f17",
            "title": "5. F17. Quina d'aquestes frases resumeix millor tot el text?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. És un text que parla de l'olor que fan els peus."
              },
              {
                "value": "B",
                "text": "B. És un text que explica que la suor fa que els peus s'assequin."
              },
              {
                "value": "C",
                "text": "C. És un text que informa sobre la suor dels peus."
              },
              {
                "value": "D",
                "text": "D. És un text que ens diu quants porus tenim al nostre cos."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          },
          {
            "key": "f18",
            "title": "6. F18. Per què la suor no te una olor pròpia?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè és massa salada."
              },
              {
                "value": "B",
                "text": "B. Perquè és molt suau."
              },
              {
                "value": "C",
                "text": "C. Perquè està formada al 99% per aigua."
              },
              {
                "value": "D",
                "text": "D. Perquè no està freda."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          }
        ]
      }
    ]
  },
  "33209": {
    "name": "Model F 3r",
    "language": "Català",
    "level": "3P",
    "partial": false,
    "readings": [
      {
        "title": "Festa d'aniversari",
        "image": "F01-Festa-daniversari.jpg",
        "alt": "Festa d'aniversari",
        "questions": [
          {
            "key": "f01",
            "title": "1. F01. Quants anys fa en Pol?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Deu"
              },
              {
                "value": "B",
                "text": "B. Onze"
              },
              {
                "value": "C",
                "text": "C. Dotze"
              },
              {
                "value": "D",
                "text": "D. Tretze"
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f02",
            "title": "2. F02. Quan se celebrarà la festa d’aniversari?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El dissabte 20 de juny."
              },
              {
                "value": "B",
                "text": "B. Onzena festa d'aniversari d'en Pol."
              },
              {
                "value": "C",
                "text": "C. A Castelldefels."
              },
              {
                "value": "D",
                "text": "D. Abans del divendres 19 de juny."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f03",
            "title": "3. F03. A quina hora acabarà la festa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. A les 4 de la tarda."
              },
              {
                "value": "B",
                "text": "B. A mitjanit."
              },
              {
                "value": "C",
                "text": "C. A les 9 del vespre."
              },
              {
                "value": "D",
                "text": "D. No hi ha hora d’acabament."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f04",
            "title": "4. F04. Què s'ha de fer per dir que aniràs a la festa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Esperar que arribi divendres."
              },
              {
                "value": "B",
                "text": "B. Trucar a un número de telèfon."
              },
              {
                "value": "C",
                "text": "C. Tenir preparada la tovallola."
              },
              {
                "value": "D",
                "text": "D. Portar un regal."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f05",
            "title": "5. F05. Què han de fer els nens i nenes per poder banyar-se?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Portar crema de protecció solar."
              },
              {
                "value": "B",
                "text": "B. Portar banyador i tovallola."
              },
              {
                "value": "C",
                "text": "C. Portar xancletes per a la piscina."
              },
              {
                "value": "D",
                "text": "D. Trucar als pares d'en Pol."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f06",
            "title": "6. F06. On viu en Pol?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Castelldefels.",
            "process": "Informatiu"
          }
        ]
      },
      {
        "title": "Correus electrònics amb l'avi",
        "image": "F02-Correus-electronics-amb-lavi.jpg",
        "alt": "Correus electrònics amb l'avi",
        "questions": [
          {
            "key": "f07",
            "title": "1. F07. Per què l’avi és a l’hospital?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè ha anat a veure a la Carla."
              },
              {
                "value": "B",
                "text": "B. Perquè s'ha de fer unes anàlisis."
              },
              {
                "value": "C",
                "text": "C. Perquè s'ha trencat una cama."
              },
              {
                "value": "D",
                "text": "D. Perquè és metge i treballa a l'hospital."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f08",
            "title": "2. F08. Què pensa l’avi del menjar de l’hospital?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Que és més bo que el de l’àvia."
              },
              {
                "value": "B",
                "text": "B. Que el de l’àvia és millor."
              },
              {
                "value": "C",
                "text": "C. Que s’assemblen molt."
              },
              {
                "value": "D",
                "text": "D. Que el seu menjar és millor que el de l’àvia i l’hospital."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f09",
            "title": "3. F09. En quins dies de la setmana s’han escrit els correus?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Dimarts i dimecres"
              },
              {
                "value": "B",
                "text": "B. Dilluns i dimarts"
              },
              {
                "value": "C",
                "text": "C. Dilluns i dimecres"
              },
              {
                "value": "D",
                "text": "D. Dimecres i dijous"
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f10",
            "title": "4. F10. Quin dia del mes serà el diumenge que l’avi torna a casa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. 23 de febrer"
              },
              {
                "value": "B",
                "text": "B. 24 de febrer"
              },
              {
                "value": "C",
                "text": "C. 25 de febrer"
              },
              {
                "value": "D",
                "text": "D. 26 de febrer"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f11",
            "title": "5. F11. Quant temps haurà de passar fins que l’avi estigui completament recuperat?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Un mes"
              },
              {
                "value": "B",
                "text": "B. Una setmana"
              },
              {
                "value": "C",
                "text": "C. Fins el diumenge"
              },
              {
                "value": "D",
                "text": "D. Dos mesos"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f12",
            "title": "6. F12. Per què l’avi diu que els correus de la Carla han estat una molt bona medicina?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Li han fet companyia i l'han animat.",
            "process": "Inferencial"
          }
        ]
      },
      {
        "title": "Olor de peus",
        "image": "F03-Olor-de-peus.png",
        "alt": "Olor de peus",
        "questions": [
          {
            "key": "f13",
            "title": "1. F13. Per què és necessari que ens suïn els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Evita que la pell s'assequi i manté els peus frescos.",
            "process": "Informatiu"
          },
          {
            "key": "f14",
            "title": "2. F14. Com es diu l’obertura de la glàndula sudorípara per on surt la suor?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Pèl"
              },
              {
                "value": "B",
                "text": "B. Pell"
              },
              {
                "value": "C",
                "text": "C. Porus"
              },
              {
                "value": "D",
                "text": "D. Glàndula sudorípara"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f15",
            "title": "3. F15. Tria la paraula correcta per a completar aquesta frase: “L’ampolla del dibuix ens mostra la quantitat de _______ que un peu pot fer en un dia”.",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. sal"
              },
              {
                "value": "B",
                "text": "B. àcid"
              },
              {
                "value": "C",
                "text": "C. residus"
              },
              {
                "value": "D",
                "text": "D. suor"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f16",
            "title": "4. F16. Per què les mans no fan tanta olor com els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "La suor de les mans s'evapora; la dels peus queda atrapada al calçat.",
            "process": "Inferencial"
          },
          {
            "key": "f17",
            "title": "5. F17. Quina d'aquestes frases resumeix millor tot el text?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. És un text que parla de l'olor que fan els peus."
              },
              {
                "value": "B",
                "text": "B. És un text que explica que la suor fa que els peus s'assequin."
              },
              {
                "value": "C",
                "text": "C. És un text que informa sobre la suor dels peus."
              },
              {
                "value": "D",
                "text": "D. És un text que ens diu quants porus tenim al nostre cos."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          },
          {
            "key": "f18",
            "title": "6. F18. Per què la suor no te una olor pròpia?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè és massa salada."
              },
              {
                "value": "B",
                "text": "B. Perquè és molt suau."
              },
              {
                "value": "C",
                "text": "C. Perquè està formada al 99% per aigua."
              },
              {
                "value": "D",
                "text": "D. Perquè no està freda."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          }
        ]
      },
      {
        "title": "Insomni",
        "image": "F04-Insomni.png",
        "alt": "Insomni",
        "questions": [
          {
            "key": "f19",
            "title": "1. F19. Fixa’t en aquesta frase del text “les ovelles s’han quedat adormides”. Que ens vol dir el protagonista?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Ha comptat ovelles durant molta estona sense adormir-se.",
            "process": "Inferencial"
          },
          {
            "key": "f20",
            "title": "2. F20. Quina és l'última solució que se li acudeix al/a la protagonista per poder dormir?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Fer els deures de l'escola.",
            "process": "Informatiu"
          },
          {
            "key": "f21",
            "title": "3. F21. Qui ens explica aquesta història?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El pare del/de la protagonista."
              },
              {
                "value": "B",
                "text": "B. No es pot saber."
              },
              {
                "value": "C",
                "text": "C. Qualsevol persona que li agradi escriure."
              },
              {
                "value": "D",
                "text": "D. El/La protagonista."
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Avaluació del text"
          },
          {
            "key": "f22",
            "title": "4. F22. El/La protagonista d'aquesta història pensa que l'alarma del despertador…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …té un soroll molt divertit."
              },
              {
                "value": "B",
                "text": "B. ...ajuda a dormir millor."
              },
              {
                "value": "C",
                "text": "C. ...té un soroll molt desagradable."
              },
              {
                "value": "D",
                "text": "D. …fa Ringggg! Ringggg!"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f23",
            "title": "5. F23. Quina d'aquestes expressions del text explica millor què vol dir insomni?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. He cantat cançons de bressol..."
              },
              {
                "value": "B",
                "text": "B. ...però mentre jo continuo despert..."
              },
              {
                "value": "C",
                "text": "C. ...donar voltes i voltes al llit."
              },
              {
                "value": "D",
                "text": "D. Ha funcionat d’allò més bé..."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f24",
            "title": "6. F24. En aquesta història al/a la protagonista…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …s'adorm i es desperta moltes vegades."
              },
              {
                "value": "B",
                "text": "B. ...viu situacions molt perilloses."
              },
              {
                "value": "C",
                "text": "C. …li costa molt dormir, però al final ho aconsegueix."
              },
              {
                "value": "D",
                "text": "D. ...té un despertador molt gran."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          }
        ]
      }
    ]
  },
  "33208": {
    "name": "Model F 4t",
    "language": "Català",
    "level": "4P",
    "partial": false,
    "readings": [
      {
        "title": "Correus electrònics amb l'avi",
        "image": "F02-Correus-electronics-amb-lavi.jpg",
        "alt": "Correus electrònics amb l'avi",
        "questions": [
          {
            "key": "f07",
            "title": "1. F07. Per què l’avi és a l’hospital?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè ha anat a veure a la Carla."
              },
              {
                "value": "B",
                "text": "B. Perquè s'ha de fer unes anàlisis."
              },
              {
                "value": "C",
                "text": "C. Perquè s'ha trencat una cama."
              },
              {
                "value": "D",
                "text": "D. Perquè és metge i treballa a l'hospital."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f08",
            "title": "2. F08. Què pensa l’avi del menjar de l’hospital?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Que és més bo que el de l’àvia."
              },
              {
                "value": "B",
                "text": "B. Que el de l’àvia és millor."
              },
              {
                "value": "C",
                "text": "C. Que s’assemblen molt."
              },
              {
                "value": "D",
                "text": "D. Que el seu menjar és millor que el de l’àvia i l’hospital."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f09",
            "title": "3. F09. En quins dies de la setmana s’han escrit els correus?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Dimarts i dimecres"
              },
              {
                "value": "B",
                "text": "B. Dilluns i dimarts"
              },
              {
                "value": "C",
                "text": "C. Dilluns i dimecres"
              },
              {
                "value": "D",
                "text": "D. Dimecres i dijous"
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f10",
            "title": "4. F10. Quin dia del mes serà el diumenge que l’avi torna a casa?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. 23 de febrer"
              },
              {
                "value": "B",
                "text": "B. 24 de febrer"
              },
              {
                "value": "C",
                "text": "C. 25 de febrer"
              },
              {
                "value": "D",
                "text": "D. 26 de febrer"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f11",
            "title": "5. F11. Quant temps haurà de passar fins que l’avi estigui completament recuperat?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Un mes"
              },
              {
                "value": "B",
                "text": "B. Una setmana"
              },
              {
                "value": "C",
                "text": "C. Fins el diumenge"
              },
              {
                "value": "D",
                "text": "D. Dos mesos"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f12",
            "title": "6. F12. Per què l’avi diu que els correus de la Carla han estat una molt bona medicina?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Li han fet companyia i l'han animat.",
            "process": "Inferencial"
          }
        ]
      },
      {
        "title": "Olor de peus",
        "image": "F03-Olor-de-peus.png",
        "alt": "Olor de peus",
        "questions": [
          {
            "key": "f13",
            "title": "1. F13. Per què és necessari que ens suïn els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Evita que la pell s'assequi i manté els peus frescos.",
            "process": "Informatiu"
          },
          {
            "key": "f14",
            "title": "2. F14. Com es diu l’obertura de la glàndula sudorípara per on surt la suor?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Pèl"
              },
              {
                "value": "B",
                "text": "B. Pell"
              },
              {
                "value": "C",
                "text": "C. Porus"
              },
              {
                "value": "D",
                "text": "D. Glàndula sudorípara"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f15",
            "title": "3. F15. Tria la paraula correcta per a completar aquesta frase: “L’ampolla del dibuix ens mostra la quantitat de _______ que un peu pot fer en un dia”.",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. sal"
              },
              {
                "value": "B",
                "text": "B. àcid"
              },
              {
                "value": "C",
                "text": "C. residus"
              },
              {
                "value": "D",
                "text": "D. suor"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f16",
            "title": "4. F16. Per què les mans no fan tanta olor com els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "La suor de les mans s'evapora; la dels peus queda atrapada al calçat.",
            "process": "Inferencial"
          },
          {
            "key": "f17",
            "title": "5. F17. Quina d'aquestes frases resumeix millor tot el text?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. És un text que parla de l'olor que fan els peus."
              },
              {
                "value": "B",
                "text": "B. És un text que explica que la suor fa que els peus s'assequin."
              },
              {
                "value": "C",
                "text": "C. És un text que informa sobre la suor dels peus."
              },
              {
                "value": "D",
                "text": "D. És un text que ens diu quants porus tenim al nostre cos."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          },
          {
            "key": "f18",
            "title": "6. F18. Per què la suor no te una olor pròpia?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè és massa salada."
              },
              {
                "value": "B",
                "text": "B. Perquè és molt suau."
              },
              {
                "value": "C",
                "text": "C. Perquè està formada al 99% per aigua."
              },
              {
                "value": "D",
                "text": "D. Perquè no està freda."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          }
        ]
      },
      {
        "title": "Insomni",
        "image": "F04-Insomni.png",
        "alt": "Insomni",
        "questions": [
          {
            "key": "f19",
            "title": "1. F19. Fixa’t en aquesta frase del text “les ovelles s’han quedat adormides”. Que ens vol dir el protagonista?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Ha comptat ovelles durant molta estona sense adormir-se.",
            "process": "Inferencial"
          },
          {
            "key": "f20",
            "title": "2. F20. Quina és l'última solució que se li acudeix al/a la protagonista per poder dormir?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Fer els deures de l'escola.",
            "process": "Informatiu"
          },
          {
            "key": "f21",
            "title": "3. F21. Qui ens explica aquesta història?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El pare del/de la protagonista."
              },
              {
                "value": "B",
                "text": "B. No es pot saber."
              },
              {
                "value": "C",
                "text": "C. Qualsevol persona que li agradi escriure."
              },
              {
                "value": "D",
                "text": "D. El/La protagonista."
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Avaluació del text"
          },
          {
            "key": "f22",
            "title": "4. F22. El/La protagonista d'aquesta història pensa que l'alarma del despertador…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …té un soroll molt divertit."
              },
              {
                "value": "B",
                "text": "B. ...ajuda a dormir millor."
              },
              {
                "value": "C",
                "text": "C. ...té un soroll molt desagradable."
              },
              {
                "value": "D",
                "text": "D. …fa Ringggg! Ringggg!"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f23",
            "title": "5. F23. Quina d'aquestes expressions del text explica millor què vol dir insomni?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. He cantat cançons de bressol..."
              },
              {
                "value": "B",
                "text": "B. ...però mentre jo continuo despert..."
              },
              {
                "value": "C",
                "text": "C. ...donar voltes i voltes al llit."
              },
              {
                "value": "D",
                "text": "D. Ha funcionat d’allò més bé..."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f24",
            "title": "6. F24. En aquesta història al/a la protagonista…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …s'adorm i es desperta moltes vegades."
              },
              {
                "value": "B",
                "text": "B. ...viu situacions molt perilloses."
              },
              {
                "value": "C",
                "text": "C. …li costa molt dormir, però al final ho aconsegueix."
              },
              {
                "value": "D",
                "text": "D. ...té un despertador molt gran."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          }
        ]
      },
      {
        "title": "Breu història del te",
        "image": "F05-Breu-historia-del-te.jpg",
        "alt": "Breu història del te",
        "questions": [
          {
            "key": "f25",
            "title": "1. F25. El sabor del te prové...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...de la cafeïna."
              },
              {
                "value": "B",
                "text": "B. ...dels olis volàtils."
              },
              {
                "value": "C",
                "text": "C. ...dels minerals."
              },
              {
                "value": "D",
                "text": "D. ...de la vitamina B."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f26",
            "title": "2. F26. L’expressió “el te no entén de classes socials” vol dir que...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...és fàcil de produir."
              },
              {
                "value": "B",
                "text": "B. ...té poc sabor i no interessa a la gent."
              },
              {
                "value": "C",
                "text": "C. ...gaudeixen d’ell un gran nombre de persones."
              },
              {
                "value": "D",
                "text": "D. ...és un dels conreus més rendibles del món."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f27",
            "title": "3. F27. Els tes verd, oolong i negre s’inclouen al text com exemples de tes que...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...tenen qualitats diferents."
              },
              {
                "value": "B",
                "text": "B. ...estan fets de diferents formes."
              },
              {
                "value": "C",
                "text": "C. ...tenen tècniques de fermentació similars."
              },
              {
                "value": "D",
                "text": "D. ...tenen noms relacionats amb el color de les seves fulles."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f28",
            "title": "4. F28. De què ens parlen els dos últims paràgrafs?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "L'origen dels noms i les característiques de l'Orange Pekoe i el te pólvora.",
            "process": "Comprensió global"
          },
          {
            "key": "f29",
            "title": "5. F29. Segons el text, un dels tes més populars del món es caracteritza per...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...ser molt exòtic."
              },
              {
                "value": "B",
                "text": "B. ...no ser gaire fort."
              },
              {
                "value": "C",
                "text": "C. ...tenir fulles petites i dures."
              },
              {
                "value": "D",
                "text": "D. ...estar molt fermentat."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f30",
            "title": "6. F30. Per què creus que la lectura ens diu que el te pólvora té un nom una mica enganyós?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "El nom suggereix força però té sabor suau i poca cafeïna.",
            "process": "Inferencial"
          }
        ]
      }
    ]
  },
  "33207": {
    "name": "Model F 5è",
    "language": "Català",
    "level": "5P",
    "partial": false,
    "readings": [
      {
        "title": "Olor de peus",
        "image": "F03-Olor-de-peus.png",
        "alt": "Olor de peus",
        "questions": [
          {
            "key": "f13",
            "title": "1. F13. Per què és necessari que ens suïn els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Evita que la pell s'assequi i manté els peus frescos.",
            "process": "Informatiu"
          },
          {
            "key": "f14",
            "title": "2. F14. Com es diu l’obertura de la glàndula sudorípara per on surt la suor?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Pèl"
              },
              {
                "value": "B",
                "text": "B. Pell"
              },
              {
                "value": "C",
                "text": "C. Porus"
              },
              {
                "value": "D",
                "text": "D. Glàndula sudorípara"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f15",
            "title": "3. F15. Tria la paraula correcta per a completar aquesta frase: “L’ampolla del dibuix ens mostra la quantitat de _______ que un peu pot fer en un dia”.",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. sal"
              },
              {
                "value": "B",
                "text": "B. àcid"
              },
              {
                "value": "C",
                "text": "C. residus"
              },
              {
                "value": "D",
                "text": "D. suor"
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f16",
            "title": "4. F16. Per què les mans no fan tanta olor com els peus?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "La suor de les mans s'evapora; la dels peus queda atrapada al calçat.",
            "process": "Inferencial"
          },
          {
            "key": "f17",
            "title": "5. F17. Quina d'aquestes frases resumeix millor tot el text?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. És un text que parla de l'olor que fan els peus."
              },
              {
                "value": "B",
                "text": "B. És un text que explica que la suor fa que els peus s'assequin."
              },
              {
                "value": "C",
                "text": "C. És un text que informa sobre la suor dels peus."
              },
              {
                "value": "D",
                "text": "D. És un text que ens diu quants porus tenim al nostre cos."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          },
          {
            "key": "f18",
            "title": "6. F18. Per què la suor no te una olor pròpia?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Perquè és massa salada."
              },
              {
                "value": "B",
                "text": "B. Perquè és molt suau."
              },
              {
                "value": "C",
                "text": "C. Perquè està formada al 99% per aigua."
              },
              {
                "value": "D",
                "text": "D. Perquè no està freda."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          }
        ]
      },
      {
        "title": "Insomni",
        "image": "F04-Insomni.png",
        "alt": "Insomni",
        "questions": [
          {
            "key": "f19",
            "title": "1. F19. Fixa’t en aquesta frase del text “les ovelles s’han quedat adormides”. Que ens vol dir el protagonista?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Ha comptat ovelles durant molta estona sense adormir-se.",
            "process": "Inferencial"
          },
          {
            "key": "f20",
            "title": "2. F20. Quina és l'última solució que se li acudeix al/a la protagonista per poder dormir?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Fer els deures de l'escola.",
            "process": "Informatiu"
          },
          {
            "key": "f21",
            "title": "3. F21. Qui ens explica aquesta història?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El pare del/de la protagonista."
              },
              {
                "value": "B",
                "text": "B. No es pot saber."
              },
              {
                "value": "C",
                "text": "C. Qualsevol persona que li agradi escriure."
              },
              {
                "value": "D",
                "text": "D. El/La protagonista."
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Avaluació del text"
          },
          {
            "key": "f22",
            "title": "4. F22. El/La protagonista d'aquesta història pensa que l'alarma del despertador…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …té un soroll molt divertit."
              },
              {
                "value": "B",
                "text": "B. ...ajuda a dormir millor."
              },
              {
                "value": "C",
                "text": "C. ...té un soroll molt desagradable."
              },
              {
                "value": "D",
                "text": "D. …fa Ringggg! Ringggg!"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f23",
            "title": "5. F23. Quina d'aquestes expressions del text explica millor què vol dir insomni?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. He cantat cançons de bressol..."
              },
              {
                "value": "B",
                "text": "B. ...però mentre jo continuo despert..."
              },
              {
                "value": "C",
                "text": "C. ...donar voltes i voltes al llit."
              },
              {
                "value": "D",
                "text": "D. Ha funcionat d’allò més bé..."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f24",
            "title": "6. F24. En aquesta història al/a la protagonista…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …s'adorm i es desperta moltes vegades."
              },
              {
                "value": "B",
                "text": "B. ...viu situacions molt perilloses."
              },
              {
                "value": "C",
                "text": "C. …li costa molt dormir, però al final ho aconsegueix."
              },
              {
                "value": "D",
                "text": "D. ...té un despertador molt gran."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          }
        ]
      },
      {
        "title": "Breu història del te",
        "image": "F05-Breu-historia-del-te.jpg",
        "alt": "Breu història del te",
        "questions": [
          {
            "key": "f25",
            "title": "1. F25. El sabor del te prové...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...de la cafeïna."
              },
              {
                "value": "B",
                "text": "B. ...dels olis volàtils."
              },
              {
                "value": "C",
                "text": "C. ...dels minerals."
              },
              {
                "value": "D",
                "text": "D. ...de la vitamina B."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f26",
            "title": "2. F26. L’expressió “el te no entén de classes socials” vol dir que...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...és fàcil de produir."
              },
              {
                "value": "B",
                "text": "B. ...té poc sabor i no interessa a la gent."
              },
              {
                "value": "C",
                "text": "C. ...gaudeixen d’ell un gran nombre de persones."
              },
              {
                "value": "D",
                "text": "D. ...és un dels conreus més rendibles del món."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f27",
            "title": "3. F27. Els tes verd, oolong i negre s’inclouen al text com exemples de tes que...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...tenen qualitats diferents."
              },
              {
                "value": "B",
                "text": "B. ...estan fets de diferents formes."
              },
              {
                "value": "C",
                "text": "C. ...tenen tècniques de fermentació similars."
              },
              {
                "value": "D",
                "text": "D. ...tenen noms relacionats amb el color de les seves fulles."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f28",
            "title": "4. F28. De què ens parlen els dos últims paràgrafs?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "L'origen dels noms i les característiques de l'Orange Pekoe i el te pólvora.",
            "process": "Comprensió global"
          },
          {
            "key": "f29",
            "title": "5. F29. Segons el text, un dels tes més populars del món es caracteritza per...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...ser molt exòtic."
              },
              {
                "value": "B",
                "text": "B. ...no ser gaire fort."
              },
              {
                "value": "C",
                "text": "C. ...tenir fulles petites i dures."
              },
              {
                "value": "D",
                "text": "D. ...estar molt fermentat."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f30",
            "title": "6. F30. Per què creus que la lectura ens diu que el te pólvora té un nom una mica enganyós?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "El nom suggereix força però té sabor suau i poca cafeïna.",
            "process": "Inferencial"
          }
        ]
      },
      {
        "title": "Llegeix llibres i canvia vides",
        "image": "F06-Llegeix-llibres-i-canvia-idees.jpg",
        "alt": "Llegeix llibres i canvia vides",
        "questions": [
          {
            "key": "f31",
            "title": "1. F31. El cartell anima a la gent a unir-se a Book Aid International per...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...oferir un premi per fer un treball molt dur."
              },
              {
                "value": "B",
                "text": "B. ...demostrar que els llibres són divertits."
              },
              {
                "value": "C",
                "text": "C. ...provocar canvis en les vides d’altres persones."
              },
              {
                "value": "D",
                "text": "D. ...poder fer amics en altres països."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          },
          {
            "key": "f32",
            "title": "2. F32. \"Llegeix tants llibres com puguis durant un mes\". Quin és l’objectiu d’aquesta frase?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Recollir diners per poder comprar molts llibres."
              },
              {
                "value": "B",
                "text": "B. Llegir molts llibres durant un mes."
              },
              {
                "value": "C",
                "text": "C. Conèixer els nois i noies massais."
              },
              {
                "value": "D",
                "text": "D. Trobar patrocinadors."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Avaluació del text"
          },
          {
            "key": "f33",
            "title": "3. F33. Què fa Book Aid International per ajudar als nens i nenes de l’Àfrica subsahariana?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Organitza visites a biblioteques."
              },
              {
                "value": "B",
                "text": "B. Ensenya a llegir."
              },
              {
                "value": "C",
                "text": "C. Dona llibres a l'Àfrica subsahariana."
              },
              {
                "value": "D",
                "text": "D. Dona diners a les famílies perquè comprin llibres."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f34",
            "title": "4. F34. A la part inferior del cartell, una noia massai explica la seva història. Per què creus que s'ha inclòs aquesta història?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Mostrar els beneficis de la iniciativa i animar a participar.",
            "process": "Avaluació del text"
          },
          {
            "key": "f35",
            "title": "5. F35. A quines persones va dirigit aquest cartell?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Principalment infants i joves lectors que poden participar en la campanya.",
            "process": "Inferencial"
          },
          {
            "key": "f36",
            "title": "6. F36. Assenyala les tres tipologies textuals que surten dins d'aquesta lectura.",
            "type": "checkbox",
            "choices": [
              {
                "value": "A",
                "text": "A. Text narratiu."
              },
              {
                "value": "B",
                "text": "B. Text instructiu."
              },
              {
                "value": "C",
                "text": "C. Text argumentatiu."
              },
              {
                "value": "D",
                "text": "D. Text conversacional."
              }
            ],
            "answer": [
              "A",
              "B",
              "C"
            ],
            "reference": "",
            "process": "Avaluació del text"
          }
        ]
      }
    ]
  },
  "33206": {
    "name": "Model F 6è",
    "language": "Català",
    "level": "6P",
    "partial": false,
    "readings": [
      {
        "title": "Insomni",
        "image": "F04-Insomni.png",
        "alt": "Insomni",
        "questions": [
          {
            "key": "f19",
            "title": "1. F19. Fixa’t en aquesta frase del text “les ovelles s’han quedat adormides”. Que ens vol dir el protagonista?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Ha comptat ovelles durant molta estona sense adormir-se.",
            "process": "Inferencial"
          },
          {
            "key": "f20",
            "title": "2. F20. Quina és l'última solució que se li acudeix al/a la protagonista per poder dormir?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Fer els deures de l'escola.",
            "process": "Informatiu"
          },
          {
            "key": "f21",
            "title": "3. F21. Qui ens explica aquesta història?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. El pare del/de la protagonista."
              },
              {
                "value": "B",
                "text": "B. No es pot saber."
              },
              {
                "value": "C",
                "text": "C. Qualsevol persona que li agradi escriure."
              },
              {
                "value": "D",
                "text": "D. El/La protagonista."
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Avaluació del text"
          },
          {
            "key": "f22",
            "title": "4. F22. El/La protagonista d'aquesta història pensa que l'alarma del despertador…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …té un soroll molt divertit."
              },
              {
                "value": "B",
                "text": "B. ...ajuda a dormir millor."
              },
              {
                "value": "C",
                "text": "C. ...té un soroll molt desagradable."
              },
              {
                "value": "D",
                "text": "D. …fa Ringggg! Ringggg!"
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f23",
            "title": "5. F23. Quina d'aquestes expressions del text explica millor què vol dir insomni?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. He cantat cançons de bressol..."
              },
              {
                "value": "B",
                "text": "B. ...però mentre jo continuo despert..."
              },
              {
                "value": "C",
                "text": "C. ...donar voltes i voltes al llit."
              },
              {
                "value": "D",
                "text": "D. Ha funcionat d’allò més bé..."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f24",
            "title": "6. F24. En aquesta història al/a la protagonista…",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. …s'adorm i es desperta moltes vegades."
              },
              {
                "value": "B",
                "text": "B. ...viu situacions molt perilloses."
              },
              {
                "value": "C",
                "text": "C. …li costa molt dormir, però al final ho aconsegueix."
              },
              {
                "value": "D",
                "text": "D. ...té un despertador molt gran."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          }
        ]
      },
      {
        "title": "Breu història del te",
        "image": "F05-Breu-historia-del-te.jpg",
        "alt": "Breu història del te",
        "questions": [
          {
            "key": "f25",
            "title": "1. F25. El sabor del te prové...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...de la cafeïna."
              },
              {
                "value": "B",
                "text": "B. ...dels olis volàtils."
              },
              {
                "value": "C",
                "text": "C. ...dels minerals."
              },
              {
                "value": "D",
                "text": "D. ...de la vitamina B."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f26",
            "title": "2. F26. L’expressió “el te no entén de classes socials” vol dir que...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...és fàcil de produir."
              },
              {
                "value": "B",
                "text": "B. ...té poc sabor i no interessa a la gent."
              },
              {
                "value": "C",
                "text": "C. ...gaudeixen d’ell un gran nombre de persones."
              },
              {
                "value": "D",
                "text": "D. ...és un dels conreus més rendibles del món."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f27",
            "title": "3. F27. Els tes verd, oolong i negre s’inclouen al text com exemples de tes que...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...tenen qualitats diferents."
              },
              {
                "value": "B",
                "text": "B. ...estan fets de diferents formes."
              },
              {
                "value": "C",
                "text": "C. ...tenen tècniques de fermentació similars."
              },
              {
                "value": "D",
                "text": "D. ...tenen noms relacionats amb el color de les seves fulles."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f28",
            "title": "4. F28. De què ens parlen els dos últims paràgrafs?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "L'origen dels noms i les característiques de l'Orange Pekoe i el te pólvora.",
            "process": "Comprensió global"
          },
          {
            "key": "f29",
            "title": "5. F29. Segons el text, un dels tes més populars del món es caracteritza per...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...ser molt exòtic."
              },
              {
                "value": "B",
                "text": "B. ...no ser gaire fort."
              },
              {
                "value": "C",
                "text": "C. ...tenir fulles petites i dures."
              },
              {
                "value": "D",
                "text": "D. ...estar molt fermentat."
              }
            ],
            "answer": "B",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f30",
            "title": "6. F30. Per què creus que la lectura ens diu que el te pólvora té un nom una mica enganyós?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "El nom suggereix força però té sabor suau i poca cafeïna.",
            "process": "Inferencial"
          }
        ]
      },
      {
        "title": "Llegeix llibres i canvia vides",
        "image": "F06-Llegeix-llibres-i-canvia-idees.jpg",
        "alt": "Llegeix llibres i canvia vides",
        "questions": [
          {
            "key": "f31",
            "title": "1. F31. El cartell anima a la gent a unir-se a Book Aid International per...",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. ...oferir un premi per fer un treball molt dur."
              },
              {
                "value": "B",
                "text": "B. ...demostrar que els llibres són divertits."
              },
              {
                "value": "C",
                "text": "C. ...provocar canvis en les vides d’altres persones."
              },
              {
                "value": "D",
                "text": "D. ...poder fer amics en altres països."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Comprensió global"
          },
          {
            "key": "f32",
            "title": "2. F32. \"Llegeix tants llibres com puguis durant un mes\". Quin és l’objectiu d’aquesta frase?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Recollir diners per poder comprar molts llibres."
              },
              {
                "value": "B",
                "text": "B. Llegir molts llibres durant un mes."
              },
              {
                "value": "C",
                "text": "C. Conèixer els nois i noies massais."
              },
              {
                "value": "D",
                "text": "D. Trobar patrocinadors."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Avaluació del text"
          },
          {
            "key": "f33",
            "title": "3. F33. Què fa Book Aid International per ajudar als nens i nenes de l’Àfrica subsahariana?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Organitza visites a biblioteques."
              },
              {
                "value": "B",
                "text": "B. Ensenya a llegir."
              },
              {
                "value": "C",
                "text": "C. Dona llibres a l'Àfrica subsahariana."
              },
              {
                "value": "D",
                "text": "D. Dona diners a les famílies perquè comprin llibres."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f34",
            "title": "4. F34. A la part inferior del cartell, una noia massai explica la seva història. Per què creus que s'ha inclòs aquesta història?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Mostrar els beneficis de la iniciativa i animar a participar.",
            "process": "Avaluació del text"
          },
          {
            "key": "f35",
            "title": "5. F35. A quines persones va dirigit aquest cartell?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Principalment infants i joves lectors que poden participar en la campanya.",
            "process": "Inferencial"
          },
          {
            "key": "f36",
            "title": "6. F36. Assenyala les tres tipologies textuals que surten dins d'aquesta lectura.",
            "type": "checkbox",
            "choices": [
              {
                "value": "A",
                "text": "A. Text narratiu."
              },
              {
                "value": "B",
                "text": "B. Text instructiu."
              },
              {
                "value": "C",
                "text": "C. Text argumentatiu."
              },
              {
                "value": "D",
                "text": "D. Text conversacional."
              }
            ],
            "answer": [
              "A",
              "B",
              "C"
            ],
            "reference": "",
            "process": "Avaluació del text"
          }
        ]
      },
      {
        "title": "El tercer pol",
        "image": "F07-El-tercer-pol.jpg",
        "alt": "El tercer pol",
        "questions": [
          {
            "key": "f37",
            "title": "1. F37. Quina d'aquestes afirmacions és verdadera?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. En aquesta regió no hi ha risc d'inundacions."
              },
              {
                "value": "B",
                "text": "B. La regió de HKH es troba al Nepal."
              },
              {
                "value": "C",
                "text": "C. Les pluges no arriben quan més es necessiten."
              },
              {
                "value": "D",
                "text": "D. En aquesta regió hi ha molt poca població."
              }
            ],
            "answer": "C",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f38",
            "title": "2. F38. Per què està entre cometes l’expressió “Tercer Pol”?",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "És una denominació figurada per la gran quantitat de gel fora dels pols geogràfics.",
            "process": "Avaluació del text"
          },
          {
            "key": "f39",
            "title": "3. F39. Per a què es recopila informació, segons ens diu el tercer paràgraf?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Per donar suport al debat amb fets."
              },
              {
                "value": "B",
                "text": "B. Per permetre que qui escriu aquest article demostri la seva experiència."
              },
              {
                "value": "C",
                "text": "C. Per localitzar el text en una regió particular."
              },
              {
                "value": "D",
                "text": "D. Per incloure altres punts de vista."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f40",
            "title": "4. F40. Què indiquen les investigacions de l’ICIMOD sobre el retrocés de les glaceres?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Accentuaran els patrons estacionals existents."
              },
              {
                "value": "B",
                "text": "B. Significaran que les inundacions estan més esteses en totes les estacions."
              },
              {
                "value": "C",
                "text": "C. S’estan tornant més comuns a tot el món."
              },
              {
                "value": "D",
                "text": "D. Són molt difícils d’identificar i monitorar."
              }
            ],
            "answer": "A",
            "reference": "",
            "process": "Informatiu"
          },
          {
            "key": "f41",
            "title": "5. F41. Segons el text, quin és el paper principal de l’ICIMOD?",
            "type": "radio",
            "choices": [
              {
                "value": "A",
                "text": "A. Pressionar als governs per obtenir diners per gestionar millor les glaceres de la regió."
              },
              {
                "value": "B",
                "text": "B. Donar suport a les persones desplaçades a aquesta regió."
              },
              {
                "value": "C",
                "text": "C. Informar sobre la salut de les glaceres a la regió."
              },
              {
                "value": "D",
                "text": "D. Dur a terme investigacions sobre l’estat de les glaceres de la regió."
              }
            ],
            "answer": "D",
            "reference": "",
            "process": "Inferencial"
          },
          {
            "key": "f42",
            "title": "6. F42. Escriu dues característiques físiques d'aquesta regió.",
            "type": "open",
            "choices": [],
            "answer": null,
            "reference": "Muntanyes de gran altitud i abundància de glaceres.",
            "process": "Informatiu"
          }
        ]
      }
    ]
  }
};

Object.assign(PCLEC_MODELS,{"63657": {"name": "Model D1", "language": "Català", "level": "2P", "partial": false, "readings": [{"title": "Una casa niu d’ocells", "image": "D101-Una-casa-niu-Estandar.jpeg", "alt": "Una casa niu d’ocells", "questions": [{"key": "d101", "title": "1. D101. Què vol construir la Sandra?", "type": "radio", "choices": [{"value": "A", "text": "A. Un martell."}, {"value": "B", "text": "B. Una caseta."}, {"value": "C", "text": "C. Un arbre."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d102", "title": "2. D102. Qui ajuda a la Sandra?", "type": "radio", "choices": [{"value": "A", "text": "A. El seu pare."}, {"value": "B", "text": "B. La seva àvia."}, {"value": "C", "text": "C. La seva mare."}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d103", "title": "3. D103. On posa la caseta quan l’ha acabat?", "type": "radio", "choices": [{"value": "A", "text": "A. En un arbre."}, {"value": "B", "text": "B. Al jardí de casa."}, {"value": "C", "text": "C. No sap on posar-la."}], "answer": "A", "reference": "", "process": "Informatiu"}, {"key": "d104", "title": "4. D104. Quina d’aquestes frases és veritat?", "type": "radio", "choices": [{"value": "A", "text": "A. La Sandra construeix la caseta tota sola."}, {"value": "B", "text": "B. Per fer la caseta necessita fusta."}, {"value": "C", "text": "C. Passen els dies i no entra cap ocell."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d105", "title": "5. D105. Tot just en acabar de construir la caseta, se n’adonen que...", "type": "radio", "choices": [{"value": "A", "text": "A. ...la branca de l’arbre està a punt de trencar-se."}, {"value": "B", "text": "B. ...no els agrada com ha quedat."}, {"value": "C", "text": "C. ...no tenen suficient cordill per penjar-la."}, {"value": "D", "text": "D. ...s’ha quedat petita."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d106", "title": "6. D106. Quants ocells han entrat a la caseta?", "type": "open", "choices": [], "answer": null, "reference": "Quatre ocells.", "process": "Inferencial"}]}, {"title": "El sol", "image": "D102-El-Sol-Estandar.jpeg", "alt": "El sol", "questions": [{"key": "d107", "title": "1. D107. Què és el Sol?", "type": "radio", "choices": [{"value": "A", "text": "A. Un planeta."}, {"value": "B", "text": "B. Una estrella."}, {"value": "C", "text": "C. Una bola de foc."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d108", "title": "2. D108. La Terra gira al voltant...", "type": "radio", "choices": [{"value": "A", "text": "A. ...del Sol."}, {"value": "B", "text": "B. ...de Mart."}, {"value": "C", "text": "C. ...de l’Univers."}], "answer": "A", "reference": "", "process": "Informatiu"}, {"key": "d109", "title": "3. D109. Què aporta el Sol a les persones, plantes i animals?", "type": "radio", "choices": [{"value": "A", "text": "A. Un vent fresc."}, {"value": "B", "text": "B. Llum i calor."}, {"value": "C", "text": "C. Els dies plujosos."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d110", "title": "4. D110. Quina d’aquestes frases és veritat?", "type": "radio", "choices": [{"value": "A", "text": "A. El Sol gira al voltant de la Terra."}, {"value": "B", "text": "B. Hi ha més planetes que giren al voltant del Sol."}, {"value": "C", "text": "C. El Sol fabrica la pluja."}, {"value": "D", "text": "D. El Sol és l’estrella que està més lluny de la Terra."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d111", "title": "5. D111. Posa un número al costat de cada frase (1, 2, 3) en el mateix ordre que apareixen en el text.", "type": "order", "choices": [{"value": "A", "text": "A. L’energia del Sol s’anomena energia Solar."}, {"value": "B", "text": "B. Les persones necessitem la llum i la calor del Sol per viure."}, {"value": "C", "text": "C. La Terra gira al voltant del Sol."}], "answer": "3,2,1", "reference": "", "process": "Informatiu"}, {"key": "d112", "title": "6. D112. Escriu un altre títol on NO surti la paraula Sol.", "type": "open", "choices": [], "answer": null, "reference": "L’estrella que ens dona vida (exemple).", "process": "Comprensió global"}]}]}, "1019": {"name": "Model D 6è", "language": "Català", "level": "6P", "partial": false, "readings": [{"title": "El cicle de l’aigua", "image": "D04-Imatge-text-El-cicle-de-laigua.png", "alt": "El cicle de l’aigua", "questions": [{"key": "d19", "title": "1. D19. Què és la transpiració?", "type": "radio", "choices": [{"value": "A", "text": "A. ... dels rius"}, {"value": "B", "text": "B. ... dels núvols"}, {"value": "C", "text": "C. ... de les plantes"}, {"value": "D", "text": "D. ... dels oceans"}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d20", "title": "2. D20. Quin tipus de text és “El cicle de l’aigua”?", "type": "radio", "choices": [{"value": "A", "text": "A. Informatiu."}, {"value": "B", "text": "B. Narratiu."}, {"value": "C", "text": "C. Una part informatiu i una altra narratiu."}, {"value": "D", "text": "D. Cap de les tres opcions."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d21", "title": "3. D21. Al principi del text, la frase “L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi” vol dir que l’aigua...", "type": "radio", "choices": [{"value": "A", "text": "A. ...s’escalfa lentament."}, {"value": "B", "text": "B. ...es refreda ràpidament."}, {"value": "C", "text": "C. ...es mou sense un principi i un final."}, {"value": "D", "text": "D. ...es condensa i es formen els núvols."}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d22", "title": "4. D22. Copia la frase del text on diu que el fred augmenta amb l’altura.", "type": "open", "choices": [], "answer": null, "reference": "Quan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua.", "process": "Informatiu"}, {"key": "d23", "title": "5. D23. Numera aquesta informació (1,2,3,4) en el mateix ordre que surt en el text.", "type": "order", "choices": [{"value": "A", "text": "A. L’aigua s’evapora del mar, dels rius i dels llacs."}, {"value": "B", "text": "B. L’aigua es condensa i es formen els núvols."}, {"value": "C", "text": "C. L’aigua cau dels núvols en forma de precipitació."}, {"value": "D", "text": "D. L’aigua torna al mar a través dels rius, rierols i aigües subterrànies."}], "answer": "1,2,3,4", "reference": "", "process": "Informatiu"}, {"key": "d24", "title": "6. D24. El text “El cicle de l’aigua” tracta de...", "type": "radio", "choices": [{"value": "A", "text": "A. ... com s’evapora l’aigua."}, {"value": "B", "text": "B. ... com es forma la pluja."}, {"value": "C", "text": "C. ... com es recicla l’aigua a la natura."}, {"value": "D", "text": "D. ... com es forma el vapor d’aigua."}], "answer": "C", "reference": "", "process": "Comprensió global"}], "text": "L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi.\nQuan el sol escalfa l’aigua dels rius, dels llacs i dels mars i oceans, una part es converteix en vapor i puja a l’atmosfera. Aquest procés s’anomena evaporació. La resta de vapor d’aigua que es troba a l’atmosfera prové de les plantes, a causa de l’aigua que s’escapa a través de la superfície de les fulles. Aquesta forma d’evaporació s’anomena transpiració.\nEl vapor d’aigua, quan es refreda, es converteix en aigua líquida. D’això se’n diu condensació. Es pot veure un exemple de condensació quan posem a bullir aigua en una olla per fer uns espaguetis. El vapor d’aigua és aquella fumera que surt de l’olla i que en refredar-se es converteix en gotes d’aigua.\nQuan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua. La pluja cau quan els núvols pesen molt i tenen tanta aigua que no poden transportar-la.\nÉs aleshores quan l’aigua torna a la Terra en forma de pluja, calamarsa o neu. D’això se’n diu precipitació. La pluja és la més freqüent. La calamarsa i la neu es fonen i, juntament amb l’aigua de la pluja, formen rierols i rius. Aquests porten l’aigua una altra vegada als mars i oceans.\nQuan el sol torna a escalfar l’aigua dels rius, dels llacs i dels mars i oceans, comença de nou el cicle de l’aigua."}, {"title": "La nota de la tutora", "image": "D05-La-nota-de-la-tutora.png", "alt": "La nota de la tutora", "questions": [{"key": "d25", "title": "1. D25. Per què en Joan se sent com un animal ferit?", "type": "open", "choices": [], "answer": null, "reference": "Se sent descobert, vulnerable i enfadat.", "process": "Inferencial"}, {"key": "d26", "title": "2. D26. Quina paraula descriu millor l’actitud de la mare d’en Joan durant la conversa?", "type": "radio", "choices": [{"value": "A", "text": "A. Ferma"}, {"value": "B", "text": "B. Enfadada"}, {"value": "C", "text": "C. Preocupada"}, {"value": "D", "text": "D. Decebuda"}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d27", "title": "3. D27. Quin fet va provocar que en Joan estigués molt enfadat?", "type": "radio", "choices": [{"value": "A", "text": "A. Que va suspendre l’últim examen de matemàtiques."}, {"value": "B", "text": "B. Que la seva mare li va dir que no podria participar en un joc on-line."}, {"value": "C", "text": "C. Que la seva mare el va fer pensar en les conseqüències."}, {"value": "D", "text": "D. Que altres persones de la casa van sentir la conversa."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d28", "title": "4. D28. Com podria evitar en Joan que el deixessin sense jugar al joc on-line?", "type": "radio", "choices": [{"value": "A", "text": "A. Li haurien d’agradar les matemàtiques."}, {"value": "B", "text": "B. No hauria de donar cops de porta."}, {"value": "C", "text": "C. Hauria de demanar disculpes a la tutora."}, {"value": "D", "text": "D. Hauria de millorar el seu rendiment en matemàtiques."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d29", "title": "5. D29. Per què diu la mare “Vols deixar de jugar a dos jocs en lloc d’un?”", "type": "open", "choices": [], "answer": null, "reference": "Per advertir-lo que si continua protestant el càstig serà més gran.", "process": "Inferencial"}, {"key": "d30", "title": "6. D30. Què diu la tutora en la seva nota?", "type": "open", "choices": [], "answer": null, "reference": "Que no havia fet uns deures de matemàtiques i havia suspès l’últim examen.", "process": "Informatiu"}]}, {"title": "Mitjans de transport originals", "image": "D06-Mitjans-de-transport-originals.png", "alt": "Mitjans de transport originals", "questions": [{"key": "d31", "title": "1. D31. La idea que es vol transmetre en la presentació del text és que els objectes que veuràs són...", "type": "radio", "choices": [{"value": "A", "text": "A. ...molt pràctics."}, {"value": "B", "text": "B. ...molt bonics."}, {"value": "C", "text": "C. ...sorprenents."}, {"value": "D", "text": "D. ...horrorosos."}], "answer": "C", "reference": "", "process": "Comprensió global"}, {"key": "d32", "title": "2. D32. Per què Perry Watkins va reforçar l’estructura del cotxe?", "type": "radio", "choices": [{"value": "A", "text": "A. Perquè era molt fràgil i un adult el podia trencar."}, {"value": "B", "text": "B. Per fer-lo una mica més còmode."}, {"value": "C", "text": "C. Perquè pogués ser més ràpid, més veloç."}, {"value": "D", "text": "D. Per poder tenir un cotxe de correus per a nens i nenes."}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d33", "title": "3. D33. Aquest text el trobaríem probablement en...", "type": "radio", "choices": [{"value": "A", "text": "A. ...una revista popular."}, {"value": "B", "text": "B. ...un còmic d’aventures."}, {"value": "C", "text": "C. ...un article de ciència-ficció."}, {"value": "D", "text": "D. ...un manual d’instruccions."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d34", "title": "4. D34. Acaba aquesta frase “M’agrada el model GH4 perquè...”", "type": "open", "choices": [], "answer": null, "reference": "Perquè permet volar individualment i és fàcil de fer servir (exemple).", "process": "Avaluació del text"}, {"key": "d35", "title": "5. D35. El text ens diu que “Edd Edward és un anglès excèntric” perquè...", "type": "radio", "choices": [{"value": "A", "text": "A. ... el seu nom i cognom són poc habituals."}, {"value": "B", "text": "B. ... és un apassionat dels automòbils."}, {"value": "C", "text": "C. ... ha establert un munt de rècords mundials."}, {"value": "D", "text": "D. ... fabrica vehicles estranys."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d36", "title": "6. D36. Per què s’han triat aquests tres vehicles per presentar-los en aquest text?", "type": "radio", "choices": [{"value": "A", "text": "A. Perquè demostren que les coses estranyes també poden ser pràctiques."}, {"value": "B", "text": "B. Perquè ens mostren l’evolució dels transports al llarg dels anys."}, {"value": "C", "text": "C. Perquè són formes de transport que semblen increïbles."}, {"value": "D", "text": "D. Perquè mostren el futur dels transports."}], "answer": "C", "reference": "", "process": "Comprensió global"}]}, {"title": "El secret de les sirenes", "image": "D07-El-secret-de-les-sirenes.png", "alt": "El secret de les sirenes", "questions": [{"key": "d37", "title": "1. D37. “Els pilars de pedra, alts com gegants, amagaven el petit vaixell”. Aquesta expressió que surt al principi del segon paràgraf d’aquesta història s’utilitza per...", "type": "radio", "choices": [{"value": "A", "text": "A. ... descriure la mida de les sirenes."}, {"value": "B", "text": "B. ... mostrar que la badia era molt gran."}, {"value": "C", "text": "C. ... explicar que l’embarcació era petita."}, {"value": "D", "text": "D. ... presentar la mida de les onades."}], "answer": "C", "reference": "", "process": "Avaluació del text"}, {"key": "d38", "title": "2. D38. L’expressió “va seguir el seu exemple” vol dir que la persona gran ...", "type": "open", "choices": [], "answer": null, "reference": "Es va posar els protectors a les orelles igual que en Guillem.", "process": "Inferencial"}, {"key": "d39", "title": "3. D39. Què pensava en Guillem moments abans d’agafar de nou el timó?", "type": "radio", "choices": [{"value": "A", "text": "A. Que haurien d’haver assajat més els moviments."}, {"value": "B", "text": "B. Que estaven tenint un viatge tranquil."}, {"value": "C", "text": "C. Que, més enllà de les roques, el mar estava en calma."}, {"value": "D", "text": "D. Que es podien trobar amb la mort."}], "answer": "D", "reference": "", "process": "Informatiu"}, {"key": "d40", "title": "4. D40. Per què en Guillem va posar-se els protectors a les orelles?", "type": "open", "choices": [], "answer": null, "reference": "Per evitar sentir el cant de les sirenes.", "process": "Inferencial"}, {"key": "d41", "title": "5. D41. Estem davant d’un extracte d’una novel·la de la Júlia Golding. A quina part de la narració correspon aquest fragment?", "type": "radio", "choices": [{"value": "A", "text": "A. A la introducció."}, {"value": "B", "text": "B. Al nus."}, {"value": "C", "text": "C. Al desenllaç."}, {"value": "D", "text": "D. A la conclusió final."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d42", "title": "6. D42. Col·loca els números de l’1 al 4 seguint l’ordre en que es produeixen els fets.", "type": "order", "choices": [{"value": "A", "text": "A. Assagen a la taverna L’Àncora."}, {"value": "B", "text": "B. Comencen el viatge en vaixell."}, {"value": "C", "text": "C. El doctor Conte es pren una tassa de te."}, {"value": "D", "text": "D. En Guillem admet que té por."}], "answer": "1,2,3,4", "reference": "", "process": "Comprensió global"}]}]}, "1018": {"name": "Model D 5è", "language": "Català", "level": "5P", "partial": false, "readings": [{"title": "Els exploradors", "image": "D03-Els-exploradors-1.png", "alt": "Els exploradors", "questions": [{"key": "d13", "title": "1. D13. Qui anava al capdavant de l’expedició?", "type": "open", "choices": [], "answer": null, "reference": "En Blai.", "process": "Informatiu"}, {"key": "d14", "title": "2. D14. Quin d’aquests adjectius descriu millor com era en Jaume?", "type": "radio", "choices": [{"value": "A", "text": "A. Prim"}, {"value": "B", "text": "B. Jove"}, {"value": "C", "text": "C. Fort"}, {"value": "D", "text": "D. Pigat"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d15", "title": "3. D15. Copia una frase del text que ens expliqui que els escaladors estaven en un lloc on altres escaladors no havien estat abans.", "type": "open", "choices": [], "answer": null, "reference": "En la paret de la roca no hi havia cap camí marcat que es pogués seguir.", "process": "Informatiu"}, {"key": "d16", "title": "4. D16. En Blai i en Jaume es comunicaven entre ells...", "type": "radio", "choices": [{"value": "A", "text": "A. ... amb un codi especial."}, {"value": "B", "text": "B. ... indicant els llocs amb el cap."}, {"value": "C", "text": "C. ... mitjançant l’ús del llenguatge de signes."}, {"value": "D", "text": "D. ... fent servir frases curtes."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d17", "title": "5. D17. Quant de temps portaven explorant les parets de la roca?", "type": "radio", "choices": [{"value": "A", "text": "A. Un dia"}, {"value": "B", "text": "B. Cinc dies"}, {"value": "C", "text": "C. Més de set dies"}, {"value": "D", "text": "D. Unes hores"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d18", "title": "6. D18. Els escaladors estaven pujant les parets del canó per...", "type": "radio", "choices": [{"value": "A", "text": "A. ... aprendre noves històries."}, {"value": "B", "text": "B. ... ensenyar a en Gonçal com escalar una paret."}, {"value": "C", "text": "C. ... trobar un nou camí."}, {"value": "D", "text": "D. ... aprendre a zigzaguejar escalant."}], "answer": "C", "reference": "", "process": "Comprensió global"}]}, {"title": "El cicle de l’aigua", "image": "D04-Imatge-text-El-cicle-de-laigua.png", "alt": "El cicle de l’aigua", "questions": [{"key": "d19", "title": "1. D19. Què és la transpiració?", "type": "radio", "choices": [{"value": "A", "text": "A. ... dels rius"}, {"value": "B", "text": "B. ... dels núvols"}, {"value": "C", "text": "C. ... de les plantes"}, {"value": "D", "text": "D. ... dels oceans"}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d20", "title": "2. D20. Quin tipus de text és “El cicle de l’aigua”?", "type": "radio", "choices": [{"value": "A", "text": "A. Informatiu."}, {"value": "B", "text": "B. Narratiu."}, {"value": "C", "text": "C. Una part informatiu i una altra narratiu."}, {"value": "D", "text": "D. Cap de les tres opcions."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d21", "title": "3. D21. Al principi del text, la frase “L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi” vol dir que l’aigua...", "type": "radio", "choices": [{"value": "A", "text": "A. ...s’escalfa lentament."}, {"value": "B", "text": "B. ...es refreda ràpidament."}, {"value": "C", "text": "C. ...es mou sense un principi i un final."}, {"value": "D", "text": "D. ...es condensa i es formen els núvols."}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d22", "title": "4. D22. Copia la frase del text on diu que el fred augmenta amb l’altura.", "type": "open", "choices": [], "answer": null, "reference": "Quan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua.", "process": "Informatiu"}, {"key": "d23", "title": "5. D23. Numera aquesta informació (1,2,3,4) en el mateix ordre que surt en el text.", "type": "order", "choices": [{"value": "A", "text": "A. L’aigua s’evapora del mar, dels rius i dels llacs."}, {"value": "B", "text": "B. L’aigua es condensa i es formen els núvols."}, {"value": "C", "text": "C. L’aigua cau dels núvols en forma de precipitació."}, {"value": "D", "text": "D. L’aigua torna al mar a través dels rius, rierols i aigües subterrànies."}], "answer": "1,2,3,4", "reference": "", "process": "Informatiu"}, {"key": "d24", "title": "6. D24. El text “El cicle de l’aigua” tracta de...", "type": "radio", "choices": [{"value": "A", "text": "A. ... com s’evapora l’aigua."}, {"value": "B", "text": "B. ... com es forma la pluja."}, {"value": "C", "text": "C. ... com es recicla l’aigua a la natura."}, {"value": "D", "text": "D. ... com es forma el vapor d’aigua."}], "answer": "C", "reference": "", "process": "Comprensió global"}], "text": "L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi.\nQuan el sol escalfa l’aigua dels rius, dels llacs i dels mars i oceans, una part es converteix en vapor i puja a l’atmosfera. Aquest procés s’anomena evaporació. La resta de vapor d’aigua que es troba a l’atmosfera prové de les plantes, a causa de l’aigua que s’escapa a través de la superfície de les fulles. Aquesta forma d’evaporació s’anomena transpiració.\nEl vapor d’aigua, quan es refreda, es converteix en aigua líquida. D’això se’n diu condensació. Es pot veure un exemple de condensació quan posem a bullir aigua en una olla per fer uns espaguetis. El vapor d’aigua és aquella fumera que surt de l’olla i que en refredar-se es converteix en gotes d’aigua.\nQuan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua. La pluja cau quan els núvols pesen molt i tenen tanta aigua que no poden transportar-la.\nÉs aleshores quan l’aigua torna a la Terra en forma de pluja, calamarsa o neu. D’això se’n diu precipitació. La pluja és la més freqüent. La calamarsa i la neu es fonen i, juntament amb l’aigua de la pluja, formen rierols i rius. Aquests porten l’aigua una altra vegada als mars i oceans.\nQuan el sol torna a escalfar l’aigua dels rius, dels llacs i dels mars i oceans, comença de nou el cicle de l’aigua."}, {"title": "La nota de la tutora", "image": "D05-La-nota-de-la-tutora.png", "alt": "La nota de la tutora", "questions": [{"key": "d25", "title": "1. D25. Per què en Joan se sent com un animal ferit?", "type": "open", "choices": [], "answer": null, "reference": "Se sent descobert, vulnerable i enfadat.", "process": "Inferencial"}, {"key": "d26", "title": "2. D26. Quina paraula descriu millor l’actitud de la mare d’en Joan durant la conversa?", "type": "radio", "choices": [{"value": "A", "text": "A. Ferma"}, {"value": "B", "text": "B. Enfadada"}, {"value": "C", "text": "C. Preocupada"}, {"value": "D", "text": "D. Decebuda"}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d27", "title": "3. D27. Quin fet va provocar que en Joan estigués molt enfadat?", "type": "radio", "choices": [{"value": "A", "text": "A. Que va suspendre l’últim examen de matemàtiques."}, {"value": "B", "text": "B. Que la seva mare li va dir que no podria participar en un joc on-line."}, {"value": "C", "text": "C. Que la seva mare el va fer pensar en les conseqüències."}, {"value": "D", "text": "D. Que altres persones de la casa van sentir la conversa."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d28", "title": "4. D28. Com podria evitar en Joan que el deixessin sense jugar al joc on-line?", "type": "radio", "choices": [{"value": "A", "text": "A. Li haurien d’agradar les matemàtiques."}, {"value": "B", "text": "B. No hauria de donar cops de porta."}, {"value": "C", "text": "C. Hauria de demanar disculpes a la tutora."}, {"value": "D", "text": "D. Hauria de millorar el seu rendiment en matemàtiques."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d29", "title": "5. D29. Per què diu la mare “Vols deixar de jugar a dos jocs en lloc d’un?”", "type": "open", "choices": [], "answer": null, "reference": "Per advertir-lo que si continua protestant el càstig serà més gran.", "process": "Inferencial"}, {"key": "d30", "title": "6. D30. Què diu la tutora en la seva nota?", "type": "open", "choices": [], "answer": null, "reference": "Que no havia fet uns deures de matemàtiques i havia suspès l’últim examen.", "process": "Informatiu"}]}, {"title": "Mitjans de transport originals", "image": "D06-Mitjans-de-transport-originals.png", "alt": "Mitjans de transport originals", "questions": [{"key": "d31", "title": "1. D31. La idea que es vol transmetre en la presentació del text és que els objectes que veuràs són...", "type": "radio", "choices": [{"value": "A", "text": "A. ...molt pràctics."}, {"value": "B", "text": "B. ...molt bonics."}, {"value": "C", "text": "C. ...sorprenents."}, {"value": "D", "text": "D. ...horrorosos."}], "answer": "C", "reference": "", "process": "Comprensió global"}, {"key": "d32", "title": "2. D32. Per què Perry Watkins va reforçar l’estructura del cotxe?", "type": "radio", "choices": [{"value": "A", "text": "A. Perquè era molt fràgil i un adult el podia trencar."}, {"value": "B", "text": "B. Per fer-lo una mica més còmode."}, {"value": "C", "text": "C. Perquè pogués ser més ràpid, més veloç."}, {"value": "D", "text": "D. Per poder tenir un cotxe de correus per a nens i nenes."}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d33", "title": "3. D33. Aquest text el trobaríem probablement en...", "type": "radio", "choices": [{"value": "A", "text": "A. ...una revista popular."}, {"value": "B", "text": "B. ...un còmic d’aventures."}, {"value": "C", "text": "C. ...un article de ciència-ficció."}, {"value": "D", "text": "D. ...un manual d’instruccions."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d34", "title": "4. D34. Acaba aquesta frase “M’agrada el model GH4 perquè...”", "type": "open", "choices": [], "answer": null, "reference": "Perquè permet volar individualment i és fàcil de fer servir (exemple).", "process": "Avaluació del text"}, {"key": "d35", "title": "5. D35. El text ens diu que “Edd Edward és un anglès excèntric” perquè...", "type": "radio", "choices": [{"value": "A", "text": "A. ... el seu nom i cognom són poc habituals."}, {"value": "B", "text": "B. ... és un apassionat dels automòbils."}, {"value": "C", "text": "C. ... ha establert un munt de rècords mundials."}, {"value": "D", "text": "D. ... fabrica vehicles estranys."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d36", "title": "6. D36. Per què s’han triat aquests tres vehicles per presentar-los en aquest text?", "type": "radio", "choices": [{"value": "A", "text": "A. Perquè demostren que les coses estranyes també poden ser pràctiques."}, {"value": "B", "text": "B. Perquè ens mostren l’evolució dels transports al llarg dels anys."}, {"value": "C", "text": "C. Perquè són formes de transport que semblen increïbles."}, {"value": "D", "text": "D. Perquè mostren el futur dels transports."}], "answer": "C", "reference": "", "process": "Comprensió global"}]}]}, "1017": {"name": "Model D 4t", "language": "Català", "level": "4P", "partial": false, "readings": [{"title": "El «combustible»", "image": "D02-El-combustible-1.png", "alt": "El «combustible»", "questions": [{"key": "d7", "title": "1. D07. Per obtenir energia, les persones necessitem...", "type": "radio", "choices": [{"value": "A", "text": "A. ... fer coses."}, {"value": "B", "text": "B. ... menjar."}, {"value": "C", "text": "C. ... jugar."}, {"value": "D", "text": "D. ... pensar."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d8", "title": "2. D08. “Si no és l’hora de dinar o de sopar, un petit refrigeri, com un entrepà, una peça de fruita o uns cereals, et pot servir per carregar combustible.” Aquest text vol dir que has de menjar ...", "type": "radio", "choices": [{"value": "A", "text": "A. ... un refrigeri cada dues hores."}, {"value": "B", "text": "B. ... allò que més t’agradi."}, {"value": "C", "text": "C. ... tots els entrepans que puguis."}, {"value": "D", "text": "D. ... un refrigeri quan tinguis gana."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d9", "title": "3. D09. Quina d’aquestes accions és el millor combustible per al nostre cos?", "type": "radio", "choices": [{"value": "A", "text": "A. Menjar fruits secs."}, {"value": "B", "text": "B. Menjar llaminadures."}, {"value": "C", "text": "C. Menjar només fruita."}, {"value": "D", "text": "D. Menjar de manera sana i equilibrada."}], "answer": "D", "reference": "", "process": "Comprensió global"}, {"key": "d10", "title": "4. D10. Què vol dir “el teu motor”?", "type": "radio", "choices": [{"value": "A", "text": "A. El teu cos."}, {"value": "B", "text": "B. El motor d’un cotxe."}, {"value": "C", "text": "C. Les cames que serveixen per caminar."}, {"value": "D", "text": "D. Els refrigeris que es poden menjar."}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d11", "title": "5. D11. Les persones necessitem menjar...", "type": "radio", "choices": [{"value": "A", "text": "A. ... i per això és bo menjar patates fregides."}, {"value": "B", "text": "B. ...de la mateixa manera que els cotxes necessiten el combustible."}, {"value": "C", "text": "C. ...perquè tenim poca energia."}, {"value": "D", "text": "D. ...només fruites i verdures."}], "answer": "B", "reference": "", "process": "Comprensió global"}, {"key": "d12", "title": "6. D12. Assenyala DOS aliments que són un “bon combustible”.", "type": "checkbox", "choices": [{"value": "A", "text": "A. Llaminadures"}, {"value": "B", "text": "B. Pera"}, {"value": "C", "text": "C. Galetes"}, {"value": "D", "text": "D. Pastís de xocolata"}, {"value": "E", "text": "E. Patates fregides"}, {"value": "F", "text": "F. Entrepà de pernil"}], "answer": ["B", "F"], "reference": "", "process": "Inferencial"}]}, {"title": "Els exploradors", "image": "D03-Els-exploradors-1.png", "alt": "Els exploradors", "questions": [{"key": "d13", "title": "1. D13. Qui anava al capdavant de l’expedició?", "type": "open", "choices": [], "answer": null, "reference": "En Blai.", "process": "Informatiu"}, {"key": "d14", "title": "2. D14. Quin d’aquests adjectius descriu millor com era en Jaume?", "type": "radio", "choices": [{"value": "A", "text": "A. Prim"}, {"value": "B", "text": "B. Jove"}, {"value": "C", "text": "C. Fort"}, {"value": "D", "text": "D. Pigat"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d15", "title": "3. D15. Copia una frase del text que ens expliqui que els escaladors estaven en un lloc on altres escaladors no havien estat abans.", "type": "open", "choices": [], "answer": null, "reference": "En la paret de la roca no hi havia cap camí marcat que es pogués seguir.", "process": "Informatiu"}, {"key": "d16", "title": "4. D16. En Blai i en Jaume es comunicaven entre ells...", "type": "radio", "choices": [{"value": "A", "text": "A. ... amb un codi especial."}, {"value": "B", "text": "B. ... indicant els llocs amb el cap."}, {"value": "C", "text": "C. ... mitjançant l’ús del llenguatge de signes."}, {"value": "D", "text": "D. ... fent servir frases curtes."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d17", "title": "5. D17. Quant de temps portaven explorant les parets de la roca?", "type": "radio", "choices": [{"value": "A", "text": "A. Un dia"}, {"value": "B", "text": "B. Cinc dies"}, {"value": "C", "text": "C. Més de set dies"}, {"value": "D", "text": "D. Unes hores"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d18", "title": "6. D18. Els escaladors estaven pujant les parets del canó per...", "type": "radio", "choices": [{"value": "A", "text": "A. ... aprendre noves històries."}, {"value": "B", "text": "B. ... ensenyar a en Gonçal com escalar una paret."}, {"value": "C", "text": "C. ... trobar un nou camí."}, {"value": "D", "text": "D. ... aprendre a zigzaguejar escalant."}], "answer": "C", "reference": "", "process": "Comprensió global"}]}, {"title": "El cicle de l’aigua", "image": "D04-Imatge-text-El-cicle-de-laigua.png", "alt": "El cicle de l’aigua", "questions": [{"key": "d19", "title": "1. D19. Què és la transpiració?", "type": "radio", "choices": [{"value": "A", "text": "A. ... dels rius"}, {"value": "B", "text": "B. ... dels núvols"}, {"value": "C", "text": "C. ... de les plantes"}, {"value": "D", "text": "D. ... dels oceans"}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d20", "title": "2. D20. Quin tipus de text és “El cicle de l’aigua”?", "type": "radio", "choices": [{"value": "A", "text": "A. Informatiu."}, {"value": "B", "text": "B. Narratiu."}, {"value": "C", "text": "C. Una part informatiu i una altra narratiu."}, {"value": "D", "text": "D. Cap de les tres opcions."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d21", "title": "3. D21. Al principi del text, la frase “L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi” vol dir que l’aigua...", "type": "radio", "choices": [{"value": "A", "text": "A. ...s’escalfa lentament."}, {"value": "B", "text": "B. ...es refreda ràpidament."}, {"value": "C", "text": "C. ...es mou sense un principi i un final."}, {"value": "D", "text": "D. ...es condensa i es formen els núvols."}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d22", "title": "4. D22. Copia la frase del text on diu que el fred augmenta amb l’altura.", "type": "open", "choices": [], "answer": null, "reference": "Quan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua.", "process": "Informatiu"}, {"key": "d23", "title": "5. D23. Numera aquesta informació (1,2,3,4) en el mateix ordre que surt en el text.", "type": "order", "choices": [{"value": "A", "text": "A. L’aigua s’evapora del mar, dels rius i dels llacs."}, {"value": "B", "text": "B. L’aigua es condensa i es formen els núvols."}, {"value": "C", "text": "C. L’aigua cau dels núvols en forma de precipitació."}, {"value": "D", "text": "D. L’aigua torna al mar a través dels rius, rierols i aigües subterrànies."}], "answer": "1,2,3,4", "reference": "", "process": "Informatiu"}, {"key": "d24", "title": "6. D24. El text “El cicle de l’aigua” tracta de...", "type": "radio", "choices": [{"value": "A", "text": "A. ... com s’evapora l’aigua."}, {"value": "B", "text": "B. ... com es forma la pluja."}, {"value": "C", "text": "C. ... com es recicla l’aigua a la natura."}, {"value": "D", "text": "D. ... com es forma el vapor d’aigua."}], "answer": "C", "reference": "", "process": "Comprensió global"}], "text": "L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi.\nQuan el sol escalfa l’aigua dels rius, dels llacs i dels mars i oceans, una part es converteix en vapor i puja a l’atmosfera. Aquest procés s’anomena evaporació. La resta de vapor d’aigua que es troba a l’atmosfera prové de les plantes, a causa de l’aigua que s’escapa a través de la superfície de les fulles. Aquesta forma d’evaporació s’anomena transpiració.\nEl vapor d’aigua, quan es refreda, es converteix en aigua líquida. D’això se’n diu condensació. Es pot veure un exemple de condensació quan posem a bullir aigua en una olla per fer uns espaguetis. El vapor d’aigua és aquella fumera que surt de l’olla i que en refredar-se es converteix en gotes d’aigua.\nQuan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua. La pluja cau quan els núvols pesen molt i tenen tanta aigua que no poden transportar-la.\nÉs aleshores quan l’aigua torna a la Terra en forma de pluja, calamarsa o neu. D’això se’n diu precipitació. La pluja és la més freqüent. La calamarsa i la neu es fonen i, juntament amb l’aigua de la pluja, formen rierols i rius. Aquests porten l’aigua una altra vegada als mars i oceans.\nQuan el sol torna a escalfar l’aigua dels rius, dels llacs i dels mars i oceans, comença de nou el cicle de l’aigua."}, {"title": "La nota de la tutora", "image": "D05-La-nota-de-la-tutora.png", "alt": "La nota de la tutora", "questions": [{"key": "d25", "title": "1. D25. Per què en Joan se sent com un animal ferit?", "type": "open", "choices": [], "answer": null, "reference": "Se sent descobert, vulnerable i enfadat.", "process": "Inferencial"}, {"key": "d26", "title": "2. D26. Quina paraula descriu millor l’actitud de la mare d’en Joan durant la conversa?", "type": "radio", "choices": [{"value": "A", "text": "A. Ferma"}, {"value": "B", "text": "B. Enfadada"}, {"value": "C", "text": "C. Preocupada"}, {"value": "D", "text": "D. Decebuda"}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d27", "title": "3. D27. Quin fet va provocar que en Joan estigués molt enfadat?", "type": "radio", "choices": [{"value": "A", "text": "A. Que va suspendre l’últim examen de matemàtiques."}, {"value": "B", "text": "B. Que la seva mare li va dir que no podria participar en un joc on-line."}, {"value": "C", "text": "C. Que la seva mare el va fer pensar en les conseqüències."}, {"value": "D", "text": "D. Que altres persones de la casa van sentir la conversa."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d28", "title": "4. D28. Com podria evitar en Joan que el deixessin sense jugar al joc on-line?", "type": "radio", "choices": [{"value": "A", "text": "A. Li haurien d’agradar les matemàtiques."}, {"value": "B", "text": "B. No hauria de donar cops de porta."}, {"value": "C", "text": "C. Hauria de demanar disculpes a la tutora."}, {"value": "D", "text": "D. Hauria de millorar el seu rendiment en matemàtiques."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d29", "title": "5. D29. Per què diu la mare “Vols deixar de jugar a dos jocs en lloc d’un?”", "type": "open", "choices": [], "answer": null, "reference": "Per advertir-lo que si continua protestant el càstig serà més gran.", "process": "Inferencial"}, {"key": "d30", "title": "6. D30. Què diu la tutora en la seva nota?", "type": "open", "choices": [], "answer": null, "reference": "Que no havia fet uns deures de matemàtiques i havia suspès l’últim examen.", "process": "Informatiu"}]}]}, "1016": {"name": "Model D 3r", "language": "Català", "level": "3P", "partial": false, "readings": [{"title": "La calor", "image": "Lectura-La-Calor-Estandar.png", "alt": "La calor", "questions": [{"key": "d1", "title": "1. D01. Aquesta història ens parla de...", "type": "radio", "choices": [{"value": "A", "text": "A. ...la calor."}, {"value": "B", "text": "B. ...l’estiu."}, {"value": "C", "text": "C. ...fer esport."}], "answer": "A", "reference": "", "process": "Comprensió global"}, {"key": "d2", "title": "2. D02. Assenyala dues accions que fan que tinguis calor.", "type": "checkbox", "choices": [{"value": "A", "text": "A. Beure un refresc."}, {"value": "B", "text": "B. Fer esport."}, {"value": "C", "text": "C. Fer una foguera."}, {"value": "D", "text": "D. Dutxar-te amb aigua freda."}], "answer": ["B", "C"], "reference": "", "process": "Informatiu"}, {"key": "d3", "title": "3. D03. Observa la imatge i completa la frase.", "type": "radio", "choices": [{"value": "A", "text": "A. ...lluny del foc."}, {"value": "B", "text": "B. ...al damunt del foc."}, {"value": "C", "text": "C. ...a la vora del foc."}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d4", "title": "4. D04. Què fan aquests nens quan tenen calor?", "type": "open", "choices": [], "answer": null, "reference": "Van a banyar-se.", "process": "Informatiu"}, {"key": "d5", "title": "5. D05. Què és el millor que pots fer si tens calor?", "type": "radio", "choices": [{"value": "A", "text": "A. Córrer molt."}, {"value": "B", "text": "B. Anar a banyar-te."}, {"value": "C", "text": "C. Seure al costat del foc."}], "answer": "B", "reference": "", "process": "Inferencial"}, {"key": "d6", "title": "6. D06. Què significa la figura blanca que està dins d’un cercle negre?", "type": "radio", "choices": [{"value": "A", "text": "A. Que el pot està calent."}, {"value": "B", "text": "B. Que el pot està net."}, {"value": "C", "text": "C. Que el pot està fred."}], "answer": "A", "reference": "", "process": "Inferencial"}]}, {"title": "El «combustible»", "image": "D02-El-combustible-1.png", "alt": "El «combustible»", "questions": [{"key": "d7", "title": "1. D07. Per obtenir energia, les persones necessitem...", "type": "radio", "choices": [{"value": "A", "text": "A. ... fer coses."}, {"value": "B", "text": "B. ... menjar."}, {"value": "C", "text": "C. ... jugar."}, {"value": "D", "text": "D. ... pensar."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d8", "title": "2. D08. “Si no és l’hora de dinar o de sopar, un petit refrigeri, com un entrepà, una peça de fruita o uns cereals, et pot servir per carregar combustible.” Aquest text vol dir que has de menjar ...", "type": "radio", "choices": [{"value": "A", "text": "A. ... un refrigeri cada dues hores."}, {"value": "B", "text": "B. ... allò que més t’agradi."}, {"value": "C", "text": "C. ... tots els entrepans que puguis."}, {"value": "D", "text": "D. ... un refrigeri quan tinguis gana."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d9", "title": "3. D09. Quina d’aquestes accions és el millor combustible per al nostre cos?", "type": "radio", "choices": [{"value": "A", "text": "A. Menjar fruits secs."}, {"value": "B", "text": "B. Menjar llaminadures."}, {"value": "C", "text": "C. Menjar només fruita."}, {"value": "D", "text": "D. Menjar de manera sana i equilibrada."}], "answer": "D", "reference": "", "process": "Comprensió global"}, {"key": "d10", "title": "4. D10. Què vol dir “el teu motor”?", "type": "radio", "choices": [{"value": "A", "text": "A. El teu cos."}, {"value": "B", "text": "B. El motor d’un cotxe."}, {"value": "C", "text": "C. Les cames que serveixen per caminar."}, {"value": "D", "text": "D. Els refrigeris que es poden menjar."}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d11", "title": "5. D11. Les persones necessitem menjar...", "type": "radio", "choices": [{"value": "A", "text": "A. ... i per això és bo menjar patates fregides."}, {"value": "B", "text": "B. ...de la mateixa manera que els cotxes necessiten el combustible."}, {"value": "C", "text": "C. ...perquè tenim poca energia."}, {"value": "D", "text": "D. ...només fruites i verdures."}], "answer": "B", "reference": "", "process": "Comprensió global"}, {"key": "d12", "title": "6. D12. Assenyala DOS aliments que són un “bon combustible”.", "type": "checkbox", "choices": [{"value": "A", "text": "A. Llaminadures"}, {"value": "B", "text": "B. Pera"}, {"value": "C", "text": "C. Galetes"}, {"value": "D", "text": "D. Pastís de xocolata"}, {"value": "E", "text": "E. Patates fregides"}, {"value": "F", "text": "F. Entrepà de pernil"}], "answer": ["B", "F"], "reference": "", "process": "Inferencial"}]}, {"title": "Els exploradors", "image": "D03-Els-exploradors-1.png", "alt": "Els exploradors", "questions": [{"key": "d13", "title": "1. D13. Qui anava al capdavant de l’expedició?", "type": "open", "choices": [], "answer": null, "reference": "En Blai.", "process": "Informatiu"}, {"key": "d14", "title": "2. D14. Quin d’aquests adjectius descriu millor com era en Jaume?", "type": "radio", "choices": [{"value": "A", "text": "A. Prim"}, {"value": "B", "text": "B. Jove"}, {"value": "C", "text": "C. Fort"}, {"value": "D", "text": "D. Pigat"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d15", "title": "3. D15. Copia una frase del text que ens expliqui que els escaladors estaven en un lloc on altres escaladors no havien estat abans.", "type": "open", "choices": [], "answer": null, "reference": "En la paret de la roca no hi havia cap camí marcat que es pogués seguir.", "process": "Informatiu"}, {"key": "d16", "title": "4. D16. En Blai i en Jaume es comunicaven entre ells...", "type": "radio", "choices": [{"value": "A", "text": "A. ... amb un codi especial."}, {"value": "B", "text": "B. ... indicant els llocs amb el cap."}, {"value": "C", "text": "C. ... mitjançant l’ús del llenguatge de signes."}, {"value": "D", "text": "D. ... fent servir frases curtes."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d17", "title": "5. D17. Quant de temps portaven explorant les parets de la roca?", "type": "radio", "choices": [{"value": "A", "text": "A. Un dia"}, {"value": "B", "text": "B. Cinc dies"}, {"value": "C", "text": "C. Més de set dies"}, {"value": "D", "text": "D. Unes hores"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d18", "title": "6. D18. Els escaladors estaven pujant les parets del canó per...", "type": "radio", "choices": [{"value": "A", "text": "A. ... aprendre noves històries."}, {"value": "B", "text": "B. ... ensenyar a en Gonçal com escalar una paret."}, {"value": "C", "text": "C. ... trobar un nou camí."}, {"value": "D", "text": "D. ... aprendre a zigzaguejar escalant."}], "answer": "C", "reference": "", "process": "Comprensió global"}]}, {"title": "El cicle de l’aigua", "image": "D04-Imatge-text-El-cicle-de-laigua.png", "alt": "El cicle de l’aigua", "questions": [{"key": "d19", "title": "1. D19. Què és la transpiració?", "type": "radio", "choices": [{"value": "A", "text": "A. ... dels rius"}, {"value": "B", "text": "B. ... dels núvols"}, {"value": "C", "text": "C. ... de les plantes"}, {"value": "D", "text": "D. ... dels oceans"}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d20", "title": "2. D20. Quin tipus de text és “El cicle de l’aigua”?", "type": "radio", "choices": [{"value": "A", "text": "A. Informatiu."}, {"value": "B", "text": "B. Narratiu."}, {"value": "C", "text": "C. Una part informatiu i una altra narratiu."}, {"value": "D", "text": "D. Cap de les tres opcions."}], "answer": "A", "reference": "", "process": "Avaluació del text"}, {"key": "d21", "title": "3. D21. Al principi del text, la frase “L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi” vol dir que l’aigua...", "type": "radio", "choices": [{"value": "A", "text": "A. ...s’escalfa lentament."}, {"value": "B", "text": "B. ...es refreda ràpidament."}, {"value": "C", "text": "C. ...es mou sense un principi i un final."}, {"value": "D", "text": "D. ...es condensa i es formen els núvols."}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d22", "title": "4. D22. Copia la frase del text on diu que el fred augmenta amb l’altura.", "type": "open", "choices": [], "answer": null, "reference": "Quan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua.", "process": "Informatiu"}, {"key": "d23", "title": "5. D23. Numera aquesta informació (1,2,3,4) en el mateix ordre que surt en el text.", "type": "order", "choices": [{"value": "A", "text": "A. L’aigua s’evapora del mar, dels rius i dels llacs."}, {"value": "B", "text": "B. L’aigua es condensa i es formen els núvols."}, {"value": "C", "text": "C. L’aigua cau dels núvols en forma de precipitació."}, {"value": "D", "text": "D. L’aigua torna al mar a través dels rius, rierols i aigües subterrànies."}], "answer": "1,2,3,4", "reference": "", "process": "Informatiu"}, {"key": "d24", "title": "6. D24. El text “El cicle de l’aigua” tracta de...", "type": "radio", "choices": [{"value": "A", "text": "A. ... com s’evapora l’aigua."}, {"value": "B", "text": "B. ... com es forma la pluja."}, {"value": "C", "text": "C. ... com es recicla l’aigua a la natura."}, {"value": "D", "text": "D. ... com es forma el vapor d’aigua."}], "answer": "C", "reference": "", "process": "Comprensió global"}], "text": "L’aigua circula entre la Terra i l’atmosfera en un cicle sense fi.\nQuan el sol escalfa l’aigua dels rius, dels llacs i dels mars i oceans, una part es converteix en vapor i puja a l’atmosfera. Aquest procés s’anomena evaporació. La resta de vapor d’aigua que es troba a l’atmosfera prové de les plantes, a causa de l’aigua que s’escapa a través de la superfície de les fulles. Aquesta forma d’evaporació s’anomena transpiració.\nEl vapor d’aigua, quan es refreda, es converteix en aigua líquida. D’això se’n diu condensació. Es pot veure un exemple de condensació quan posem a bullir aigua en una olla per fer uns espaguetis. El vapor d’aigua és aquella fumera que surt de l’olla i que en refredar-se es converteix en gotes d’aigua.\nQuan el vapor d’aigua s’eleva, es refreda i forma els núvols, que estan compostos per milions de petites gotes d’aigua. La pluja cau quan els núvols pesen molt i tenen tanta aigua que no poden transportar-la.\nÉs aleshores quan l’aigua torna a la Terra en forma de pluja, calamarsa o neu. D’això se’n diu precipitació. La pluja és la més freqüent. La calamarsa i la neu es fonen i, juntament amb l’aigua de la pluja, formen rierols i rius. Aquests porten l’aigua una altra vegada als mars i oceans.\nQuan el sol torna a escalfar l’aigua dels rius, dels llacs i dels mars i oceans, comença de nou el cicle de l’aigua."}]}, "1015": {"name": "Model D 2n", "language": "Català", "level": "2P", "partial": false, "readings": [{"title": "La calor", "image": "Lectura-La-Calor-Estandar.png", "alt": "La calor", "questions": [{"key": "d1", "title": "1. D01. Aquesta història ens parla de...", "type": "radio", "choices": [{"value": "A", "text": "A. ...la calor."}, {"value": "B", "text": "B. ...l’estiu."}, {"value": "C", "text": "C. ...fer esport."}], "answer": "A", "reference": "", "process": "Comprensió global"}, {"key": "d2", "title": "2. D02. Assenyala dues accions que fan que tinguis calor.", "type": "checkbox", "choices": [{"value": "A", "text": "A. Beure un refresc."}, {"value": "B", "text": "B. Fer esport."}, {"value": "C", "text": "C. Fer una foguera."}, {"value": "D", "text": "D. Dutxar-te amb aigua freda."}], "answer": ["B", "C"], "reference": "", "process": "Informatiu"}, {"key": "d3", "title": "3. D03. Observa la imatge i completa la frase.", "type": "radio", "choices": [{"value": "A", "text": "A. ...lluny del foc."}, {"value": "B", "text": "B. ...al damunt del foc."}, {"value": "C", "text": "C. ...a la vora del foc."}], "answer": "C", "reference": "", "process": "Informatiu"}, {"key": "d4", "title": "4. D04. Què fan aquests nens quan tenen calor?", "type": "open", "choices": [], "answer": null, "reference": "Van a banyar-se.", "process": "Informatiu"}, {"key": "d5", "title": "5. D05. Què és el millor que pots fer si tens calor?", "type": "radio", "choices": [{"value": "A", "text": "A. Córrer molt."}, {"value": "B", "text": "B. Anar a banyar-te."}, {"value": "C", "text": "C. Seure al costat del foc."}], "answer": "B", "reference": "", "process": "Inferencial"}, {"key": "d6", "title": "6. D06. Què significa la figura blanca que està dins d’un cercle negre?", "type": "radio", "choices": [{"value": "A", "text": "A. Que el pot està calent."}, {"value": "B", "text": "B. Que el pot està net."}, {"value": "C", "text": "C. Que el pot està fred."}], "answer": "A", "reference": "", "process": "Inferencial"}]}, {"title": "El «combustible»", "image": "D02-El-combustible-1.png", "alt": "El «combustible»", "questions": [{"key": "d7", "title": "1. D07. Per obtenir energia, les persones necessitem...", "type": "radio", "choices": [{"value": "A", "text": "A. ... fer coses."}, {"value": "B", "text": "B. ... menjar."}, {"value": "C", "text": "C. ... jugar."}, {"value": "D", "text": "D. ... pensar."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d8", "title": "2. D08. “Si no és l’hora de dinar o de sopar, un petit refrigeri, com un entrepà, una peça de fruita o uns cereals, et pot servir per carregar combustible.” Aquest text vol dir que has de menjar ...", "type": "radio", "choices": [{"value": "A", "text": "A. ... un refrigeri cada dues hores."}, {"value": "B", "text": "B. ... allò que més t’agradi."}, {"value": "C", "text": "C. ... tots els entrepans que puguis."}, {"value": "D", "text": "D. ... un refrigeri quan tinguis gana."}], "answer": "D", "reference": "", "process": "Inferencial"}, {"key": "d9", "title": "3. D09. Quina d’aquestes accions és el millor combustible per al nostre cos?", "type": "radio", "choices": [{"value": "A", "text": "A. Menjar fruits secs."}, {"value": "B", "text": "B. Menjar llaminadures."}, {"value": "C", "text": "C. Menjar només fruita."}, {"value": "D", "text": "D. Menjar de manera sana i equilibrada."}], "answer": "D", "reference": "", "process": "Comprensió global"}, {"key": "d10", "title": "4. D10. Què vol dir “el teu motor”?", "type": "radio", "choices": [{"value": "A", "text": "A. El teu cos."}, {"value": "B", "text": "B. El motor d’un cotxe."}, {"value": "C", "text": "C. Les cames que serveixen per caminar."}, {"value": "D", "text": "D. Els refrigeris que es poden menjar."}], "answer": "A", "reference": "", "process": "Inferencial"}, {"key": "d11", "title": "5. D11. Les persones necessitem menjar...", "type": "radio", "choices": [{"value": "A", "text": "A. ... i per això és bo menjar patates fregides."}, {"value": "B", "text": "B. ...de la mateixa manera que els cotxes necessiten el combustible."}, {"value": "C", "text": "C. ...perquè tenim poca energia."}, {"value": "D", "text": "D. ...només fruites i verdures."}], "answer": "B", "reference": "", "process": "Comprensió global"}, {"key": "d12", "title": "6. D12. Assenyala DOS aliments que són un “bon combustible”.", "type": "checkbox", "choices": [{"value": "A", "text": "A. Llaminadures"}, {"value": "B", "text": "B. Pera"}, {"value": "C", "text": "C. Galetes"}, {"value": "D", "text": "D. Pastís de xocolata"}, {"value": "E", "text": "E. Patates fregides"}, {"value": "F", "text": "F. Entrepà de pernil"}], "answer": ["B", "F"], "reference": "", "process": "Inferencial"}]}, {"title": "Els exploradors", "image": "D03-Els-exploradors-1.png", "alt": "Els exploradors", "questions": [{"key": "d13", "title": "1. D13. Qui anava al capdavant de l’expedició?", "type": "open", "choices": [], "answer": null, "reference": "En Blai.", "process": "Informatiu"}, {"key": "d14", "title": "2. D14. Quin d’aquests adjectius descriu millor com era en Jaume?", "type": "radio", "choices": [{"value": "A", "text": "A. Prim"}, {"value": "B", "text": "B. Jove"}, {"value": "C", "text": "C. Fort"}, {"value": "D", "text": "D. Pigat"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d15", "title": "3. D15. Copia una frase del text que ens expliqui que els escaladors estaven en un lloc on altres escaladors no havien estat abans.", "type": "open", "choices": [], "answer": null, "reference": "En la paret de la roca no hi havia cap camí marcat que es pogués seguir.", "process": "Informatiu"}, {"key": "d16", "title": "4. D16. En Blai i en Jaume es comunicaven entre ells...", "type": "radio", "choices": [{"value": "A", "text": "A. ... amb un codi especial."}, {"value": "B", "text": "B. ... indicant els llocs amb el cap."}, {"value": "C", "text": "C. ... mitjançant l’ús del llenguatge de signes."}, {"value": "D", "text": "D. ... fent servir frases curtes."}], "answer": "B", "reference": "", "process": "Informatiu"}, {"key": "d17", "title": "5. D17. Quant de temps portaven explorant les parets de la roca?", "type": "radio", "choices": [{"value": "A", "text": "A. Un dia"}, {"value": "B", "text": "B. Cinc dies"}, {"value": "C", "text": "C. Més de set dies"}, {"value": "D", "text": "D. Unes hores"}], "answer": "C", "reference": "", "process": "Inferencial"}, {"key": "d18", "title": "6. D18. Els escaladors estaven pujant les parets del canó per...", "type": "radio", "choices": [{"value": "A", "text": "A. ... aprendre noves històries."}, {"value": "B", "text": "B. ... ensenyar a en Gonçal com escalar una paret."}, {"value": "C", "text": "C. ... trobar un nou camí."}, {"value": "D", "text": "D. ... aprendre a zigzaguejar escalant."}], "answer": "C", "reference": "", "process": "Comprensió global"}]}]}});
