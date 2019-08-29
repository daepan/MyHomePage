<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
        <v-flex xs12>
            <v-alert
                class="mb-3"
                :value="isLoginError"
                type="error">
                이메일과 비밀번호를 확인해주세요
            </v-alert>
            <v-alert
            class="mb-8"
                :value="isLogin"
                >
                로그인되었습니다.
            </v-alert>
            <v-card>
                <v-toolbar flat height="60">
                    <v-toolbar-title>로그인</v-toolbar-title>
                </v-toolbar>
                
            <div class="pa-8">
                <v-text-field
                 v-model="email"
                label="이메일을입력하세요"
                >
                </v-text-field>
                <v-text-field
                v-model="password"
                type="password"
                label="비밀번호를입력하시오"
                >
                </v-text-field>
            </div>
            
            <v-btn 
                color="blue"
                large
                block
                depressed
                @click="login({
                    email,
                    password})"
            >
            로그인
            </v-btn>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'


export default {
    props:{
        type:[]
    },
    data(){
        return{
            email:null,
            password:null,
            isError:false,
            loginSuccess:false
        }
    },
    computed:{
        ...mapState(["isLogin","isLoginError"])
    },
    methods:{
        ...mapActions(['login']),
     
    },
}
</script>
<style>

</style>