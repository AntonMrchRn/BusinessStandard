import { Alert, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob';
import { CheckFilePermissions } from './permissions';
import { host } from '../api/config';

export async function downloadFiles(
  url: string,
  contentType: string,
  name: string
) {
  const token = await AsyncStorage.getItem('token');
  const {
    dirs: { DownloadDir, DocumentDir },
  } = RNFetchBlob.fs;
  const aPath = Platform.select({ ios: DocumentDir, android: DownloadDir });

  RNFetchBlob.config({
    fileCache: true,
    path: aPath + `/${name}`,
    addAndroidDownloads: {
      useDownloadManager: false,
      notification: true,
      description: 'File downloaded by download manager.',
      title: `Файл ${name} сохранен`,
      path: `${aPath}/${name}`,
      mime: contentType,
    },
  })
    .fetch(
      'GET',
      `${host}/mapi/document?url=${url}&mimeType=${contentType}&nameForFile=${name}`,
      {
        Authorization: `Bearer ${token}`,
        contentType: 'application/json',
      }
    )
    .then(async res => {
      console.log('res', res);

      if (Platform.OS === 'android') {
        if (await CheckFilePermissions('android')) {
          RNFetchBlob.android.actionViewIntent(res.path(), '');
          Alert.alert(`Файл ${name} успешно сохранен`);
        }
      }
      if (Platform.OS === 'ios') {
        RNFetchBlob.ios.previewDocument(res.data);
      }
    })
    .catch(() => {
      Alert.alert('Ошибка загрузки');
    });
}
