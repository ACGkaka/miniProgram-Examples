// 全局变量
const app = getApp();
// InnerAudioContext实例
var audioCxt = app.globalData.bgmAudioContext;

Page({
 
  // 页面的初始数据
  data: {
    //音乐是不是开始
    music_on : true,
    //音乐是不是在播放
    music_playing :false
  },

  next: function() {
    wx.redirectTo({
      url: '../005/index',
    })
  },
 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    if(app.globalData.music_playing) {
      audioCxt.play();
    }
    this.setData({
      music_on: app.globalData.music_on,
      music_playing: app.globalData.music_playing
    })
    //音乐播放结束触发
    audioCxt.onEnded((res) =>{
      //重新播放
      audioCxt.seek(0);
      audioCxt.play();
    })
  },
 
  //播放按钮事件
  clickImg : function(){
    app.globalData.music_playing = !app.globalData.music_playing;
    this.data.music_playing = app.globalData.music_playing;
    if (app.globalData.music_playing) {
      audioCxt.play();
    } else {
      audioCxt.pause();
    }
    this.setData({
      music_playing: app.globalData.music_playing
    })
  }
})