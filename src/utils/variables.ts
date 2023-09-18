import variablesModule from '../styles/variables.module.scss'

type Variables = {
  colors: Record<string, string>
  container: Record<string, string>
  breakpoint: Record<string, string>
}

const variables: Variables = {
  colors: {},
  container: {},
  breakpoint: {}
}
Object.keys(variablesModule).map((key) => {
  if (key.startsWith('colors-')) {
    variables.colors[key.slice('colors-'.length)] = variablesModule[key]
  } else if (key.startsWith('breakpoint')) {
    variables.breakpoint[key.slice('breakpoint-'.length)] = variablesModule[key]
  } else if (key.startsWith('container')) {
    variables.colors[key.slice('container-'.length)] = variablesModule[key]
  }
})

export { variables }
