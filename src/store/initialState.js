const InitialState = {
    persons: {
        list: [],
        activePerson: null,
        editMode: false,
        personById: {}
    },
    posts: {
        list: [],
        addPostMode: false
    },
    albums:{
        list:[],
        addAlbumMode:false,
        albumById:{}
    },
    photos:{
        list:[],
    }
}

export default InitialState