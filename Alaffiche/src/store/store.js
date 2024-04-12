import { defineStore } from "pinia";

export const useStore = defineStore({
    state : ()=>({
        select: 0,
    }),
    actions:{
        selected(){
            this.select = 1;
        },
        unselected(){
            this.select = 0;
        }
    }
});