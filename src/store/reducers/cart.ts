import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurantes } from '../../pages/Home'
import { CardapioItem } from '../../components/MenuList'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
  isCheckout: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckout: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardapioItem>) => {
      const dish = state.items.find((item) => item.id === action.payload.id)
      if (!dish) {
        state.items.push(action.payload)
      } else {
        alert('Esse prato já foi adicionado ao carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isCheckout = true
    },
    closeCheckout: (state) => {
      state.isCheckout = false
    }
  }
})

export const { add, open, close, remove, openCheckout, closeCheckout } =
  cartSlice.actions
export default cartSlice.reducer
