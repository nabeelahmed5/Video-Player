import React, { useState } from 'react';
// React Native Components
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
// Expo Video 
import { Video } from 'expo-av';
// ScrollView For Buttons
import { ScrollView } from 'react-native'

const VideoPlayer = () => {

    // Videos links
    const Videos = [
    
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    
    ]

    // setState for Videoplayer videos and functions
    const [ VideoUrl, setVideoUrl ] = useState(0);

    // functions for change the value of setState - Start
    const VideoOne = () => {
      
        setVideoUrl(Videos[0])
    
    }

    const VideoTwo = () => {
      
        setVideoUrl(Videos[1])
    
    }

    const VideoThree = () => {
      
        setVideoUrl(Videos[2])
    
    }

    const VideoFour = () => {
      
        setVideoUrl(Videos[3])
    
    }

    const VideoFive = () => {
      
        setVideoUrl(Videos[4])
    
    }

    const VideoSix = () => {
      
        setVideoUrl(Videos[5])
    
    }
    // Functions End

    return (

        <View style={styles.mainContainer}>
            <View style={styles.videoPlayer}>

                <Video
                    source= {{uri: VideoUrl }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={false}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    useNativeControls
                    style={styles.video}
                />

            </View>
            <View style={styles.buttonContainer}>
                <ScrollView horizontal={true}>
        
                    <TouchableOpacity
                        style={styles.Button}
                        onPress={VideoOne}
                    >
                        <Text>Video 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={VideoTwo}
                    >
                        <Text>Video 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={VideoThree}
                    >
                        <Text>Video 3</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={VideoFour}
                    >
                        <Text>Video 4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={VideoFive}
                    >
                        <Text>Video 5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.Button}
                        onPress={VideoSix}
                    >
                        <Text>Video 6</Text>
                    </TouchableOpacity>
          
                </ScrollView>
            </View>
      </View>

    )
}

export default VideoPlayer

const styles = StyleSheet.create ({

    mainContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    videoPlayer:{
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height: '40%',
        width: '90%',
        marginTop: 150
    },

    video:{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%' 
    },

    buttonContainer:{
        flexDirection: 'row',
        height: '10%',
        width: '90%',
        marginVertical: 10
    },

    Button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8, 
        margin: 5, 
        backgroundColor: '#fff', 
        borderColor: '#000', 
        borderWidth: 2, 
        borderStyle: 'solid', 
        borderRadius: 50
    }

  })