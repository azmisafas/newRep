<template>
  <center><table style="" class='table'>
    <tr>
      <th>No</th>
      <th>Nis</th>
      <th>Nama</th>
      <th>Jenis Kelamin</th>
      <th>Action</th>
    </tr>
    <tr v-for="(siswa, i) in data_siswa" :key="i">
      <td>{{ i + 1 }}</td>
      <td>{{ siswa.nis }}</td>
      <td>{{ siswa.nama }}</td>
      <td>{{ siswa.jk }}</td>
      <td>
        <router-link :to="'/siswa/' + siswa.nis"></router-link>
        <button @click="deleteRow(siswa.nis)">delete</button>
      </td>
    </tr>
  </table></center>
</template>

<script>
import { api } from '@/helper/api.js'
export default {
  name: 'Siswa',
  data () {
    return {
      data_siswa: []
    }
  },
  methods: {
    get () {
      api.get('siswa').then(res => {
        if (res.data.status === 'success') {
          this.data_siswa = res.data.result
        } else {
          console.log(res.data.message)
        }
      }).catch(err => {
        console.log(err)
      })
      // deleteRow (nis) {
      //   api.deleteRow('siswa/' + nis).then(res => {
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
  },
  mounted () {
    this.get()
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
</style>
