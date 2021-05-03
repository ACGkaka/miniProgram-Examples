App({
  globalData: {
    // InnerAudioContext实例
    bgmAudioContext: {},
    // 背景音乐地址
    // 欢快的音乐：https://6465-demo-p9hhp-1300526081.tcb.qcloud.la/toky/backgroundmusic.mp3?sign=db2895a2030cea0242a274d23354cf04&t=1575194113
    // 遇见-孙燕姿：https://mp3.jiuku.9ku.com/hot/2004/07-17/42702.mp3
    bgm_src: "https://6465-demo-p9hhp-1300526081.tcb.qcloud.la/toky/backgroundmusic.mp3?sign=db2895a2030cea0242a274d23354cf04&t=1575194113",
    music_on: true, // 背景音乐开始时, 图片是否转动
    music_playing: false // 背景音乐是否播放
  },
  onLaunch: function() {
    this.globalData.bgmAudioContext = wx.createInnerAudioContext();
    this.globalData.bgmAudioContext.src = this.globalData.bgm_src;
    this.globalData.bgmAudioContext.loop = true; // 循环播放
    wx.hideHomeButton();
    
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        
        //导航高度
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail(err) {
        console.log(err);
      }
    })
  }
})