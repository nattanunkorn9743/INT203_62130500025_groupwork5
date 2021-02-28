const app = Vue.createApp({
    data() {
        return {
            msg: 'Hello & Welcome, Vue3',
            bigPhoto: false,
            photos: [{
                src: 'images/1.jpg',
                title: 'Autumn',
                favor: false,
                // sizePhoto: false,
                like: 1
            },
            {
                src: 'images/2.jpg',
                title: 'Hug & Love',
                favor: false,
                // sizePhoto: false,
                like: 2
            },
            {
                src: 'images/3.jpg',
                title: 'Good Night',
                favor: false,
                // sizePhoto: false,
                like: 3
            },
            {
                src: 'images/4.jpg',
                title: 'Architecture',
                favor: false,
                // sizePhoto: false,
                like: 4

            },
            {
                src: 'images/5.jpg',
                title: 'HarryPotter',
                favor: false,
                // sizePhoto: false,
                like: 5
            },
            {
                src: 'images/6.jpg',
                title: 'Building',
                favor: false,
                // sizePhoto: false,
                like: 6
            },
            {
                src: 'images/7.jpg',
                title: 'Mountain',
                favor: false,
                // sizePhoto: false,
                like: 7
            },
            {
                src: 'images/8.jpg',
                title: 'Oxygen',
                favor: false,
                // sizePhoto: false,
                like: 8
            },
            {
                src: 'images/9.jpg',
                title: 'Road',
                favor: false,
                // sizePhoto: false,
                like: 9
            },
            {
                src: 'images/10.jpg',
                title: 'Light',
                favor: false,
                // sizePhoto: false,
                like: 10
            }

            ],

            input: {
                inputText: '',
                isshowSearch: false

            },
            preview: {
                isShowPreview: false,
                previewSrc: ''
            }
        }
    },
    methods: {
        // likePhoto(index) {
        //     this.photos[index].favor = !this.photos[index].favor


        // },
        // showSearch() {
        //     this.searchInput.isshowSearch = !this.searchInput.isshowSearch;
        // },
        // clickCencle(index) {
        //     this.input.isshowSearch = !this.sinput.isshowSearch;
        //     this.input.inputText = '';

        // },
        previewPic(photos) {
            for (let i = 0; i < this.photos.length; i++) {
                if (photos.like == this.photos[i].like) {
                    this.preview.previewSrc = this.photos[i].src;
                    this.preview.isShowPreview = true;
                
                }
              }
            
         
        }
    },
    computed: {
        countLove() {
            return this.photos.filter(t => !t.favor).length
        },
        searchforPicture(text) {

            return this.photos.filter(photo => { return photo.title.toLowerCase().includes(this.input.inputText.toLowerCase()) });
        }
    }



})
