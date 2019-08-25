import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList, fetchJobsList, fetchAskList} from "@/api/index.js";
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
    state: {
      news: [],
      jobs: [],
      ask: [],
     
    },
    allUsers:[
      {id:1, name:"miamimu" ,email:"qw04011@gmail.com", password:"123456" }
  ],
  isLogin: false,
  isLoginError:false,
  userInfo:null,
 
  },
  getters: { 
    fetchedAsk(state) {
      return state.ask;
    },
 
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    LoginSuccess(state){
      state.isLogin=true
      state.isLoginError=false
    },
    LoginError(state){
      state.isLogin=false
      state.isLoginError=true
    },
    logout(state){
      state.isLogin =false
      state.isLoginError=false
      state.userInfo=null
    }
  },
  actions: {
      
  FETCH_NEWS(context) {
  
    fetchNewsList()
      .then(response => {
        console.log(response.data);
       
        context.commit("SET_NEWS", response.data); 
      })
      .catch(error => {
        console.log(error);
      });
  },
 
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then(response => {
        context.commit("SET_ASK", response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
   login({state,commit}, signObj){
     let selectedUser =null
     state.allUsers.forEach(user=>{
       if(user.email === signObj.email) selectedUser=user
     })
    if(selectedUser===null || selectedUser.password !== signObj.password)
     commit("LoginSuccess")
     else{
       commit("LoginSuccess", selectedUser)
       router.push({name : "home"})
     }
     
   },
   logout({commit}){
     commit("logout")
     router.push({ name:"home" })
   }
  }
})
