import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from './src/screens/InicioScreen';
import ListarFilmesScreen from './src/screens/ListaFilmesScreen'
import ListarSeriesScreen from './src/screens/ListaSeriesScreen'
import DetalhesScreen from './src/screens/DetalhesScreen'
import SobreScreen from './src/screens/SobreScreen'
import ContatoScreen from './src/screens/ContatoScreen'

import { StackScreen } from 'react-native-screens';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FilmesStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#141414' },
      headerTintColor: '#fff',
      headerTitleStyle: { color: '#fff' },
    }}>
      <Stack.Screen name='ListaFilmes' component={ListaFilmesScreen} options={{ title: 'Filmes' }}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <TabNavigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Filmes') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'Séries') {
            iconName = focused ? 'tv' : 'tv-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#e50914',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}>
      <Tab.Screen name='Filmes' component={ListarFilmesScreen} />
      <Tab.Screen name='Séries' component={ListarSeriesScreen} />
    </TabNavigator >
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#6d6969',
            width: 280,
          },
          drawerLabelStyle: {
            color: '#fff',
            fontSize: 16,
          },
          drawerActiveTintColor: '#e50914',
          drawerInactiveTintColor: '#ccc',
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerTintColor: '#fff',
        }}
      >
        <Drawer.Screen
          name='Início'
          component={TabNavigator}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name='Sobre'
          component={SobreScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="information-circle-outline" size={size} color={color} />
            ),
          }} />
        <Drawer.Screen
          name='Contato'
          component={ContatoScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="mail-outline" size={size} color={color} />
            ),
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}