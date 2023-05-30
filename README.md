# aspirateur_test_TypeScript

<a name="br1"></a>[www.yanport.com](https://www.yanport.com)

Test Technique - Développeur Full Stack

Description

La société “iHoover” a décidé de développer un aspirateur automatique.

L’aspirateur doit pouvoir parcourir l'intégralité d’une pièce donnée, sa position est représentée par ses
coordonnées (x,y) et d'une lettre indiquant l'orientation selon la notation cardinale anglaise (N,E,W,S).
Une pièce est modélisée par une grille rectangulaire.

Par exemple, l’aspirateur peut se trouver dans la position « 0, 0, N », ce qui signiﬁe qu’il se situe dans le
coin inférieur gauche de la pièce, et orientée vers le Nord.

Pour contrôler l’aspirateur, une séquence de commandes symbolisée par une suite de lettres lui est
envoyée. Les commandes possibles sont « D », « G » et « A ». « D » et « G » font pivoter l’aspirateur de
90° à droite ou à gauche respectivement, sans la déplacer. « A » signiﬁe que l'on avance d'une case
dans la direction à laquelle elle fait face, et sans modiﬁer son orientation.

On déﬁnit que la case directement au Nord de la position (x, y) a pour coordonnées (x, y+1).

Pour programmer l’aspirateur, on lui fournit des données en entrée:

● Les dimensions de la grille à savoir le nombre de carrés sur l’axe x puis y.
● La position initiale de l’aspirateur, ainsi que son orientation.
● Une série d'instructions que l’aspirateur exécutera.

Lorsque l’aspirateur achève une série d'instructions, il communique sa position et son orientation.

Objectif

Concevoir et développer une application permettant de paramétrer la dimension de la grille, de
positionner l’aspirateur et d’exécuter une liste d’instructions. On doit alors pouvoir connaître sa
position ﬁnale.

Le langage de programmation imposé est soit Java, Kotlin, Scala ou Typescript, le livrable doit contenir
tout le code source et une documentation simple pour l’exécuter, cela peut très bien être une *main*
classe ou des tests unitaires. L’utilisation de librairie ou framework tierce est autorisée.

Test 1

Dimension de la grille : **x=10 y=10**

Position initiale de l’aspirateur : **x=5 y=5 orientation=N**
Instructions  : **DADADADAA**

On attend comme position ﬁnale : **x=5 y=6 orientation=N**

*NB : le programme doit pouvoir évoluer facilement en fonction de nouvelles contraintes qui vous seront
communiquées lors de l’entretien.*

**YANPORT** SAS au capital de 400 000 euros. R.C.S. Nanterre B 753 624 600 00016
Siège Social: 16, rue Antonin Raynaud 92300 LEVALLOIS PERRET.
Tel.: +33 (0)1 78 14 02 38 - Email: recrutement@yanport.com
