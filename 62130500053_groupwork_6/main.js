const constraints = {
    Username: {
        presence: true,
    },

    Email: {
        presence: true,
    },

    Password: {
        presence: true,
    },
    Fullname: {
        presence: true,
    },
    Title: {
        presence: true,
    },
    Language: {
        presence: true,
    },
    
    
}

const profile = {
    data() {
        return {
            fname : 'Paweena ',
            lname : 'Thongyan',
            role : 'Student',
            show : true,
            Articles : 2,
            Followers : 663,
            Ratings : 7,
            show : true,
            img : "./images/cat.png",

            Email : null,
            Username : null,
            Password : null,
            Fullname : null,
            Title : null,
            Language : null,
            Language_list: [{Language_id: 1, Language_name:'Thai'},
                            {Language_id: 2, Language_name: 'English'},
                            {Language_id: 3, Language_name: 'Japaness'}],
            errors: null,
        }
    },
    methods: {
        checkForm() {
            this.errors = validate({
                Username: this.Username,
                Email: this.Email,
                Password: this.Password,
                Fullname : this.Fullname,
                Title : this.Title,
                Language : this.Language,}, constraints)
                if(this.errors){
                    e.preventDeault();
                }
                if (!this.errors) {
                    alert("Registered successfully.")
                }
        }

    }

}
var mounteApp = Vue.createApp(profile).mount('#profile')