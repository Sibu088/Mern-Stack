import axios from "axios";

class MovieDataService {
    getAll(page = 0) {
        return axios.get(`https://mern-stack-backend-i8nv.onrender.com?page=${page}`)
    }
    get(id) {
        return axios.get(`https://mern-stack-backend-i8nv.onrender.com/id/${id}`)
    }
    // find(title) {
    //     return axios.get(
    //         `http://localhost:5000/api/v1/movies?title=${title}`
    //     )
    // }
    find(query, by = "title", page = 0, rating) {
        return axios.get(
            `https://mern-stack-backend-i8nv.onrender.com?${by}=${query}&page=${page}&rating=${rating}`
        )
    }
    createReview(data) {
        return axios.post("https://mern-stack-backend-i8nv.onrender.com/review", data)
    }
    updateReview(data) {
        return axios.put("https://mern-stack-backend-i8nv.onrender.com/review", data)
    }
    deleteReview(id, userId) {
        return axios.delete(
            "https://mern-stack-backend-i8nv.onrender.com/review",
            { data: { review_id: id, user_id: userId } }
        )
    }
    getRatings() {
        return axios.get("https://mern-stack-backend-i8nv.onrender.com/ratings")
    }
}

const movieDataService = new MovieDataService();

export default movieDataService;
