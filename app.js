const app = Vue.createApp({
    data(){
        return{
            pass:"",
            passwordVisible:false,
            passStrength:" ",
            conditions:{
                uppercase:"rgba(255,0,0,0.5)",
                lowercase:"rgba(255,0,0,0.5)",
                specialchar:"rgba(255,0,0,0.5)",
                digit:"rgba(255,0,0,0.5)",
                passlen:"rgba(255,0,0,0.5)"
            }

        }
    },
    computed:{

    },
    methods:{
        togglePasswordVisibility(){
            this.passwordVisible = !this.passwordVisible;
        },
        calcStrength(){
            let count=0;
            for(let key in this.conditions){
                if (this.conditions[key] === "rgba(255,0,0,0.5)"){
                    count+=1
                }
            }
            if(count==0) this.passStrength="Excellent";
            else if( count==1) this.passStrength="Good";
            else if( count==2) this.passStrength="Average";
            else if( count==3) this.passStrength="weak";
            else if( count>=4) this.passStrength="bad";   

        }

    },
    watch:{
        pass(newValue){
            this.conditions.uppercase="rgba(255,0,0,0.5)";
            this.conditions.lowercase="rgba(255,0,0,0.5)";
            this.conditions.specialchar="rgba(255,0,0,0.5)";
            this.conditions.digit="rgba(255,0,0,0.5)";
            this.conditions.passlen="rgba(255,0,0,0.5)";
            if(newValue.length>=8){
                this.conditions.passlen="rgba(0,255,0,0.5)"
            }
            if(newValue){
                  for(let i=0;i<newValue.length;i++){
                    let unicode_value = newValue.charCodeAt(i);
                   if (unicode_value>=65 && unicode_value<=90){
                     this.conditions.uppercase="rgba(0,255,0,0.5)"
                   }
                   else if(unicode_value>=97 && unicode_value<=122){
                    this.conditions.lowercase="rgba(0,255,0,0.5)"

                   }
                   else if((unicode_value>=33 && unicode_value<=47)||(unicode_value>=58 && unicode_value<=63)){
                    
                    this.conditions.specialchar="rgba(0,255,0,0.5)"
                   }
                   else if(unicode_value>=48 && unicode_value<=57){
                    this.conditions.digit="rgba(0,255,0,0.5)"
                    
                   }
                }
                
            }
              this.calcStrength();

        }

    }
})