module.exports = {
  build: {
    temp: '.temp'
  },
  data: {
    "menus": [
      {
        "name": "Home11",
        "icon": "aperture",
        "link": "index.html"
      },
      {
        "name": "Features",
        "link": "features.html"
      },
      {
        "name": "About",
        "link": "about.html"
      },
      {
        "name": "Contact",
        "link": "#",
        "children": [
          {
            "name": "Twitter",
            "link": "https: //twitter.com/w_zce"
          },
          {
            "name": "About",
            "link": "https: //weibo.com/zceme"
          },
          {
            "name": "divider"
          },
          {
            "name": "About",
            "link": "https: //github.com/zce"
          }
        ]
      }
    ],
    "pkg": require('./package.json'),
    "date": "2021-12-07T09:46:25.106Z"
  } 
}