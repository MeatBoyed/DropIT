import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReturnedError, Error, ClientProfileModel } from './Interfaces';

export const useFetchClientProfile = (profileTitle: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [profileError, setProfileError] = useState<Error>({ isError: false, message: '' });
  const [clientProfile, setClientProfile] = useState<ClientProfileModel>({
    title: '',
    location: '',
    description: '',
    socialMedia: [{ accountName: '', link: '', iconImage: '' }],
    images: {
      bannerImage: '',
      profileImage: '',
    },
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: `https://dropitserver.herokuapp.com/client-profile`,
      params: { title: profileTitle },
    })
      .then((response) => {
        setClientProfile({
          title: response.data[0].title,
          location: response.data[0].location,
          description: response.data[0].description,
          socialMedia: response.data[0].socialMedia,
          images: response.data[0].images,
        });
        setLoading(false);
      })
      .catch((ResError) => {
        try {
          const error: ReturnedError = ResError.response.data;

          switch (error.status) {
            case 404:
              setProfileError({ isError: true, message: "The product you're looking for doesn't seem to exist" });
              break;
            case 400:
              setProfileError({ isError: true, message: 'An unexpected error occured' });
          }
        } catch (error) {
          setProfileError({
            isError: true,
            message: 'An unexpected error occured. Please check you internet connection and try again',
          });
        }
        setLoading(false);
      });
  }, [profileTitle]);

  return { loading, profileError, clientProfile };
};
