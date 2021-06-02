export const CHANGE_THEME = 'CHANGE_THEME' // тип дейтсвия, которое мы пытаемся совершить

export const handleThemeChange = (theme) => ({
  type: CHANGE_THEME,
  payload: theme
})

