import { defineStore } from "pinia";

export const useCardStore = defineStore({
    id: 'card',
    state: () => ({
        products: [] as cardItem[]
    }),
    actions: {
        addToCard(item: any) {
            this.products.push(item)
        },
    },

})