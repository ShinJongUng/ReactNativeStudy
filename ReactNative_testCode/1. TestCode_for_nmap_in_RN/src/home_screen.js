import React, {useState, useLayoutEffect, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';
import Geolocation, {GeoCoordinates} from 'react-native-geolocation-service';
import camera from './img/camera.png';

const requestPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (hasPermission) {
        return 'granted';
      } else {
        const status = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );

        if (status === 'granted') {
          return status;
        }
      }
    }
  } catch (e) {
    console.error(e);
  }
};

const HomeScreen = props => {
  const [location, setLocation] = useState();
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    });
  });
  useEffect(() => {
    getCurrentPosition();
  });

  const P0 = {latitude: 37.564362, longitude: 126.977011};
  const P1 = {latitude: 37.565051, longitude: 126.978567};
  const P2 = {latitude: 37.565383, longitude: 126.976292};
  let [markerSize, setMarkerSize] = useState();
  const getCurrentPosition = () => {
    requestPermission().then(result => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          pos => {
            setLocation({...pos.coords});
          },
          error => {
            console.error(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          },
        );
      } else {
        console.log('permission denied');
      }
    });
  };

  const changeOnCamera = props => {};
  return (
    <NaverMapView
      style={{width: '100%', height: '100%'}}
      showsMyLocationButton={true}
      onCameraChange={e => console.log(e)}
      center={{...P0, zoom: 16}}
      zoomControl={false}>
      <Marker
        coordinate={P1}
        onClick={() => console.warn('onClick! p1')}
        image={camera}
        width={30}
        height={30}
      />
      <Marker
        coordinate={P2}
        onClick={() => console.warn('onClick! p1')}
        image={camera}
        width={30}
        height={30}
      />
    </NaverMapView>
  );
};

export default HomeScreen;
