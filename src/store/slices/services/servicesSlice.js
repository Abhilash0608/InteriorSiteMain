import { createSlice } from '@reduxjs/toolkit'
import { serviceData } from '../../../utils/servicesData'
const servicesSlice = createSlice({
  name: 'services',
  initialState: {

currentService:serviceData[0],
  },
  reducers: {
    selectSerivce:(state,action)=>{
      state.currentService = action.payload
    }
    
  },
})
export const { selectSerivce } = servicesSlice.actions
export default servicesSlice.reducer