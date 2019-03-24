/* global api */
<head>
  <!-- Required meta tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <title>My first BootstrapVue app</title>
  <!-- Required Stylesheets -->
  <link
    type="text/css"
    rel="stylesheet"
    href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"
  />

  <!-- Required scripts -->
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/babel-polyfill@latest/dist/polyfill.min.js"></script>
  <script src="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.js"></script>
</head>
<template>
  <div class="hello">
    <div>
        <form @submit.prevent="submitForm">
            <center><table style="border: 12px solid transparent">
            <tr>
                <th><label>Nis Siswa</label>
                <br/><input type="text" v-model="siswa.nis"></th>
            </tr>
            <tr>
                <th><label>Nama Siswa</label>
                <br><input type="text" v-model="siswa.nama"></th>
            </tr>
            <tr>
                <th><label>Jenis Kelamin</label>
                <br><select v-model="siswa.jk">
                        <option disabled selected>PILIH JK</option>
                        <option value="L">Laki-Laki</option>
                        <option value="P">Perempuan</option>
                    </select>
                </th>
            </tr>
            <tr>
                <th><label>Kelas Siswa</label>
                <br><input type="text" v-model="siswa.kelas"></th>
            </tr>
            <tr>
                <th><label>Alamat Siswa</label>
                <br><textarea v-model="siswa.alamat"></textarea></th>
            </tr>
            <tr>
                <td style="text-align:right;">
                    <button type="submit" style="background-color:lime;margin-right:10%; margin:2px 2px;border:0">Save</button>
                </td>
            </tr>
            </table></center>
        </form>
    </div>
  </div>
</template>

<script>
import { api } from '@/helper/api.js'
export default {
  name: 'Create',
  data () {
    return {
      siswa: {
        id: null,
        nis: '',
        nama: '',
        jk: '',
        alamat: ''
      },
      msg: 'Welcome to Your Uvuvwevwevwe Onyetenyevwe Ossas',
      number: 1,
      arrayX: {
        x: 'array1',
        y: 'array2'
      }
    }
  },
  mounted () {
    let id = this.$route.params.id
    if (id) {
      api.get('/siswa/' + id).then(res => {
        this.siswa = res.data.result
      })
    }
  },
  methods: {
    submitForm () {
      let data = this.siswa
      let url = 'siswa'

      if (this.siswa.id) {
        url += '/' + this.siswa.id
      }

      api.post(url, data).then(res => {
        if (res.data.status === 'success') {
          this.$router.push('/add')
        } else {
          console.log(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
    }
    // get () {
    //   api.get('siswa').then(res => {
    //     if (res.data.status === 'success') {
    //       this.data_siswa = res.data.result
    //     } else {
    //       console.log(res.data.message)
    //     }
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
th {
  text-align:left;
}
input,select,textarea {
    width: 150px;
    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
    border-bottom: 1px solid #42b983;
}
</style>
