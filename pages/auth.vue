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
                <v-text-field
                label="Name"
                required
                />
                <v-text-field
                label="Email"
                required
                />
                <v-text-field
                label="Password"
                type="password"
                required
                />
                <v-text-field
                label="Confirm Password"
                type="password"
                required
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
            <v-btn color="primary"  outlined>Register</v-btn>
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