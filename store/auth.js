export const state = () => ({
    accessToken : null,
    refreshToken:null,
    fullName:null
})

export const action ={
    async login({commit}, payload){
     try{

        const response = await this.$axios.post('/auth/login', payload)
        console.log(response)
        // commit('accessToken', response.data.access_token)
        // commit('refreshToken', response.data.refresh_token)
        // commit('fullName', response.data.fullName)

     }catch(error){
        throw new Error(error.response.data.message);
     }
    }
}