console.log("Connected search");

app.component('photo-search', {

  props: {
    input: Object
  },
  template:
    /*html*/
    `
        <div class="flex items-center justify-between bg-black text-white h-10">
        <button  v-on:click="showSearch" class="material-icons content-center">
          search
        </button>
        
        <div v-show="input.isshowSearch" class=" ml-2 mr-10">
          <input 
           v-model="input.inputText" @keyup.enter="searchforPicture"class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
            type="input.inputText" placeholder="Please enter text for searching photos" >
          <button v-on:click="clickCencle "class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500">Cancel</button>
        
          <!-- <p> You favorite photo numbers: <span class="mx-2 text-lg">( {{countLove}} )</span>
          </p> -->
        </div>
      </div>
        
    `,
  // data() {
  //   return {
  //     isshowSearch: false,
     

  //   }
  // },

  methods: {
    showSearch() {
      this.input.isshowSearch = !this.input.isshowSearch;
      this.input.inputText = '';
      // this.$emit('search-photo',newText);

    },
    clickCencle(index) {
      this.isshowSearch = !this.isshowSearch;
      this.text = ' ';

    },
    searchforPicture(){
      this.$emit('searchfor-Picture');
    }

  }
})


