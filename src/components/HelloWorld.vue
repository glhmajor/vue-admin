<template>
	<h1>test count: {{count}}</h1>
	<button @click="add">add</button>
	<van-button type="primary" size="large" url="/vant/mobile.html">URL 跳转</van-button>
	<van-button size="large" @click="print">print</van-button>
</template>

<script>
	import { ref } from 'vue'
	
	export default {
	  setup() {
	    const count = ref('1212')
	    const add = () => {
	      count.value++
	    }
	    const print = () => {
	      console.log(count.value)
	    }
	    return {
	      count,
	      add,
	      print
	    }
	  }
	}
</script>