import Colors from './colorsConfig'

const globalThemes = {
  app: (darkMode) => ({
    background: darkMode ? Colors.darkPurple : Colors.gray,
    color: darkMode ? Colors.white : Colors.black,
  }),
  button: (darkMode) => ({
    backgroundColor: darkMode ? Colors.yellow : Colors.green,
  }),
  card: (darkMode) => ({
    background: darkMode ? Colors.purple : Colors.white,
  }),
}

export default (dark, component) => globalThemes[component](dark)
