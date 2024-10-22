const baseUrl = 'https://swapi.tech/api';
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},


		actions: {
			deleteFav:  (id) => {
				let newFav = getStore().favorites.filter((item) =>  item._id != id)
					setStore({
						favorites: newFav
					})
			},

			addFavorite: (fav)  => {
				let exist = getStore().favorites.some((item) => item._id == fav._id)
				if (!exist) {
					setStore({
						favorites: [...getStore().favorites, fav]
					})
				}else {
					let newFav = getStore().favorites.filter((item) =>  item._id != fav._id)
					setStore({
						favorites: newFav
					})
				}
			},

			getCharacters: async (page = 1, limit = 10) => {
				const resp = await fetch(baseUrl + `/people?page=${page}&limit=${limit}`)
				let data = await resp.json()
				for (let item of data.results) {
					fetch(item.url)
						.then((response) => response.json())
						.then((data) => {
							setStore({
								characters: [...getStore().characters, data.result]
							})
						})
				}

			},

			getPlanets: async (page = 1, limit = 10) => {
				const resp = await fetch(baseUrl + `/planets?page=${page}&limit=${limit}`)
				let data = await resp.json()
				for (let item of data.results) {
					fetch(item.url)
						.then((response) => response.json())
						.then((data) => {
							setStore({
								planets: [...getStore().planets, data.result]
							})
						})
				}
			},

			getVehicles: async (page = 1, limit = 10) => {
				const resp = await fetch(baseUrl + `/vehicles?page=${page}&limit=${limit}`)
				let data = await resp.json()
				for (let item of data.results) {
					fetch(item.url)
						.then((response) => response.json())
						.then((data) => {
							setStore({
								vehicles: [...getStore().vehicles, data.result]
							})
						})
				}
			}
		}
	}
};

export default getState
