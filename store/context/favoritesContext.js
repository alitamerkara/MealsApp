import { createContext, useState } from "react";

export const FavoritesContext =createContext({
    ids:[],
    addFav:(id)=>{},
    removeFav:(id)=>{}
})

const FavoritesProvider=({children})=>{
const [favorites,setFavorites]= useState([])
const addFavorite= (id)=>{
setFavorites(currFav => [...currFav, id])
}
const removeFavorite= (id)=>{
    setFavorites(fav=>fav.filter((mealId)=>mealId!==id))
    }
const value={
    ids: favorites,
    addFav:addFavorite,
    removeFav:removeFavorite 
}
return <FavoritesContext.Provider value={value}>
    {children}
</FavoritesContext.Provider>
};

export default FavoritesProvider