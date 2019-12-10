Para, desde npm, comprobar las dependencias de una librería en concreto:

`
npm info <librería> peerDependencies
`

Para instalar una librería con sus dependencias:

`
npx install-peerdeps --dev <librería>
`

Para utilizar 'eslint-config-standard' como guia de estilo js, las dependencias son

~~~
eslint
eslint-plugin-import
eslint-plugin-node
eslint-plugin-promise
eslint-plugin-standard
~~~

Para utilizar 'eslint-config-airbnb-base' como guia de estilo js, las dependencias son

~~~
eslint
eslint-plugin-import
~~~


