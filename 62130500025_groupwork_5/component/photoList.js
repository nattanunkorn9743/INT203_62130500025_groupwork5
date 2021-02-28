console.log("LIST photo");
app.component('photo-list', {
    props: {
        photos: Object,
        index: Number


    },
    template:
        /*html*/
        `
              
            <p class="text-lg font-semibold">{{photos.title}}</p>
            <button v-on:click="previewPic(photos)" >
              <!-- <img  v-bind:src="photos.src" :class="[photos.sizePhoto? 'h-full w-full bg-black p-4 justify-center':'']" class="h-48 w-32" :alt="photos.title"> -->
              <img v-bind:src="photos.src"  class="h-48 w-32" :alt="photos.title"> 
            
            </button>
            
            <div class="flex flex-row justify-start space-x-1">
              <div v-show="photos.favor" class="text-red-300" >
                <span>like</span>
              </div>
    
              <button v-on:click="likePhoto(index)" :class="[photos.favor ? '':'hover\:bg-red-300']" class=" focus:outline-none ">
                <!-- "you can use "class = fill-current text-red-500" for changing to red color, original is black -->
                <svg class="" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>
    
    
    
  `,
    data() {
        return {
           
        }
    },
    methods: {
      previewPic(photos){
        this.$emit('preview-pic',photos 
        )
      },
      likePhoto(index){
        this.photos.favor = !this.photos.favor;
      }
       
    }
})
