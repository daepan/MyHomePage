<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
        <v-flex xs12>
            <v-card>
                <v-toolbar flat height="30">
                    <v-toolbar-title>로그인</v-toolbar-title>
                </v-toolbar>
                <div class="pa-8">
            <v-text-field
             v-model="email"
                type="email"
            label="이메일을 입력하세요">


            </v-text-field>
            <v-text-field
                v-model="password"
                type="password"
                label="비밀번호를 입력하시오"
            >

            </v-text-field></div>
            </v-card>
        </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>