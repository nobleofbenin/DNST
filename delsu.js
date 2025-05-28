const delsuQuestions = [
  {
    question: "There is obvious symmetry in the whole presentation.",
    options: ["Orderliness", "Hesitation", "Excitement", "Confusion"],
    answer: "Orderliness",
    explanation: "Symmetry means balance and orderliness."
  },
  {
    question: "The state government appointed a commission of inquiry to go into the community's complaints carefully and without prejudice.",
    options: ["Account", "Search", "Investigate", "None of the above"],
    answer: "Investigate",
    explanation: "A commission of inquiry investigates issues thoroughly."
  },
  {
    question: "As he was a gullible leader, his followers took advantage.",
    options: [
      "He was slow to act",
      "He was simple-minded to a fault",
      "He was partial and unfair in dispensing justice",
      "He was weak and unable to enforce his authority"
    ],
    answer: "He was simple-minded to a fault",
    explanation: "Gullible means easily deceived or naive."
  },
  {
    question: "He has a big heart but he is inept at following a witty conversation.",
    options: ["Large", "Huge", "Warm", "Placed"],
    answer: "Warm",
    explanation: "Having a 'big heart' means being kind or warm-hearted."
  },
  {
    question: "What a man is immune to an illness, he is.",
    options: ["Opposed to it", "Addicted to it", "Attached to it", "Protected against"],
    answer: "Protected against",
    explanation: "Being immune means protected against disease."
  },
  {
    question: "Sitting majestically on his throne is the Ovie of Agbarho flanked by some of his wives.",
    options: ["Surrounded", "Guarded", "Protected", "Neglected"],
    answer: "Surrounded",
    explanation: "Flanked means surrounded on the sides."
  },
  {
    question: "Ese is an ardent supporter of technical education.",
    options: ["Cogent", "A passionate", "An ignorant", "An optimistic"],
    answer: "A passionate",
    explanation: "Ardent means passionate or enthusiastic."
  },
  {
    question: "Sadam Hussein's epitaph has been demolished.",
    options: ["Monument", "Embodiment", "Book", "Farmland"],
    answer: "Monument",
    explanation: "An epitaph is a monument or inscription on a tomb."
  },
  {
    question: "The traditional folktales form an _______ to the book.",
    options: ["Appendix", "Overview", "Insertion", "Index"],
    answer: "Appendix",
    explanation: "An appendix is supplementary material at the end of a book."
  },
  {
    question: "_______ marked an important step in the history of the industrial revolution.",
    options: [
      "The process of locomotion",
      "The discovery of the engine",
      "The discovery of locomotion",
      "The invention of the locomotive engine"
    ],
    answer: "The invention of the locomotive engine",
    explanation: "The locomotive engine was crucial in the industrial revolution."
  },
  {
    question: "The managing director did not pay his staff last month, _______?",
    options: ["Didn't he", "Had he not", "Isn't it", "Did he"],
    answer: "Did he",
    explanation: "Negative statement, positive question tag uses 'Did he'."
  },
  {
    question: "It was a long poem but he learnt it _______.",
    options: ["Off memory", "From memory", "By heart", "By rote"],
    answer: "By heart",
    explanation: "To learn 'by heart' means to memorize."
  },
  {
    question: "Which of the following compounds is soapless detergent?",
    options: ["C₁₀H₂₁OSO₃Na", "CH₃COONa", "CH₃OH", "C₈H₁₇COOCH₃"],
    answer: "CH₃COONa",
    explanation: "Soapless detergents are usually synthetic detergents like CH₃COONa."
  },
  {
    question: "How many atoms are present in 0.02g of magnesium?",
    options: [
      "1.20 x 10^23",
      "2.41 x 10^23",
      "1.51 x 10^23",
      "3.02 x 10^23"
    ],
    answer: "1.20 x 10^23",
    explanation: "Using Avogadro's number and molar mass of Mg."
  },
  {
    question: "Which of the following pollutants is associated with brain damage?",
    options: [
      "Carbon(II) oxide",
      "Radioactive fallout",
      "Biodegradable waste",
      "Sulphur(IV) oxide"
    ],
    answer: "Radioactive fallout",
    explanation: "Radioactive fallout can cause brain damage."
  },
  {
    question: "The number of isomers that can be obtained from C4H10 is",
    options: ["4", "1", "2", "3"],
    answer: "2",
    explanation: "C4H10 has two isomers: n-butane and isobutane."
  },
  {
    question: "Which of the 3d, 4s, 4p, 4d has the lowest energy?",
    options: ["3d", "4s", "4p", "4d"],
    answer: "4s",
    explanation: "4s orbital fills before 3d and has lower energy."
  },
  {
    question: "Carbon is often deposited in the exhaust pipe of cars because of",
    options: [
      "Dehydrogenation of petrol",
      "Incomplete combustion of petrol",
      "Presence of additives",
      "Presence of carbon in petrol"
    ],
    answer: "Incomplete combustion of petrol",
    explanation: "Incomplete combustion produces carbon deposits."
  },
  {
    question: "Plaster of Paris (P.O.P) used for making casts in hospitals is",
    options: [
      "CaSO₄·2H₂O",
      "CaSO₄·1/2H₂O",
      "CaSO₄·3H₂O",
      "CaSO₄·4H₂O"
    ],
    answer: "CaSO₄·1/2H₂O",
    explanation: "P.O.P is calcium sulfate hemihydrate."
  },
  {
    question: "A mixture of 0.20 mole of Ar, 0.20 mole of Ne, and 0.30 mole of He exerts a total pressure of 2.1 atm. What is the partial pressure of He in the mixture?",
    options: [
      "0.70 atm",
      "0.80 atm",
      "0.90 atm",
      "0.65 atm"
    ],
    answer: "0.90 atm",
    explanation: "Partial pressure = mole fraction × total pressure."
  },
  {
    question: "A certain compound on analysis gave 2.02g of carbon, 0.35g of hydrogen, and 2.69g of oxygen. If the molecular mass is 90, calculate the molecular formula.",
    options: ["CHO", "C2H4O2", "Other"],
    answer: "C2H4O2",
    explanation: "Molecular formula calculated from empirical formula and molar mass."
  },
  {
    question: "An effect of thermal pollution in water bodies is that the",
    options: [
      "Volume of chemical waste increases",
      "Levels of oxides of nitrogen increase",
      "Level of oxygen reduces",
      "Volume of water reduces"
    ],
    answer: "Level of oxygen reduces",
    explanation: "Thermal pollution reduces dissolved oxygen in water."
  },
  {
    question: "During reproduction in amoeba, the first structure to divide is:",
    options: ["Cytoplasm", "Nucleus", "Vacuole", "Cell membrane"],
    answer: "Nucleus",
    explanation: "Nucleus divides first during amoeba reproduction."
  },
  {
    question: "Euglena is classified as a plant due to the presence of:",
    options: ["Flagellum", "Chloroplast", "Gullet", "Cell membrane"],
    answer: "Chloroplast",
    explanation: "Euglena contains chloroplasts enabling photosynthesis."
  },
  {
    question: "The end-product of the digestion of fats and oil are:",
    options: [
      "Fatty acid and glycerol",
      "Protein and oils",
      "Amino-acids and fats",
      "Glucose and fats"
    ],
    answer: "Fatty acid and glycerol",
    explanation: "Fats are digested into fatty acids and glycerol."
  },
  {
    question: "One of the following is not a factor required for seed germination:",
    options: ["Light", "Food", "Air", "Viable seed"],
    answer: "Food",
    explanation: "Food is stored in the seed; external food supply is not needed."
  },
  {
    question: "The study of algae is called:",
    options: ["Bacteriology", "Algalogy", "Mycology", "Physiology"],
    answer: "Algalogy",
    explanation: "Algalogy is the study of algae."
  },
  {
    question: "The tilapia fish uses _______ fin for balancing:",
    options: ["Anal", "Ventral", "Caudal", "Dorsal"],
    answer: "Anal",
    explanation: "The anal fin helps fish balance."
  },
  {
    question: "The division of the fungi in which the sexual phase is unknown is called:",
    options: [
      "Deuteromycotina",
      "Zygomycotina",
      "Ascomycotina",
      "Basidiomycotina"
    ],
    answer: "Deuteromycotina",
    explanation: "Deuteromycotina fungi have unknown sexual phases."
  },
  {
    question: "The digestive enzyme that coagulates milk is:",
    options: ["Pepsin", "Trypsin", "Rennin", "Amylase"],
    answer: "Rennin",
    explanation: "Rennin coagulates milk in digestion."
  },
  {
    question: "She worked as an _______ before",
    options: ["Auxillary", "Auxillary", "Auxiliary", "Auxilary"],
    answer: "Auxiliary",
    explanation: "Correct spelling is Auxiliary, meaning assistant."
  },
  {
    question: "Army is to recruit as religion is to _______",
    options: ["Convert", "Worshiper", "Baptize", "Love"],
    answer: "Convert",
    explanation: "Recruit means to enlist; convert means to change religion."
  },
  {
    question: "Given that 4P3M6 = 18 and 3P2M3 = 9, find X if 3PXM4 = 10",
    options: ["5", "2", "2.2", "3"],
    answer: "2",
    explanation: "Pattern analysis shows X = 2."
  },
  {
    question: "Find the highest common factor of 234, 216, and 270",
    options: ["18", "20", "21", "27"],
    answer: "18",
    explanation: "18 is the greatest number dividing all."
  },
  {
    question: "If 6 B 4 R 2 = 13 and 4 B 7 R 2 = 15, find 4 B 9 R 6",
    options: ["20", "8", "18", "7"],
    answer: "20",
    explanation: "Using the pattern from given, answer is 20."
  },
  {
    question: "Express 3/5 as a bi-decimal number",
    options: ["0.1", "0.11", "1.00", "0.6"],
    answer: "0.6",
    explanation: "3/5 = 0.6 in decimal."
  },
  {
    question: "After counting the numbers of peacock and antelope in a zoo, there were 90 heads and 500 legs. How many peacocks are there?",
    options: ["70", "-70", "50", "160"],
    answer: "70",
    explanation: "Using heads and legs equation, peacocks = 70."
  },
  {
    question: "Cuboid is a _______",
    options: ["Prism", "Solid", "Cube", "Pyramid"],
    answer: "Prism",
    explanation: "A cuboid is a type of prism."
  },
  {
    question: "Flock is to bird as _______ is to lion",
    options: ["Group", "Gang", "Pride", "Fleet"],
    answer: "Pride",
    explanation: "A group of lions is called a pride."
  },
  {
    question: "Opulence is to luxury as poverty is to _______",
    options: ["Hunger", "Penury", "Surplus", "Inadequacy"],
    answer: "Penury",
    explanation: "Penury means extreme poverty."
  }
];
