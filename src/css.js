const css = (theme) => {

  const themes = {
    main: {
      textColor: "",
      primaryColor: "",
      backgroundColor: "",
      navLinkColor: ""
    }
  }

  if (themes.hasOwnProperty(theme)) {
    return themes[theme]
  } else {
    return theme['main']
  }

}

export default css;
