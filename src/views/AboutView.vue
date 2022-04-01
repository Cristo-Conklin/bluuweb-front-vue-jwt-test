<template>
  <div class="about">
    <h1>This is a protected page</h1>
  {{token}}
  </div>

</template>


<script>
import {mapState} from 'vuex'
export default ({
  computed: {
    ...mapState(['token'])
  },
  methods: {
    async datosProtegidos() {
      try {
        const res = await fetch('http://127.0.0.1:3001/api/dashboard', {
          headers: {
            'Content-Type': 'application/json',
            'auth-token': this.token
          },
        })

        const dataDB = await res.json()
        console.log('UI', dataDB);

      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.datosProtegidos()
  }
})
</script>