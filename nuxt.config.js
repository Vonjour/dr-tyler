require('dotenv').config()

import drInfo from './assets/json/drInfo';
import blogs from './static/json/articles';
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : 'http://localhost:3000/'

//console.log(drInfo);
console.log(blogs);
console.log(drInfo);


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Dr. Samuel Lee — Spiritual Psychiatry',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Los Angeles Based Holistic and Integrative Psychiatrist Specialist' },
      { hid : 'keywords', name: 'keywords', content: 'psychiatrist, holistics, integrative, breath work, spritual'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  plugins: ['~/plugins/vue-social-sharing', '~/plugins/contentful', '~/plugins/butter'],

  modules: [
    // provide path to the file with resources
    'bootstrap-vue/nuxt', '@nuxtjs/dotenv', '@nuxtjs/google-analytics'
  ],

  'google-analytics': {
    id: 'UA-133451612-1'
  },

  env: {
    baseUrl : baseUrl,
  },

  css: [
    { src: './styles.scss', lang: 'scss' },
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },



  generate: {
    routes: function(){
      let articles = blogs.map((article) => {
        return {
          route: '/blog/' + article.slug,
          payload: article
        }
      });
      let conditions = drInfo.conditions.map((condition) => {
        return {
          route: '/services/' + condition.path,
          payload : condition
        }
      })
      let videos = drInfo.videos.map((video) => {
        return {
          route: '/videos/' + video.url_path,
          payload: video
        }
      })
      console.log(conditions);
      return[...articles, ...conditions, ...videos]
    } 
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}