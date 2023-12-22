import { createSlice } from '@reduxjs/toolkit'
import { getCookies ,saveCookies } from '@/app/actions'

// const userSaved = localStorage.getItem('user')
const userSaved = getCookies('user').then((response) => {// const userInfo = userSaved ? JSON.parse(userSaved as any) : {
    console.log(userSaved)
    const userInfo:any = userSaved
    ? {
        isLogged: true,
        name: userSaved.name as Promise<any>,
        email: userSaved.email,
        image: userSaved.image
    } : {
        isLogged: false,
        name: '',
        email: '',
        image: ''
    }
    return userInfo
})

export const slice = createSlice({
    name:'user',
    initialState: {
        isLogged: userInfo ? userInfo.isLogged : false,
        name: userInfo ? userInfo.name : '',
        email: userInfo ? userInfo.email: '',
        image: userInfo ? userInfo.image : '',
    },
    reducers: {
        changeUser(state, {payload}) {
            const saveUser = payload
            ? payload
            : {
                isLogged: false,
                name: '',
                email: '',
                Image: '',
            }

            const { isLogged, name, email, image } = saveUser
            saveCookies(isLogged, name, email, image)
            localStorage.setItem('user', JSON.stringify(saveUser))
            
            return { 
                ...state,
                isLogged: payload.isLogged,
                name: payload.name,
                email: payload.email,
                image: payload.image
            }
        },
        logout(state) {
            localStorage.removeItem('user')
            return {
                ...state,
                isLogged: false,
                name: '',
                email: '',
                image: '',
            }
        }
    }
})

export const { changeUser, logout } = slice.actions

export const selectUser = (state:any) => state.user

export default slice.reducer