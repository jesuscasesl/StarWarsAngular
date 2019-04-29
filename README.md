# StarWarsAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.


## Web

https://jesuscasesl.github.io/StarWarsAngular/#/home


## Install

`git clone https://github.com/jesuscasesl/StarWarsAngular.git`

`cd StarWarsAngular`

`npm i`


## Server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Deploy

`npm install -g angular-cli-ghpages`

`ng build --prod --base-href https://[user-name].github.io/StarWarsAngular/`

`ngh --dir=dist/StarWarsAngular`


# API

https://swapi.co


# Films
- Epi1, The Phantom Menace
- Epi2, Attack of the Clones
- Epi3, Revenge of the Sith
- Epi4, A New Hope
- Epi5, The Empire Strikes Back
- Epi6, Return of the Jedi
- Epi7, The Force Awakens


# Docu

La aplicación consiste en dos página principales: home y film.


## Home

Es la página principal de la aplicación. Consta de los siguientes bloques:

El primer bloque consiste en un carousel de los principales personajes de start wars.

El segundo es un historial de visitas. Se muestran las últimas 5 visitas ordenada por la visita más reciente, se guarda 5 para no hacer muy larga la lista. Se añade en una array, en el localstorage desde la página de film, el título de la película visitada. Cuando hay 5 títulos almacenado en el array, en la próxima visita se borra el título de la película menos reciente y se añade la nueva visita.

El siguiente bloque consiste en un buscador de películas, mostrando sugerencias, y dos botones para mostrar todas las películas, botón verde, o limpiar la búsqueda, boton rojo. Al escribir dos caracteres en el buscador, te muestra un listado de películas sugeridas que coincida con caracteres escritos. Es im portante saber que para realizar una busqueda, hay que realizarla mediente el titulo de la pelicula en ingles.

Y por último hay un panel donde se muestran las películas. Muestra todas las películas si pulsas te en el botón de mostrar películas o te muestra las películas sugeridas según los caracteres que introduces en el buscador.


## film

Esta página muestra información sobre una película. Muestra una imagen de la película, el título, número de episodio, año de estreno y una descripción. Contiene un botón para volver atrás a la página de “home”. En esta página se gestiona el historial guardando el título de la película en el localstorage.