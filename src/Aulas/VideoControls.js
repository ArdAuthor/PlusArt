import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const VideoControls = ({ isPlaying, onPlayPause, onSeek }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPlayPause} style={styles.controlButton}>
                <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
            </TouchableOpacity>
            {/* Add more custom controls here */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
    },
    controlButton: {
        marginHorizontal: 10,
    },
});

export default VideoControls;