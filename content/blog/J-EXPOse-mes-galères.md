---
title: "J-EXPOse-mes-galères"
description: "Au détour d'une conversation, j'ai pris conscience de ma dépendance à certains outils non nécessaires comme Oh My Zsh par simple effet de mode."
head:
  meta:
    - name: "J'EXPOse mes galères"
      content: 'blog, apprentissage, expo, frameworks, react native'
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Axel Vair'
    - name: 'copyright'
      content: '© 2025 axelvair.fr'
    - name: 'og:title'
      content: 'Bienvenue sur axelvair.fr'
publishedAt: 2025-01-22 20:00:00
toc: true
---

# J'EXPOse mes galères
Néophyte total dans le développement mobile et par ailleurs plutôt accoutumé à l’environnement Apple, mon projet nécessite que je développe une application cross-plateforme à l’aide de React Native et Expo pour le frontend, Symfony le backend.

## Cela ne fait pas d'émules
Au début de mon aventure tout se passait pour le mieux, assez rapidement j’ai réussi à lancer mon serveur frontend, à créer mes premiers composants, entre deux crashs inopinés de mon émulateur. C’est avec un simple login/register et une première requête POST que le drame a commencé. Sans que je sache
pourquoi, **mes requêtes étaient toutes rejetées** les unes après les autres **via mon émulateur Android mais fonctionnaient avec le navigateur** de ma machine.

Pas de panique, direction Stackoverflow. Les collègues conseillent de changer le proxy du téléphone émulé et d’y mettre l’IP réelle de ma machine, mince… ça ne fonctionne pas, et d’ailleurs ça ne semble pas fonctionner pour grand monde. Toujours sans paniquer, je suis le conseille de passer par un tunnel pour avoir le même réseau sur l’émulateur et la machine. Après tout, c’est logique, c’est pertinent, je fonce. Mince, ça ne fonctionne toujours pas… la panique pointe le bout de son nez.

## La solution à mon problème
Après des heures de recherches, la désactivation de mon pare-feu machine, l’autorisation au réseau local d’Android Studio dans les paramètres macOS, le changement de proxy de l’émulateur, me voilà à court d’idées… rien ne fonctionne et me voilà à remettre en question tous mes choix de vie… jusqu’à ce que je tombe sur un commentaire daté de 2021, un tout petit commentaire :  noyé dans le flot noir de recommandations qui ne fonctionnent pas : « So, if someone's developing inside an Android emulator then you can use this IP address. « http://10.0.2.2 » And don't forget to add the PORT number of your localhost server. Eurekâ !

Je remets en place mon environnement de travail habituel pour être certain que ce ne fut pas la cause du problème, et au lieu de faire un appel de mon API avec l’habituel « http://localhost:8000/api/register » je fais un appel à « http://10.0.2.2:8000/api/register » (8000 étant le port de mon serveur backend), je relance mon serveur front avec « npx expo start —tunnel » … et ça fonctionne !

J’avais entendu parler des galères d’Expo mais je ne pensais pas que cela me poserait problème à ce point. Il m’a fallu m’armer de patience pour appréhender le monstre mais je ne cache pas que quelques-uns de mes précieux cheveux n’ont pas résisté. En l’espoir de sauver les cheveux des autres, j’écris cet article. Toi qui me lis, j’espère qu’il te sera utile. 

