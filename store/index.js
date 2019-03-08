import Vuex from 'vuex';
import BlogPostsApi from '@/services/api/BlogPosts';
import Articles from '../static/json/articles.js';
import drInfo from '../assets/json/drInfo.js';
import API from '@/services/api/API';



const createStore = () => {
    return new Vuex.Store({
      state: {
        articles : Articles,
        drInfo : drInfo,
        chosenArticle : {}, 
      },
      getters : {
        GET_ARTICLES: (state) => {
          return state.articles
        },
        getArticleBySlug: (state) => (slug) => {
            return state.articles.find(article => article.slug === slug)
        },
        getServicesBySlug: (state) => (slug) => {
            return state.drInfo.conditions.find(condition => condition.path == slug)
        },
        getVideoBySlug: (state) => (slug) => {
          return state.drInfo.videos.find(video => video.url_path == slug)
        }
      },
      mutations: {
        SET_POSTS (state, payload){
          state.articles = payload;
        }
      },
      actions: {
        GET_LIST (context){
          return BlogPostsApi.getPosts().then(posts => {
            context.commit('SET_POSTS', posts.data)
          }).catch(error => console.log(error))
          .finally(() =>{
            this.loading = false
          })      
        }
      }
      
    })
  }
  
export default createStore
  
