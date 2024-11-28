import React from 'react';
import { View, StyleSheet } from 'react-native';
 import Video from 'react-native-video';

const VideoPlayer = ({ url,deviceType }) => {
  return (
    <View style={styles.container}>
      {
        deviceType=='desktop' ? <video controls  style={styles.video} className="videoPlayer" src={url}></video>:
        <Video
        source={{ uri: url }}
        style={styles.video}
        controls
        resizeMode="contain"
      />
      }
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: 300,
  },
});

export default VideoPlayer;
