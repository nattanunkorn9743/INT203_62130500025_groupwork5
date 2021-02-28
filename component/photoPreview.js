app.component('photo-pre', {
    props: {
        photos: {
            type: Array,
            require: true
        }
    },
    template:
        /*html*/
        `  
        <div class="h-screen w-6xl bg-black flex justify-center m-10 mt-1.5" v-if="isShowPreview">
      <!-- <p class="text-2xl text-white font-semibold">{{photos.title}}</p> -->
      <img :src="previewSrc">
      <div @click="isShowPreview=false" class="w-10 h-10 absolute bg-red-400 right-40 mt-3.5 ">
        <div>
       <img src="https://image.flaticon.com/icons/png/512/14/14048.png" class="w-9 h-9 justify-center ">
      </div>
      </div>
    </div>  
`,
    methods: {
       
    }
})

