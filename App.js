import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import InicioScreen from './src/screens/InicioScreen';
import ListaFilmesScreen from './src/screens/ListaFilmesScreen'
import ListaSeriesScreen from './src/screens/ListaSeriesScreen'
import DetalhesScreen from './src/screens/DetalhesScreen'
import SobreScreen from './src/screens/SobreScreen'
import ContatoScreen from './src/screens/ContatoScreen'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function FilmesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='ListaFilmes' component={ListaFilmesScreen} />
      <Stack.Screen name='Detalhes' component={DetalhesScreen} />
    </Stack.Navigator>
  )
}

function SeriesStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='ListaSeries' component={ListaSeriesScreen}/>
      <Stack.Screen name='Detalhes' component={DetalhesScreen}/>
    </Stack.Navigator>
  )
}


function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#e50914',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Filmes') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'Séries') {
            iconName = focused ? 'tv' : 'tv-outline';
          } else if (route.name === 'Menu') {
            iconName = focused ? 'home' : 'home-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })
      } >
      <Tab.Screen name='Menu' component={InicioScreen} />
      <Tab.Screen name='Filmes' component={ListaFilmesScreen} />
      <Tab.Screen name='Séries' component={ListaSeriesScreen} />
    </ Tab.Navigator >
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#141414',
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
        />
        <Drawer.Screen
          name='Sobre'
          component={SobreScreen} />
        <Drawer.Screen
          name='Contato'
          component={ContatoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}