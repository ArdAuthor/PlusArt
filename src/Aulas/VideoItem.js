import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function VideoItem(props) {

    const aula = props.item;
    
    function setNewData() {
        props.setCurrentVideo(props.dataVideos[aula.id])
        props.setOtherVideos(props.dataVideos.filter((item, index) => index !== aula.id))
    }

    return (
        <TouchableOpacity style={styles.container} onPress={setNewData}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{aula.title}</Text>
                <Text style={styles.subTitle}>{aula.subTitle}</Text>
            </View>
            <View
                style={
                    !aula.thumbnail && {
                        borderRadius: 10,
                        borderWidth: 2.3,
                        borderColor: '#D9D9D9',
                        width: 100,
                        height: 100,
                    }
                }>
                {aula.thumbnail && (
                    <Image
                        style={styles.image}
                        source={{
                            uri: aula.thumbnail,
                        }}
                    />
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        width: '90%',
        borderWidth: 0.7,
        borderColor: '#8157EE',
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 26,
        borderRadius:10,
        backgroundColor:'#141414'
    },
    subContainer: {
        width: '50%',
    },
    title: {
        fontSize: 18,
        fontWeight: 600,
        color: '#FFF',
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 600,
        color: '#fff',
    },
    image: {
        width: 140,
        height: 100,
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#fff'
    },
});
