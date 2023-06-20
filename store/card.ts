import { defineStore } from "pinia";

export const useCardStore = defineStore({
    id: 'card',
    state: () => ({
        products: [] as cardItem[]
    }),
    persist: true,
    actions: {
        addToCard(item: cardItem) {
            const existingItem = this.products.find(product => product.id === item.id);

            if (existingItem) {
                // If the item already exists in the cart, update the quantity
                existingItem.quantity += item.quantity;
            } else {
                // Otherwise, add the item to the cart
                this.products.push(item);
            }
        },
        updateQuantity(id: string, quantity: number){
            const item = this.products.find(product => product.id === id);
            if(item)
                item.quantity = quantity
        },
        removeItem(id: string){
            const index = this.products.findIndex(product => product.id === id);
            if (index !== -1) {
                this.products.splice(index, 1);
            }
        },
        getLineItems(){
            return this.products.map(item => ({
                price: item.default_price,
                quantity: item.quantity
            }));
        }
    },
})