# RepUASPWD
Tugas Akhir Azmi Saiful Fasha

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### About App

``` bash
# Deskripsi
E-sis ini merupakan aplikasi CRUD sederhana yang dibuat dengan menggunakan 
tiga buah elemen yaitu; Lumen, Vue dan Axios. Dengan cara menghubungkan frontend yang 
dijembatani oleh axios sehingga dapat mengambil data dari Lumen, selain itu dapat melakukan 
aksi menambah, mengubah dan menghapus data.

# Tata Cara
    >> Pertama kita buka xampp lalu aktifkan mySql dan import db_skul
    >> Selanjutnya nyalakan lumen ini dengan mengetikkan PHP5 Serve command di CLI
       `php -S localhost:8082 -t ./`  *localhost sesuaikan dengan Vue helper API
    >> Setelah itu kita dapat menjalankan npm run dev di Webpack Vue Frontend
    >> Akhirnya buka hot serve yang telah ada dan klik gambar di \Assets\Capture.png
       Saat tampil di dashboard frontend