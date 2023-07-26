import { View, Image, Text, StyleSheet } from "react-native"

export default function Comments(props) {
    const profile = props.item;

    return (
        <View style={styles.container}>
            <View style={profile.thumbnail && styles.borderProfile}>
                {profile.thumbnail && (
                    <Image
                        style={styles.thumbnail}
                        source={{
                            uri: profile.thumbnail,
                        }}
                    />
                )}
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text}>{profile.comment}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignSelf: 'center',
        paddingVertical: 24,
        paddingHorizontal: 24,
        width: '90%',
        backgroundColor: 'rgba(94, 119, 255, 0.10)',
    },
    borderProfile: {
        width: 51,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(94, 119, 255, 0.10)',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#FFF",
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    containerText: {
        width: '74%',
        minHeight: 80,
        backgroundColor: 'rgba(94, 119, 255, 0.10)',
        padding: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#FFF",
    },
    text: {
        fontSize: 12,
        fontWeight: 400,
        color: '#FFF',
    }
});