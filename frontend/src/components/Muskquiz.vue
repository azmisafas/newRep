<template>
  <div class="hello">
    <h1><i>M</i>usikuis</h1>
    <p v-if="poin <= batas">
      <my>Coba lagi kawan</my>
    </p>
    <owaw v-else>Anda telah lulus di Muskpedia Congrats</owaw>
    <p>{{ 'Poin Anda '+poin }}</p>
    <div v-for="(loop, index) in arrays" :key="loop.soal" :options="loop.soal">
      <p>{{index+1}}. {{ loop.soal}}</p>
      <center>
      <table style="width:170px">
      <tr v-for="pilih in loop.pilihan" :key="pilih.pilihan" :options="pilih.pilihan">
        <td>
          <input type="radio" :name="( 'name' + index )"
                  @click="checkJawaban(index,pilih.pilihan)"
                  :value="pilih.pilihan" >
        </td>
        <td>
          {{ pilih.pilihan }}
        </td>
      </tr>
      </table>
      </center>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      batas: 75,
      show: true,
      poin: 0,
      kunjaw: [],
      arrays: [
        {
          soal: 'Pada hari .... kuturut ayah kekota',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Minggu' },
            { pilihan: 'Senin' },
            { pilihan: 'Sabtu' }
          ],
          kunjaw: 'Minggu'
        },
        {
          soal: 'Disini Senang ....',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Karena Disini' },
            { pilihan: 'Senang Dimana' },
            { pilihan: 'Disana Senang' }
          ],
          kunjaw: 'Disana Senang'
        },
        {
          soal: 'Akulah Arjunaaaa Yang Mencari ....',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Ninja' },
            { pilihan: 'Cinta' },
            { pilihan: 'Sitbad' }
          ],
          kunjaw: 'Cinta'
        },
        {
          soal: 'Luruh ....',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Harapku' },
            { pilihan: 'Hacepku' },
            { pilihan: 'Handapku' }
          ],
          kunjaw: 'Harapku'
        },
        {
          soal: 'Can`t Help Fallin` In Love ... You',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Foreach' },
            { pilihan: 'With' },
            { pilihan: 'As' }
          ],
          kunjaw: 'With'
        },
        {
          soal: '/ ada di',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'GnR' },
            { pilihan: 'Over itune' },
            { pilihan: 'Ini Talkchow' }
          ],
          kunjaw: 'GnR'
        },
        {
          soal: 'Ain\'t it Fun ...',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Livin\' in the wild world' },
            { pilihan: 'For u' },
            { pilihan: 'Dat $ticc' }
          ],
          kunjaw: 'Livin\' in the wild world'
        },
        {
          soal: 'Where do u sleep...',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'A Year Ago' },
            { pilihan: 'Thousand Years Later' },
            { pilihan: 'Yesterday' }
          ],
          kunjaw: 'Yesterday'
        },
        {
          soal: 'Tikus Makan Sabun merupakan lagu...',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Suki-Suki' },
            { pilihan: 'Naki-Naki' },
            { pilihan: 'Anak-Anak' }
          ],
          kunjaw: 'Anak-Anak'
        },
        {
          soal: 'Hijau Daun',
          answer: String,
          check: true,
          pilihan: [
            { pilihan: 'Band' },
            { pilihan: 'Solo' },
            { pilihan: 'Girlband' }
          ],
          kunjaw: 'Band'
        }
      ]
    }
  },
  methods: {
    hideTitle () {
      this.show = !this.show
    },
    checkJawaban (i, jawab) {
      if (this.arrays[i].kunjaw === jawab) {
        if (this.kunjaw.indexOf(i) === -1) {
          this.poin += 10
          this.kunjaw.push(i)
        }
      }
      if (this.arrays[i].kunjaw !== jawab) {
        if (this.kunjaw.indexOf(i) !== -1) {
          this.poin -= 10
          this.kunjaw.splice(this.kunjaw.indexOf(i), 1)
        }
      }
      this.arrays[i].check = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0
}
ul {
  list-style-type: none;
  padding: 0
}
li {
  display: inline-block;
  margin: 0 10px
}
my {
  color: red
}
owaw {
  color: green
}
</style>
