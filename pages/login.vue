<template>
    <!--
         cols => untuk mengisi colom yang teriisi
         md=> membagi ruang column menjadi 4 bagian dari 12
              misalnya panjang baris colum itu 12. jika mdnya 4 berarti 
              12 / 4 = maka ada 3 bagian yg lebar colom 4
         offset=> mendorong dari kiri sebanyak 1
         offset-md => mendorong dari kiri 4 dari kanan 4
       
       -->
       <!-- <v-col cols="10" md="4" offset="1" offset-md="4"> -->
     <v-row>
        <v-col md="4" cols="10" offset-md="4">
         <v-card>
           <v-toolbar dark color="primary"> Login</v-toolbar>
             <v-card-text> 
              <!--pakai v-if untuk melogikakan message
              cara k2 pakai variable 
              isError = false
              v-if=isError

              ditaruh di catch this.isError = true
              -->
              <v-alert color="red lighten-2" v-if="message !=null">
                {{ $t(message) }}
              </v-alert>
               <v-form>
                 <v-text-field
                 label="Email"
                 required
                 v-model="email"
                 :rules="rules.email"
                 />
                 <v-text-field
                 label="Password"
                 type="password"
                 required
                 v-model="password"
                 :rules="rules.password"
                 />
              
               </v-form>
             </v-card-text>
             <v-card-actions>
               <v-spacer></v-spacer>
             <!-- <v-btn color="primary"  outlined @click="onsubmit">Register</v-btn> -->
             <!-- <v-btn 
             color="primary"  
             :disabled ="isLoading" => tambahkan function isLoading
             outlined >Register</v-btn> -->
             <v-btn 
             :loading="isLoading"
             @click="onSubmit"
             color="primary"  
             outlined >Login</v-btn>
 
 
             </v-card-actions>
         </v-card>
         <!--d-flex => class css utk membuat sejajar objek
             align-baseline => membuat rata
         -->
         <div class="d-flex align-baseline">
           <p>Kamu sudah punya akun?</p>

           <!--cara mengirim agar link ada parsing langguage atau selainnya
               maka pakai syintax js :
               1.pakai titik (:)
               2. pakai to (to)
               3. pakai kurung tutup "()"
               4. nama url linknya "en/register"

               contoh => :to=("en/register")

          -->
           <v-btn
           text
           :to="localePath('/register')"
           color="primary"
           :ripple="false"
           class="pl-1"
           >Register</v-btn>
         </div>
         <!-- <v-btn
           text =>utk menjadikan tombol menjadi tidak ada kotak
           to="/login"
           color="primary"
           outlined
           :ripple="false" menghilangkan efek klik
            class="pl-1" pl = padding left
 
           >Login</v-btn> -->
         
 
       </v-col>
     </v-row>
   </template>
   <script>
     export default{
         layout: 'auth', // merouting layout pada foldernya
         head:{
             title: 'Login'
         },
         data(){
          return{
            isLoading : false,
            message:null,
            form:{
              email:'',
              password:''
            },
            rules:{
              email:[
                // (v) => !!v || 'Email is required', => cara lama
                (v) => !!v || this.$t('FIELD_REQUIRED', {field:'email'}),
                (v) => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(v) || 'E-Mail must be valid',
                // (v) => 
              ],
              password:[
                // (v) => !!v || 'Password is required',
                (v) => !!v || this.$t('FIELD_REQUIRED', {field:'password'}),
                (v) => v?.length >=6 || this.$t('FIELD_MIN', {field:'password', min:'6'})
                // (v) => v?.length >=6 || 'Password must be at least 6 character',
              ],
            }
          }
         },
         methods:{
           onSubmit(){
            try{
              if(this.isLoading ==false){
            this.isLoading = true
            // this.$store.dispatch('auth/login', this.form)
            // .then(()=>{
            //   this.$router.push('/')
            // })
            // .catch(() =>{
            //   this.isLoading =false
            // })
              }
          }catch(error){
            console.log(error.response)
            this.message = error.response.data.message
          }
          setTimeout(()=>{
            this.isLoading = false
            }, 3000
            )
        }
         }
        }

        </script>