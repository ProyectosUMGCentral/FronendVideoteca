import Api from '@/services/Api'

export default {
  getPlayList() {
    return Api().get('/playlist/userPlaylist')
  },
  getUserPlaylistDetail(id) {
    return Api().get(`/playlist/${id}/getUserPlaylistDetail`)
  }
}