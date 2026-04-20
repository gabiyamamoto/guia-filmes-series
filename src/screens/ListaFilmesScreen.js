import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

import dados from '../data/dados.json';

export default function ListaFilmesScreen({ navigation }) {

    const filmes = dados.filter(item => item.tipo === 'filme');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Encontre filmes, séries e muito mais...
            </Text>

            <FlatList
                data={filmes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate('Detalhes', { item })}
                    >
                        <Image source={{ uri: item.imagem }} style={styles.image} />

                        <View style={styles.info}>
                            <Text style={styles.nome}>{item.nome}</Text>

                            <Text style={styles.desc} numberOfLines={2}>
                                {item.descricao}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        padding: 15,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 20,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
    },
    image: {
        width: 120,
        height: 70,
        borderRadius: 10,
    },
    info: {
        marginLeft: 10,
        flex: 1,
    },
    nome: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
    },
    desc: {
        color: '#aaa',
        fontSize: 13,
    },
})
