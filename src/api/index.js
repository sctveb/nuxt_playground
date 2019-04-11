import axios from 'axios'

// 1. HTTP Request & Response 관련 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API 함수를 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}
function fetchAsksList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
function fetchUserInfoList(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}
function fetchCommentItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}


export {
    fetchNewsList,
    fetchAsksList,
    fetchJobsList,
    fetchUserInfoList,
    fetchCommentItem
}