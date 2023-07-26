import { useNavigation } from '@react-navigation/native'

import { useRef, useState } from 'react';
import {
    View,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput,
    Text,
    FlatList,
    Image,
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import {
    SvgBack,
    SvgSearch,
    SvgDown,
    SvgUp,
} from '../components/CustomIcons';

import VideoItem from './VideoItem';
import Comments from './Comments';

export default function Aula() {

    const navigation = useNavigation();

    function Voltar() {
        navigation.navigate('TabRoutes')
    }

    const video = useRef(null);
    const [status, setStatus] = useState({});

    const [activeVideos, setActiveVideos] = useState(true);

    const data_videos = [
        {
            id: 0,
            title: 'Aula 1:',
            subTitle: 'Esboços de rosto',
            thumbnail: "https://i.pinimg.com/564x/13/f7/6c/13f76ca3e26cb3eb383aa175faa87776.jpg",
            video: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            comments: [
                {
                    comment: "Vídeo mt top 😎",
                    thumbnail: 'https://instagram.fbsb7-1.fna.fbcdn.net/v/t51.2885-19/332352159_461586222759709_5183914634105929829_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbsb7-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=58PUlkIXATwAX-YoNje&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB00hJy6ZKHeX43RAm70EVH6XggCfXbvJC82weVS4zCBQ&oe=64C1E50B&_nc_sid=8b3546',
                },
                {
                    comment: "Gostei tbm",
                    thumbnail: 'https://instagram.fbsb7-1.fna.fbcdn.net/v/t51.2885-19/361573107_989260078866818_923746069688118841_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbsb7-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=2Bl7zxlZvlAAX9lFWMh&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC0FvGpytj_VHMXKuqBm9cX6l1HLizxDmvdSAEUZ7d4fg&oe=64C11491&_nc_sid=8b3546',
                },
                {
                    comment: "Esta parte do Aplicativo está mt bem programada. Vou recomendar pros meus amigos!",
                    thumbnail: 'https://instagram.fbsb7-1.fna.fbcdn.net/v/t51.2885-19/360657050_889015349314674_3943446151515712637_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbsb7-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=qJvpSV9Xy8YAX9XRgtX&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfD_5t5UXxPlBepQUaUfoJ8AzMW16xQrOC4cPm2vBUf9PQ&oe=64C20956&_nc_sid=8b3546',
                },
                {
                    comment: "Interessante!",
                    thumbnail: 'https://instagram.fbsb7-1.fna.fbcdn.net/v/t51.2885-19/357223649_2003364270014597_3675936683942783448_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fbsb7-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=2kw2H-NDhuAAX_GsTfS&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCR9vdMdQjolVpxChLzVova-VBQx8BY0tAvGfKjr8m8bw&oe=64C201F4&_nc_sid=ee9879',
                },
                {
                    comment: "Não gostei 😡👍!",
                    thumbnail: 'https://play-lh.googleusercontent.com/QcfhlXm32JDnj3WM2-TSL78ad99x4slovX4OzCSLSPU3uRN-mGXpKyM_yeXiewhz0Lk',
                },
            ]
        },
        {
            id: 1,
            title: 'Aula 2:',
            subTitle: 'Síndrome da mesma face',
            thumbnail: 'https://2.bp.blogspot.com/-V-I6nqkWZjM/UhhrN-VSxxI/AAAAAAAAAVY/yx8613mBbpE/s1600/3.png',
            video:'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'
        },
        {
            id: 2,
            title: 'Aula 3:',
            subTitle: 'Vício do 3/4',
            thumbnail: 'https://www.erikalancaster.com/uploads/4/4/3/3/4433786/editor/forward-vs-angle.jpeg?1516393951',
        },
        {
            id: 3,
            title: 'Aula 4:',
            subTitle: 'Síndrome do impostor',
            thumbnail: 'https://i.scdn.co/image/ab6761610000e5eba3e9754eed3df8ee2e7d978f',
        },
    ];

    // const currentVideo = data_videos[0];
    // const otherVideos = data_videos.filter((item, index) => index !== 0);

    const [currentVideo, setCurrentVideo] = useState(data_videos[0]);
    const [otherVideos, setOtherVideos] = useState(data_videos.filter((item, index) => index !== 0));

    return (
        <View style={styles.container}>
            <StatusBar style="light" translucent={false} backgroundColor="#000" />
            <View style={styles.header}>
                <TouchableOpacity onPress={Voltar}>
                    <SvgBack />
                </TouchableOpacity>
                <TextInput
                    style={{
                        width: '68%',
                        height: 44,
                        borderColor: '#7F2DE8',
                        borderWidth: 3,
                        borderRadius: 10,
                        color: '#FFF',
                        paddingHorizontal: 20,
                    }}
                    placeholder='Pesquisar'
                    placeholderTextColor={'#FFFFFF8F'}
                />
                <TouchableOpacity>
                    <SvgSearch />
                </TouchableOpacity>
            </View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: currentVideo.video,
                }}
                useNativeControls={true}
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            {/* <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View> */}
            <View
                style={{
                    width: '100%',
                    marginTop: 10,
                    marginBottom: 16,
                    paddingHorizontal: 16,
                    justifyContent: 'center',
                }}>
                <Text style={styles.title}>{`${currentVideo.title} ${currentVideo.subTitle}`}</Text>
            </View>

            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#7F2DE8',
                    paddingHorizontal: 20,
                    marginBottom: 22,
                    height: 64,
                }}
                onPress={() => setActiveVideos(!activeVideos)}>
                <View style={styles.tag}>
                    <Text style={styles.tagText}>Estilos e traços</Text>
                </View>

                <TouchableOpacity onPress={() => setActiveVideos(!activeVideos)}>
                    {activeVideos ? <SvgDown /> : <SvgUp />}
                </TouchableOpacity>
            </TouchableOpacity>

            {activeVideos ?
                <FlatList
                        data={otherVideos}
                        renderItem={({item}) => {
                            return <VideoItem item={item} dataVideos={data_videos} setCurrentVideo={setCurrentVideo} setOtherVideos={setOtherVideos} />
                        }}
                        keyExtractor={(item) => item.id.toString()}
                    />
                 :
                <>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '100%', paddingHorizontal: 16, marginTop: 8, marginBottom: 24 }}>
                        <View style={
                            {
                                width: 51,
                                height: 51,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'rgba(94, 119, 255, 0.10)',
                                borderRadius: 100,
                                borderWidth: 1,
                                borderColor: "#FFF",
                            }
                        }>
                            <Image />
                        </View>
                        <TextInput
                            style={{
                                width: '68%',
                                height: 44,
                                borderColor: '#FFF',
                                borderWidth: 1,
                                borderRadius: 10,
                                color: '#FFF',
                                paddingHorizontal: 20,
                            }}
                            placeholder='Escreva um comentário...'
                            placeholderTextColor={'#FFFFFF8F'}
                        />
                    </View>
                    <FlatList data={currentVideo.comments} renderItem={Comments} />
                </>
            }

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 16,
        width: '100%',
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 232,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        color: '#FFF',
    },
    tagText: {
        fontSize: 16,
        fontWeight: 600,
        color: '#FFF',
    },
    tag: {
        backgroundColor: '#000',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
    },
});
