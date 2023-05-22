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
          <v-toolbar dark color="primary"> Register</v-toolbar>
            <v-card-text> 
              <v-form>
                <!-- <v-text-field
                label="Name"
                required => untuk validation
                v-model="fullname" => model || bisa ditambahkan name form karena field turunan dari form
                :rules="rules.fullname" => memasukkan dari rulles js yang dibuat
                /> -->
                <v-text-field
                label="Name"
                required
                :rules="rules.fullname"
                v-model="fullname"
                />
                <!-- <v-text-field
                label="Email"
                required
                //tambahkan @keydown bukan @change
                @keyDown="resetEmailExistMessage"
                v-model="form.email"
                :rules="rules.email"
                /> -->
                <v-text-field
                label="Email"
                required
                :rules="rules.email"
                v-model="email"
                />
                <v-text-field
                label="Password"
                type="password"
                :rules="rules.password"
                v-model="password"
                required
                />
                <v-text-field
                label="Confirm Password"
                type="password"
                :rules="rules.password_confirmation"
                v-model="password_confirmation"
                required
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
            outlined >Register</v-btn>


            </v-card-actions>
        </v-card>
        <!--d-flex => class css utk membuat sejajar objek
            align-baseline => membuat rata
        -->
        <div class="d-flex align-baseline">
          <p>Kamu belum punya akun?</p>
          <v-btn
          text
          to="/login"
          color="primary"
          :ripple="false"
          class="pl-1"
          >Login</v-btn>
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
        layout:'auth', // merouting layout pada foldernya
        head:{
            title:'AUTH'
        },
        //pakai function anonymous
        data(){
          return{

            //tambahkan variable baru utk validasi
            emailExist:false,
            isLoading:false,
            //model
            form:{
              fullname:'',
              email:'',
              password:'',
              password_confirmation:''
            },
            rules:{
              fullname:[
                (v)=> !!v || 'Fullname is required',
              ],
              email:[
                (v)=> !!v || 'E-mail is required',
                (v)=> /.+@.+\..+/.test(v) || 'E-mail must be valid',
              ],
              password: [
                (v) => !!v || 'Password is required',
                (v) => v?.length >= 6 || 'Password must be at least 6 character'
              ],
              password_confirmation:[
                (v) => !!v || 'Password confirmation is required',
                (v) => v === this.password || `'Password confirmation must be same with password ${v}'`
                //error not same karena memanggil model dengan form (objeknya) harunya langsung attribut
              ]
            }

          }
        },

        //pasang axios
        // methods:{
        //   async onSubmit(){
        //     this.$axios.$post('localhost/namamethodbackend', this.form)
        //   }
        // }
        //pasang axios

        // tambahkan trycatch untuk menghandel error
        // try{
                  //     this.$axios.$post('localhost/namamethodbackend', this.form)
        // }catch(error){
        //   if(error.response.data.message == 'EMAIL_ALREADY_EXIST')
        // alert('EMAIL_ALREADY_EXIST')
        // }
        // tambahkan trycatch untuk menghandel error
        


        // buat validasi 2 sisi email ketika kosong & email exist
        // methods:{
        //   async onSubmit(){
        //     try{
        //       if(this.$ref.form.validate()){
        //         await this.$axios.$post('https//alamatfunctionbackend', this.form)
        //       }
        //     }catch(error){
        //       console.log(error.response)
        //         if(error.response.data.message == 'EMAIL_ALREADY_EXIST'){
        //           this.emailExist=true
                  // this.$ref.form.validate()
        //         }
              
        //     }
        //   }
        // }


    //  methods:{
    //     // tambahkan variable reset emailexits

    //     resetEmailExistMessage(){
    //           this.emailExist = false
    //         },
    //       async onSubmit(){
    //         try{
    //           if(this.$ref.form.validate()){
    //             await this.$axios.$post('https//alamatfunctionbackend', this.form)
    //           }
    //         }catch(error){
    //           console.log(error.response)
    //             if(error.response.data.message == 'EMAIL_ALREADY_EXIST'){
    //               this.emailExist=true
    //               this.$ref.form.validate()
    //             }
              
    //         }
    //       }
    //     }

    methods:{
        resetEmailExistMessage(){
              this.emailExist = false
            },

          async onSubmit(){
            try{
              if(this.isLoading == false){
                this.isLoading = true // jika true tombol disabel
                this.$router.push('/auth')
              }
              
              // if(this.$ref.form.validate()){
                //=> tambahkan kondisi true diset setelah mengirim data
              //  await this.$axios.$post('https//alamatfunctionbackend', this.form)

            // }
            }catch(error){
              alert(error.response.data.message)
              console.log(error.response)
                if(error.response.data.message == 'EMAIL_ALREADY_EXIST'){
                  this.emailExist=true
                }
              
            }
            setTimeout(()=>{
            this.isLoading = false
            }, 3000
            )
          }

        }
       
    }
</script>

<!-- <template>
  <v-container class="bg-surface-variant">
    <v-row no-gutters>
      <v-col
        v-for="n in 12"
        :key="n"
        cols="12"
        sm="1" 
      >

  v-for="n in 12" => untuk memunculkan banyaknya column
        :key="n"
        cols="12" => jumlah kolom yang disediakan
        sm="1"  => untuk menentukan baris

        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template> -->